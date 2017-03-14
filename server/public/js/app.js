var drink = " "
var sweet = " "
var caffeine = " "
var hot = " "
var flavor = " "

$('.left-option').on('click', function(e){

		if($(this).text() === 'Sweet'){
			sweet = true;
			$('.left-option').text('Caffeine?');
			$('.right-option').text('No Caffeine')

		}	else if ($(this).text() ==='Caffeine?'){
			caffeine = true
			$('.left-option').text('Hot');
			$('.right-option').text('Not Hot');
		} else if($(this).text()=== 'Hot'){
			hot = true;
			if (sweet) {
				$('.left-option').text('Chocolate');
				$('.right-option').text('No Chocolate');
			} else{
				$('.left-option').text('Milk');
				$('.right-option').text('No Milk');
			}
		}
		else {
			flavor = true;
			checkDrink();
		}

		console.log(sweet, 'sweet');
		console.log(caffeine, 'caffeine')
		console.log(hot, 'hot')
		console.log(flavor , 'chocolate')
		console.log($(this).text() )
})


$('.right-option').on('click', function(e){

		if($(this).text() === 'Not sweet'){
			sweet = false;
			$('.left-option').text('Caffeine?');
			$('.right-option').text('No Caffeine')

		}	else if ($(this).text() === 'No Caffeine'){
			caffeine = false
			$('.left-option').text('Hot');
			$('.right-option').text('Not Hot');

		} else if($(this).text() === 'Not Hot'){
			hot = false;
			if (sweet) {
				$('.left-option').text('Chocolate');
				$('.right-option').text('No Chocolate');
			} else{
				$('.left-option').text('Milk');
				$('.right-option').text('No Milk');
			}

		} else {
			flavor = false;
			checkDrink()
		}

		console.log(sweet, 'sweet');
		console.log(caffeine, 'caffeine')
		console.log(hot, 'hot')
		console.log(flavor , 'chocolate')
		console.log($(this).text() )
})


function checkDrink(){
	if(sweet){
		if (caffeine) {
			if (hot) {
				if (flavor) {
					drink = 'mocha'

				}else {
					drink = 'vanilla latte'
				}
			}else {
				if (flavor) {
					drink = 'iced mocha';
				}
				else {
					drink = 'iced vanilla latte'
				}
			}
		}else {
			if (hot) {
				if (flavor) {
					drink = 'hot chocolate'
				}else {
					drink = 'chai latte'
				}
			}else {
				if (flavor) {
					drink = 'chocolate milk'
				} else {
					drink = 'iced chai'
				}
			}
		}
	}else {
		if (caffeine) {
			if (hot) {
				if (flavor) {
					drink = 'latte'
				}else{
					drink = 'coffee'
				}

			} else {
				if (flavor) {
					drink = 'iced latte';
				}else {
					drink = 'iced coffee'
				}
			}
		} else{
			if (hot) {
				if (flavor) {
					drink = 'chamamile latte'
				} else {
					drink = 'chamamile tea'
				}
			} else {
				if (flavor) {
					drink = 'iced blueberry latte'
				} else{
					drink = 'iced blueberry tea'
				}
			}
		}
	}

	window.location = "/coffee/drink/" + drink;
	console.log(drink);
}


   		 	//get request for the mocha profile
			//ajax get request for a drinkprofile view.
			//render the page with a mocha--loop through drinkArray until you find
			//mocha and then render it





//
// $('.left-option').on('click', function(e){
// 	if($(this).text() === 'Sweet'){
// 		$(this).text('Caffeine?');
// 		$('.right-option').text('None?')
// 	} else if($(this).text() === 'Caffeine?') {
// 		$(this).text('Love coffee?');
// 		$('.right-option').text('Not so much');
// 	} else if($(this).text() === 'Love coffee?'){
// 		$(this).text('Got milk?');
// 		$('.right-option').text('No, thanks')
// 	} else if($(this).text() === 'Got milk?'){
// 		$(this).text('Got milk?');
// 		$('.right-option').text('No, thanks')
// 	} else {
// 		console.log("no")
// 	}
// })
//
// $('.right-option').on('click', function(e){
// 	if($(this).text() === "Not sweet"){
// 		$(this).text('Wanna relax?');
// 		$('.left-option').text('Amp it up?')
// 	} else {
// 		console.log("no")
// 	}
// })
