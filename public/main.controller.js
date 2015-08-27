app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.currentCategory = "okay";


	$scope.getCards = function(category) {
		FlashCardsFactory.getFlashCards(category).then(function(value){
			$scope.flashCards = value;
		});
	};
	$scope.getCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(flashCard.answeredCorrectly) {
				ScoreFactory.correct++;
			}
			else  ScoreFactory.incorrect++;
		}
	}

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.getCategoryCards = function(category) {
		$scope.getCards(category);
		$scope.currentCategory = category;
	}

});
