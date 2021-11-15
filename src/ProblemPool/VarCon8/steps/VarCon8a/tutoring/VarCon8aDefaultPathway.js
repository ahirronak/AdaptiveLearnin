var hints = [{id: "VarCon8a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-6$$"], dependencies: ["VarCon8a-h1"], title: "Subtraction", text: "Subtract 8x from each side.", variabilization: {}}, {id: "VarCon8a-h3", type: "hint", dependencies: ["VarCon8a-h2"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon8a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon8a-h3"], title: "Verification", text: "Check whether $$9\\left(-6\\right)$$ equals $$8\\left(-6\\right)-6$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};