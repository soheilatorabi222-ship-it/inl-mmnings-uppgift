# BUONITO – AI-plugin för artiklar

## Om projektet

BUONITO är en svensk webbplats som presenterar noggrant utvalda italienska delikatesser.
Projektet innehåller en hemsida och ett AI-plugin som hjälper till att skapa artiklar om italienska produkter och matkultur.

## Vad pluginet gör

Pluginet använder instruktionerna i AGENTS.md och .agents/skills/skapa-artikel/SKILL.md för att ta fram artikelförslag på svenska.
Artiklarna ska följa samma JSON-format som webbplatsens test-artikel.json.

## Så använder man pluginet

1. Öppna projektmappen i en AI-kodassistent som kan läsa projektets instruktioner.
2. Be assistenten skapa en artikel om ett valt ämne.
3. Granska artikeltexten och kontrollera att informationen stämmer.
4. Godkänn texten innan en ny JSON-fil sparas i webbplats/artiklar.
5. Lägg eventuella artikelbilder i webbplats/images och ange både src och alt i JSON.
6. Öppna webbplatsen med Live Server och kontrollera artikeln via artikel.html?id=slug.

## Mänsklig granskning

AI kan föreslå rubriker, texter och artikelstruktur, men en människa ska kontrollera kvalitet, språk och produktfakta innan innehållet godkänns.

## Förbättring med feedback

Användaren kan ge feedback om språk, tydlighet och innehåll. Den återkopplingen används för att förbättra kommande artikelförslag och instruktionerna i pluginet.

## Viktigt

Befintliga webbplatsfiler får inte ändras automatiskt av AI. Inga API-nycklar eller lösenord ska sparas i projektet.
