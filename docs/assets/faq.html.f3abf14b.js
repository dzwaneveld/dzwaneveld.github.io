import{_ as s,r as t,o,c,a as e,b as l,w as i,F as r,e as n,d as p}from"./app.b343db66.js";const u={},d=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),n(" FAQ")],-1),h=n("Answers to questions that are directly related to the article template can be found below. More general questions and answers have been incorporated in a quick reference/simple manual and can now be found under the 'Learn' menu. For unanswered questions, suggestions or issues related to the template or this documentation, feel free to "),m=n("contact me"),f=n("."),b=p(`<h2 id="spanning-figures-or-tables-over-two-columns" tabindex="-1"><a class="header-anchor" href="#spanning-figures-or-tables-over-two-columns" aria-hidden="true">#</a> Spanning figures or tables over two columns</h2><p>Floats, such as figures and tables, will behave like &#39;normal&#39; in <code>twocolumn</code> mode and will therefore only occupy one column. In order to have a float span both columns (for example in combination with minipages or subfigures), an asterisk can be added to the environment. An example of a figure that will span both columns can be found below.</p><div class="language-latex ext-latex line-numbers-mode"><pre class="language-latex"><code><span class="token function selector">\\begin</span><span class="token punctuation">{</span><span class="token keyword">figure*</span><span class="token punctuation">}</span><span class="token punctuation">[</span>ht<span class="token punctuation">]</span>
    <span class="token function selector">\\centering</span>
    <span class="token function selector">\\includegraphics</span><span class="token punctuation">[</span>width=0.8<span class="token function selector">\\linewidth</span><span class="token punctuation">]</span><span class="token punctuation">{</span>image.jpg<span class="token punctuation">}</span>
    <span class="token function selector">\\caption</span><span class="token punctuation">{</span>Caption<span class="token punctuation">}</span>
    <span class="token function selector">\\label</span><span class="token punctuation">{</span><span class="token keyword">fig:label</span><span class="token punctuation">}</span>
<span class="token function selector">\\end</span><span class="token punctuation">{</span><span class="token keyword">figure*</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,3);function k(g,_){const a=t("RouterLink");return o(),c(r,null,[d,e("p",null,[h,l(a,{to:"/contact.html"},{default:i(()=>[m]),_:1}),f]),b],64)}var v=s(u,[["render",k],["__file","faq.html.vue"]]);export{v as default};
