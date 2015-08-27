app.controller('MainController', function ($scope, FlashCardsFactory) {

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
	}

});
