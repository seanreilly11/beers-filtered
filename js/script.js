const beersArray = [
	{
		name:"Party & Bullshit",
		style:"East Coast Anthem IPA",
		volume:"440ml",
		vessel: "can",
		percent: 6.2,
		price: 8
	},
	{
		name:"Turbo Fuzz",
		style:"Triple Hazy IPA",
		volume:"440ml",
		vessel: "can",
		percent: 10,
		price: 13
	},
	{
		name:"Turbo Fuzz",
		style:"Triple Hazy IPA",
		volume:"Pack",
		vessel: "4 Pack",
		percent: 10,
		price: 50
	},
	{
		name:"Unconditional Love",
		style:"West Coast IPA",
		volume:"440ml",
		vessel: "can",
		percent: 7.5,
		price: 9.5
	},
	{
		name:"La Calavera Catrina",
		style:"Habanero and Rosewater Corn Lager",
		volume:"330ml",
		vessel: "can",
		percent: 6.9,
		price: 7
	},
	{
		name:"Day of the Dead",
		style:"Chili Chocolate Black Lager",
		volume:"330ml",
		vessel: "can",
		percent: 6.7,
		price: 7
	},
	{
		name:"VPA",
		style:"Out of this World Pale Ale",
		volume:"650ml",
		vessel: "bottle",
		percent: 7.5,
		price: 13
	},
	{
		name:"Weird Flex",
		style:"Grapefruit, Cucumber and Celery Sour",
		volume:"330ml",
		vessel: "can",
		percent: 3,
		price: 4.5
	},
	{
		name:"Pernicious Weed",
		style:"Double IPA",
		volume:"330ml",
		vessel: "can",
		percent: 8,
		price: 6.5
	},
	{
		name:"Pernicious Weed",
		style:"Double IPA",
		volume:"650ml",
		vessel: "bottle",
		percent: 8,
		price: 14
	},
	{
		name:"Beer",
		style:"Pale Lager",
		volume:"330ml",
		vessel: "can",
		percent: 4.8,
		price: 4
	},
	{
		name:"Beer",
		style:"Pale Lager",
		volume:"Pack",
		vessel: "6 Pack",
		percent: 4.8,
		price: 22
	},
	{
		name:"Can Lah!",
		style:"Clean Crisp Lager",
		volume:"330ml",
		vessel: "can",
		percent: 4.6,
		price: 5
	},
	{
		name:"Turbine",
		style:"Pale Ale",
		volume:"Pack",
		vessel: "6 Pack",
		percent: 5.3,
		price: 24
	},
	{
		name:"Fuzzbox",
		style:"Fuzzy Pale Ale",
		volume:"330ml",
		vessel: "can",
		percent: 5.8,
		price: 6
	},
	{
		name:"Electric Dry Hop Acid Test",
		style:"Dry Hopped Kettle Sour",
		volume:"330ml",
		vessel: "can",
		percent: 4.20,
		price: 4.5
	},
	{
		name:"Hapi Daze",
		style:"Pacific Pale Ale",
		volume:"330ml",
		vessel: "can",
		percent: 4.6,
		price: 4.5
	},
	{
		name:"Hapi Daze",
		style:"Pacific Pale Ale",
		volume:"Pack",
		vessel: "6 Pack",
		percent: 4.6,
		price: 23
	},
	{
		name:"White Mischief",
		style:"Salted White Peach Sour",
		volume:"330ml",
		vessel: "can",
		percent: 2.9,
		price: 5
	}
];

const output = document.getElementById("printOutput");


// print all objects
for(let i=0; i<beersArray.length; i++){
	var card = "";
	card += '<div class="myBg text-black overflow-hidden">'
      +'<div class="my-3 py-3 card-head">'
      +'<h2 class="display-5">'+beersArray[i].name+'</h2>'
      +'<p class="lead">And an even wittier subheading.</p>'
      +'</div>'
      +'<div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div></div>';
	output.innerHTML += card;
}









































