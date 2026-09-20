# Strona informacyjna programu `clinic`

Kompletna, statyczna witryna do opublikowania na GitHub Pages. Nie wymaga budowania,
Jekylla ani żadnych zależności — to czysty HTML, CSS i jeden plik JavaScript.

## Zawartość

```
gh_pages/
├── index.html                 strona po polsku (wersja domyślna)
├── en/index.html              strona po angielsku
├── .nojekyll                  wyłącza przetwarzanie witryny Jekyllem
├── robots.txt, sitemap.xml
└── assets/
    ├── css/site.css           jeden arkusz stylów dla obu wersji
    ├── js/site.js             menu mobilne i powiększanie zrzutów
    └── img/
        ├── clinic-icon-256.png, favicon.ico, favicon-32.png, apple-touch-icon.png
        ├── clinic-splash.jpg, clinic-splash-900.jpg   tło ekranu powitalnego (tło sekcji hero)
        └── screens/pl, screens/en                     zrzuty ekranu w obu językach
```

Adresy po opublikowaniu:

| Strona | Adres |
|---|---|
| polska | `https://krzysztofkaczor84.github.io/clinic/` |
| angielska | `https://krzysztofkaczor84.github.io/clinic/en/` |

## Publikacja

Witryna repozytorium wydań stoi na katalogu **`docs/`** (tam leżą `licenses/`
i `updates/`), więc zawartość tego katalogu kopiuje się właśnie tam:

```bash
cp -r gh_pages/. ⟨repozytorium-wydań⟩/docs/
cd ⟨repozytorium-wydań⟩
git add docs
git commit -m "Strona informacyjna programu"
git push
```

Kopiowanie **nie rusza** katalogów `licenses/` ani `updates/` — nadpisuje jedynie
dotychczasowy `docs/index.html` (stronę zastępczą) i dokłada `en/` oraz `assets/`.

Gdyby witryna miała stanąć na korzeniu repozytorium albo na gałęzi `gh-pages`,
zawartość kopiuje się odpowiednio do korzenia albo na tę gałąź — żaden odnośnik
w stronach nie jest bezwzględny, więc działa w obu układach.

## Aktualizacja treści

- **Numer wersji** występuje w obu plikach `index.html` (nagłówek sekcji pobierania,
  karta „W skrócie”, stopka) oraz w sekcji „Co nowego”.
- **Zrzuty ekranu** to zwykłe pliki PNG w `assets/img/screens/⟨język⟩/`; podmiana
  pliku o tej samej nazwie wystarcza. Zrzuty pochodzą z wersji 1.3.0 uruchomionej na
  zestawie `data-example` z repozytorium kodu, w interfejsie polskim i angielskim
  (język wybiera się w konfiguracji, zakładka *Wygląd*).
- **Adres wydań** (`https://github.com/krzysztofkaczor84/clinic/releases/latest`)
  występuje w przyciskach sekcji hero i pobierania oraz w stopce.

## Uwagi

- Strona nie zbiera żadnych danych: nie ma analityki, ciasteczek, czcionek z CDN-u
  ani zewnętrznych skryptów.
- Obsługuje motyw jasny i ciemny (zgodnie z ustawieniem systemu) oraz układ mobilny.
- Zrzuty ekranu przedstawiają w pełni wymyślony zestaw danych przykładowych — nie ma
  na nich danych rzeczywistych pacjentów.
