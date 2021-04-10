(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("Answers to some of more common questions can be found below. A general knowledge of LaTeX is assumed. If you have very specific questions, you might want to take a look at the documentation of the package in question. Feel free to "),a("RouterLink",{attrs:{to:"/about.html#contact"}},[t._v("contact me")]),t._v(" if you have more questions.")],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#layout"}},[t._v("Layout")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-do-i-get-as-little-much-text-as-possible-on-a-single-page"}},[t._v("How do I get as little/much text as possible on a single page?")])]),a("li",[a("a",{attrs:{href:"#how-can-i-adjust-the-titles"}},[t._v("How can I adjust the titles?")])])])]),a("li",[a("a",{attrs:{href:"#bibliography-references"}},[t._v("Bibliography / References")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-do-i-change-the-bibliography-style"}},[t._v("How do I change the bibliography style?")])]),a("li",[a("a",{attrs:{href:"#how-do-i-change-the-sorting-order-of-the-entries"}},[t._v("How do I change the sorting order of the entries?")])]),a("li",[a("a",{attrs:{href:"#how-do-i-change-the-citation-style"}},[t._v("How do I change the citation style?")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),a("h3",{attrs:{id:"how-do-i-get-as-little-much-text-as-possible-on-a-single-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-as-little-much-text-as-possible-on-a-single-page"}},[t._v("#")]),t._v(" How do I get as little/much text as possible on a single page?")]),t._v(" "),a("p",[t._v("Meeting the page limit requirements is nothing more than using spacing creatively. As such, here is an incomplete list to change some of these spacings. Changing the spacing has to be done in the class file ("),a("code",[t._v("layout/report-class.cls")]),t._v("), unless stated otherwise. In some cases, the spacing can be negative to reduce whitespace to the absolute minimum.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Page margins")]),a("br"),t._v("\nThe geometry of the page is defined with the command below. You could change the scale to your desire, replace it with a simple "),a("code",[t._v("margin=<length>")]),t._v(" or fine-tune it with many different parameters. For the latter option, visit the "),a("a",{attrs:{href:"https://www.overleaf.com/learn/latex/page_size_and_margins#Fine_tuning_your_LaTeX_page_dimensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Overleaf Documentation"),a("OutboundLink")],1),t._v(" on page size and margins.")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\geometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a4paper,hscale=0.75,vscale=0.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Titles ("),a("code",[t._v("\\chapter")]),t._v(", "),a("code",[t._v("\\section")]),t._v(", etc) and their spacing")]),a("br"),t._v("\nThe titles and its spacings are defined by "),a("code",[t._v("\\titleformat")]),t._v(" and "),a("code",[t._v("\\titlespacing")]),t._v(". For example, the "),a("code",[t._v("\\chapter")]),t._v(" is defined by:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titleformat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\chapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\flushright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\fontsize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("96"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("96"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\largetitlestyle")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\thechapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\Huge")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titlestyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titlespacing*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\chapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\baselineskip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To give some ideas: (1) the size of the chapter number is defined by "),a("code",[t._v("\\fontsize{96}{96}")]),t._v(", (2) the size of the title is defined by "),a("code",[t._v("\\Huge")]),t._v(" and (3) the spacing between the title and the text is defined by "),a("code",[t._v("2\\baselineskip")]),t._v(". The formatting of the sections is done in similar fashion. See "),a("RouterLink",{attrs:{to:"/report/faq.html#how-can-i-adjust-the-titles"}},[t._v("this question")]),t._v(" for a more details about the "),a("code",[t._v("\\titleformat")]),t._v(" command.")],1),t._v(" "),a("p",[t._v("If you would like to move the chapter number to the same line as the chapter title, replace the titleformat command (line 1-5 in the previous code block) with:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titleformat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\chapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\Huge")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titlestyle")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\flushright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\thechapter")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("5pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Spacing between lists (itemize and enumerate)")]),a("br"),t._v("\nThe default spacing between items has already been reduced slightly with the following:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("itemsep=-2pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To also change the vertical spacing between the text and the list, you can add "),a("code",[t._v("topsep=<length>")]),t._v(" to this command (comma separated). In total there are four lengths used for vertical spacing, which you can find in "),a("a",{attrs:{href:"http://mirrors.ctan.org/macros/latex/contrib/enumitem/enumitem.pdf#section.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 1 of the documentation for enumitem"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Spacing around the floats")]),a("br"),t._v("\nYou can change the spacing around floats by defining a new length with "),a("code",[t._v("\\setlength")]),t._v(". These are the main spacing definitions you can use and their default values:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\intextsep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("12.0pt plus 2.0pt minus 2.0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Space above/below [h]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\textfloatsep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("20.0pt plus 2.0pt minus 4.0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Space below [t]/above [b]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\floatsep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("12.0pt plus 2.0pt minus 2.0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Vertical space between figures")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\abovecaptionskip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("10.0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Vertical space before caption")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setlength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\belowcaptionskip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0.0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Vertical space after caption")]),t._v("\n")])])]),a("p",[t._v("Avoid changing these lengths. The 'glue stretching' lengths give freedom ("),a("em",[t._v("plus")]),t._v(" and "),a("em",[t._v("minus")]),t._v(" length) to the compiler whenever the "),a("em",[t._v("fixed part")]),t._v(" is insufficient. A visual representation of these parameters can be found in "),a("a",{attrs:{href:"http://mirrors.ctan.org/macros/latex/contrib/layouts/layman.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 6.2 of the documentation for layouts"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("h3",{attrs:{id:"how-can-i-adjust-the-titles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-adjust-the-titles"}},[t._v("#")]),t._v(" How can I adjust the titles?")]),t._v(" "),a("p",[t._v("If you are looking to change the style of the titles (such as "),a("code",[t._v("\\chapter{}")]),t._v(" or "),a("code",[t._v("\\section{}")]),t._v("), navigate to the class file ("),a("code",[t._v("layout/tudelft-report.cls")]),t._v(") and find the lines where these titles are formatted. The standard format used in this template is:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titleformat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("<command>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("<shape>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("<format>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Applied to title and label")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("<label>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Specify label and format")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("<sep>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Separation between label and title")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("<before-code>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("<after-code>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Code before/after title body")]),t._v("\n")])])]),a("p",[t._v("For example, the "),a("code",[t._v("\\chapter{}")]),t._v(" is formatted with the following lines:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titleformat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\chapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("display"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\flushright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\fontsize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("96"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("96"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\largetitlestyle")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\thechapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\Huge")]),a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\titlestyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In this example:")]),t._v(" "),a("ul",[a("li",[t._v("<"),a("em",[t._v("shape")]),t._v("> is set to "),a("code",[t._v("display")]),t._v(" to put the label on a different line.")]),t._v(" "),a("li",[t._v("<"),a("em",[t._v("format")]),t._v("> is used to move the title and label to the right with "),a("code",[t._v("\\flushright")]),t._v(".")]),t._v(" "),a("li",[t._v("<"),a("em",[t._v("label")]),t._v("> includes the chapter number with "),a("code",[t._v("\\thechapter")]),t._v(", but also increases and changes the font of the number with "),a("code",[t._v("\\fontsize{96}{96}")]),t._v(" and "),a("code",[t._v("\\largetitlestyle")]),t._v(" respectively.")]),t._v(" "),a("li",[t._v("<"),a("em",[t._v("sep")]),t._v("> specifies the horizontal separation between the label and the title (or the vertical separation in case of "),a("code",[t._v("display")]),t._v("). In this case, the no extra vertical spacing is added.")]),t._v(" "),a("li",[t._v("<"),a("em",[t._v("before code")]),t._v("> formats the title body: the size is increased and the font changed.")])]),t._v(" "),a("p",[t._v("Take a look at the other instances of "),a("code",[t._v("\\titleformat")]),t._v(" to see other possible parameters. If you are interested, take a look at "),a("a",{attrs:{href:"http://mirrors.ctan.org/macros/latex/contrib/titlesec/titlesec.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation for titlesec"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"bibliography-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bibliography-references"}},[t._v("#")]),t._v(" Bibliography / References")]),t._v(" "),a("h3",{attrs:{id:"how-do-i-change-the-bibliography-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-change-the-bibliography-style"}},[t._v("#")]),t._v(" How do I change the bibliography style?")]),t._v(" "),a("p",[t._v("The default style of BibLaTeX is numeric. You can change it by specifying a different style when the package is imported. Navigate to the class file ("),a("code",[t._v("layout/tudelft-report.cls")]),t._v(") and find the line where BibLaTeX is imported:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\RequirePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("biblatex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Manages bibliography")]),t._v("\n")])])]),a("p",[t._v("Some of the more common bibliography styles you will likely use are:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ieee:")]),t._v(" [1] J. Anderson, "),a("em",[t._v("Introduction to Flight")]),t._v(", 8th international ed. New York, United States: McGraw Hill Education, 2016.")]),t._v(" "),a("li",[a("strong",[t._v("apa:")]),t._v(" Anderson, J. (2016). "),a("em",[t._v("Introduction to flight")]),t._v(" (8th international ed.). McGraw Hill Education.")]),t._v(" "),a("li",[a("strong",[t._v("apa6:")]),t._v(" Anderson, J. (2016). "),a("em",[t._v("Introduction to flight")]),t._v(" (8th international ed.). New York, United States: McGraw Hill Education.")])]),t._v(" "),a("p",[t._v("Add the style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the style is "),a("strong",[t._v("case-sensitive")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\RequirePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("style=apa6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("biblatex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Manages bibliography")]),t._v("\n")])])]),a("h3",{attrs:{id:"how-do-i-change-the-sorting-order-of-the-entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-change-the-sorting-order-of-the-entries"}},[t._v("#")]),t._v(" How do I change the sorting order of the entries?")]),t._v(" "),a("p",[t._v("The default sorting order of BibLaTeX is by the author's last name. You can change it by specifying a different order when the package is imported. Navigate to the class file ("),a("code",[t._v("layout/tudelft-report.cls")]),t._v(") and find the line where BibLaTeX is imported:")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\RequirePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("biblatex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Manages bibliography")]),t._v("\n")])])]),a("p",[t._v("Select a sorting style:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("nty:")]),t._v(" Sort by name, title, year")]),t._v(" "),a("li",[a("strong",[t._v("nyt:")]),t._v(" Sort by name, year, title.")]),t._v(" "),a("li",[a("strong",[t._v("nyvt:")]),t._v(" Sort by name, year, volume, title.")]),t._v(" "),a("li",[a("strong",[t._v("anyt:")]),t._v(" Sort by alphabetic label, name, year, title.")]),t._v(" "),a("li",[a("strong",[t._v("anyvt:")]),t._v(" Sort by alphabetic label, name, year, volume, title.")]),t._v(" "),a("li",[a("strong",[t._v("ynt:")]),t._v(" Sort by year, name, title.")]),t._v(" "),a("li",[a("strong",[t._v("ydnt:")]),t._v(" Sort by year (descending), name, title.")]),t._v(" "),a("li",[a("strong",[t._v("none:")]),t._v(" Do not sort at all. All entries are processed in citation order.")])]),t._v(" "),a("p",[t._v("Add the sorting style as an option as seen below. If you are using multiple options, use a comma to separate. Note that the sorting style is "),a("strong",[t._v("case-sensitive")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-LaTeX extra-class"},[a("pre",{pre:!0,attrs:{class:"language-latex"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\RequirePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sorting=none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("biblatex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% Manages bibliography")]),t._v("\n")])])]),a("h3",{attrs:{id:"how-do-i-change-the-citation-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-change-the-citation-style"}},[t._v("#")]),t._v(" How do I change the citation style?")]),t._v(" "),a("p",[t._v("Are you using APA (or similar) and are wondering about the parentheses? If so, use "),a("code",[t._v("\\parencite{}")]),t._v(" instead of "),a("code",[t._v("\\cite{}")]),t._v(". The latter does not include parentheses by default.")]),t._v(" "),a("p",[t._v("If you are looking to change to citation style, take a look at "),a("a",{attrs:{href:"http://mirrors.ctan.org/macros/latex/contrib/biblatex/doc/biblatex.pdf#subsubsection.3.3.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 3.3.1"),a("OutboundLink")],1),t._v(" in the documentation for BibLaTeX for a complete list with a short description. This option is added with "),a("code",[t._v("citestyle=<citestyle>")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);