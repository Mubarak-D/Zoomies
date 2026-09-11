import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("RSVP config keeps public HTTPS destinations constrained", async () => {
  const events = JSON.parse(await read("data/events.json"));

  assert.equal(events.rsvp.type, "external_google_form");
  assert.equal(new URL(events.rsvp.externalUrl).protocol, "https:");
  assert.equal(new URL(events.rsvp.externalUrl).hostname, "docs.google.com");
  assert.equal(new URL(events.rsvp.instagramUrl).hostname, "www.instagram.com");
});

test("join form exposes validation and status affordances", async () => {
  const html = await read("index.html");

  assert.match(html, /<form class="rsvp-form reveal" id="rsvp-form" novalidate>/);
  assert.match(html, /aria-describedby="name-error"/);
  assert.match(html, /aria-describedby="contact-error"/);
  assert.match(html, /id="form-message" role="status"/);
});

test("event format panels are keyboard reachable", async () => {
  const html = await read("index.html");
  const panels = html.match(/class="format-panel/g) ?? [];
  const focusablePanels = html.match(/class="format-panel(?: active)?" tabindex="0" role="button"/g) ?? [];

  assert.equal(panels.length, 4);
  assert.equal(focusablePanels.length, 4);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /aria-pressed="false"/);
});
