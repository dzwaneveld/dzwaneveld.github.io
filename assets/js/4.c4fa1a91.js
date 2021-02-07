(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(e,t,a){e.exports=a.p+"assets/img/open-in-overleaf.59627f13.svg"},360:function(e,t,a){e.exports=a.p+"assets/img/download-zip.f7aed4d8.svg"},361:function(e,t,a){e.exports=a.p+"assets/img/version-1.2.51394639.svg"},362:function(e,t,a){e.exports=a.p+"assets/img/license-CC-BY-NC-4.0.3b7b64c8.svg"},383:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.overleaf.com/docs?snip_uri=https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:a(359),alt:"Open in Overleaf"}})]),e._v(" "),o("a",{attrs:{href:"https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip"}},[o("img",{attrs:{src:a(360),alt:"Download"}})]),e._v(" "),o("a",{attrs:{href:"https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:a(361),alt:"Version 1.2"}})]),e._v(" "),o("a",{attrs:{href:"/about"}},[o("img",{attrs:{src:a(362),alt:"License CC BY-NC 4.0"}})])]),e._v(" "),o("p",[e._v("This template is created for "),o("em",[e._v("pdfLaTeX")]),e._v(", but it is also compatible with "),o("em",[e._v("XeLaTeX")]),e._v(" or "),o("em",[e._v("LuaLaTeX")]),e._v(". "),o("em",[e._v("Natbib")]),e._v(" is used for the bibliography with as backend "),o("em",[e._v("BibTeX")]),e._v(". If you would like to use it on Overleaf, click the button above to get started immediately.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Encounter issues or have suggestions?")]),e._v(" "),o("p",[e._v("In contrast to the report template, this template has been created over one semester for a single article. As such, there is likely more room for improvements. So please let me know if you encounter issues or have suggestions!")])]),e._v(" "),o("h2",{attrs:{id:"_1-document-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-document-structure"}},[e._v("#")]),e._v(" 1. Document Structure")]),e._v(" "),o("h3",{attrs:{id:"_1-1-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-structure"}},[e._v("#")]),e._v(" 1.1 Structure")]),e._v(" "),o("p",[e._v("As an article can become quite a lengthy document, the main sections (such as the introduction and methodology) are separated into different files for convenience. All these files are inserted in the master file, "),o("code",[e._v("main.tex")]),e._v(", using the "),o("code",[e._v("\\input{filename}")]),e._v(" command. The abstract, nomenclature, acknowledgment and appendix can be found in the master file instead. The document class, which can be found in "),o("code",[e._v("layout/tudelft-aiaa.cls")]),e._v(", is based on the article class by AIAA.")]),e._v(" "),o("p",[e._v("Finally, the bibliography is added using "),o("code",[e._v("\\bibliography{article.bib}")]),e._v(", which uses the file "),o("code",[e._v("article.bib")]),e._v(". If you would like to change the default bibliography file, change the command accordingly, which can be found in the master file. See Section 3 for more detail about the bibliography.")]),e._v(" "),o("h3",{attrs:{id:"_1-2-two-columns-option"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-two-columns-option"}},[e._v("#")]),e._v(" 1.2 Two Columns Option")]),e._v(" "),o("p",[e._v("By default, the article is only one column. Switching to two columns can be done by using the "),o("code",[e._v("twocolumn")]),e._v(" global option, resulting in the first line in "),o("code",[e._v("main.tex")]),e._v(" as can be seen below.")]),e._v(" "),o("div",{staticClass:"language-LaTeX extra-class"},[o("pre",{pre:!0,attrs:{class:"language-latex"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\documentclass")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("twocolumn"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("layout/tudelft-aiaa")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("Floats, such as figures and tables, will behave like 'normal' in "),o("code",[e._v("twocolumn")]),e._v(" mode and will therefore only occupy one column. In order to have a float span both columns (for example in combination with minipages or subfigures), an asterisk can be added to the environment. An example of a figure that will span both columns can be found below.")]),e._v(" "),o("div",{staticClass:"language-LaTeX extra-class"},[o("pre",{pre:!0,attrs:{class:"language-latex"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\begin")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("figure*")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ht"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\centering")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\includegraphics")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("width=0.8"),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\linewidth")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("image.jpg"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\caption")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Caption"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\label")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fig:label")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token function selector"}},[e._v("\\end")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("figure*")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("h2",{attrs:{id:"_2-guidelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-guidelines"}},[e._v("#")]),e._v(" 2. Guidelines")]),e._v(" "),o("p",[e._v("The Microsoft Word template for AE2223-I is the guiding template and nearly everything is taken care of in this template. In order to follow all guidelines regarding the article layout, the following information should still be noted:")]),e._v(" "),o("ul",[o("li",[e._v("Paragraphs that follow a blank line should not be indented. Use "),o("code",[e._v("\\noindent")]),e._v(" to correct these indentations locally if needed. This works automatically after headings (sections, etc.)")]),e._v(" "),o("li",[e._v("When referencing a figure or equation in text, "),o("code",[e._v("\\autoref{}")]),e._v(" will abbreviate to 'Fig.'' or 'Eq.' always. Use "),o("code",[e._v("\\ref{}")]),e._v(" at the beginning of sentences and write out 'Figure' or 'Equation' fully.")])]),e._v(" "),o("h2",{attrs:{id:"_3-bibliography"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-bibliography"}},[e._v("#")]),e._v(" 3. Bibliography")]),e._v(" "),o("p",[e._v("In the following sections, the most common entry types and (required/optional) fields per entry type are provided. Private communication or personal websites may only be incorporated in the main text or appear as footnotes. The DOI (digital object identifier) should always be given if it is available.")]),e._v(" "),o("p",[e._v("The optional fields outside the brackets are "),o("strong",[e._v("almost always required")]),e._v(". Please refer to "),o("code",[e._v("article.bib")]),e._v(" for actual examples. Make sure the actual output corresponds with the guidelines.")]),e._v(" "),o("h3",{attrs:{id:"articles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#articles"}},[e._v("#")]),e._v(" Articles")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("@article")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("journal")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("volume")]),e._v(" "),o("code",[e._v("number")]),e._v(" "),o("code",[e._v("pages")]),e._v(" "),o("code",[e._v("doi")]),e._v(" ("),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])]),e._v(" "),o("h3",{attrs:{id:"books"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#books"}},[e._v("#")]),e._v(" Books")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("@inbook")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v("/"),o("code",[e._v("editor")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("publisher")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("address")]),e._v(" "),o("code",[e._v("pages")]),e._v("/"),o("code",[e._v("chapter")]),e._v(" ("),o("code",[e._v("series")]),e._v(" "),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("@book")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v("/"),o("code",[e._v("editor")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("publisher")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("series")]),e._v(" "),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])])]),e._v(" "),o("h3",{attrs:{id:"proceedings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proceedings"}},[e._v("#")]),e._v(" Proceedings")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("@inproceedings")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("booktitle")]),e._v(" "),o("code",[e._v("pages")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("publisher")]),e._v("/"),o("code",[e._v("organization")]),e._v(" "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("volume")]),e._v(" "),o("code",[e._v("series")]),e._v(" "),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("@proceedings")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("editor")]),e._v(" "),o("code",[e._v("publisher")]),e._v("/"),o("code",[e._v("organization")]),e._v(" "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("volume")]),e._v(" "),o("code",[e._v("number")]),e._v(" "),o("code",[e._v("series")]),e._v(" "),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])])]),e._v(" "),o("h3",{attrs:{id:"reports-theses-and-individual-papers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reports-theses-and-individual-papers"}},[e._v("#")]),e._v(" Reports, Theses, and Individual Papers")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("@report")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("number")]),e._v(" "),o("code",[e._v("institution")]),e._v(" "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("@mastersthesis")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("school")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("@phdthesis")]),o("br"),e._v("\nRequired fields: "),o("code",[e._v("author")]),e._v(" "),o("code",[e._v("title")]),e._v(" "),o("code",[e._v("year")]),e._v(" "),o("code",[e._v("school")]),o("br"),e._v("\nOptional fields: "),o("code",[e._v("address")]),e._v(" ("),o("code",[e._v("doi")]),e._v(" "),o("code",[e._v("url")]),e._v(" "),o("code",[e._v("note")]),e._v(")")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);