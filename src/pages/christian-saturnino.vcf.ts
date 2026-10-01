import { site } from "../data/site";
import { experience } from "../data/experience";

// Business card offered on the contact page ("Salvar contato"). Built at compile time.
export function GET() {
  const parts = site.fullName.split(" ");
  const [first, last, middle] = [parts[0], parts.at(-1), parts.slice(1, -1).join(" ")];
  const card = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};${middle};;`,
    `FN:${site.name}`,
    `ORG:${experience[0].company}`,
    `TITLE:${site.role.en}`,
    `EMAIL;TYPE=INTERNET:${site.email}`,
    `TEL;TYPE=CELL:${site.phone.e164}`,
    `URL:https://${site.portfolio}`,
    `URL:${site.socials.linkedin}`,
    `URL:${site.socials.github}`,
    "ADR;TYPE=HOME:;;;Marília;SP;;Brasil",
    "END:VCARD",
  ].join("\r\n");

  return new Response(card + "\r\n", {
    headers: { "Content-Type": "text/vcard; charset=utf-8" },
  });
}
