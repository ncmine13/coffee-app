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
					drink = 'Mocha'
				}else {
					drink = 'Vanilla Latte';
				}
			}else {
				if (flavor) {
					drink = 'Iced Mocha';
				}
				else {
					drink = 'Iced Vanilla Latte';
				}
			}
		}else {
			if (hot) {
				if (flavor) {
					drink = 'Hot Chocolate'
				}else {
					drink = 'Chai Latte'
				}
			}else {
				if (flavor) {
					drink = 'Chocolate Milk'
				} else {
					drink = 'Iced Chai'
				}
			}
		}
	} else {
		if (caffeine) {
			if (hot) {
				if (flavor) {
					drink = 'Latte';
				}else{
					drink = 'Coffee';
				}

			} else {
				if (flavor) {
					drink = 'Iced Latte';
				}else {
					drink = 'Cold Brew';
				}
			}
		} else{
			if (hot) {
				if (flavor) {
					drink = 'Steamer';
				} else {
					drink = 'Chamomile tea';
				}
			} else {
				if (flavor) {
					drink = 'Decaf Iced Latte';
				} else{
					drink = 'Iced Blueberry Tea';
				}
			}
		}
	}

	window.location = "/coffee/drink/" + drink;
	console.log(drink);
}
