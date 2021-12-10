"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[544],{5272:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a={key:"v-e52c881c",path:"/article/",title:"Article Template",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Document Structure",slug:"document-structure",children:[{level:3,title:"Structure",slug:"structure",children:[]},{level:3,title:"Two Columns Option",slug:"two-columns-option",children:[]}]},{level:2,title:"Guidelines",slug:"guidelines",children:[]},{level:2,title:"Bibliography",slug:"bibliography",children:[{level:3,title:"Articles",slug:"articles",children:[]},{level:3,title:"Books",slug:"books",children:[]},{level:3,title:"Proceedings",slug:"proceedings",children:[]},{level:3,title:"Reports, Theses, and Individual Papers",slug:"reports-theses-and-individual-papers",children:[]}]}],filePathRelative:"article/README.md",git:{}}},1015:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var a=t(6252);const n=(0,a._)("h1",{id:"article-template",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#article-template","aria-hidden":"true"},"#"),(0,a.Uk)(" Article Template")],-1),i=(0,a._)("p",null,[(0,a._)("a",{href:"https://www.overleaf.com/docs?snip_uri=https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip",target:"_blank"},[(0,a._)("img",{alt:"Open in Overleaf",src:"/badges/open-in-overleaf.svg"})]),(0,a._)("a",{href:"https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/archive/master.zip"},[(0,a._)("img",{alt:"Download .zip",src:"/badges/download-zip.svg",hspace:"4"})]),(0,a._)("a",{href:"https://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},[(0,a._)("img",{alt:"License CC BY-NC 4.0",src:"/badges/license.svg"})])],-1),c=(0,a.uE)('<p>This template is a simple article template following all the guidelines of AE2333-I, based on the official AIAA template. Some of the main features:</p><ul><li><strong>Effortless:</strong> Many common packages are included by default to get started immediately;</li><li><strong>Switch Columns:</strong> Use one column, or switch to two columns at any time with minimal effort;</li><li><strong>Extensive Bibliography:</strong> A sample reference is included of the most common reference types to make sure all information is included.</li></ul><p>This template is created for <em>pdfLaTeX</em>, but it is also compatible with <em>XeLaTeX</em> or <em>LuaLaTeX</em>. <em>Natbib</em> is used for the bibliography with as backend <em>BibTeX</em>. If you would like to use it on Overleaf, click the button above to get started immediately.</p><p align="center"><img alt="Article Template" src="/images/article-template.jpg" width="40%" style="border:1px solid #c7c7c7;">   <img alt="Article Template Twocolumn" src="/images/article-template-twocolumn.jpg" width="40%" style="border:1px solid #c7c7c7;"></p>',4),s={class:"custom-container tip"},d=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),l=(0,a.Uk)("In contrast to the report template, this template has been created over one semester for a single article. As such, there is likely more room for adjustments. Feel free to "),r=(0,a.Uk)("contact me"),u=(0,a.Uk)(" if you have suggestions or encounter issues!"),p=(0,a.uE)('<h2 id="document-structure" tabindex="-1"><a class="header-anchor" href="#document-structure" aria-hidden="true">#</a> Document Structure</h2><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h3><p>As an article can become quite a lengthy document, the main sections (such as the introduction and methodology) are separated into different files for convenience. All these files are inserted in the master file, <code>main.tex</code>, using the <code>\\input{filename}</code> command. The abstract, nomenclature, acknowledgment and appendix can be found in the master file instead. The document class, which can be found in <code>layout/tudelft-aiaa.cls</code>, is based on the article class by AIAA.</p><p>Finally, the bibliography is added using <code>\\bibliography{article.bib}</code>, which uses the file <code>article.bib</code>. If you would like to change the default bibliography file, change the command accordingly, which can be found in the master file. See Section 3 for more detail about the bibliography.</p><h3 id="two-columns-option" tabindex="-1"><a class="header-anchor" href="#two-columns-option" aria-hidden="true">#</a> Two Columns Option</h3><p>By default, the article is only one column. Switching to two columns can be done by using the <code>twocolumn</code> global option, resulting in the first line in <code>main.tex</code> as can be seen below.</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\documentclass</span><span class="token punctuation">[</span>twocolumn<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">layout/tudelft-aiaa</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Floats, such as figures and tables, will behave like &#39;normal&#39; in <code>twocolumn</code> mode and will therefore only occupy one column. In order to have a float span both columns (for example in combination with minipages or subfigures), an asterisk can be added to the environment. An example of a figure that will span both columns can be found below.</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">figure*</span><span class="token punctuation">}</span><span class="token punctuation">[</span>ht<span class="token punctuation">]</span>\n    <span class="token function selector">\\centering</span>\n    <span class="token function selector">\\includegraphics</span><span class="token punctuation">[</span>width=0.8<span class="token function selector">\\linewidth</span><span class="token punctuation">]</span><span class="token punctuation">{</span>image.jpg<span class="token punctuation">}</span>\n    <span class="token function selector">\\caption</span><span class="token punctuation">{</span>Caption<span class="token punctuation">}</span>\n    <span class="token function selector">\\label</span><span class="token punctuation">{</span><span class="token keyword">fig:label</span><span class="token punctuation">}</span>\n<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">figure*</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines" aria-hidden="true">#</a> Guidelines</h2><p>The Microsoft Word template for AE2223-I is the guiding template and nearly everything is taken care of in this template. In order to follow all guidelines regarding the article layout, the following information should still be noted:</p><ul><li>Paragraphs that follow a blank line should not be indented. Use <code>\\noindent</code> to correct these indentations locally if needed. This works automatically after headings (sections, etc.)</li><li>When referencing a figure or equation in text, <code>\\autoref{}</code> will abbreviate to &#39;Fig.&#39;&#39; or &#39;Eq.&#39; always. Use <code>\\ref{}</code> at the beginning of sentences and write out &#39;Figure&#39; or &#39;Equation&#39; fully.</li></ul><h2 id="bibliography" tabindex="-1"><a class="header-anchor" href="#bibliography" aria-hidden="true">#</a> Bibliography</h2><p>In the following sections, the most common entry types and (required/optional) fields per entry type are provided. Private communication or personal websites may only be incorporated in the main text or appear as footnotes. The DOI (digital object identifier) should always be given if it is available.</p><p>The optional fields outside the brackets are <strong>almost always required</strong>. Please refer to <code>article.bib</code> for actual examples. Make sure the actual output corresponds with the guidelines.</p><h3 id="articles" tabindex="-1"><a class="header-anchor" href="#articles" aria-hidden="true">#</a> Articles</h3><ul><li><code>@article</code><br> Required fields: <code>author</code> <code>title</code> <code>year</code> <code>journal</code><br> Optional fields: <code>volume</code> <code>number</code> <code>pages</code> <code>doi</code> (<code>url</code> <code>note</code>)</li></ul><h3 id="books" tabindex="-1"><a class="header-anchor" href="#books" aria-hidden="true">#</a> Books</h3><ul><li><p><code>@inbook</code><br> Required fields: <code>author</code>/<code>editor</code> <code>title</code> <code>year</code> <code>publisher</code><br> Optional fields: <code>address</code> <code>pages</code>/<code>chapter</code> (<code>series</code> <code>doi</code> <code>url</code> <code>note</code>)</p></li><li><p><code>@book</code><br> Required fields: <code>author</code>/<code>editor</code> <code>title</code> <code>year</code> <code>publisher</code><br> Optional fields: <code>address</code> (<code>series</code> <code>doi</code> <code>url</code> <code>note</code>)</p></li></ul><h3 id="proceedings" tabindex="-1"><a class="header-anchor" href="#proceedings" aria-hidden="true">#</a> Proceedings</h3><ul><li><p><code>@inproceedings</code><br> Required fields: <code>author</code> <code>title</code> <code>year</code> <code>booktitle</code> <code>pages</code><br> Optional fields: <code>publisher</code>/<code>organization</code> <code>address</code> (<code>volume</code> <code>series</code> <code>doi</code> <code>url</code> <code>note</code>)</p></li><li><p><code>@proceedings</code><br> Required fields: <code>title</code> <code>year</code><br> Optional fields: <code>editor</code> <code>publisher</code>/<code>organization</code> <code>address</code> (<code>volume</code> <code>number</code> <code>series</code> <code>doi</code> <code>url</code> <code>note</code>)</p></li></ul><h3 id="reports-theses-and-individual-papers" tabindex="-1"><a class="header-anchor" href="#reports-theses-and-individual-papers" aria-hidden="true">#</a> Reports, Theses, and Individual Papers</h3><ul><li><p><code>@report</code><br> Required fields: <code>author</code> <code>title</code> <code>year</code><br> Optional fields: <code>number</code> <code>institution</code> <code>address</code> (<code>doi</code> <code>url</code> <code>note</code>)</p></li><li><p><code>@mastersthesis</code><br> Required fields: <code>author</code> <code>title</code> <code>year</code> <code>school</code><br> Optional fields: <code>address</code> (<code>doi</code> <code>url</code> <code>note</code>)</p></li><li><p><code>@phdthesis</code><br> Required fields: <code>author</code> <code>title</code> <code>year</code> <code>school</code><br> Optional fields: <code>address</code> (<code>doi</code> <code>url</code> <code>note</code>)</p></li></ul>',23),h={},m=(0,t(3744).Z)(h,[["render",function(e,o){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,i,c,(0,a._)("div",s,[d,(0,a._)("p",null,[l,(0,a.Wm)(t,{to:"/about.html#contact"},{default:(0,a.w5)((()=>[r])),_:1}),u])]),p],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{const t=e.__vccOpts||e;for(const[e,a]of o)t[e]=a;return t}}}]);