# Verde Horizonte

Dit is de repository van Dries (Verde Horizonte). Het bevat zowel mijn publieke portfolio-website als mijn persoonlijke admin-app. Deze twee draaien op dezelfde server, maar zijn bedoeld voor verschillend gebruik.

## Wat zit erin?
- **Publieke website:** Mijn portfolio, demo's en case study (bedoeld voor klanten).
- **Admin-app (privé):** Mijn eigen tools voor klantenbeheer, offertes, facturen, projecten en urenregistratie.

## Status: basis / prototype
De admin-app is een werkende basis, nog geen afgewerkt product:
- **Data-opslag:** gebeurt momenteel in LocalStorage in de browser, niet in Supabase en niet in een andere database. Gegevens blijven dus per browser en per toestel staan en worden niet gesynchroniseerd tussen toestellen.
- **Login:** er is nog geen login- of authenticatiesysteem aanwezig in deze versie. Iedereen die de URL kent, kan de admin-pagina's openen. Ze staan niet in de navigatie van de publieke site en zijn waar mogelijk op `noindex` gezet, maar dat is geen beveiliging.

## Techniek
- **Frontend:** HTML, CSS (vanilla, handgeschreven) en JavaScript (vanilla). Geen frameworks en geen build-stap.
- **Admin-data:** LocalStorage in de browser, onder de keys `vh_customers`, `vh_tasks`, `vh_sessions` en `vh_active_session`.
- **Database & Auth:** nog niet aanwezig (geen Supabase, geen server-side opslag).
- **Hosting:** Vercel, gekoppeld aan de GitHub-repository. Elke push naar `main` deployt automatisch.
- **Formulieren:** Web3Forms API (voor het contactformulier op de publieke site).

## 🚀 Deployment
De code wordt gehost op **Vercel** en is gekoppeld aan deze GitHub-repository. Elke `git push` naar de `main` branch triggert automatisch een nieuwe deployment.

---
*Gebouwd met passie voor lokale ondernemers en digitale nomads.*