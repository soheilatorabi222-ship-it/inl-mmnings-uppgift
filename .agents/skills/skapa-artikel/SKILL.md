---
name: skapa-artikel
description: Skapar svenska artiklar om BUONITOs italienska delikatesser i rätt JSON-format. Används när en ny artikel ska tas fram.
---

# Skapa artikel för BUONITO

## Syfte

Skapa inspirerande och informativa artiklar om italiensk matkultur och BUONITOs utvalda produkter.

## Arbetsgång

1. Fråga användaren vilket ämne artikeln ska handla om.
2. Skriv ett förslag på svenska med en huvudrubrik, underrubriker och stycken.
3. Kontrollera att produktinformationen är korrekt. Hitta inte på produkter eller egenskaper.
4. Visa artikeltexten för användaren och be om godkännande.
5. Utgå från JSON-formatet i `webbplats/artiklar/test-artikel.json`.
6. Skapa en ny JSON-fil i `webbplats/artiklar` efter godkännande.
7. Använd endast små bokstäver och bindestreck i filnamnet, utan å, ä eller ö.
8. Om artikeln ska ha en bild, spara den i `webbplats/images` och ange både `src` och `alt` i JSON enligt testfilens format.
9. Kontrollera att JSON-filen är korrekt och att artikeln visas via `artikel.html?id=slug`.

## Viktiga regler

- Ändra inte befintliga filer i `webbplats`.
- Skapa bara nya artikelfiler efter användarens godkännande.
- Använd korrekt rubrikhierarki.
- Länka från startsidan först efter användarens godkännande.
- Lägg aldrig in lösenord eller API-nycklar.
