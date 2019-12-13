const beersArray = [
{
	name:"Party & Bullshit",
	style:"East Coast Anthem IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 6.2,
	price: 8,
	image: "party",
	brewed:"Simcoe & Mosaic",
	description: "Mango, pineapple and guava juice.<br>With no apple base needed. Exceptionally drinkable and just really fun to have in the house, wherever that may be."
},
{
	name:"Turbo Fuzz",
	style:"Triple Hazy IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 10,
	price: 13,
	image: "turbo",
	brewed:"Galaxy, Nelson and Mosaic Hops",
	description:"Your Fuzz Box just got an upgrade. Turbo Fuzz, triple hazy IPA, amplified and distorted in an even bigger wall of haze and hop feedback. Galaxy, nelson and mosaic riffs punch through a warm fuzz of juicy malt and tropical fruit noise. Plug it in and play it loud. It’s fuzzy ugly dialled all the way up to 11. Now in long play 440ml cans. Brewed in collaboration with Sydney’s rock god pizza tossers Frankies. Play it loud!"
},
{
	name:"Turbo Fuzz",
	style:"Triple Hazy IPA",
	volume:"Pack",
	vessel: "4 Pack",
	percent: 10,
	price: 50,
	image: "turbo-pack",
	brewed:"Galaxy, Nelson and Mosaic Hops",
	description:"Your Fuzz Box just got an upgrade. Turbo Fuzz, triple hazy IPA, amplified and distorted in an even bigger wall of haze and hop feedback. Galaxy, nelson and mosaic riffs punch through a warm fuzz of juicy malt and tropical fruit noise. Plug it in and play it loud. It’s fuzzy ugly dialled all the way up to 11. Now in long play 440ml cans. Brewed in collaboration with Sydney’s rock god pizza tossers Frankies. Play it loud!"
},
{
	name:"Unconditional Love",
	style:"West Coast IPA",
	volume:"440ml",
	vessel: "Can",
	percent: 7.5,
	price: 9.5,
	image: "uncon",
	brewed:"Centennial, Citra & Equanox",
	description:"WHAT IS IT?<br><b>A side</b><ol><li>Intro: Unconditional Love</li><li>Gotta clean malt grist (feat. pilsner, carapils)</li><li>Yeah I’m bitter</li><li>All bout da hops (US mix)</li><li>Upfront Warrior</li><b>B side</b><ol><li>Strictly 4 my hopheadz (late edition feat. Centennial)</li><li>Hoppin’ don’t stop (Dry Hop edition feat. Citra & Equanot)</li><li>Hop Aroma 2 die 4</li><li>Pour out a little (or just straight from da can) punch. Remember… Good people drink good beer - Hunter S. Thompson</li>"
},
{
	name:"La Calavera Catrina",
	style:"Habanero and Rosewater Corn Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 6.9,
	price: 7,
	image: "lacala",
	brewed:"Miaze, Habanero Chilli, Watermelon, Rose Water",
	description:"Rose water, watermelon, habanero chilliAnd in that order. Perfume, cool, then a building warmth alongside a light malt base, pale straw to look at, reminiscent of a crisp Mexican cervesa."
},
{
	name:"Day of the Dead",
	style:"Chili Chocolate Black Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 6.7,
	price: 7,
	image: "dead",
	brewed:"moked chipotle chili, raw cocoa nibs, vanilla, agave",
	description:"Dia de muetos in the form of a full bodied dark lager. A milk chocolate nature on the nose supported by a wonderful soft and juicy smokey quality that plays around with a velvet like texture on the palatte. You may notice a growing warmth at the back of the throat throughout your time with DOTD as well."
},
{
	name:"Weird Flex",
	style:"Grapefruit, Cucumber and Celery Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 3,
	price: 4.5,
	image: "weird",
	brewed:"Grapefruit, cucumber and celery",
	description:"Grapefruit, cucumber and celery - unusual ingredients which combine to create a delightfully clean sparkling sour beer. Kettle soured and infused with fresh grapefruit, cucumber, celery and a touch of salt, Weird Flex is a drinkable and uniquely refreshing beer that can either play well as a palate cleansing counterpoint to rich burgers, or the perfect companion to more delicate offerings. Brewed for Burger Wellington 2019."
},
{
	name:"Pernicious Weed",
	style:"Double IPA",
	volume:"330ml",
	vessel: "Can",
	percent: 8,
	price: 6.5,
	image: "perni-can",
	brewed:"Nelson Sauvin, Rakau",
	description:"Pours a light and hazy gold. Aroma of yeast and hints of fruit. Clean and crisp no dominant flavour. Very easy to drink."
},
{
	name:"Beer",
	style:"Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 4.8,
	price: 4,
	image: "beer",
	brewed:"Czech Saaz",
	description:"Simple is not that easy to brew! Using a single malt (Bohemian Pils), a single hop (Czech Saaz) and only one type of yeast (Budvar Lager). This beer uses quite a lot of hops and will often be considered to be too hoppy for the style, which is a Czech style-Pilsner. Confidence, control and restraint are crucial to creating a good product. It was the first printed can we released. Up until this point all of the cans had been sticker labelled."
},
{
	name:"Beer",
	style:"Lager",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 4.8,
	price: 22,
	image: "beer-pack",
	brewed:"Czech Saaz",
	description:"Simple is not that easy to brew! Using a single malt (Bohemian Pils), a single hop (Czech Saaz) and only one type of yeast (Budvar Lager). This beer uses quite a lot of hops and will often be considered to be too hoppy for the style, which is a Czech style-Pilsner. Confidence, control and restraint are crucial to creating a good product. It was the first printed can we released. Up until this point all of the cans had been sticker labelled."
},
{
	name:"Can Lah!",
	style:"Clean Crisp Lager",
	volume:"330ml",
	vessel: "Can",
	percent: 4.6,
	price: 5,
	image: "Canlah",
	brewed:"Citrus Hops",
	description:"Lah, what a wonderful word. It has no meaning itself but emphasises any sentence it’s added to.<br>Can Lah is brewed in collaboration with Hawker & Roll as the perfect accompaniment to their unique take on Malaysian street food. Clean, crisp with subtle citrus and tropical fruit notes, it’s designed to elevate, not overwhelm. Tag it onto your spicy street food feast and take the experience to a new level, lah."
},
{
	name:"Fuzzbox",
	style:"Fuzzy Pale Ale",
	volume:"330ml",
	vessel: "Can",
	percent: 5.8,
	price: 6,
	image: "fuzz",
	brewed:"Galaxy, Nelson Sauvin & Mosaic",
	description:"Mango juice, cushy, round and palette hugging mango juice with a dash of lime."
},
{
	name:"Electric Dry Hop Acid Test",
	style:"Dry Hopped Kettle Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 4.20,
	price: 4.5,
	image: "acid",
	brewed:"Ella, Wai-iti & Saphir",
	description:"Buy the ticket, take the ride. We’re going on a trip and you’re invited. Never mind the kool-aid, this is the Electric Dry Hop Acid Test. Kettle soured, and dry hopped with Ella, Wai-iti and Saphir hops the Acid Test delivers electric citrus sourness with an aromatic flavour burst of floral, grapefruit, lemon and spice. Are you on board? You're either on the bus or off the bus. Shazam!"
},
{
	name:"Turbine",
	style:"Pale Ale",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 5.3,
	price: 24,
	image: "turbine-pack",
	brewed:"Malt, Hops, Yeast and Wind",
	description:"She’s a gusty old place, Wellington. But you know what they say, if life blasts you with gale force wind, build a turbine.<br>Turbine™ Pale Ale, brewed with a bright golden, juicy malt base, balanced with a thirst quenching bitterness and bursting with citrus and tropical hop character, it’s a beer that’s engineered to be enjoyed.<br>Brewed in partnership with Meridian Energy, giving us the power to brew in a more sustainable way."
},
{
	name:"Hapi Daze",
	style:"Pacific Pale Ale",
	volume:"330ml",
	vessel: "Can",
	percent: 4.6,
	price: 4.5,
	image: "hapi",
	brewed:"Southern Cross, Motueka, Wai-iti, Riwaka, NS",
	description: "Subtle and snappy attributes of lime, pear, grapefruit and apple come forward with a nose that exhibits almost kerosene and diesel notes from the Riwaka dry hop."
},
{
	name:"Hapi Daze",
	style:"Pacific Pale Ale",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 4.6,
	price: 23,
	image: "hapi-pack",
	brewed:"Southern Cross, Motueka, Wai-iti, Riwaka, NS",
	description:"Subtle and snappy attributes of lime, pear, grapefruit and apple come forward with a nose that exhibits almost kerosene and diesel notes from the Riwaka dry hop."
},
{
	name:"White Mischief",
	style:"Salted White Peach Sour",
	volume:"330ml",
	vessel: "Can",
	percent: 2.9,
	price: 5,
	image: "mischief",
	brewed:"Kettle soured wheat, Salt & Peaches",
	description: "Cider in a beer. Low alcohol content, with higher acidity and a soft white peach and subtle yogurt quality allows for a super crisp, clean and refreshing beer, with a touch of salt to season."
},
{
	name:"White Mischief",
	style:"Salted White Peach Sour",
	volume:"Pack",
	vessel: "6 Pack",
	percent: 2.9,
	price: 28,
	image: "mischief-pack",
	brewed:"Kettle soured wheat, Salt & Peaches",
	description: "Cider in a beer. Low alcohol content, with higher acidity and a soft white peach and subtle yogurt quality allows for a super crisp, clean and refreshing beer, with a touch of salt to season."
}
];


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
		+'<p class="view-more" id='+array[i].image+'>VIEW DETAILS</p>'
		+'<div class="mx-3 img-container"><img class="beer-image" src="images/'+array[i].image+'.png"></div></div>';
		output.innerHTML += card;      
	}
	var productAmount = array.length;
	document.getElementById("product-amount").innerHTML = productAmount + " Products";
	$(".view-more").click(function(){
		$(".myModal-outer").fadeIn().delay(300).fadeOut;
		printDetails(this.id);
	});
}

function printDetails(id){
	for(var i = 0; i<beersArray.length; i++){
		if(beersArray[i].image === id){
			var card = "";
			card += '<div class="myModal-inner"><div class="myModal-header"><h1 class="myModal-heading">'+beersArray[i].name+'</h1>'
			+ '<span aria-hidden="true" class="close">&times;</span></div>'
			+ '<div class="myModal-body"><div class="myModal-body-left"><h2 class="myModal-subheading">'+beersArray[i].style +' '+ beersArray[i].percent+'%</h2>'
			+ '<h2 class="myModal-subsubheading">Brewed with:<br>'+beersArray[i].brewed+'</h2>'
			+ beersArray[i].description+'</div>'
			+ '<div class="myModal-body-right"><img src="images/'+beersArray[i].image+'.png"</div></div>'
			document.getElementById("modal-output").innerHTML = card;
		}
	}
	$(".close").click(function(){
		$(".myModal-outer").fadeOut();
	});
}


$(".form-group").click(function(e){
	var filteredS = [];
	var filteredV = [];
	var beersToPrint = [];
	var checkedS = $('input:checkbox[name=styles]:checked')
	var checkedV = $('input:checkbox[name=volumes]:checked')
	checkedS.each(function(){  // loops through all checkedS boxes and prints its id
		if((typeof checkedS != "undefined" && checkedS != null && checkedS.length != null && checkedS.length > 0) ){
			var id = this.id;
			if(id.includes("style")){
				for(var i = 0; i<beersArray.length; i++){

					var style = id.substr(0, id.indexOf('-'));
					var beerStyle = beersArray[i].style.toUpperCase();
					if(beerStyle.includes(style.toUpperCase())){
						filteredS.push(beersArray[i])
					}
				}
			}			
		}
		else{
			printItems(beersArray);
		}
	});

	checkedV.each(function(){
		if((typeof checkedV != "undefined" && checkedV != null && checkedV.length != null && checkedV.length > 0) ){
			var id = this.id;
			if(id.includes("volume")){
				for(var i = 0; i<beersArray.length; i++){
					var size = id.substr(0, id.indexOf('-'));
					var beerVol = beersArray[i].volume;
					if(beerVol.includes(size)){
						filteredV.push(beersArray[i])
					}
				}
			}
			
		}
		else{
			printItems(beersArray);
		}
	})
// after having added all filtered beers to array
// check if both arrays arent empty
	if(filteredS.length > 0 && filteredV.length > 0){
		for(var i = 0; i<filteredS.length; i++){
			for(var j = 0; j< filteredV.length; j++){
				if(filteredS[i] === filteredV[j]){
					beersToPrint.push(filteredS[i]);
				}
			}
		}
		printItems(beersToPrint);
	}
	if(filteredS.length > 0 && filteredV.length <= 0){
		printItems(filteredS);
	}
	if(filteredV.length > 0 && filteredS.length <= 0){
		printItems(filteredV);
	}
});


// open modal



// reset button clears all filters
$("#reset-filters").click(function(){
	$('input[name=styles]').each(function() {
		this.checked = false;
	});
	$('input[name=volumes]').each(function() {
		this.checked = false;
	});
	printItems(beersArray);
});

// open filter menu in mobile
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



































