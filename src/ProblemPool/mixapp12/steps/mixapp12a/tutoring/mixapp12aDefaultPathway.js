var hints = [{id: "mixapp12a-h1", type: "hint", dependencies: [], title: "Expressing values as mathematical expressions", text: "The first step is to express the values as mathematical expressions", variabilization: {}}, {id: "mixapp12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) x$$"], dependencies: ["mixapp12a-h1"], title: "Assigning variables", text: "Let $$x=the$$ number of nickels. How many pennies are there? Write the mathematical expression in terms of x.", variabilization: {}}, {id: "mixapp12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.05\\right) x$$"], dependencies: ["mixapp12a-h2"], title: "Total cost of all the nickels", text: "What is the total value of nickels? Write the answer as a mathematical expression", variabilization: {}}, {id: "mixapp12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(0.01\\right) \\left(3\\right) x$$"], dependencies: ["mixapp12a-h3"], title: "Total cost of all the quarters", text: "What is the total cost of all the pennies? Write the answer as a mathematical expression", variabilization: {}}, {id: "mixapp12a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.2"], dependencies: ["mixapp12a-h4"], title: "Total cost", text: "What is the total cost?", variabilization: {}}, ]; export {hints};