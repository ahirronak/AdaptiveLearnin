var hints = [{id: "baye8a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye8a-h2", type: "hint", dependencies: ["baye8a-h1"], title: "Events", text: "Let RR, BB, and RB denote, respectively, the events that the chosen card is the red-red, the black-black, or the red-black card. Let R be the event that the upturned side of the chosen card is red. Then the problem can be restated as calculating P(RB$$\mid$$R)=P(RB)P(R$$\mid$$RB)/P(R)", variabilization: {}}, {id: "baye8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{3}$$"], dependencies: ["baye8a-h2"], title: "P(RB)", text: "What is the probability that a randomly chosen card is RB? Enter your answer as a fraction", subHints: [{id: "baye8a-h3-s1", type: "hint", dependencies: [], title: "P(RB)", text: "There are 3 cards in the hat, only 1 of which is RB. Thus the probability that a randomly chosen card is RB is $$\\frac{1}{3}$$", variabilization: {}}], variabilization: {}}, {id: "baye8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["baye8a-h3"], title: "P(R$$\mid$$RB)", text: "What is the probability that the upturned side of the chosen card is red, given that the card is RB? Enter your answer as a fraction", subHints: [{id: "baye8a-h4-s1", type: "hint", dependencies: [], title: "P(R$$\mid$$RB)", text: "Given that the chosen card is RB, one side is black and the other is red. Thus the probability that the upturned side is red is $$\\frac{1}{2}$$", variabilization: {}}], variabilization: {}}, {id: "baye8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["baye8a-h4"], title: "P(R)", text: "What is the probability that the upturned side of the chosen card is red? Enter your answer as a fraction", subHints: [{id: "baye8a-h5-s1", type: "hint", dependencies: [], title: "P(R)", text: "There are two cases in which the upturned side of the chosen card is red: the chosen card is RR and the upturned side is R, or the chosen card is RB and the upturned side is R (if the chosen card is BB, then the probability that upturned side is red is 0). Thus P(R)=P(R$$\mid$$RR)P(RR)+P(R$$\mid$$RB)P(RB)", variabilization: {}}, {id: "baye8a-h5-s2", type: "hint", dependencies: ["baye8a-h5-s1"], title: "P(RR)", text: "There are 3 cards in the hat, only 1 of which is RR. Thus the probability that a randomly chosen card is RR is $$\\frac{1}{3}$$", variabilization: {}}, {id: "baye8a-h5-s3", type: "hint", dependencies: ["baye8a-h5-s2"], title: "P(R$$\mid$$RR)", text: "Given that the chosen card is RR, both sides are red. Thus the probability that the upturned side is red is 1", variabilization: {}}, {id: "baye8a-h5-s4", type: "hint", dependencies: ["baye8a-h5-s3"], title: "P(R$$\mid$$RR)P(RR)", text: "$$P(R$$\\mid$$RR)P(RR)=1\\frac{1}{3}=\\frac{1}{3}$$", variabilization: {}}, {id: "baye8a-h5-s5", type: "hint", dependencies: ["baye8a-h5-s4"], title: "P(RB)", text: "There are 3 cards in the hat, only 1 of which is RB. Thus the probability that a randomly chosen card is RB is $$\\frac{1}{3}$$", variabilization: {}}, {id: "baye8a-h5-s6", type: "hint", dependencies: ["baye8a-h5-s5"], title: "P(R$$\mid$$RB)", text: "Given that the chosen card is RB, one side is black and the other is red. Thus the probability that the upturned side is red is $$\\frac{1}{2}$$", variabilization: {}}, {id: "baye8a-h5-s7", type: "hint", dependencies: ["baye8a-h5-s6"], title: "P(R$$\mid$$RB)P(RB)", text: "$$P(R$$\\mid$$RB)P(RB)=\\frac{1}{2} \\frac{1}{3}=\\frac{1}{6}$$", variabilization: {}}, {id: "baye8a-h5-s8", type: "hint", dependencies: ["baye8a-h5-s7"], title: "P(R)", text: "P(R)=P(R$$\mid$$RR)P(RR)+P(R$$\mid$$RB)P(RB)=(1/3)+(1/6)=1/2", variabilization: {}}], variabilization: {}}, {id: "baye8a-h6", type: "hint", dependencies: ["baye8a-h5"], title: "P(RB$$\mid$$R)", text: "Use P(RB), P(R$$\mid$$RB), and P(R) to solve for P(RB$$\mid$$R) using Bayes Theorem", variabilization: {}}, {id: "baye8a-h7", type: "hint", dependencies: ["baye8a-h6"], title: "P(RB$$\mid$$R)", text: "P(RB$$\mid$$R)=P(RB)P(R$$\mid$$RB)/P(R)=((1/3)*(1/2))/(1/2)=1/3", variabilization: {}}, ]; export {hints};