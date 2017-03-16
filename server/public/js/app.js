var drink = " "
var sweet = " "
var caffeine = " "
var hot = " "
var flavor = " "

$('.left-option').on('click', function(e){

		if($(this).text() === 'sweet?'){
			sweet = true;
			$('.left-option').text('with caffeine?');
			$('.right-option').text('without caffeine')

		}	else if ($(this).text() ==='with caffeine?'){
			caffeine = true
			$('.left-option').text('hot');
			$('.right-option').text('cold');
		} else if($(this).text()=== 'hot'){
			hot = true;
			if (sweet) {
				$('.left-option').text('with chocolate?');
				$('.right-option').text('without caffeine');
			} else{
				$('.left-option').text('with milk?');
				$('.right-option').text('without milk');
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

		if($(this).text() === 'unsweetened?'){
			sweet = false;
			$('.left-option').text('with caffeine?');
			$('.right-option').text('without caffeine?')

		}	else if ($(this).text() === 'without caffeine?'){
			caffeine = false
			$('.left-option').text('hot?');
			$('.right-option').text('cold?');

		} else if($(this).text() === 'hot?'){
			hot = false;
			if (sweet) {
				$('.left-option').text('with chocolate?');
				$('.right-option').text('without chocolate?');
			} else{
				$('.left-option').text('with milk?');
				$('.right-option').text('without milk?');
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
					drink = 'Testing2';
				}
			}
		}
	}
	window.location = "/coffee/drink/" + drink;
	console.log(drink);
}
