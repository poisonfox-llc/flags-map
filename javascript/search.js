const results = [
    { name: "Afghanistan", country_name: "afghanistan", codes: ["af"] }, 
    { name: "Albania", country_name: "albania", codes: ["al"] }, 
    { name: "Algeria", country_name: "algeria", codes: ["dz"] }, 
    { name: "Andorra", country_name: "andorra", codes: ["ad"] }, 
    { name: "Angola", country_name: "angola", codes: ["ao"] }, 
    { name: "Antigua and Barbuda", country_name: "antigua_and_barbuda", codes: ["ag"] }, 
    { name: "Argentina", country_name: "argentina", codes: ["ar"] }, 
    { name: "Armenia", country_name: "armenia", codes: ["am"] }, 
    { name: "Australia", country_name: "australia", codes: ["au"] }, 
    { name: "Austria", country_name: "austria", codes: ["at"] }, 
    { name: "Azerbaijan", country_name: "azerbaijan", codes: ["az"] }, 
    { name: "Bahamas", country_name: "bahamas", codes: ["bs"] }, 
    { name: "Bahrain", country_name: "bahrain", codes: ["bh"] }, 
    { name: "Bangladesh", country_name: "bangladesh", codes: ["bd"] }, 
    { name: "Barbados", country_name: "barbados", codes: ["bb"] }, 
    { name: "Belarus", country_name: "belarus", codes: ["by"] }, 
    { name: "Belgium", country_name: "belgium", codes: ["be"] }, 
    { name: "Belize", country_name: "belize", codes: ["bz"] }, 
    { name: "Benin", country_name: "benin", codes: ["bj"] }, 
    { name: "Bhutan", country_name: "bhutan", codes: ["bt"] }, 
    { name: "Bolivia", country_name: "bolivia", codes: ["bo"] }, 
    { name: "Bosnia and Herzegovina", country_name: "bosnia_and_herzegovina", codes: ["ba"] }, 
    { name: "Botswana", country_name: "botswana", codes: ["bw"] }, 
    { name: "Brazil", country_name: "brazil", codes: ["br"] }, 
    { name: "Brunei", country_name: "brunei", codes: ["bn"] }, 
    { name: "Bulgaria", country_name: "bulgaria", codes: ["bg"] }, 
    { name: "Burkina Faso", country_name: "burkina_faso", codes: ["bf"] }, 
    { name: "Burundi", country_name: "burundi", codes: ["bi"] }, 
    { name: "Cambodia", country_name: "cambodia", codes: ["kh"] }, 
    { name: "Cameroon", country_name: "cameroon", codes: ["cm"] }, 
    { name: "Canada", country_name: "canada", codes: ["ca"] }, 
    { name: "Cape Verde", country_name: "cape_verde", codes: ["cv"] }, 
    { name: "Central African Republic", country_name: "central_african_republic", codes: ["cf"] }, 
    { name: "Chad", country_name: "chad", codes: ["td"] }, 
    { name: "Chile", country_name: "chile", codes: ["cl"] }, 
    { name: "China", country_name: "china", codes: ["cn"] }, 
    { name: "Colombia", country_name: "colombia", codes: ["co"] }, 
    { name: "Comoros", country_name: "comoros", codes: ["km"] }, 
    { name: "Democratic Republic of the Congo", country_name: "democratic_republic_of_the_congo", codes: ["cd"] }, 
    { name: "Republic of the Congo", country_name: "republic_of_the_congo", codes: ["cg"] }, 
    { name: "Costa Rica", country_name: "costa_rica", codes: ["cr"] }, 
    { name: "Croatia", country_name: "croatia", codes: ["hr"] }, 
    { name: "Cuba", country_name: "cuba", codes: ["cu"] }, 
    { name: "Cyprus", country_name: "cyprus", codes: ["cy"] }, 
    { name: "Czech Republic", country_name: "czech_republic", codes: ["cz"] }, 
    { name: "Denmark", country_name: "denmark", codes: ["dk"] }, 
    { name: "Djibouti", country_name: "djibouti", codes: ["dj"] }, 
    { name: "Dominica", country_name: "dominica", codes: ["dm"] }, 
    { name: "Dominican Republic", country_name: "dominican_republic", codes: ["do"] }, 
    { name: "East Timor", country_name: "east_timor", codes: ["tl"] }, 
    { name: "Ecuador", country_name: "ecuador", codes: ["ec"] }, 
    { name: "Egypt", country_name: "egypt", codes: ["eg"] }, 
    { name: "El Salvador", country_name: "el_salvador", codes: ["sv"] }, 
    { name: "Equatorial Guinea", country_name: "equatorial_guinea", codes: ["gq"] }, 
    { name: "Eritrea", country_name: "eritrea", codes: ["er"] }, 
    { name: "Estonia", country_name: "estonia", codes: ["ee"] }, 
    { name: "Eswatini", country_name: "eswatini", codes: ["sz"] }, 
    { name: "Ethiopia", country_name: "ethiopia", codes: ["et"] }, 
    { name: "Fiji", country_name: "fiji", codes: ["fj"] }, 
    { name: "Finland", country_name: "finland", codes: ["fi"] }, 
    { name: "France", country_name: "france", codes: ["fr"] }, 
    { name: "Gabon", country_name: "gabon", codes: ["ga"] }, 
    { name: "Gambia", country_name: "gambia", codes: ["gm"] }, 
    { name: "Georgia", country_name: "georgia", codes: ["ge"] }, 
    { name: "Germany", country_name: "germany", codes: ["de"] }, 
    { name: "Ghana", country_name: "ghana", codes: ["gh"] }, 
    { name: "Greece", country_name: "greece", codes: ["gr"] }, 
    { name: "Grenada", country_name: "grenada", codes: ["gd"] }, 
    { name: "Guatemala", country_name: "guatemala", codes: ["gt"] }, 
    { name: "Guinea", country_name: "guinea", codes: ["gn"] }, 
    { name: "Guinea-Bissau", country_name: "guinea-bissau", codes: ["gw"] }, 
    { name: "Guyana", country_name: "guyana", codes: ["gy"] }, 
    { name: "Haiti", country_name: "haiti", codes: ["ht"] }, 
    { name: "Honduras", country_name: "honduras", codes: ["hn"] }, 
    { name: "Hungary", country_name: "hungary", codes: ["hu"] }, 
    { name: "Iceland", country_name: "iceland", codes: ["is"] }, 
    { name: "India", country_name: "india", codes: ["in"] }, 
    { name: "Indonesia", country_name: "indonesia", codes: ["id"] }, 
    { name: "Iran", country_name: "iran", codes: ["ir"] }, 
    { name: "Iraq", country_name: "iraq", codes: ["iq"] }, 
    { name: "Ireland", country_name: "ireland", codes: ["ie"] }, 
    { name: "Israel", country_name: "israel", codes: ["il"] }, 
    { name: "Italy", country_name: "italy", codes: ["it"] }, 
    { name: "Ivory Coast", country_name: "ivory_coast", codes: ["ci"] }, 
    { name: "Jamaica", country_name: "jamaica", codes: ["jm"] }, 
    { name: "Japan", country_name: "japan", codes: ["jp"] }, 
    { name: "Jordan", country_name: "jordan", codes: ["jo"] }, 
    { name: "Kazakhstan", country_name: "kazakhstan", codes: ["kz"] }, 
    { name: "Kenya", country_name: "kenya", codes: ["ke"] }, 
    { name: "Kiribati", country_name: "kiribati", codes: ["ki"] }, 
    { name: "Kuwait", country_name: "kuwait", codes: ["kw"] }, 
    { name: "Kyrgyzstan", country_name: "kyrgyzstan", codes: ["kg"] }, 
    { name: "Laos", country_name: "laos", codes: ["la"] }, 
    { name: "Latvia", country_name: "latvia", codes: ["lv"] }, 
    { name: "Lebanon", country_name: "lebanon", codes: ["lb"] }, 
    { name: "Lesotho", country_name: "lesotho", codes: ["ls"] }, 
    { name: "Liberia", country_name: "liberia", codes: ["lr"] }, 
    { name: "Libya", country_name: "libya", codes: ["ly"] }, 
    { name: "Liechtenstein", country_name: "liechtenstein", codes: ["li"] }, 
    { name: "Lithuania", country_name: "lithuania", codes: ["lt"] }, 
    { name: "Luxembourg", country_name: "luxembourg", codes: ["lu"] }, 
    { name: "Madagascar", country_name: "madagascar", codes: ["mg"] }, 
    { name: "Malawi", country_name: "malawi", codes: ["mw"] }, 
    { name: "Malaysia", country_name: "malaysia", codes: ["my"] }, 
    { name: "Maldives", country_name: "maldives", codes: ["mv"] }, 
    { name: "Mali", country_name: "mali", codes: ["ml"] }, 
    { name: "Malta", country_name: "malta", codes: ["mt"] }, 
    { name: "Marshall Islands", country_name: "marshall_islands", codes: ["mh"] }, 
    { name: "Mauritania", country_name: "mauritania", codes: ["mr"] }, 
    { name: "Mauritius", country_name: "mauritius", codes: ["mu"] }, 
    { name: "Mexico", country_name: "mexico", codes: ["mx"] }, 
    { name: "Micronesia", country_name: "micronesia", codes: ["fm"] }, 
    { name: "Moldova", country_name: "moldova", codes: ["md"] }, 
    { name: "Monaco", country_name: "monaco", codes: ["mc"] }, 
    { name: "Mongolia", country_name: "mongolia", codes: ["mn"] }, 
    { name: "Montenegro", country_name: "montenegro", codes: ["me"] }, 
    { name: "Morocco", country_name: "morocco", codes: ["ma"] }, 
    { name: "Mozambique", country_name: "mozambique", codes: ["mz"] }, 
    { name: "Myanmar", country_name: "myanmar", codes: ["mm"] }, 
    { name: "Namibia", country_name: "namibia", codes: ["na"] }, 
    { name: "Nauru", country_name: "nauru", codes: ["nr"] }, 
    { name: "Nepal", country_name: "nepal", codes: ["np"] }, 
    { name: "Netherlands", country_name: "netherlands", codes: ["nl"] }, 
    { name: "New Zealand", country_name: "new_zealand", codes: ["nz"] }, 
    { name: "Nicaragua", country_name: "nicaragua", codes: ["ni"] }, 
    { name: "Niger", country_name: "niger", codes: ["ne"] }, 
    { name: "Nigeria", country_name: "nigeria", codes: ["ng"] }, 
    { name: "North Korea", country_name: "north_korea", codes: ["kp"] }, 
    { name: "North Macedonia", country_name: "north_macedonia", codes: ["mk"] }, 
    { name: "Norway", country_name: "norway", codes: ["no"] }, 
    { name: "Oman", country_name: "oman", codes: ["om"] }, 
    { name: "Pakistan", country_name: "pakistan", codes: ["pk"] }, 
    { name: "Palau", country_name: "palau", codes: ["pw"] }, 
    { name: "Palestine", country_name: "palestine", codes: ["ps"] }, 
    { name: "Panama", country_name: "panama", codes: ["pa"] }, 
    { name: "Papua New Guinea", country_name: "papua_new_guinea", codes: ["pg"] }, 
    { name: "Paraguay", country_name: "paraguay", codes: ["py"] }, 
    { name: "Peru", country_name: "peru", codes: ["pe"] }, 
    { name: "Philippines", country_name: "philippines", codes: ["ph"] }, 
    { name: "Poland", country_name: "poland", codes: ["pl"] }, 
    { name: "Portugal", country_name: "portugal", codes: ["pt"] }, 
    { name: "Qatar", country_name: "qatar", codes: ["qa"] }, 
    { name: "Romania", country_name: "romania", codes: ["ro"] }, 
    { name: "Russia", country_name: "russia", codes: ["ru"] }, 
    { name: "Rwanda", country_name: "rwanda", codes: ["rw"] }, 
    { name: "Saint Kitts and Nevis", country_name: "saint_kitts_and_nevis", codes: ["kn"] }, 
    { name: "Saint Lucia", country_name: "saint_lucia", codes: ["lc"] }, 
    { name: "Saint Vincent and the Grenadines", country_name: "saint_vincent_and_the_grenadines", codes: ["vc"] }, 
    { name: "Samoa", country_name: "samoa", codes: ["ws"] }, 
    { name: "San Marino", country_name: "san_marino", codes: ["sm"] }, 
    { name: "São Tomé and Príncipe", country_name: "são_tomé_and_príncipe", codes: ["st"] }, 
    { name: "Saudi Arabia", country_name: "saudi_arabia", codes: ["sa"] }, 
    { name: "Senegal", country_name: "senegal", codes: ["sn"] }, 
    { name: "Serbia", country_name: "serbia", codes: ["rs"] }, 
    { name: "Seychelles", country_name: "seychelles", codes: ["sc"] }, 
    { name: "Sierra Leone", country_name: "sierra_leone", codes: ["sl"] }, 
    { name: "Singapore", country_name: "singapore", codes: ["sg"] }, 
    { name: "Slovakia", country_name: "slovakia", codes: ["sk"] }, 
    { name: "Slovenia", country_name: "slovenia", codes: ["si"] }, 
    { name: "Solomon Islands", country_name: "solomon_islands", codes: ["sb"] }, 
    { name: "Somalia", country_name: "somalia", codes: ["so"] }, 
    { name: "South Africa", country_name: "south_africa", codes: ["za"] }, 
    { name: "South Korea", country_name: "south_korea", codes: ["kr"] }, 
    { name: "South Sudan", country_name: "south_sudan", codes: ["ss"] }, 
    { name: "Spain", country_name: "spain", codes: ["es"] }, 
    { name: "Sri Lanka", country_name: "sri_lanka", codes: ["lk"] }, 
    { name: "Sudan", country_name: "sudan", codes: ["sd"] }, 
    { name: "Suriname", country_name: "suriname", codes: ["sr"] }, 
    { name: "Sweden", country_name: "sweden", codes: ["se"] }, 
    { name: "Switzerland", country_name: "switzerland", codes: ["ch"] }, 
    { name: "Syria", country_name: "syria", codes: ["sy"] }, 
    { name: "Tajikistan", country_name: "tajikistan", codes: ["tj"] }, 
    { name: "Tanzania", country_name: "tanzania", codes: ["tz"] }, 
    { name: "Thailand", country_name: "thailand", codes: ["th"] }, 
    { name: "Togo", country_name: "togo", codes: ["tg"] }, 
    { name: "Tonga", country_name: "tonga", codes: ["to"] }, 
    { name: "Trinidad and Tobago", country_name: "trinidad_and_tobago", codes: ["tt"] }, 
    { name: "Tunisia", country_name: "tunisia", codes: ["tn"] }, 
    { name: "Turkey", country_name: "turkey", codes: ["tr"] }, 
    { name: "Turkmenistan", country_name: "turkmenistan", codes: ["tm"] }, 
    { name: "Tuvalu", country_name: "tuvalu", codes: ["tv"] }, 
    { name: "Uganda", country_name: "uganda", codes: ["ug"] }, 
    { name: "Ukraine", country_name: "ukraine", codes: ["ua"] }, 
    { name: "United Arab Emirates", country_name: "united_arab_emirates", codes: ["ae"] }, 
    { name: "United Kingdom", country_name: "united_kingdom", codes: ["gb"] }, 
    { name: "United States", country_name: "united_states", codes: ["us"] }, 
    { name: "Uruguay", country_name: "uruguay", codes: ["uy"] }, 
    { name: "Uzbekistan", country_name: "uzbekistan", codes: ["uz"] }, 
    { name: "Vanuatu", country_name: "vanuatu", codes: ["vu"] }, 
    { name: "Vatican City", country_name: "vatican_city", codes: ["va"] }, 
    { name: "Venezuela", country_name: "venezuela", codes: ["ve"] }, 
    { name: "Vietnam", country_name: "vietnam", codes: ["vn"] }, 
    { name: "Yemen", country_name: "yemen", codes: ["ye"] }, 
    { name: "Zambia", country_name: "zambia", codes: ["zm"] }, 
    { name: "Zimbabwe", country_name: "zimbabwe", codes: ["zw"] }, 
    { name: "Abkhazia", country_name: "abkhazia", codes: ["xa"] }, 
    { name: "Kosovo", country_name: "kosovo", codes: ["xk"] }, 
    { name: "Northern Cyprus", country_name: "northern_cyprus", codes: ["xc"] }, 
    { name: "Sahrawi Arab Democratic Republic", country_name: "sahrawi_arab_democratic_republic", codes: ["xz"] }, 
    { name: "Somaliland", country_name: "somaliland", codes: ["xs"] }, 
    { name: "South Ossetia", country_name: "south_ossetia", codes: ["xo"] }, 
    { name: "Taiwan", country_name: "taiwan", codes: ["tw"] }, 
    { name: "Transnistria", country_name: "transnistria", codes: ["xp"] }
]

results.sort()

const tableDiv = document.querySelector(".suggests")
let query = "";
let escapedQuery = "";
const qInput = document.querySelector("input#search");

if(tableDiv.innerHTML == "" || query == "") {
	tableDiv.classList.add("hidden");
	qInput.classList.remove("has-suggest");
} else {
	tableDiv.classList.remove("hidden");
	qInput.classList.add("has-suggest");
}

const searchQuery = (q) => {
	if(tableDiv.innerHTML == "" || query == "") {
		tableDiv.classList.add("hidden");
		qInput.classList.remove("has-suggest");
	} else {
		tableDiv.classList.remove("hidden");
		qInput.classList.add("has-suggest");
	}

	const newResults = [];
	for(let i = 0; i < results.length; i++) {
		res = results[i];
		if(res.country_name.toLowerCase().includes(q.toLowerCase())) {
			newResults.push(results[i]);
			tableDiv.innerHTML = "";
		}
	}
	
	for(let i = 0; i < newResults.length; i++) {
		const elem = document.createElement("div");
		elem.innerHTML = 
			`<img src="./images/img/flags/${newResults[i].country_name}.svg" alt="Flag of ${newResults[i].name}" id="flag">
			<p id="name">${newResults[i].name}</p>`;
		elem.classList.add("suggest");
		elem.classList.add(newResults[i].country_name);
		tableDiv.appendChild(elem);
	}
	
	if(query.toLowerCase() == "*" || query.toLowerCase() === "all") {
		newResults.splice(0, newResults.length);
		
		for(let i = 0; i < results.length; i++) {
			newResults.push(results[i]);
		}
		
		tableDiv.innerHTML = "";
		
		for(let i = 0; i < newResults.length; i++) {
			const elem = document.createElement("div");
			elem.innerHTML = 
				`<img src="./images/img/flags/${newResults[i].country_name}.svg" alt="Flag of ${newResults[i].name}" id="flag">
				<p id="name">${newResults[i].name}</p>`;
			elem.classList.add("suggest");
			elem.classList.add(newResults[i].country_name);
			tableDiv.appendChild(elem);
		}
	}

	if(tableDiv.innerHTML == "" || query == "" || newResults.length == 0) {
		tableDiv.classList.add("hidden");
		qInput.classList.remove("has-suggest");
	} else {
		tableDiv.classList.remove("hidden");
		qInput.classList.add("has-suggest");
	}
}

qInput.addEventListener("input", () => {
	query = qInput.value
	escapedQuery = query.replaceAll(/[.*+?^${}()|[\]\\]/g, '\\$&');
	searchQuery(query)
});