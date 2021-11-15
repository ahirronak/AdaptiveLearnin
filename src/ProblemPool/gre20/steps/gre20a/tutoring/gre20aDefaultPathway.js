var hints = [{id: "gre20a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre20a-h2", type: "hint", dependencies: ["gre20a-h1"], title: "Factor First Expression", text: "$$20y^3=5\\times2\\times2 y y y$$", variabilization: {}}, {id: "gre20a-h3", type: "hint", dependencies: ["gre20a-h2"], title: "Factor Second Expression", text: "$$28y^2=7\\times2\\times2 y y$$", variabilization: {}}, {id: "gre20a-h4", type: "hint", dependencies: ["gre20a-h3"], title: "Factor Third Expression", text: "$$40y=5\\times2\\times2\\times2 y$$", variabilization: {}}, {id: "gre20a-h5", type: "hint", dependencies: ["gre20a-h2", "gre20a-h3", "gre20a-h4"], title: "Identify Common Factors in each Column", text: "$$20y^3=5\\times2\\times2 y y y$$ $$28y^2=7\\times2\\times2 y y$$ $$40y=5\\times2\\times2\\times2 y$$ 2, 2, and y are shared by both expressions.", variabilization: {}}, {id: "gre20a-h6", type: "hint", dependencies: ["gre20a-h5"], title: "Multiply Common Factors", text: "Bring down the 2, 2, and y, and then multiply. $$GCF=2\\times2 y$$", variabilization: {}}, {id: "gre20a-h7", type: "hint", dependencies: ["gre20a-h6"], title: "Multiply Common Factors", text: "$$GCF=4y$$", variabilization: {}}, ]; export {hints};