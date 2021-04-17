(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{387:function(e,t,a){"use strict";a.r(t);var o=a(45),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("I have not been particularly concise when it comes to versioning. As such, only version 1.2.1 and higher have a more extensive changelog. You should probably avoid version 1.0.x anyway.")]),e._v(" "),a("h2",{attrs:{id:"_1-4-0-17-04-2021"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-0-17-04-2021"}},[e._v("#")]),e._v(" 1.4.0 (17/04/2021)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Features:")]),e._v(" "),a("ul",[a("li",[e._v("Added support for a table of authors on the cover. The "),a("code",[e._v("\\author[]{}")]),e._v(" command now has an optional argument, which is used for the metadata in case it is defined. Any LaTeX code in the main argument will then no longer cause issues. An example table on the cover can be found in the FAQ")])])]),e._v(" "),a("li",[a("strong",[e._v("Fixes:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("\\makecover")]),e._v(" will now issue a "),a("code",[e._v("\\newpage")]),e._v(" at the end. In some very specific cases, the table of contents could get superimposed on the cover")]),e._v(" "),a("li",[e._v("Removed a command that made changes to the bibliography spacing because it did very little")]),e._v(" "),a("li",[e._v("Formatting of chapter titles with pdfLaTeX will no longer result in a small chapter number")]),e._v(" "),a("li",[e._v("Reworded some text to make it more concise and consistent")])])])]),e._v(" "),a("h2",{attrs:{id:"_1-3-1-06-02-2021"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-06-02-2021"}},[e._v("#")]),e._v(" 1.3.1 (06/02/2021)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Packages:")]),e._v(" Added "),a("code",[e._v("etoolbox")])]),e._v(" "),a("li",[a("strong",[e._v("Features")]),e._v(":\n"),a("ul",[a("li",[e._v("Subtitle and subject are now optional")])])]),e._v(" "),a("li",[a("strong",[e._v("Fixes:")]),e._v(" "),a("ul",[a("li",[e._v("No visual changes, but formatting of titles is now more consistent")]),e._v(" "),a("li",[e._v("Reworded some text in the README.md to make it more concise and consistent")])])])]),e._v(" "),a("h2",{attrs:{id:"_1-3-0-27-06-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-0-27-06-2020"}},[e._v("#")]),e._v(" 1.3.0 (27/06/2020)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Packages:")]),e._v(" Added "),a("code",[e._v("multirow")]),e._v(" and "),a("code",[e._v("iftex")])]),e._v(" "),a("li",[a("strong",[e._v("Features:")]),e._v(" "),a("ul",[a("li",[e._v("Added compatibility for pdfLaTeX, but a warning will be given as the fonts do not adhere to the TU Delft house style. The template now officially supports pdfLaTeX, XeLaTeX and LuaLaTeX")]),e._v(" "),a("li",[e._v("Added support for "),a("code",[e._v("oneside")]),e._v(" (default) and "),a("code",[e._v("twoside")]),e._v(" global option. Changing to "),a("code",[e._v("twoside")]),e._v(" can be done in the global options in report.tex, which results in minor changes the margins and headers. Furthermore, whitepages are added to resemble a printed (doublesided) book/report layout")])])]),e._v(" "),a("li",[a("strong",[e._v("Fixes:")]),e._v(" "),a("ul",[a("li",[e._v("Global options will now be parsed correctly")]),e._v(" "),a("li",[e._v("Reworded some text to make it more concise and consistent")])])])]),e._v(" "),a("h2",{attrs:{id:"_1-2-2-27-02-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-27-02-2020"}},[e._v("#")]),e._v(" 1.2.2 (27/02/2020)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Fixes:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Minted")]),e._v(" is no longer enabled by default as it requires a Python installation and a shell escape to function")])])])]),e._v(" "),a("h2",{attrs:{id:"_1-2-1-19-02-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-19-02-2020"}},[e._v("#")]),e._v(" 1.2.1 (19/02/2020)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Fixes:")]),e._v(" "),a("ul",[a("li",[e._v("The bibliography style and sorting order is now the BibLaTeX default. As such, changing to a different bibliography style will now be easier.")]),e._v(" "),a("li",[e._v("Addresses of the included bibliography entries are now more complete")])])])]),e._v(" "),a("h2",{attrs:{id:"_1-2-0-05-02-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-0-05-02-2020"}},[e._v("#")]),e._v(" 1.2.0 (05/02/2020)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Features:")]),e._v(" "),a("ul",[a("li",[e._v("Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)")])])])]),e._v(" "),a("p",[e._v("+ Other minor adjustments and fixes")]),e._v(" "),a("h2",{attrs:{id:"_1-1-0-27-12-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-0-27-12-2019"}},[e._v("#")]),e._v(" 1.1.0 (27/12/2019)")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Features:")]),e._v(" "),a("ul",[a("li",[e._v("Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. Refer to "),a("a",{attrs:{href:"http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Section 2.1.1"),a("OutboundLink")],1),e._v(" of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type.")]),e._v(" "),a("li",[e._v("Changed the font to Arial to be more in line with the TU Delft corporate design")]),e._v(" "),a("li",[e._v("Added more book entries from 2nd year courses and fixed some existing entries")]),e._v(" "),a("li",[e._v("Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries")])])])]),e._v(" "),a("p",[e._v("+ Other minor adjustments and fixes")]),e._v(" "),a("h2",{attrs:{id:"_1-0-0-27-09-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0-27-09-2019"}},[e._v("#")]),e._v(" 1.0.0 (27/09/2019)")]),e._v(" "),a("ul",[a("li",[e._v("Rewritten class file to improve readability and simplify modifications")]),e._v(" "),a("li",[e._v("Redesigned the cover page")])])])}),[],!1,null,null,null);t.default=i.exports}}]);