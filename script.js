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
const isCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

const reassuranceCopy = [
  "Came alone? Cool.",
  "Slow runner? Cool.",
  "First timer? Cool.",
  "Don't know anyone? Cool.",
  "Just want to try? Cool."
];

const submissionTimestamps = [];

function setMouseWash(event) {
  if (isCoarsePointer) return;
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
    rotate: window.innerWidth < 621 ? [0, 0] : [7, 2.5],
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
  if (isCoarsePointer) {
    magneticItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        const rect = item.getBoundingClientRect();
        item.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
        item.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
        item.classList.remove("is-rippling");
        window.requestAnimationFrame(() => item.classList.add("is-rippling"));
      });
    });
    return;
  }

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

function validateRsvp() {
  nameError.textContent = "";
  contactError.textContent = "";

  const name = nameInput.value.trim();
  const contact = contactInput.value.trim();
  let valid = true;

  const nameRegex = /^[a-zA-Z\s\-\u00C0-\u017F']{2,50}$/;
  const contactRegex = /^[\w\.\s@+\-\(\)]{3,100}$/;

  if (!name) {
    nameError.textContent = "Please fill in your name.";
    valid = false;
  } else if (!nameRegex.test(name)) {
    nameError.textContent = "Give us a real name (letters, spaces, hyphens only).";
    valid = false;
  }

  if (!contact) {
    contactError.textContent = "Please provide your contact handle or number.";
    valid = false;
  } else if (!contactRegex.test(contact)) {
    contactError.textContent = "Drop a valid phone number or Instagram handle.";
    valid = false;
  }

  return valid;
}

const RSVP_ENDPOINT = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfFZAolAkHaqmC-d3iVe0TRsm51I0BUe9UJv2AZJeLHdPMlnA/formResponse",
  fieldName: "entry.1587924104",
  fieldContact: "entry.2110404121",
  fieldFirstTime: "entry.1472309433"
};

const PAGE_LOAD_TIME = Date.now();

function normalizeInput(str, maxLength) {
  if (typeof str !== "string") {
    return "";
  }

  return str
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function checkRateLimit() {
  const now = Date.now();
  while (submissionTimestamps.length && now - submissionTimestamps[0] >= 3600000) {
    submissionTimestamps.shift();
  }

  if (submissionTimestamps.length >= 5) {
    return {
      allowed: false,
      reason: "Maximum sign-up attempts exceeded for today. Please try again later.",
      submissions: submissionTimestamps
    };
  }

  const lastSubmission = submissionTimestamps[submissionTimestamps.length - 1];
  if (lastSubmission && now - lastSubmission < 8000) {
    return {
      allowed: false,
      reason: "Whoa, slow down! Please wait a moment before trying again.",
      submissions: submissionTimestamps
    };
  }

  return { allowed: true, submissions: submissionTimestamps };
}

function recordSubmission(submissions) {
  submissions.push(Date.now());
}

function initRsvp() {
  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      message.style.color = "var(--logo-red)";
      message.textContent = rateLimit.reason;
      return;
    }

    if (!validateRsvp()) return;

    const submitBtn = rsvpForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const rawName = nameInput.value;
    const rawContact = contactInput.value;
    const firstTimeElement = rsvpForm.querySelector('input[name="firstTime"]:checked');
    const firstTimeVal = firstTimeElement ? firstTimeElement.value : "yes";

    const submittedName = normalizeInput(rawName, 50);
    const submittedContact = normalizeInput(rawContact, 100);
    const isFirstTime = firstTimeVal === "yes";

    const honeypot = rsvpForm.querySelector("#email_confirm");
    const isBotHoneypot = honeypot && honeypot.value.trim().length > 0;
    const isBotTooFast = (Date.now() - PAGE_LOAD_TIME) < 2000;
    const isSpamBot = isBotHoneypot || isBotTooFast;

    if (!isSpamBot) {
      const params = new URLSearchParams();
      params.append(RSVP_ENDPOINT.fieldName, submittedName);
      params.append(RSVP_ENDPOINT.fieldContact, submittedContact);
      params.append(RSVP_ENDPOINT.fieldFirstTime, isFirstTime ? "Yes" : "No");

      try {
        await fetch(RSVP_ENDPOINT.actionUrl, {
          method: "POST",
          body: params,
          mode: "no-cors",
          referrerPolicy: "strict-origin-when-cross-origin",
          keepalive: true
        });
      } catch {
        message.style.color = "var(--logo-red)";
        message.textContent = "Could not send it. Check your connection and try again.";
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        return;
      }
    }

    recordSubmission(rateLimit.submissions);

    const firstName = submittedName.split(" ")[0];
    message.style.color = "";
    message.textContent = isFirstTime
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
