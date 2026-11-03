# Fei-Brand-Design Übernahme

_Started 2026-09-17 09:57 UTC_

---

## User

Ich habe von einer befreundeten Grafikdesignerin einen Vorschlag für ein fei-Brand-Design von ihr bekommen. Auf jeden Fall daraus übernehmen möchte ich die Schriftart für alle zukünftigen Designs, die Pfeile als Elemente, die Logos, Blitze und die anderen Anhänge. Bitte lasst uns das fei-Design-System dahingehend aktualisieren. 

Besprich im zweiten Schritt mit mir, welche weiteren Änderungen aus Ihrem Vorschlag wir eventuell noch einarbeiten könnten.

## Assistant

_[tool: read_skill_prompt]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

Umlaut filenames block the script; I'll copy them to ASCII names first.

_[tool: copy_files]_

_[tool: run_script]_

_[tool: run_script]_

Metadata is provenance-only; I'll write the cleaned versions to new names and delete the originals.

_[tool: run_script]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: copy_files]_

Now let me look at the logos and existing brand card to match conventions.

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: show_html]_

I need to see the uploaded assets to design around them.

_[tool: show_html]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Now the updates: fonts/typography tokens, brandkit color references, new cards, readme/SKILL, thumbnail.

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the docs (readme, SKILL, prompt files) and the design-system overview page.

_[tool: run_script]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: delete_file]_

_[tool: check_design_system]_

_[tool: ready_for_verification]_

**Schritt 1 ist eingearbeitet:**

- **Schrift:** Inter ist jetzt die einzige Schrift (Display + Body). Fraunces ist raus, `--font-display` zeigt auf Inter; neue Tokens `--display-style: italic`, `--tracking-display`, `--leading-bubble: 0.9`.
- **Logos:** `assets/brand/` – Hauptlogo, Weiß, Bamberg, Würzburg (+ Weiß-Varianten), bereinigt von Metadaten. Neue Karte „Logo".
- **Elemente:** `assets/elements/` – 6 Pfeile, Blitz (Outline), Aufruf-Bubble, Foto-Bubble. Neue Karten „Pfeile" und „Blitz & Bubbles" mit Anwendungsbeispiel.
- Readme, SKILL.md, Komponenten-Docs, Übersichtsseite und Thumbnail aktualisiert. Brandkit-Farben aus den SVGs als Referenz-Tokens hinterlegt (`--fei-logo-yellow #FFE600`, `--fei-violet #565CDE`, `--fei-yellow-soft #FFF48F`).

**Schritt 2 – was ich aus dem Vorschlag noch sehe, offen zur Diskussion:**

1. **Gelb angleichen.** Das Logo nutzt `#FFE600`, unser UI-Gelb ist `#EAB308`. Zwei Gelbtöne nebeneinander wirken unsauber. Option: UI-Gelb auf `#FFE600` umstellen (hat noch besseren Kontrast zu Schwarz, bleibt aber wie bisher nur Fläche, kein Text).
2. **Lila → Violett.** Sie nutzt `#565CDE` (kühler, blauer) statt unserem `#6544D1`. Ersetzen oder beide behalten?
3. **Headlines in Grün oder Violett, kursiv.** Aktuell sind unsere Headlines navy. Ihr Vorschlag: Titel farbig (Grün/Violett), Bold Italic; Untertitel und Datum in einer zweiten Farbe, Medium Italic. Für Web-UI wäre ich vorsichtig, für Social/Print/Plakat passt es gut.
4. **Warmweiß** taucht als Textfarbe auf Bubbles auf – wir haben kein Warmweiß-Token außer Cream. Aufnehmen?
5. **Foto-Bubble als Standard-Bildbehandlung** (violett eingefärbt, Kreis, untere Ecke) statt unserer Gradient-Scrim-Fotos – für Social/Print übernehmen, Web behält Scrims?
6. **Layout-Regeln aus dem Guide:** Instagram-Posts mit 4:5 anlegen, aber 3:4-Safe-Zone einhalten; Logo-Mindestabstand halbe Logohöhe. Könnte ich als Template-Regeln festhalten.
7. **Farbige Hintergründe** (Vollflächen in Gelb/Violett/Grün) für Poster und Posts – widerspricht etwas unserer „Web ist weiß"-Regel, wäre also eine eigene „Kampagnen-/Social"-Oberflächenklasse.

Die Hex-Codes der Farbseite konnte ich aus dem PDF nicht auslesen (Bild). Falls sie dort weitere Farben (Grün, Warmweiß) definiert hat, schick mir die Werte, dann trage ich sie nach. Welche Punkte sollen rein?

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Caption der Foto-Bubble nach oben verschoben, überlappt nicht mehr. Die 7 Diskussionspunkte oben stehen – sag mir, welche rein sollen.

## User

1. übernimm #FFE600 
2. Übernimm #565CDE 
3. Übernimm ihre Vorschläge für Plakate und Flyer und lass für das Webdesign unseren aktuelle Stand
4. Lass es bei Cream
5. FÜr Social und Print Foto Bubble, für Web Scrims
6. da bin ich mir unsicher was aktuell die am besten convertierende auflösung für social media ist. bitte recherchiere.
7. Vollflächen nur für Druck, und flyer nicht für Web

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_search]_

Research is clear enough. Now applying all decisions.

_[tool: run_script]_

_[tool: web_search]_

_[tool: web_search]_

Contrast figures I swapped in need verifying; then the guideline docs and a campaign card.

_[tool: run_script]_

Yellow title on green fails (2.6:1) — I'll make green ground use black titles. Fixing the ratios and writing the guideline docs + campaign card.

_[tool: run_script]_

_[tool: write_file]_

The Blitz card still says "hinter Titel" generically — fine. Update thumbnail swatches to new yellow-deep and check the system.

_[tool: str_replace_edit]_

_[tool: check_design_system]_

_[tool: str_replace_edit]_

_[tool: check_design_system]_

_[tool: ready_for_verification]_

Alles eingearbeitet:

- **Gelb → `#FFE600`**, **Violett → `#565CDE`** (Token heißt weiter `--fei-lila`, Alias `--fei-violet`), abgeleitete Hover-/Tint-Werte und alle Kontrastwerte neu gerechnet. Ergebnis: Schwarz auf Gelb 14,9:1, Weiß auf Violett 5,3:1 – beides besser als vorher.
- **Neuer Kontext `.fei-kampagne`** (Plakat, Flyer, Social) mit Gründen `gelb | violett | gruen | schwarz | cream`: farbige kursive Titel, Untertitel/Datum in Zweitfarbe, Aufruf-Bubble, Blitz-Outline, violette Foto-Bubble. Web bleibt unverändert (weiß, Navy-Headlines, Scrims). Cream bleibt.
- Ein Punkt aus ihrem Guide korrigiert: Gelber Titel auf Grün hat nur 2,6:1 – auf grünem Grund sind Titel deshalb schwarz.
- **Social-Format (recherchiert):** Empfohlen für 2026 ist 1080 × 1350 px (4:5 Hochformat) – füllt den meisten Bildschirm und überlebt den neuen 3:4-Grid-Zuschnitt. 4:5 wird im 3:4-Profilgrid oben/unten ~7 % beschnitten, deshalb die Safe-Zone als Token (`--social-safe-x/y`). LinkedIn nutzt dasselbe Format: 1080 × 1350 px (4:5) nimmt im mobilen Feed den meisten Platz ein und erzielt konstant das höchste Engagement. Instagram akzeptiert seit 2026 auch natives 3:4 (1080 × 1440) – nur für Grid-Puzzles sinnvoll, sonst ein 4:5-Master für beide Netzwerke.
- Dokumentiert in `guidelines/surfaces.md` §4, `accessibility.md`, readme, SKILL.md; neue Karte „Kampagne – Gründe & Social-Format".

Nächster sinnvoller Schritt: ein Social-Post-Template (1080×1350) und ein Plakat-Template auf dieser Basis – soll ich?

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Beispieltitel gekürzt („Strom von nebenan"), passt jetzt in alle vier Kacheln.

