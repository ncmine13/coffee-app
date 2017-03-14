console.log("haha")


$('.left-option').on('click', function(e){
		if($(this).text() === 'Sweet'){
			$(this).text('Caffeine?');
			$('.right-option').text('None?')
		}	else if($(this).text() === 'Caffeine?') {
   		 	//get request for the mocha profile
			//ajax get request for a drinkprofile view.
			//render the page with a mocha--loop through drinkArray until you find
			//mocha and then render it
		}
})



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

$('.right-option').on('click', function(e){
	if($(this).text() === "Not sweet"){
		$(this).text('Wanna relax?');
		$('.left-option').text('Amp it up?')
	} else {
		console.log("no")
	}
})
