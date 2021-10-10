var hints = [{id: "cond8a-h1", type: "hint", dependencies: [], title: "Conditional Probability Formula", text: "The conditional probability of A given B may be computed by means of the following formula: P(A$$\mid$$B)=P(A$$\cap$$B)/P(B). This can be rewritten as P(A$$\cap$$B)=P(A$$\mid$$B)*P(B)", variabilization: {}}, {id: "cond8a-h2", type: "hint", dependencies: ["cond8a-h1"], title: "Possibilities", text: "There are two cases where you are a Goalkeeper: Sam is Coach and you are a Goalkeeper, or Alex is Coach and you are a Goalkeeper. Thus the probability that you are a Goalkeeper today is the sum of those two probabilities", variabilization: {}}, {id: "cond8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.30"], dependencies: ["cond8a-h2"], title: "Sam Is Coach AND you are a Goalkeeper", text: "What is the probability that Sam is Coach AND you are a Goalkeeper? Round your answer to 2 decimal places", subHints: [{id: "cond8a-h3-s1", type: "hint", dependencies: [], title: "Sam Is Coach AND you are a Goalkeeper", text: "P(Sam is Coach AND you are a Goalkeeper) can be calculated using P(Sam is Coach), P(You are a Goalkeeper GIVEN that Sam is Coach), and the conditional probability formula", variabilization: {}}, {id: "cond8a-h3-s2", type: "hint", dependencies: ["cond8a-h3-s1"], title: "P(Sam is Coach)", text: "Sam is Coach about 6 out of every 10 games (a probability of 0.6). Thus P(Sam is Coach) is 0.6", variabilization: {}}, {id: "cond8a-h3-s3", type: "hint", dependencies: ["cond8a-h3-s2"], title: "P(You are a Goalkeeper GIVEN that Sam is Coach)", text: "With Coach Sam the probability of being Goalkeeper is 0.5. Thus P(You are a Goalkeeper GIVEN that Sam is Coach) is 0.5", variabilization: {}}, {id: "cond8a-h3-s4", type: "hint", dependencies: ["cond8a-h3-s3"], title: "P(Sam is Coach AND you are a Goalkeeper)", text: "$$\\left(0.6\\right) \\left(0.5\\right)=0.3$$. Thus the probability that Sam is coach AND you are a Goalkeeper is 0.30", variabilization: {}}], variabilization: {}}, {id: "cond8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.12"], dependencies: ["cond8a-h3"], title: "Alex Is Coach AND you are a Goalkeeper", text: "What is the probability that Alex is Coach AND you are a Goalkeeper? Round your answer to 2 decimal places", subHints: [{id: "cond8a-h4-s1", type: "hint", dependencies: [], title: "Alex Is Coach AND you are a Goalkeeper", text: "P(Alex is Coach AND you are a Goalkeeper) can be calculated using P(Alex is Coach), P(You are a Goalkeeper GIVEN that Alex is Coach), and the conditional probability formula", variabilization: {}}, {id: "cond8a-h4-s2", type: "hint", dependencies: ["cond8a-h4-s1"], title: "P(Alex is Coach)", text: "Sam is Coach about 6 out of every 10 games (a probability of 0.6). Then Alex must be Coach about 4 out of every 10 games. Thus P(Alex is Coach) is 0.4", variabilization: {}}, {id: "cond8a-h4-s3", type: "hint", dependencies: ["cond8a-h4-s2"], title: "P(You are a Goalkeeper GIVEN that Alex is Coach)", text: "With Coach Alex the probability of being Goalkeeper is 0.3. Thus P(You are a Goalkeeper GIVEN that Alex is Coach) is 0.3", variabilization: {}}, {id: "cond8a-h4-s4", type: "hint", dependencies: ["cond8a-h4-s3"], title: "P(Alex is Coach AND you are a Goalkeeper)", text: "$$\\left(0.4\\right) \\left(0.3\\right)=0.12$$. Thus the probability that Alex is coach AND you are a Goalkeeper is 0.12", variabilization: {}}], variabilization: {}}, {id: "cond8a-h5", type: "hint", dependencies: ["cond8a-h4"], title: "P(You are a Goalkeeper today)", text: "The sum of those two probabilities is $$\\left(0.3\\right)+\\left(0.12\\right)=0.42$$", variabilization: {}}, ]; export {hints};