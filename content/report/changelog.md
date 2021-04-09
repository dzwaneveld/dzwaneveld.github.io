# Changelog

In the table below, the most notable changes can be found. Only major updates are tracked here. Minor updates only consist of small bug fixes.

## 1.3 (27/06/2020)

* Added compatibility for pdfLaTeX, but a warning will be given as the fonts do not adhere to the TU Delft house style. The template now officially supports pdfLaTeX, XeLaTeX and LuaLaTeX
* Added support for `oneside` (default) and `twoside` global option. Changing to `twoside` can be done in the global options in report.tex, which results in minor changes the margins and headers. Furthermore, whitepages are added to resemble a printed (doublesided) book/report layout.
* Minor adjustments and fixes

## 1.2 (05/02/2020)

* Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)
* Minor adjustments and fixes

## 1.1 (27/12/2019)

* Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. If you are using old websites entries, it is recommended to convert them, but it will work nonetheless. Refer to [Section 2.1.1](http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1) of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type.
* Changed the font to Arial to be more in line with the TU Delft corporate design
* Fixed and added more book entries from 2nd year courses
* Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries
* Minor adjustments and fixes

## 1.0 (27/09/2019)

* Rewritten class file to improve readability and simplify modifications
* Redesigned the cover page
