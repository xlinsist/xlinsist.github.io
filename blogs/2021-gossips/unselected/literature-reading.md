# 《学术写作规范》文献阅读和点评

## 文章选择

结课考核方式为阅读报告，要求搜集 1 篇或 2 篇正式发表的计算机科学与技术领域的英语文献，从写作规范的角度对其评价并提出改进建议。

本次作业中我选择了1篇文章进行评价分析。这篇文章来自2021年的计算机体系结构的顶会《The International Symposium on Code Generation and Optimization》（CGO 2021），如今围绕着里面所提出的编译器软件框架MLIR，已形成了基础软件领域中相当有影响力的开源社区生态[1]。

作为编译器与程序优化领域的经典工作，它的第一作者是编译器领域的前辈Chris Lattner，常年活跃在开源社区中。之前我在github上发现，前辈回复评论时的英语写作都非常干净、书面，从我的视角来看仿佛每个评论都用chatGPT润色过一样。于是想从这篇文章出发，对他的文字和写作规范进行研究学习。

下面我会按照学术阅读的浏览顺序，关注标题、摘要和结论三个部分的文本。在每个部分中，我会摘抄原文中的部分句子，然后从逻辑和用词两个层面做点评。最后我会给出对这三个部分文本的学习总结和修改建议。

## 逻辑和用词层面的点评

### 文章标题
> 《MLIR: Scaling Compiler Infrastructure for Domain Specific Computation》
- **逻辑上**，这种《XXX软件名称：一种带有XX特征的XX软件类型 for XX软件应用》是软件领域的标准标题格式。后两个“XX”表示软件所在的领域，前两个“XX”是文章所提出的软件及其创新点。
- **用词上**，值得关注的词是“Scaling”，这暗示着之前在相关方面的工作都是无法伸展或者说是“Stable”的。那么做成“Scaling”有什么好处，如何做到“Scaling”，这个过程有哪些挑战呢？这些部分就是摘要时要回答的问题。

### 文章摘要
> This work presents MLIR, a novel approach to building reusable and extensible compiler infrastructure.

摘要第一句是标题的一句话概述。“novel approach”被从句修饰，从句提到的“reusable”和“extensible”，是标题中“scaling”的进一步解释。“延展”这个特性，被解释成“可重用”和“可拓展”。

> MLIR addresses software fragmentation, compilation for heterogeneous hardware, significantly reducing the cost of building domain specific compilers, and connecting existing compilers together.

摘要第二句，**在逻辑上**，这句介绍了这个软件的能力，几乎是开门见山地作为摘要里的第二句，表明它的卖点很足；**在用词上**，注意这里的动词“address”是在告诉读者后面要开始展现这个软件的威力了。“reducing”以从句的方式，描述了该软件“address”了所声称的问题后所带来的好处。“significantly”副词的修饰让这句话更有感染力。

> MLIR facilitates the design and implementation of code generators, translators and optimizers at different levels of abstraction and across application domains, hardware targets and execution environments. 

摘要第三句，**在逻辑上**，这句侧重于软件的用途；**在用词上**，它铺张的各种名词，侧面反映软件所覆盖的范围之广。这也符合MLIR作为编译器基础设施的特征。

> The contribution of this work includes (1) discussion of MLIR as a research artifact, built for extension and evolution, while identifying the challenges and opportunities posed by this novel design, semantics, optimization specification, system, and engineering. (2) evaluation of MLIR as a generalized infrastructure that reduces the cost of building compilers—describing diverse use-cases to show research and educational opportunities for future programming languages, compilers, execution environments, and computer architecture. The paper also presents the rationale for MLIR, its original design principles, structures and semantics.

摘要第四句，**在逻辑上**，将贡献分为了两大点。这里由于设计理念严格来说不算贡献，但是对于开源软件来说设计理念能起到纲领的作用，因此以补充的形式在最后一句中单独提及；**在用词上**，每一点开头都统一用动名词加“of MLIR as a ...”的句式，这样方便读者定位。

### 文章结论
> We presented MLIR, a concrete answer to the dual scientific and engineering challenge of designing a flexible and extensible infrastructure for compiler construction, ranging from backend code generation and orchestration of heterogeneous systems, to graph-level modeling for machine learning, and to the high-level language semantics of programming languages and domainspecific frameworks. We demonstrated its applicability to a range of domains and discussing research implications. 

结论的第一段只有两句。**在逻辑上**，第一个句子是长句，其中用到了两个从句，且第二个从句用两个逗号分成了三段，是对软件的特性、功能和定位的高度概括。第二个句子是短句，是对实验部分的简要总结；**在用词上**，“a concrete answer”是一个很生动且很有自信的短语。另外这里的形容词是与摘要中的形容词一一对应的，强调了软件的特性。

> Motivated by the success of LLVM and looking ahead, we are eager to see how established communities in programming languages and high-performance computing, as well as domain experts can benefit from the introduction of higher level, language-specific IRs. We also believe MLIR catalyzes new areas of research, as well as new approaches to teaching the art of compiler and IR design.

结论的第二段，**在逻辑上**，是讨论部分，包括未来展望和发展愿景。值得一提的是这里的第一句提到了另一个软件框架LLVM，也是作者的早期工作[2]。这个工作是2004年提出的，距离现在这篇后续工作差不多有二十年了，通过这个承上启下的方式，让整个段落有了种浑厚的历史感。**在用词上**，“are eager to”和“believe”两个动词，以及"as well as"的两次使用，让第二段的这两句话对仗工整。

## 总结和修改建议

阅读Chris Lattner前辈的文章是种享受。在我看来，他的文字里面的书面感与他惯用从句有关，尤其是在开头介绍软件特点的时候，会有种洋洋洒洒的感觉。但是他的从句并不会使得句子特别难读，因为他很准确地运用动词来帮助读者定位当前句子在段落里的功能，同时善于用连接词来指引读者发掘句子之间的逻辑关系，以帮助聚焦于他为软件所宣传的卖点本身。因此他的写作很有感染力。

尽管如此，在我看来，这篇工作在摘要中其实应当适当增加对背景的理解，以帮助来自非编译领域的读者能对编译框架的重要性有一个大致概念。文章采用的是开门见山的方式，一上来就直接说我们提出的面向编译领域的软件很强大，但是不熟悉这个领域的读者可能会好奇为何面向编译领域需要有相应的软件做支撑。在不理解产品功能的情况下，是很难去关注产品的卖点的。当然我们也可以认为，这篇工作之所以采用这种写作方式，可能是因为文章更希望能突出该软件的权威性，认为读者如果真被该软件的卖点所吸引，是愿意花时间将视野从摘要移到引言部分的。

## 参考文献：
[1] Lattner, Chris et al., "MLIR: Scaling Compiler Infrastructure for Domain Specific Computation," 2021 IEEE/ACM International Symposium on Code Generation and Optimization (CGO), Seoul, Korea (South), 2021, pp. 2-14, doi: 10.1109/CGO51591.2021.9370308.
[2] Lattner, Chris, and Vikram Adve. "LLVM: A compilation framework for lifelong program analysis & transformation." International symposium on code generation and optimization, 2004. CGO 2004.. IEEE, 2004.
