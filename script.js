const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasAnime = () => typeof window.anime === "function";

const reassuranceLine = document.querySelector("#reassurance-line");
const rsvpForm = document.querySelector("#rsvp-form");
const message = document.querySelector("#form-message");
const nameInput = document.querySelector("#name");
const contactInput = document.querySelector("#contact");
const nameError = document.querySelector("#name-error");
const contactError = document.querySelector("#contact-error");
const magneticItems = document.querySelectorAll(".magnetic");
const revealItems = document.querySelectorAll(".reveal");
const formatPanels = document.querySelectorAll(".format-panel");

const reassuranceCopy = [
  "Came alone? Cool.",
  "Slow runner? Cool.",
  "First timer? Cool.",
  "Don't know anyone? Cool.",
  "Just want to try? Cool."
];

function setMouseWash(event) {
  document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
  document.documentElement.style.setProperty("--my", `${event.clientY}px`);
}

function scrambleTitle() {
  const title = document.querySelector("[data-scramble]");
  if (!title || prefersReducedMotion) return;

  const target = title.dataset.scramble;
  const chars = "RUNPLAYCONNECT0459/#";
  let frame = 0;
  const totalFrames = 30;

  const timer = window.setInterval(() => {
    title.textContent = target
      .split("")
      .map((letter, index) => {
        if (letter === " ") return " ";
        if (index < frame / 2.1) return target[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    frame += 1;
    if (frame > totalFrames) {
      title.textContent = target;
      window.clearInterval(timer);
    }
  }, 34);
}

function initAnimeMotion() {
  if (prefersReducedMotion || !hasAnime()) {
    document.querySelectorAll(".route-line").forEach((line) => {
      line.style.strokeDashoffset = "0";
    });
    revealItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
      item.style.filter = "none";
    });
    return;
  }

  anime({
    targets: ".route-line",
    strokeDashoffset: [1, 0],
    duration: 1800,
    delay: 500,
    easing: "easeInOutCubic"
  });

  anime({
    targets: ".route-dot",
    scale: [0, 1],
    opacity: [0, 1],
    delay: anime.stagger(220, { start: 1150 }),
    duration: 680,
    easing: "easeOutBack"
  });

  anime({
    targets: ".signal-poster",
    translateY: [38, 0],
    rotate: [7, 2.5],
    opacity: [0, 1],
    duration: 920,
    delay: 700,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".poster-ticker span",
    translateX: ["0%", "-100%"],
    duration: 2800,
    loop: true,
    easing: "linear"
  });
}

function initReveals() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
      item.style.filter = "none";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (hasAnime()) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [28, 0],
            filter: ["blur(10px)", "blur(0px)"],
            duration: 820,
            easing: "easeOutExpo"
          });
        } else {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          entry.target.style.filter = "none";
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initWordField() {
  const words = document.querySelectorAll(".word-cloud span");
  if (!words.length || prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      if (hasAnime()) {
        anime({
          targets: words,
          translateY: [42, 0],
          rotate: () => anime.random(-5, 5),
          scaleX: [1.18, 1],
          opacity: [0, 1],
          filter: ["blur(14px)", "blur(0px)"],
          delay: anime.stagger(70),
          duration: 760,
          easing: "easeOutExpo"
        });
      }

      observer.disconnect();
    },
    { threshold: 0.24 }
  );

  observer.observe(document.querySelector(".word-field"));
}

function initReassurance() {
  if (!reassuranceLine || prefersReducedMotion) return;

  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % reassuranceCopy.length;

    if (hasAnime()) {
      anime({
        targets: reassuranceLine,
        opacity: [1, 0],
        translateY: [0, -12],
        duration: 180,
        easing: "easeInQuad",
        complete: () => {
          reassuranceLine.textContent = reassuranceCopy[index];
          anime({
            targets: reassuranceLine,
            opacity: [0, 1],
            translateY: [18, 0],
            duration: 360,
            easing: "easeOutExpo"
          });
        }
      });
    } else {
      reassuranceLine.textContent = reassuranceCopy[index];
    }
  }, 2100);
}

function initMagnetics() {
  magneticItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion) return;
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });

    item.addEventListener("click", (event) => {
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
      item.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
      item.classList.remove("is-rippling");
      window.requestAnimationFrame(() => item.classList.add("is-rippling"));
    });
  });
}

function initAccordion() {
  formatPanels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth < 981) return;
      formatPanels.forEach((item) => item.classList.remove("active"));
      panel.classList.add("active");
      document.querySelector(".accordion").style.gridTemplateColumns = Array.from(formatPanels)
        .map((item) => (item === panel ? "1.35fr" : "0.72fr"))
        .join(" ");
    });
  });
}

function getSubmittedContacts() {
  try {
    return JSON.parse(localStorage.getItem("zoomies_submitted_contacts") || "[]");
  } catch (e) {
    return [];
  }
}

function saveSubmittedContact(contact) {
  const contacts = getSubmittedContacts();
  const normalized = contact.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  if (normalized && !contacts.includes(normalized)) {
    contacts.push(normalized);
    localStorage.setItem("zoomies_submitted_contacts", JSON.stringify(contacts));
  }
}

function isDuplicateContact(contact) {
  const contacts = getSubmittedContacts();
  const normalized = contact.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  return normalized && contacts.includes(normalized);
}

function validateRsvp() {
  const name = nameInput.value.trim();
  const contact = contactInput.value.trim();
  let valid = true;

  nameError.textContent = "";
  contactError.textContent = "";

  if (name.length < 2) {
    nameError.textContent = "Give us a real name.";
    valid = false;
  }

  if (contact.length < 3) {
    contactError.textContent = "Drop a phone number or Instagram handle.";
    valid = false;
  } else if (isDuplicateContact(contact)) {
    contactError.textContent = "You've already signed up with this handle/number!";
    valid = false;
  }

  return valid;
}

// --- GOOGLE FORMS INTEGRATION CONFIGURATION ---
// 1. Paste your Google Form "formResponse" URL below:
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfFZAolAkHaqmC-d3iVe0TRsm51I0BUe9UJv2AZJeLHdPMlnA/formResponse"; 
// 2. Map your exact entry IDs from the Google Form:
const FIELD_ENTRY_NAME = "entry.1587924104"; 
const FIELD_ENTRY_CONTACT = "entry.2110404121";
const FIELD_ENTRY_FIRST_TIME = "entry.1472309433";
// ----------------------------------------------

function initRsvp() {
  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateRsvp()) return;

    const submitBtn = rsvpForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const data = new FormData(rsvpForm);
    const contactRaw = data.get("contact").toString();
    const firstName = data.get("name").toString().trim().split(" ")[0];
    const firstTime = data.get("firstTime") === "yes";

    // If Google Form URL is provided, silently post the data using no-cors
    if (GOOGLE_FORM_ACTION_URL) {
      const formPayload = new FormData();
      formPayload.append(FIELD_ENTRY_NAME, data.get("name"));
      formPayload.append(FIELD_ENTRY_CONTACT, contactRaw);
      formPayload.append(FIELD_ENTRY_FIRST_TIME, firstTime ? "Yes" : "No");

      try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
          method: "POST",
          body: formPayload,
          mode: "no-cors"
        });
      } catch (err) {
        console.error("Form submission error:", err);
      }
    }

    // Save contact locally to block duplicates
    saveSubmittedContact(contactRaw);

    // High-taste local success animation
    message.textContent = firstTime
      ? `${firstName}, you're in. First time noted. We'll make sure you know where to go.`
      : `${firstName}, you're in. Details coming your way.`;

    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;

    if (hasAnime() && !prefersReducedMotion) {
      anime({
        targets: ".rsvp-form",
        translateX: [-6, 6, -3, 3, 0],
        duration: 380,
        easing: "easeOutQuad"
      });
    }

    rsvpForm.reset();
  });
}

window.addEventListener("pointermove", setMouseWash, { passive: true });
window.addEventListener("DOMContentLoaded", () => {
  scrambleTitle();
  initAnimeMotion();
  initReveals();
  initWordField();
  initReassurance();
  initMagnetics();
  initAccordion();
  initRsvp();
});
