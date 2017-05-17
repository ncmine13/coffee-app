var drink = " "
var sweet = " "
var caffeine = " "
var hot = " "
var flavor = " "




//if the option value equals the div's class name, show that div
var arr = [
	"0",
	"questionDiv",
	"libraryDiv",
	"historyDiv"
]



$.ajax({
	url: '/coffee/coffeeDB',
	type: 'get',
	success: function(data){
		console.log(data)
	},
	error: function(err){
		console.log(err)
	}
})

$('.left-option').on('click', function(e){

		if($(this).text() === 'sweet?'){
			sweet = true;
			$('.left-option').text('with caffeine?');
			$('.right-option').text('without caffeine?');

		}	else if ($(this).text() ==='with caffeine?'){
			caffeine = true
			$('.left-option').text('hot?');
			$('.right-option').text('cold?');
		} else if($(this).text()=== 'hot?'){
			hot = true;
			if (sweet) {
				$('.left-option').text('with chocolate?');
				$('.right-option').text('without chocolate?');
			} else{
				$('.left-option').text('with milk?');
				$('.right-option').text('without milk?');
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
			$('.right-option').text('without caffeine?');

		}	else if ($(this).text() === 'without caffeine?'){
			caffeine = false;
			$('.left-option').text('hot?');
			$('.right-option').text('cold?');

		} else if($(this).text() === 'cold?'){
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
					drink = 'Drip Coffee';
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
					drink = 'Chamomile Tea';
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



//for each select tag
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

//add the class select-hidden to the select tag
//wrap it in a div with the class "select"
//after this div make another div with the class "select-styled"
    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');


//the first element with the class select-styled will have the text of the first option tag
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

//insert an unordered list with the class 'select-options' after the styledSelect div
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

//assigning both the text and the value of the select tag to be the same as those on the option tag
    for (var i = 1; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');




  $styledSelect.click(function(e) {
     if($('.select-options').is(':visible')) {
        e.stopPropagation();
		console.log("this da clicky")
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));

        $list.hide();

     } else {
        e.stopPropagation();
        $('div.select-styled.active').each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
		console.log($(this))
		console.log($(this).hasClass('active'))

     }
    });

    $listItems.click(function(e) {
		console.log($listItems[0].textContent)
		console.log($listItems[1].textContent)
		// var selectDiv = $('div.select-styled')
		// console.log("this is " + selectDiv)
		// $('div.select-styled.active')[0].textContent.hide();
		// $($listItems[0].textContent.hide())

        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		// console.log($($this[0].children))
		var optArray = $($this[0].children);
		var index = $this.val()
		for(i=1; i<4; i++){
			thisDiv = "#" + optArray[i].value;
			if(index === optArray[i].value){
				console.log(index + " this is index")
				console.log(optArray[i].value + " this is optArray")
				$(thisDiv).show();
			} else {
				$(thisDiv).hide();
			}
		}
        $list.hide();
        console.log("hiding list")
        $('#mainPageQ').addClass('shrinkMainPageQ');
    });


    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
