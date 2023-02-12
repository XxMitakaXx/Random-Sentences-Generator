let randomSentense = document.getElementById('randomSentense');
let createBtn = document.getElementById('createBtn');
let name;
let place;
let verb;
let adverb;
let noun;
let detail;
let sentenseModel; 

let expresions = [
	['Dimitar', 'Georgi', 'Tyson', 'Nikola', 'Tesla', 'Messi', 'Berbatov', 'Todor', 'Maradona', 'Jorko'],
	['Plovdiv', 'Sofia', 'Haskovo', 'AsenovGrad', 'Dupnitsa', 'Istanbul', 'Mexico', 'Italy', 'Brazil', 'Las Vegas'],
	['eats', 'walk', 'drink', 'drive', 'play football', 'drive', 'fly', 'win', 'will boxing', 'swim'],
	['slowly', 'quickly', 'stupid', 'funny', 'cool', 'boldly', 'interesting', 'boring', 'hard', 'slowly'],
	['ball', 'car', 'can', 'beer', 'dog', 'shark', 'phone', 'bear', 'gun', 'orange'],
	['to the reiver', 'under the bridge', 'at home', 'at park', 'at supermarket', 'at the ocean', 'at the beach', 'at the mountain', 'at Amazonka', 'at Abu Dhabi']
]


createBtn.addEventListener('click', () => {
	for (let i = 0; i < expresions.length; i++) {
		let randomWord = Math.round(Math.random() * 10);
	
		switch (i) {
			case 0: name = expresions[0][randomWord]; break;
			case 1: place = expresions[1][randomWord]; break;
			case 2: verb = expresions[2][randomWord]; break;
			case 3: adverb = expresions[3][randomWord]; break;
			case 4: noun = expresions[4][randomWord]; break; 
			case 5: detail = expresions[5][randomWord]; break;
		}
	}

	sentenseModel = `${name} from ${place} ${adverb} ${verb} with ${noun} ${detail}.`;

	randomSentense.innerHTML = sentenseModel;
})