var hints = [{id: "exa6a-h1", type: "hint", dependencies: [], title: "Multiply", text: "Multiply the outside value with each of the inside parenthesis values", variabilization: {}}, {id: "exa6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$d^2$$"], dependencies: ["exa6a-h1"], title: "Multiply pt2", text: "What is d times d?", variabilization: {}}, {id: "exa6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-11d"], dependencies: ["exa6a-h2"], title: "Multiply pt3", text: "What is d times -11?", variabilization: {}}, {id: "exa6a-h4", type: "hint", dependencies: ["exa6a-h3"], title: "Combine", text: "Combine the values multiplied", variabilization: {}}, ]; export {hints};