# UppMAKE Demo

Detta repo innehåller den statiska demosajten för UppMAKE.

## Säkerhet

Vi har dokumenterat säkerhetsarbetet för sidan här:

- [SECURITY.md](SECURITY.md)

Kort sammanfattning:

- Ingen backend eller databas i denna lösning.
- Inga externa JavaScript-bibliotek laddas in.
- Strikt Content Security Policy används.
- Säkerhetsheaders är förberedda för produktion via `.htaccess` (Loopia).
