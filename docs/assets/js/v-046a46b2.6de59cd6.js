"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[469],{738:(e,i,l)=>{l.r(i),l.d(i,{data:()=>t});const t={key:"v-046a46b2",path:"/report/changelog.html",title:"Changelog",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.4.1 (16/05/2021)",slug:"_1-4-1-16-05-2021",children:[]},{level:2,title:"1.4.0 (17/04/2021)",slug:"_1-4-0-17-04-2021",children:[]},{level:2,title:"1.3.1 (06/02/2021)",slug:"_1-3-1-06-02-2021",children:[]},{level:2,title:"1.3.0 (27/06/2020)",slug:"_1-3-0-27-06-2020",children:[]},{level:2,title:"1.2.2 (27/02/2020)",slug:"_1-2-2-27-02-2020",children:[]},{level:2,title:"1.2.1 (19/02/2020)",slug:"_1-2-1-19-02-2020",children:[]},{level:2,title:"1.2.0 (05/02/2020)",slug:"_1-2-0-05-02-2020",children:[]},{level:2,title:"1.1.0 (27/12/2019)",slug:"_1-1-0-27-12-2019",children:[]},{level:2,title:"1.0.0 (27/09/2019)",slug:"_1-0-0-27-09-2019",children:[]}],filePathRelative:"report/changelog.md",git:{}}},9934:(e,i,l)=>{l.r(i),l.d(i,{default:()=>p});var t=l(6252);const o=(0,t.uE)('<h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><p>I have not been particularly concise when it comes to versioning. As such, only version 1.2.1 and higher have a more extensive changelog. You should probably avoid version 1.0.x anyway.</p><h2 id="_1-4-1-16-05-2021" tabindex="-1"><a class="header-anchor" href="#_1-4-1-16-05-2021" aria-hidden="true">#</a> 1.4.1 (16/05/2021)</h2><ul><li><strong>Features:</strong><ul><li>Moved all bibliography commands out of the class file. Changing the bibliography style (or other options) should now be done in the main file (<code>report.tex</code>)</li><li>Moved all <code>.tex</code> files (except the main file) into different folders (<code>frontmatter</code>/<code>mainmatter</code>/<code>appendix</code>) to improve the organisation of all files</li></ul></li></ul><h2 id="_1-4-0-17-04-2021" tabindex="-1"><a class="header-anchor" href="#_1-4-0-17-04-2021" aria-hidden="true">#</a> 1.4.0 (17/04/2021)</h2><ul><li><strong>Features:</strong><ul><li>Added support for a table of authors on the cover. The <code>\\author[]{}</code> command now has an optional argument, which is used for the metadata in case it is defined. Any LaTeX code in the main argument will then no longer cause issues. An example table on the cover can be found in the FAQ</li></ul></li><li><strong>Fixes:</strong><ul><li><code>\\makecover</code> will now issue a <code>\\newpage</code> at the end. In some very specific cases, the table of contents could get superimposed on the cover</li><li>Removed a command that made changes to the bibliography spacing because it did very little</li><li>Formatting of chapter titles with pdfLaTeX will no longer result in a small chapter number</li><li>Reworded some text to make it more concise and consistent</li></ul></li></ul><h2 id="_1-3-1-06-02-2021" tabindex="-1"><a class="header-anchor" href="#_1-3-1-06-02-2021" aria-hidden="true">#</a> 1.3.1 (06/02/2021)</h2><ul><li><strong>Packages:</strong> Added <code>etoolbox</code></li><li><strong>Features</strong>: <ul><li>Subtitle and subject are now optional</li></ul></li><li><strong>Fixes:</strong><ul><li>No visual changes, but formatting of titles is now more consistent</li><li>Reworded some text in the README.md to make it more concise and consistent</li></ul></li></ul><h2 id="_1-3-0-27-06-2020" tabindex="-1"><a class="header-anchor" href="#_1-3-0-27-06-2020" aria-hidden="true">#</a> 1.3.0 (27/06/2020)</h2><ul><li><strong>Packages:</strong> Added <code>multirow</code> and <code>iftex</code></li><li><strong>Features:</strong><ul><li>Added compatibility for pdfLaTeX, but a warning will be given as the fonts do not adhere to the TU Delft house style. The template now officially supports pdfLaTeX, XeLaTeX and LuaLaTeX</li><li>Added support for <code>oneside</code> (default) and <code>twoside</code> global option. Changing to <code>twoside</code> can be done in the global options in report.tex, which results in minor changes the margins and headers. Furthermore, whitepages are added to resemble a printed (doublesided) book/report layout</li></ul></li><li><strong>Fixes:</strong><ul><li>Global options will now be parsed correctly</li><li>Reworded some text to make it more concise and consistent</li></ul></li></ul><h2 id="_1-2-2-27-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-2-27-02-2020" aria-hidden="true">#</a> 1.2.2 (27/02/2020)</h2><ul><li><strong>Fixes:</strong><ul><li><code>Minted</code> is no longer enabled by default as it requires a Python installation and a shell escape to function</li></ul></li></ul><h2 id="_1-2-1-19-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-1-19-02-2020" aria-hidden="true">#</a> 1.2.1 (19/02/2020)</h2><ul><li><strong>Fixes:</strong><ul><li>The bibliography style and sorting order is now the BibLaTeX default. As such, changing to a different bibliography style will now be easier.</li><li>Addresses of the included bibliography entries are now more complete</li></ul></li></ul><h2 id="_1-2-0-05-02-2020" tabindex="-1"><a class="header-anchor" href="#_1-2-0-05-02-2020" aria-hidden="true">#</a> 1.2.0 (05/02/2020)</h2><ul><li><strong>Features:</strong><ul><li>Added more cover images. A detailed list with all attributions can be found on the next page. All images can be used and distributed freely if appropriate credit is given (all use a CC BY 2.0 license or similar)</li></ul></li></ul><p>+ Other minor adjustments and fixes</p><h2 id="_1-1-0-27-12-2019" tabindex="-1"><a class="header-anchor" href="#_1-1-0-27-12-2019" aria-hidden="true">#</a> 1.1.0 (27/12/2019)</h2>',18),a=(0,t._)("strong",null,"Features:",-1),n=(0,t.Uk)("Removed Natbib in favor of BibLaTeX. Adds more database entry types (e.g. @online) and other minor improvements. Refer to "),r={href:"http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.2.1.1",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("Section 2.1.1"),s=(0,t.Uk)(" of the documentation of BibLaTeX to learn more about the various default types and the fields accepted per type."),h=(0,t._)("li",null,"Changed the font to Arial to be more in line with the TU Delft corporate design",-1),c=(0,t._)("li",null,"Added more book entries from 2nd year courses and fixed some existing entries",-1),u=(0,t._)("li",null,"Converted the nomenclature tables to longtables, which allows tables to flow over page boundaries",-1),g=(0,t._)("p",null,"+ Other minor adjustments and fixes",-1),b=(0,t._)("h2",{id:"_1-0-0-27-09-2019",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-0-0-27-09-2019","aria-hidden":"true"},"#"),(0,t.Uk)(" 1.0.0 (27/09/2019)")],-1),f=(0,t._)("ul",null,[(0,t._)("li",null,"Rewritten class file to improve readability and simplify modifications"),(0,t._)("li",null,"Redesigned the cover page")],-1),m={},p=(0,l(3744).Z)(m,[["render",function(e,i){const l=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("ul",null,[(0,t._)("li",null,[a,(0,t._)("ul",null,[(0,t._)("li",null,[n,(0,t._)("a",r,[d,(0,t.Wm)(l)]),s]),h,c,u])])]),g,b,f],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const l=e.__vccOpts||e;for(const[e,t]of i)l[e]=t;return l}}}]);