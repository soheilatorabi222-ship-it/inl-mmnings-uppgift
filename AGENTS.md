# BUONITO – instruktioner för artikelpluginet

## Projekt

BUONITO är en svensk webbplats för noggrant utvalda italienska delikatesser.

Webbplatsen finns i mappen `webbplats`.

## Syfte

AI-pluginet ska hjälpa till att skapa artiklar om italienska produkter och matkultur.

## Arbetsordning

1. Ta emot ett ämne för en ny artikel.

2. Skapa en informativ och inspirerande artikel på svenska.

3. Använd artikel-skillen i `.agents/skills/skapa-artikel/SKILL.md`.

4. Låt en människa granska texten och godkänna den.

5. Spara den godkända artikeln som JSON i `webbplats/artiklar`.

6. Kontrollera att artikeln visas korrekt på webbplatsen.

## Regler för artiklar

- Följ samma JSON-format som `webbplats/artiklar/test-artikel.json`.

- Använd rubriker och stycken med tydlig struktur.

- Filnamn ska vara små bokstäver och bindestreck, utan å, ä eller ö.

- Länkar till artiklar ska ha formatet `artikel.html?id=slug`.

- Bilder ska sparas i `webbplats/images`.

- Bilder i JSON ska ha både `src` och en beskrivande `alt`-text.

- Kontrollera att produktinformation är korrekt. Hitta inte på fakta om BUONITO.

- Ändra aldrig befintliga filer i `webbplats` automatiskt.

- Skapa endast nya artikelfiler efter mänskligt godkännande.

- Lägg aldrig API-nycklar eller lösenord i projektet.
