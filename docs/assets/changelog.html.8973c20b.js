import{r as t,o as a,c as l,a as e,b as n,F as d,e as s,d as o}from"./app.0c34bb69.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const c={},h=s('<h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><h2 id="_1-5-17-03-2022" tabindex="-1"><a class="header-anchor" href="#_1-5-17-03-2022" aria-hidden="true">#</a> 1.5 (17/03/2022)</h2><ul><li><strong>Packages:</strong><ul><li>Added <code>cleveref</code>, <code>listings</code> and <code>pdfpages</code> to the class file</li><li>Replaced <code>amsmath</code> with <code>mathtools</code> (the latter imports the former however)</li><li>Removed <code>tocbibind</code></li></ul></li><li><strong>Features</strong>: <ul><li>The behaviour of the <code>\\author{}</code> command has been reverted and a new command <code>\\covertable{}</code> has been introduced to allow a table of authors on the cover page</li><li>Support for including source code (and source code files) has been added to the class file with the package <code>listings</code>. Some sample code has been included in Appendix A</li><li>The title page has been changed slightly and has been renamed to <code>title-report.tex</code>. A title page for theses is now included: <code>title-thesis.tex</code></li><li>Removed all hardcoded English in the class file to make it easier to switch to Dutch (or any other language) if desired. Added a <code>\\affiliation{}</code> command for example.</li><li>A Palatino-like font is now used if the compiler is set to pdfLaTeX</li></ul></li><li><strong>Fixes:</strong><ul><li>Revisited the class file to increase readability, simplified a few commands and improved a few others</li><li>The list of figures and tables are no longer enabled by default</li><li>The redundant, somewhat not up to standard, documentation inside the document has been simplified or removed.</li><li>To reduce file size, the previously included cover images can now be found in the FAQ</li></ul></li></ul><h2 id="_1-4-2-01-01-2022" tabindex="-1"><a class="header-anchor" href="#_1-4-2-01-01-2022" aria-hidden="true">#</a> 1.4.2 (01/01/2022)</h2><ul><li><strong>Fixes:</strong><ul><li>Documentation inside the document is now more consistent</li></ul></li></ul><h2 id="_1-4-1-16-05-2021" tabindex="-1"><a class="header-anchor" href="#_1-4-1-16-05-2021" aria-hidden="true">#</a> 1.4.1 (16/05/2021)</h2><ul><li><strong>Features:</strong><ul><li>Moved all bibliography commands out of the class file. Changing the bibliography style (or other options) should now be done in the main file (<code>report.tex</code>)</li><li>Moved all <code>.tex</code> files (except the main file) into different folders (<code>frontmatter</code>/<code>mainmatter</code>/<code>appendix</code>) to improve the organisation of all files</li></ul></li></ul><h2 id="_1-4-17-04-2021" tabindex="-1"><a class="header-anchor" href="#_1-4-17-04-2021" aria-hidden="true">#</a> 1.4 (17/04/2021)</h2><ul><li><strong>Features:</strong><ul><li>Added support for a table of authors on the cover. See the FAQ for more information and an example.</li></ul></li><li><strong>Fixes:</strong><ul><li><code>\\makecover</code> will now issue a <code>\\newpage</code> at the end. In some very specific cases, the table of contents could get superimposed on the cover</li><li>Removed a command that made changes to the bibliography spacing because it did very little</li><li>Formatting of chapter titles with pdfLaTeX will no longer result in a small chapter number</li><li>Reworded some text to make it more concise and consistent</li></ul></li></ul><h2 id="_1-3-1-06-02-2021" tabindex="-1"><a class="header-anchor" href="#_1-3-1-06-02-2021" aria-hidden="true">#</a> 1.3.1 (06/02/2021)</h2><ul><li><strong>Packages:</strong> Added <code>etoolbox</code></li><li><strong>Features</strong>: <ul><li>Subtitle and subject are now optional</li></ul></li><li><strong>Fixes:</strong><ul><li>No visual changes, but formatting of titles is now more consistent</li><li>Reworded some text in the README.md to make it more concise and consistent</li></ul></li></ul><h2 id="_1-3-27-06-2020" tabindex="-1"><a class="header-anchor" href="#_1-3-27-06-2020" aria-hidden="true">#</a> 1.3 (27/06/2020)</h2><ul><li><strong>Packages:</strong> Added <code>multirow</code> and <code>iftex</code></li><li><strong>Features:</strong><ul><li>Added compatibility for pdfLaTeX, but a warning will be given as the fonts do not adhere to the TU Delft house style. The template now officially supports pdfLaTeX, XeLaTeX and LuaLaTeX</li><li>Added support for <code>oneside</code> (default) and <code>twoside</code> global option. Changing to <code>twoside</code> can be done in the global options in report.tex, which results in minor changes the margins and headers. Furthermore, whitepages are added to resemble a printed (doublesided) book/report layout</li></ul></li><li><strong>Fixes:</strong><ul><li>Global options will now be parsed correctly</li><li>Reworded some text to make it more concise and consistent</li></ul></li></ul><h2 id="_1-2-2-27-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-2-27-02-2020" aria-hidden="true">#</a> 1.2.2 (27/02/2020)</h2><ul><li><strong>Fixes:</strong><ul><li><code>Minted</code> is no longer enabled by default as it requires a Python installation and a shell escape to function</li></ul></li></ul><h2 id="_1-2-1-19-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-1-19-02-2020" aria-hidden="true">#</a> 1.2.1 (19/02/2020)</h2><ul><li><strong>Fixes:</strong><ul><li>The bibliography style and sorting order is now the BibLaTeX default. As such, changing to a different bibliography style will now be easier.</li><li>Addresses of the included bibliography entries are now more complete</li></ul></li></ul><h2 id="_1-2-05-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-05-02-2020" aria-hidden="true">#</a> 1.2 (05/02/2020)</h2><ul><li><strong>Features:</strong><ul><li>Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)</li></ul></li></ul><p>+ Other minor adjustments and fixes</p><h2 id="_1-1-27-12-2019" tabindex="-1"><a class="header-anchor" href="#_1-1-27-12-2019" aria-hidden="true">#</a> 1.1 (27/12/2019)</h2>',21),u=e("strong",null,"Features:",-1),m=o("Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. Refer to "),f={href:"http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1",target:"_blank",rel:"noopener noreferrer"},g=o("Section 2.1.1"),p=o(" of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type."),b=e("li",null,"Changed the font to Arial to be more in line with the TU Delft corporate design",-1),_=e("li",null,"Added more book entries from 2nd year courses and fixed some existing entries",-1),x=e("li",null,"Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries",-1),w=e("p",null,"+ Other minor adjustments and fixes",-1),v=e("h2",{id:"_1-0-27-09-2019",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-0-27-09-2019","aria-hidden":"true"},"#"),o(" 1.0 (27/09/2019)")],-1),y=e("ul",null,[e("li",null,"Rewritten class file to improve readability and simplify modifications"),e("li",null,"Redesigned the cover page")],-1);function A(F,T){const i=t("ExternalLinkIcon");return a(),l(d,null,[h,e("ul",null,[e("li",null,[u,e("ul",null,[e("li",null,[m,e("a",f,[g,n(i)]),p]),b,_,x])])]),w,v,y],64)}var L=r(c,[["render",A]]);export{L as default};
