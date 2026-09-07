# Zoomies Event Config Guide

Edit `data/events.json` when the next event or RSVP flow changes.

## Event Fields

- `series`: Small event code, for example `ZOOMIES #002`.
- `city`: Usually `COLOMBO`.
- `title`: Short event name.
- `headline`: Main event heading on the page.
- `summary`: One or two sentence event pitch.
- `description`: Practical notes shown on the event ticket.
- `date`: Human-readable date.
- `time`: Human-readable time.
- `distance`: Run distance and difficulty.
- `pace`: Short pace label.
- `twist`: What makes the event different.
- `meetingPoint`: Keep vague if location should only be shared after RSVP.

## RSVP Types

Use one of these values for `rsvp.type`:

- `native_google_form`: Keeps the on-page Zoomies form and submits name/contact/first-time fields to Google Forms.
- `external_google_form`: Turns RSVP buttons into links to a full Google Form. Use this when the form has extra questions.
- `instagram`: Turns RSVP buttons into links to Instagram.

## When Using A New Google Form

If the new form has extra questions, use:

```json
"type": "external_google_form",
"externalUrl": "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
```

If the new form only needs name, contact, and first-time status, use `native_google_form` and update:

```json
"actionUrl": "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
"fields": {
  "name": "entry.YOUR_NAME_FIELD",
  "contact": "entry.YOUR_CONTACT_FIELD",
  "firstTime": "entry.YOUR_FIRST_TIME_FIELD"
}
```

Do not put passwords, private tokens, or secret admin links in this file. It is public on the website.
