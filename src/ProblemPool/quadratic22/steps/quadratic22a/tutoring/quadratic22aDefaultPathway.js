var hints = [{id: "quadratic22a-h1", type: "hint", dependencies: [], title: "Complete the Square", text: "Complete the square to find the vertex and how the graph opens.", variabilization: {}}, {id: "quadratic22a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["quadratic22a-h1"], title: "Determining the Coefficient", text: "What is the coefficient of the right hand expression?", variabilization: {}}, {id: "quadratic22a-h3", type: "hint", dependencies: ["quadratic22a-h2"], title: "Identifying the Shape", text: "If the coefficient is negative, it opens downwards.", variabilization: {}}, {id: "quadratic22a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Maximum"], dependencies: ["quadratic22a-h3"], title: "Interpreting the Shape", text: "Does this mean that the vertex will be a Minimum or Maximum?", choices: ["Minimum", "Maximum"], variabilization: {}}, ]; export {hints};