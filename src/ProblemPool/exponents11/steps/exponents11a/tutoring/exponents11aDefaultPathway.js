var hints = [{id: "exponents11a-h1", type: "hint", dependencies: [], title: "Move", text: "Move the decimal point after the 3, as 3.7 is between 1 and 10.", variabilization: {}}, {id: "exponents11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["exponents11a-h1"], title: "Count", text: "Count the number of times the decimal point was moved to the left. How many times was it moved?", subHints: [{id: "exponents11a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is 4.", variabilization: {}}], variabilization: {}}, {id: "exponents11a-h3", type: "hint", dependencies: ["exponents11a-h2"], title: "Write Exponent", text: "The decimal point was moved 4 times, so write the number as a product with the power 10.", variabilization: {}}, {id: "exponents11a-h4", type: "hint", dependencies: ["exponents11a-h3"], title: "Answer", text: "The answer is $$\\left(3.7\\right) {\\left(10\\right)}^4$$.", variabilization: {}}, ]; export {hints};