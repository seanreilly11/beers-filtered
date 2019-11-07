const beersArray = [
{
	name:"Party & Bullshit",
	style:"East Coast Anthem IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 6.2,
	price: 8,
	image: "party"
},
{
	name:"Turbo Fuzz",
	style:"Triple Hazy IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 10,
	price: 13,
	image: "turbo"
},
{
	name:"Turbo Fuzz",
	style:"Triple Hazy IPA",
	volume:"Pack",
	vessel: "4 Pack",
	percent: 10,
	price: 50,
	image: "turbo-pack"
},
{
	name:"Unconditional Love",
	style:"West Coast IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 7.5,
	price: 9.5,
	image: "uncon"
},
{
	name:"La Calavera Catrina",
	style:"Habanero and Rosewater Corn Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 6.9,
	price: 7,
	image: "lacala"
},
{
	name:"Day of the Dead",
	style:"Chili Chocolate Black Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 6.7,
	price: 7,
	image: "dead"
},
{
	name:"Weird Flex",
	style:"Grapefruit, Cucumber and Celery Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 3,
	price: 4.5,
	image: "weird"
},
{
	name:"Pernicious Weed",
	style:"Double IPA",
	volume:"330ml",
	vessel: "Can",
	percent: 8,
	price: 6.5,
	image: "perni-can"
},
{
	name:"Beer",
	style:"Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 4.8,
	price: 4,
	image: "beer"
},
{
	name:"Beer",
	style:"Lager",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 4.8,
	price: 22,
	image: "beer-pack"
},
{
	name:"Can Lah!",
	style:"Clean Crisp Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 4.6,
	price: 5,
	image: "Canlah"
},
{
	name:"Fuzzbox",
	style:"Fuzzy Pale Ale",
	volume:"330ml",
	vessel: "Can",
	percent: 5.8,
	price: 6,
	image: "fuzz"
},
{
	name:"Electric Dry Hop Acid Test",
	style:"Dry Hopped Kettle Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 4.20,
	price: 4.5,
	image: "acid"
},
{
	name:"Trubine",
	style:"Pale Ale",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 5.3,
	price: 24,
	image: "turbine-pack"
},
{
	name:"Hapi Daze",
	style:"Pacific Pale Ale",
	volume:"330ml",
	vessel: "Can",
	percent: 4.6,
	price: 4.5,
	image: "hapi"
},
{
	name:"Hapi Daze",
	style:"Pacific Pale Ale",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 4.6,
	price: 23,
	image: "hapi-pack"
},
{
	name:"White Mischief",
	style:"Salted White Peach Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 2.9,
	price: 5,
	image: "mischief"
},
{
	name:"White Mischief",
	style:"Salted White Peach Sour",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 2.9,
	price: 28,
	image: "mischief-pack"
}
];

var filter = {};

const output = document.getElementById("printOutput");

printItems(beersArray);
// print all objects
function printItems(array){
	output.innerHTML="";
	for(let i=0; i<array.length; i++){
		var card = "";
		card += '<div class="myBg text-black">'
		+'<div class="my-3 py-3 card-head">'
		+'<h2 class="beer-heading">'+array[i].name+'</h2>'
		+'<p class="lead mb-0">'+array[i].style + ' ' + array[i].percent+'%</p>';
		if(array[i].volume !== "Pack"){
			card += '<p class="lead">'+array[i].volume + ' ' + array[i].vessel+'</p>'
		}
		if(array[i].volume === "Pack"){
			card += '<p class="lead">' + array[i].vessel+'</p>'
		}
		card +='<div class="d-flex justify-content-between align-items-center"><h2 class="beer-price mb-0">$'+array[i].price.toFixed(2) +'</h2>'
		+'<button class="btn btn-danger">Add to cart</button>'
		+'</div></div>'
		+'<p class="view-more">VIEW DETAILS</p>'
		+'<div class="mx-3 img-container"><img class="beer-image" src="images/'+array[i].image+'.png"></div></div>';
		output.innerHTML += card;      
	}
}

$(".form-group").click(function(e){
	var id = e.target.id;
	var checked = $('input[name=styles]:checked');
	checked.each(function(){  // loops through all checked boxes and prints its id
		console.log(this.id);
	});
	if(id.includes("style")){
		var style = id.substr(0, id.indexOf('-'));
		if(style === "all"){
			printItems(beersArray);
		}
		else{
			for(var i = 0; i < beersArray.length; i++){
				var filtered =  beersArray.filter(function(beer) {
					return beer.style.toUpperCase().includes(style.toUpperCase())
				});
			}
			printItems(filtered);
		}
	}
	else if(id.includes("volume")){
		var size = id.substr(0, id.indexOf('-'));
		if(size === "all"){
			printItems(beersArray);
		}
		else{
			for(var i = 0; i < beersArray.length; i++){
				var filtered =  beersArray.filter(function(beer) {
					return beer.volume.includes(size)
				});
			}
			printItems(filtered);
		}
	}
});

$("#reset-filters").click(function(){
	printItems(beersArray);
});


















$("#filter-menu").click(function(){
	$(".filter-menu-container").fadeIn();
});

$(".close-menu").click(function(){
	$(".filter-menu-container").fadeOut();
});


// range sliders

// alcohol range
$( function() {
	$( "#slider-range1" ).slider({
		range: true,
		min: 0,
		max: 15,
		values: [ 0, 15 ],
		step: .2,
		slide: function( event, ui ) {
			$( "#amount1" ).val( ui.values[ 0 ] + "% - " + ui.values[ 1 ] +"%");
		}
	});
	$( "#amount1" ).val($( "#slider-range1" ).slider( "values", 0 ) +
		"% - " + $( "#slider-range1" ).slider( "values", 1 ) +"%");
} );

// price range
$( function() {
	$( "#slider-range2" ).slider({
		range: true,
		min: 0,
		max: 20,
		values: [ 0, 20 ],
		step: .5,
		slide: function( event, ui ) {
			$( "#amount2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount2" ).val( "$" + $( "#slider-range2" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range2" ).slider( "values", 1 ) );
} );

// alcohol range full screen
$( function() {
	$( "#slider-range3" ).slider({
		range: true,
		min: 0,
		max: 15,
		values: [ 0, 15 ],
		step: .2,
		slide: function( event, ui ) {
			$( "#amount3" ).val(ui.values[ 0 ] + "% - " + ui.values[ 1 ] +"%");
		}
	});
	$( "#amount3" ).val($( "#slider-range3" ).slider( "values", 0 ) +
		"% - " + $( "#slider-range3" ).slider( "values", 1 ) +"%");
} );

// price range full screen
$( function() {
	$( "#slider-range4" ).slider({
		range: true,
		min: 0,
		max: 20,
		values: [ 0, 20 ],
		step: .5,
		slide: function( event, ui ) {
			$( "#amount4" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount4" ).val( "$" + $( "#slider-range4" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range4" ).slider( "values", 1 ) );
} );



































