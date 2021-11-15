var hints = [{id: "comp1b-h1", type: "hint", dependencies: [], title: "General Form", text: "We should begin by writing the general form, and then substitute the given functions.", variabilization: {}}, {id: "comp1b-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{g{\\left(x\\right)}}{f{\\left(x\\right)}}$$"], dependencies: ["comp1b-h1"], title: "General Form", text: "What is the general form of $$\\frac{g}{f} x$$?", choices: ["$$\\frac{g{\\left(x\\right)}}{f{\\left(x\\right)}}$$", "$$g{\\left(x\\right)}+f{\\left(x\\right)}$$", "$$g{\\left(x\\right)} f{\\left(x\\right)}$$"], variabilization: {}}, {id: "comp1b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{x^2-1}{x-1}$$"], dependencies: ["comp1b-h2"], title: "Substitution", text: "What do we get after substituting the given functions?", choices: ["$$\\frac{x^2-1}{x-1}$$", "$$x^2-1+x-1$$", "$$\\left(x^2-1\\right) \\left(x-1\\right)$$"], variabilization: {}}, {id: "comp1b-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(x+1\\right) \\left(x-1\\right)$$"], dependencies: ["comp1b-h3"], title: "Rearrangement", text: "How can we rewrite $$x^2-1$$?", choices: ["$$\\left(x+1\\right) \\left(x-1\\right)$$", "$$x^2$$", "$$\\left(x+2\\right) \\left(x-\\frac{1}{2}\\right)$$"], variabilization: {}}, {id: "comp1b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x+1$$"], dependencies: ["comp1b-h4"], title: "Rearrangement", text: "What do we get after rearranging the equation?", choices: ["x-1", "$$x^2+1$$", "$$x+1$$"], variabilization: {}}, ]; export {hints};