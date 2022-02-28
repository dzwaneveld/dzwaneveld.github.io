# Changelog

I have not been particularly concise when it comes to versioning. As such, only version 1.2.1 and higher have a more extensive changelog. You should probably avoid version 1.0.x and 1.1.x anyway.

## 1.4.2 (01/01/2022)

* **Fixes:**
  * Documentation inside the document is now more consistent

## 1.4.1 (16/05/2021)

* **Features:**
  * Moved all bibliography commands out of the class file. Changing the bibliography style (or other options) should now be done in the main file (`report.tex`)
  * Moved all `.tex` files (except the main file) into different folders (`frontmatter`/`mainmatter`/`appendix`) to improve the organisation of all files

## 1.4.0 (17/04/2021)

* **Features:**
  * Added support for a table of authors on the cover. The `\author[]{}` command now has an optional argument, which is used for the metadata in case it is defined. Any LaTeX code in the main argument will then no longer cause issues. An example table on the cover can be found in the FAQ
* **Fixes:**
  * `\makecover` will now issue a `\newpage` at the end. In some very specific cases, the table of contents could get superimposed on the cover
  * Removed a command that made changes to the bibliography spacing because it did very little
  * Formatting of chapter titles with pdfLaTeX will no longer result in a small chapter number
  * Reworded some text to make it more concise and consistent

## 1.3.1 (06/02/2021)

* **Packages:** Added `etoolbox`
* **Features**:
  * Subtitle and subject are now optional
* **Fixes:**
  * No visual changes, but formatting of titles is now more consistent
  * Reworded some text in the README.md to make it more concise and consistent

## 1.3.0 (27/06/2020)

* **Packages:** Added `multirow` and `iftex`
* **Features:**
  * Added compatibility for pdfLaTeX, but a warning will be given as the fonts do not adhere to the TU Delft house style. The template now officially supports pdfLaTeX, XeLaTeX and LuaLaTeX
  * Added support for `oneside` (default) and `twoside` global option. Changing to `twoside` can be done in the global options in report.tex, which results in minor changes the margins and headers. Furthermore, whitepages are added to resemble a printed (doublesided) book/report layout
* **Fixes:**
  * Global options will now be parsed correctly
  * Reworded some text to make it more concise and consistent

## 1.2.2 (27/02/2020)

* **Fixes:**
  * `Minted` is no longer enabled by default as it requires a Python installation and a shell escape to function

## 1.2.1 (19/02/2020)

* **Fixes:**
  * The bibliography style and sorting order is now the BibLaTeX default. As such, changing to a different bibliography style will now be easier.
  * Addresses of the included bibliography entries are now more complete

## 1.2.0 (05/02/2020)

* **Features:**
  * Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)

\+ Other minor adjustments and fixes

## 1.1.0 (27/12/2019)

* **Features:**
  * Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. Refer to [Section 2.1.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1) of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type.
  * Changed the font to Arial to be more in line with the TU Delft corporate design
  * Added more book entries from 2nd year courses and fixed some existing entries
  * Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries

\+ Other minor adjustments and fixes

## 1.0.0 (27/09/2019)

* Rewritten class file to improve readability and simplify modifications
* Redesigned the cover page
