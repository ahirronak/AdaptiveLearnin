var hints = [{id: "hyperbola2a-h1", type: "hint", dependencies: [], title: "Standard Form of Hyperbola with Center (0,0)", text: "The standard form of the equation of a hyperbola with center (0,0) and transverse axis on the x-axis is \\n $$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$$ \\n where \\n the length of the transverse axis is 2a \\n the coordinates of the vertices are (a,0),(-a,0) \\n the length of the conjugate axis is 2b \\n the coordinates of the co-vertices are (0,b),(0,b) \\n the distance between the foci is 2c, where $$c^2=a^2+b^2$$ \\n the coordinates of the foci are (c,0),(-c,0) \\n the equations of the asymptotes are $$y=\\frac{b}{a} x$$, $$y=-\\left(\\frac{b}{a}\\right) x$$ \\n (See the left image) \\n \\n The standard form of the equation of a hyperbola with center (0,0) and transverse axis on the y-axis is \\n $$\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$$ \\n where \\n the length of the transverse axis is 2a \\n the coordinates of the vertices are (0,a),(0,-a) \\n the length of the conjugate axis is 2b \\n the coordinates of the co-vertices are (b,0),(-b,0) \\n the distance between the foci is 2c, where $$c^2=a^2+b^2$$ \\n the coordinates of the foci are (0,c),(0,-c) \\n the equations of the asymptotes are y=(a/b)*x,y=-(a/b)*x \\n (See the right image)\n##figure1.gif##", variabilization: {}}, {id: "hyperbola2a-h2", type: "hint", dependencies: ["hyperbola2a-h1"], title: "Transverse Axis", text: "Which axis is transverse axis on?", variabilization: {}}, {id: "hyperbola2a-h3", type: "hint", dependencies: ["hyperbola2a-h2"], title: "Finding the Vertices", text: "From the standard equation $$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$$, the vertices are a units away from the center of the hyperbola. What is a?", variabilization: {}}, {id: "hyperbola2a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(3,0),(-3,0)"], dependencies: ["hyperbola2a-h3"], title: "Finding the Vertices", text: "We add and subtract 3 units to the center of the hyperbola along the transverse axis to find the two vertices. Given the center is (0,0). What are the vertices?", choices: ["(3,0),(-3,0)", "(0,5),(0,-5)"], variabilization: {}}, ]; export {hints};