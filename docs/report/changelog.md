# Changelog

## 1.7.1 (05/09/2024)

* **Fixes**:
  * Removed column for student numbers on report title page 
  * Fixed numbering for subsubsections if enabled 

## 1.7 (30/06/2023)

* **Packages:**
  * Added `parskip` to the preamble in `report.tex`
* **Fixes**:
  * Added the `no-math` option to *fontspec*
  * Fixed inconsistency in the documentation

## 1.6 (23/07/2022)

* **Features**:
  * Updated title fonts to the new TU Delft house style, *Roboto Slab*, and removed *Georgia* as quote font. With *pdfLaTeX* as the compiler, *Roboto Slab* will also be used as the title font
  * To improve ease of use, the class file can now be found in the root folder and logos in the `/figures` folder
* **Fixes**:
  * The comments in the class file and document are now more consistent. More comments have also been added to the `\newcommand{}{}` that defines the cover page
  * Long titles will now work better on the cover
  * Fixed inconsistencies with some commands

## 1.5.3 (23/05/2022)

* **Fixes**:
  * The `nameinlink` option of *cleveref* is no longer used by default (discouraged on stylistic grounds)
  * Changed the wording of the license to be in accordance with the official guidelines

## 1.5.2 (25/04/2022)

* **Fixes**:
  * Fixed issue with pdfLaTeX that was accidentally introduced in 1.5.1
  * Added `\titlestyle` to header/footer as well

## 1.5.1 (24/04/2022)

* **Features**:
  * Added `\titlestyle` to all titles which are not already `\largetitlestyle` to simplify customization. Defined with `\normalfont` by default
* **Fixes**:
  * Fixed a few issues that have no functional impact, but make the template more concise

## 1.5 (17/03/2022)

* **Packages:**
  * Added `cleveref`, `listings` and `pdfpages` to the class file
  * Replaced `amsmath` with `mathtools` (the latter imports the former however)
  * Removed `tocbibind`
* **Features**:
  * The behaviour of the `\author{}` command has been reverted and a new command `\covertable{}` has been introduced to allow a table of authors on the cover page
  * Support for including source code (and source code files) has been added to the class file with the package `listings`. Some sample code has been included in Appendix A
  * The title page has been changed slightly and has been renamed to `title-report.tex`. A title page for theses is now included: `title-thesis.tex`
  * Removed all hardcoded English in the class file to make it easier to switch to Dutch (or any other language) if desired. Added a `\affiliation{}` command for example.
  * A Palatino-like font is now used if the compiler is set to pdfLaTeX
* **Fixes:**
  * Revisited the class file to increase readability, simplified a few commands and improved a few others
  * The list of figures and tables are no longer enabled by default
  * The redundant, somewhat not up to standard, documentation inside the document has been simplified or removed.
  * To reduce file size, the previously included cover images can now be found in the FAQ

## 1.4.2 (01/01/2022)

* **Fixes:**
  * Documentation inside the document is now more consistent

## 1.4.1 (16/05/2021)

* **Features:**
  * Moved all bibliography commands out of the class file. Changing the bibliography style (or other options) should now be done in the main file (`report.tex`)
  * Moved all `.tex` files (except the main file) into different folders (`frontmatter`/`mainmatter`/`appendix`) to improve the organisation of all files

## 1.4 (17/04/2021)

* **Features:**
  * Added support for a table of authors on the cover. See the FAQ for more information and an example.
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

## 1.3 (27/06/2020)

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

## 1.2 (05/02/2020)

* **Features:**
  * Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)

\+ Other minor adjustments and fixes

## 1.1 (27/12/2019)

* **Features:**
  * Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. Refer to [Section 2.1.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1) of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type.
  * Changed the font to Arial to be more in line with the TU Delft corporate design
  * Added more book entries from 2nd year courses and fixed some existing entries
  * Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries

\+ Other minor adjustments and fixes

## 1.0 (27/09/2019)

* Rewritten class file to improve readability and simplify modifications
* Redesigned the cover page
