var hints = [{id: "Visualize5a-h1", type: "hint", dependencies: [], title: "Defining Simplified Fraction", text: "A fraction is considered simplified if there are no common factors in its numerator and denominator.", variabilization: {}}, {id: "Visualize5a-h2", type: "hint", dependencies: ["Visualize5a-h1"], title: "Finding Common Factors", text: "If we find the common factor of the numerator and the denominator, we can easily use the equivalent fractions property to simplify the fraction.", variabilization: {}}, {id: "Visualize5a-h3", type: "hint", dependencies: ["Visualize5a-h2"], title: "Finding Common Factors", text: "By observing the numerator and the denominator, we find the common factor to be 5.", variabilization: {}}, {id: "Visualize5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{x}{y}$$"], dependencies: ["Visualize5a-h3"], title: "Dividing Common Factors", text: "Dividing out 5 from both the top and the bottom. What simplified fraction do you get?", variabilization: {}}, ]; export {hints};