const STORE = [
  {
    name: "Aaus",
  },
  { name: "Adelaide" },
  { name: "Albuquerque" },
  { name: "Almaty" },
  { name: "Amsterdam" },
  { name: "Anchorage" },
  { name: "Andorra" },
  { name: "Ankara" },
  { name: "Asheville" },
  { name: "Asuncion" },
  { name: "Athens" },
  { name: "Atlanta" },
  { name: "Auckland" },
  { name: "Austin" },
  { name: "Baku" },
  { name: "Bali" },
  { name: "Baltimore" },
  { name: "Bangkok" },
  { name: "Barcelona" },
  { name: "Beijing" },
  { name: "Beirut" },
  { name: "Belfast" },
  { name: "Belgrade" },
  { name: "Belize City" },
  { name: "Bengaluru" },
  { name: "Bergen" },
  { name: "Berlin" },
  { name: "Bern" },
  { name: "Bilbao" },
  { name: "Birmingham" },
  { name: "Birmingham, AL" },
  { name: "Bogota" },
  { name: "Boise" },
  { name: "Bologna" },
  { name: "Bordeaux" },
  { name: "Boston" },
  { name: "Boulder" },
  { name: "Bozeman" },
  { name: "Bratislava" },
  { name: "Brighton" },
  { name: "Brisbane" },
  { name: "Bristol" },
  { name: "Brno" },
  { name: "Brussels" },
  { name: "Bucharest" },
  { name: "Budapest" },
  { name: "Buenos Aires" },
  { name: "Buffalo" },
  { name: "Cairo" },
  { name: "Calgary" },
  { name: "Cambridge" },
  { name: "Cape Town" },
  { name: "Caracas" },
  { name: "Cardiff" },
  { name: "Casablanca" },
  { name: "Charleston" },
  { name: "Charlotte" },
  { name: "Chattanooga" },
  { name: "Chennai" },
  { name: "Chiang Mai" },
  { name: "Chicago" },
  { name: "Chisinau" },
  { name: "Christchurch" },
  { name: "Cincinnati" },
  { name: "Cleveland" },
  { name: "Cluj-Napoca" },
  { name: "Cologne" },
  { name: "Colorado Springs" },
  { name: "Columbus" },
  { name: "Copenhagen" },
  { name: "Cork" },
  { name: "Curitiba" },
  { name: "Dallas" },
  { name: "Dar es Salaam" },
  { name: "Delhi" },
  { name: "Denver" },
  { name: "Des Moines" },
  { name: "Detroit" },
  { name: "Doha" },
  { name: "Dresden" },
  { name: "Dubai" },
  { name: "Dublin" },
  { name: "Dusseldorf" },
  { name: "Edinburgh" },
  { name: "Edmonton" },
  { name: "Eindhoven" },
  { name: "Eugene" },
  { name: "Florence" },
  { name: "Florianopolis" },
  { name: "Fort Collins" },
  { name: "Frankfurt" },
  { name: "Fukuoka" },
  { name: "Galway" },
  { name: "Gdansk" },
  { name: "Geneva" },
  { name: "Gibraltar" },
  { name: "Glasgow" },
  { name: "Gothenburg" },
  { name: "Grenoble" },
  { name: "Guadalajara" },
  { name: "Guatemala City" },
  { name: "Halifax" },
  { name: "Hamburg" },
  { name: "Hannover" },
  { name: "Havana" },
  { name: "Helsinki" },
  { name: "Ho Chi Minh City" },
  { name: "Hong Kong" },
  { name: "Honolulu" },
  { name: "Houston" },
  { name: "Hyderabad" },
  { name: "Indianapolis" },
  { name: "Innsbruck" },
  { name: "Istanbul" },
  { name: "Jacksonville" },
  { name: "Jakarta" },
  { name: "Johannesburg" },
  { name: "Kansas City" },
  { name: "Karlsruhe" },
  { name: "Kathmandu" },
  { name: "Kiev" },
  { name: "Kingston" },
  { name: "Knoxville" },
  { name: "Krakow" },
  { name: "Kuala Lumpur" },
  { name: "Kyoto" },
  { name: "Lagos" },
  { name: "La Paz" },
  { name: "Las Palmas de Gran Canaria" },
  { name: "Las Vegas" },
  { name: "Lausanne" },
  { name: "Leeds" },
  { name: "Leipzig" },
  { name: "Lille" },
  { name: "Lima" },
  { name: "Lisbon" },
  { name: "Liverpool" },
  { name: "Ljubljana" },
  { name: "London" },
  { name: "Los Angeles" },
  { name: "Louisville" },
  { name: "Luxembourg" },
  { name: "Lviv" },
  { name: "Lyon" },
  { name: "Madison" },
  { name: "Madrid" },
  { name: "Malaga" },
  { name: "Malmo" },
  { name: "Managua" },
  { name: "Manchester" },
  { name: "Manila" },
  { name: "Marseille" },
  { name: "Medellin" },
  { name: "Melbourne" },
  { name: "Memphis" },
  { name: "Mexico City" },
  { name: "Miami" },
  { name: "Milan" },
  { name: "Milwaukee" },
  { name: "Minneapolis-Saint Paul" },
  { name: "Minsk" },
  { name: "Montevideo" },
  { name: "Montreal" },
  { name: "Moscow" },
  { name: "Mumbai" },
  { name: "Munich" },
  { name: "Nairobi" },
  { name: "Nantes" },
  { name: "Naples" },
  { name: "Nashville" },
  { name: "New Orleans" },
  { name: "New York" },
  { name: "Nice" },
  { name: "Nicosia" },
  { name: "Oklahoma City" },
  { name: "Omaha" },
  { name: "Orlando" },
  { name: "Osaka" },
  { name: "Oslo" },
  { name: "Ottawa" },
  { name: "Oulu" },
  { name: "Oxford" },
  { name: "Palo Alto" },
  { name: "Panama" },
  { name: "Paris" },
  { name: "Perth" },
  { name: "Philadelphia" },
  { name: "Phnom Penh" },
  { name: "Phoenix" },
  { name: "Phuket" },
  { name: "Pittsburgh" },
  { name: "Portland, ME" },
  { name: "Portland, OR" },
  { name: "Porto" },
  { name: "Porto Alegre" },
  { name: "Prague" },
  { name: "Providence" },
  { name: "Quebec" },
  { name: "Quito" },
  { name: "Raleigh" },
  { name: "Reykjavik" },
  { name: "Richmond" },
  { name: "Riga" },
  { name: "Rio De Janeiro" },
  { name: "Riyadh" },
  { name: "Rochester" },
  { name: "Rome" },
  { name: "Rotterdam" },
  { name: "Saint Petersburg" },
  { name: "Salt Lake City" },
  { name: "San Antonio" },
  { name: "San Diego" },
  { name: "San Francisco Bay Area" },
  { name: "San Jose" },
  { name: "San Juan" },
  { name: "San Luis Obispo" },
  { name: "San Salvador" },
  { name: "Santiago" },
  { name: "Santo Domingo" },
  { name: "Sao Paulo" },
  { name: "Sarajevo" },
  { name: "Saskatoon" },
  { name: "Seattle" },
  { name: "Seoul" },
  { name: "Seville" },
  { name: "Shanghai" },
  { name: "Singapore" },
  { name: "Skopje" },
  { name: "Sofia" },
  { name: "St. Louis" },
  { name: "Stockholm" },
  { name: "Stuttgart" },
  { name: "Sydney" },
  { name: "Taipei" },
  { name: "Tallinn" },
  { name: "Tampa Bay Area" },
  { name: "Tampere" },
  { name: "Tartu" },
  { name: "Tashkent" },
  { name: "Tbilisi" },
  { name: "Tehran" },
  { name: "Tel Aviv" },
  { name: "The Hague" },
  { name: "Thessaloniki" },
  { name: "Tokyo" },
  { name: "Toronto" },
  { name: "Toulouse" },
  { name: "Tunis" },
  { name: "Turin" },
  { name: "Turku" },
  { name: "Uppsala" },
  { name: "Utrecht" },
  { name: "Valencia" },
  { name: "Valletta" },
  { name: "Vancouver" },
  { name: "Victoria" },
  { name: "Vienna" },
  { name: "Vilnius" },
  { name: "Warsaw" },
  { name: "Washington, D.C" },
  { name: "Wellington" },
  { name: "Winnipeg" },
  { name: "Wroclaw" },
  { name: "Yerevan" },
  { name: "Zagreb" },
  { name: "Zurich" },
];

export default STORE;
