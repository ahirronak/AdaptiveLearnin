var hints = [{id: "divpoly1a-h1", type: "hint", dependencies: [], title: "Dividing the Expression", text: "Remember, we must start by dividing the first term, $$\\left(5\\right) x^2$$, by x. This gives us 5x.", variabilization: {}}, {id: "divpoly1a-h2", type: "hint", dependencies: ["divpoly1a-h1"], title: "Multiplying Expressions", text: "Now, we must multiply everything in the divisor by 5x and subtract from the original polynomial. This means we subtract $$\\left(5\\right) x^2+\\left(5\\right) x$$. This cycle of \"division\" and \"multiplication\" will continue until the divident is of a lesser degree than the divisor.", variabilization: {}}, {id: "divpoly1a-h3", type: "hint", dependencies: ["divpoly1a-h2"], title: "Full Solution", text: "If you're stuck, check your work with the full solution below. The answer is 5x-2.\n##figure1.gif##", variabilization: {}}, ]; export {hints};