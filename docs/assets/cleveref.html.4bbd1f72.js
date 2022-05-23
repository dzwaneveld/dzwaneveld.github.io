import{_ as c,r as n,o as l,c as i,a,b as s,w as p,F as r,d as u,e}from"./app.b343db66.js";const d={},m=u(`<h1 id="cross-referencing-with-cleveref" tabindex="-1"><a class="header-anchor" href="#cross-referencing-with-cleveref" aria-hidden="true">#</a> Cross-referencing with &#39;cleveref&#39;</h1><p><em>\u2192 Included in the report/thesis and article template by default.</em></p><p>A random figure might at some point be numbered <em>&#39;Figure 2.1&#39;</em>, but a few changes to the document could suddenly make it <em>&#39;Figure 2.4&#39;</em>. To make cross-referencing easier, LaTeX provides commands to automate referencing to numbered elements (such as sections, equations and figures). Although multiple solutions exist, <em>cleveref</em> is generally considered to be more powerful and flexible.</p><h2 id="creating-labels" tabindex="-1"><a class="header-anchor" href="#creating-labels" aria-hidden="true">#</a> Creating Labels</h2><p>Before referencing a numbered element, an identifier has to be added. A random text string will work with the <code>\\label{}</code> command, but you might want to include the reference type (<code>eqn:</code>, <code>fig:</code>) to stay organized. An example can be found below:</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\section</span><span class="token punctuation">{</span><span class="token headline class-name">Some Introductory Thoughts</span><span class="token punctuation">}</span>
<span class="token function selector">\\label</span><span class="token punctuation">{</span><span class="token keyword">section:introduction</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">equation</span><span class="token punctuation">}</span><span class="token equation string">
  <span class="token equation-command regex">\\label</span>{eqn:pythagoras}
  a^2 + b^2 = c^2
</span><span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">equation</span><span class="token punctuation">}</span>

<span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">figure</span><span class="token punctuation">}</span><span class="token punctuation">[</span>h<span class="token punctuation">]</span>
  <span class="token function selector">\\centering</span>
  <span class="token function selector">\\includegraphics</span><span class="token punctuation">[</span>width=0.8<span class="token function selector">\\linewidth</span><span class="token punctuation">]</span><span class="token punctuation">{</span>example.png<span class="token punctuation">}</span>
  <span class="token function selector">\\caption</span><span class="token punctuation">{</span>An example figure<span class="token punctuation">}</span>
  <span class="token function selector">\\label</span><span class="token punctuation">{</span><span class="token keyword">fig:example</span><span class="token punctuation">}</span>
<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">figure</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Note that with figures and tables, the <code>\\label{}</code> command has to be given after <code>\\caption{}</code>.</p><h2 id="referencing-numbered-elements" tabindex="-1"><a class="header-anchor" href="#referencing-numbered-elements" aria-hidden="true">#</a> Referencing Numbered Elements</h2><p>When a numbered element has a label, it can be cross-referenced with the <code>\\cref{}</code> command. Note that capitalizing the first letter of the <code>\\cref{}</code> command will also capitalize the first letter of the reference name.</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\section</span><span class="token punctuation">{</span><span class="token headline class-name">A section with a label</span><span class="token punctuation">}</span>
<span class="token function selector">\\label</span><span class="token punctuation">{</span><span class="token keyword">section:example</span><span class="token punctuation">}</span>

<span class="token function selector">\\cref</span><span class="token punctuation">{</span>section:example<span class="token punctuation">}</span> <span class="token comment">% For example: &#39;section 2.1&#39;</span>
<span class="token function selector">\\Cref</span><span class="token punctuation">{</span>section:example<span class="token punctuation">}</span> <span class="token comment">% For example: &#39;Section 2.1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>It is also possible to cross-reference multiple numbered elements at once. The <code>\\crefrange{}{}</code> command can be used to cross-reference a range of elements, while the <code>\\cref{}</code> command allows multiple comma-separated identifiers to be added:</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\crefrange</span><span class="token punctuation">{</span>fig:ex-1<span class="token punctuation">}</span><span class="token punctuation">{</span>fig:ex-5<span class="token punctuation">}</span> <span class="token comment">% For example: &#39;figures 2.1 to 2.5&#39;</span>
<span class="token function selector">\\cref</span><span class="token punctuation">{</span>fig:example,tab:example<span class="token punctuation">}</span> <span class="token comment">% For example: &#39;figure 2.1 and table 2.1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="package-options" tabindex="-1"><a class="header-anchor" href="#package-options" aria-hidden="true">#</a> Package Options</h2><p>A few package options exist that modify the cross-reference format. Two of them are described here in more detail:</p><ul><li><strong>capitalise:</strong> With this option, the first letter of the cross-reference name will always be capitalized. This package option is used by default in the article template.</li><li><strong>noabbrev:</strong> The full name of the cross-reference will always be used instead of an abbreviation (such as eq.) with this option. This package option is used by default in the report/thesis template.</li></ul><p>Changing the package options can be done by finding the line where <em>cleveref</em> is imported in the class file (<code>layout</code> &gt; <code>&lt;file&gt;.cls</code>). Remove or add the option (comma-separated) as can be seen below.</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\RequirePackage</span><span class="token punctuation">[</span>capitalise,&lt;option2&gt;,...<span class="token punctuation">]</span><span class="token punctuation">{</span>cleveref<span class="token punctuation">}</span> <span class="token comment">% Intelligent cross-referencing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="more-information" tabindex="-1"><a class="header-anchor" href="#more-information" aria-hidden="true">#</a> More Information</h2>`,18),h=e("This webpage only describes the basic usage. If you have any questions, try searching for an answer online or take a look at the "),f={href:"https://ctan.org/pkg/cleveref",target:"_blank",rel:"noopener noreferrer"},b=e("package documentation"),k=e(". For questions, suggestions or issues related to the template or this documentation, feel free to "),g=e("contact me"),x=e(".");function w(v,_){const t=n("ExternalLinkIcon"),o=n("RouterLink");return l(),i(r,null,[m,a("p",null,[h,a("a",f,[b,s(t)]),k,s(o,{to:"/contact.html"},{default:p(()=>[g]),_:1}),x])],64)}var q=c(d,[["render",w],["__file","cleveref.html.vue"]]);export{q as default};
