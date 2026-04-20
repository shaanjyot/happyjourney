export type TripDayPlan = {
  day: string
  title: string
  details: string
}

export type TripPackage = {
  id: number
  slug: string
  title: string
  location: string
  category: string
  duration: string
  days: number
  nights: number
  price: string
  priceValue: number
  rating: number
  image: string
  gallery: string[]
  cities: string[]
  overview: string
  inclusions: string[]
  exclusions: string[]
  itinerary: TripDayPlan[]
  hotelRating?: number
}

const galleryDefaults = [
  "/images/destinations/bali.jpg",
  "/images/destinations/swiss-alps.jpg",
  "/images/destinations/kyoto.jpg",
  "/images/destinations/iceland.jpg",
]

const imagePool = [
  "/images/destinations/bali.jpg",
  "/images/destinations/swiss-alps.jpg",
  "/images/destinations/kyoto.jpg",
  "/images/destinations/iceland.jpg",
  "/images/hero-bg.jpg",
  "/images/destinations/santorini.jpg",
  "/images/destinations/machu-picchu.jpg",
  "/dubai.png",
  "/thailand.png",
  "/singapore.png",
  "/maldives.png",
]

const baseInclusions = [
  "Assistance on arrival and departure",
  "Accommodation on twin-sharing basis",
  "Airport-hotel-airport transfers",
  "Selected sightseeing and tours as per itinerary",
  "Daily breakfast",
]

const baseExclusions = [
  "Flights and visa charges",
  "Personal expenses and optional activities",
  "Early check-in/late check-out",
  "Government taxes (GST/TCS) if applicable",
]

export const tripPackages: TripPackage[] = [
  {
    id: 1,
    slug: "wonders-of-thailand",
    title: "Wonders of Thailand",
    location: "Thailand",
    category: "South East Asia",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "29,800",
    priceValue: 29800,
    rating: 4.9,
    image: imagePool[0],
    gallery: [imagePool[0], imagePool[3], imagePool[5], imagePool[1]],
    cities: ["Bangkok", "Pattaya"],
    overview:
      "A compact Thailand getaway covering the energetic city vibe of Bangkok and the beachside fun of Pattaya.",
    inclusions: [...baseInclusions, "Coral Island tour with lunch"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Bangkok", details: "Airport pickup and transfer to hotel with evening at leisure." },
      { day: "Day 2", title: "Pattaya Transfer", details: "Travel to Pattaya and enjoy local exploration." },
      { day: "Day 3", title: "Coral Island Tour", details: "Shared speedboat trip with optional water sports." },
      { day: "Day 4", title: "Bangkok City Highlights", details: "Temple tour and shopping time in the city." },
      { day: "Day 5", title: "Departure", details: "Airport transfer for onward journey." },
    ],
    hotelRating: 3,
  },
  {
    id: 2,
    slug: "mesmerizing-phuket-holiday",
    title: "Mesmerizing Phuket Holiday",
    location: "Thailand",
    category: "South East Asia",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "26,300",
    priceValue: 26300,
    rating: 4.8,
    image: imagePool[1],
    gallery: [imagePool[1], ...galleryDefaults.slice(1)],
    cities: ["Phuket"],
    overview:
      "A beach holiday in Phuket with curated sightseeing and smooth transfers suitable for couples and families.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Phuket", details: "Meet and greet at airport, transfer to hotel." },
      { day: "Day 2", title: "City Tour", details: "Half-day orientation with old town and viewpoints." },
      { day: "Day 3", title: "Island Excursion", details: "Shared island hopping experience." },
      { day: "Day 4", title: "Leisure Day", details: "Spend time at beach or add optional activities." },
      { day: "Day 5", title: "Departure", details: "Checkout and airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 3,
    slug: "beautiful-taj-mahal-tour",
    title: "Beautiful Taj Mahal Tour",
    location: "India",
    category: "Domestic",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "16,900",
    priceValue: 16900,
    rating: 5,
    image: imagePool[2],
    gallery: [imagePool[2], ...galleryDefaults.slice(1)],
    cities: ["New Delhi", "Agra", "Jaipur"],
    overview:
      "Golden Triangle circuit with iconic monuments, local culture, and guided city transitions across Delhi, Agra, and Jaipur.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Delhi", details: "Transfer to hotel and local orientation." },
      { day: "Day 2", title: "Delhi Sightseeing", details: "Visit major landmarks and markets." },
      { day: "Day 3", title: "Delhi to Agra", details: "Road transfer and evening exploration." },
      { day: "Day 4", title: "Taj Mahal & Jaipur", details: "Morning Taj Mahal visit, drive to Jaipur." },
      { day: "Day 5", title: "Jaipur City Tour", details: "Amer Fort and city heritage points." },
      { day: "Day 6", title: "Departure", details: "Assisted transfer for onward journey." },
    ],
    hotelRating: 3,
  },
  {
    id: 4,
    slug: "bali-adventure-beach-escape",
    title: "Bali Adventure & Beach Escape",
    location: "Indonesia",
    category: "Island Escape",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "25,500",
    priceValue: 25500,
    rating: 4.8,
    image: imagePool[0],
    gallery: [imagePool[0], imagePool[6], imagePool[5], imagePool[3]],
    cities: ["Kuta"],
    overview:
      "A relaxed Bali holiday in Kuta combining scenic day tours, beach leisure, and airport transfers.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Bali Arrival", details: "Airport transfer and check-in at Kuta hotel." },
      { day: "Day 2", title: "Kintamani / Ubud Circuit", details: "Day tour with island highlights." },
      { day: "Day 3", title: "Waterfront Leisure", details: "Free time for beach clubs and local shopping." },
      { day: "Day 4", title: "Temple & Sunset Tour", details: "Visit key temples and sunset points." },
      { day: "Day 5", title: "Departure", details: "Hotel checkout and airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 5,
    slug: "ultimate-vietnam-experience",
    title: "Ultimate Vietnam Experience",
    location: "Vietnam",
    category: "South East Asia",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "24,200",
    priceValue: 24200,
    rating: 4.9,
    image: imagePool[3],
    gallery: [imagePool[3], imagePool[1], imagePool[0], imagePool[5]],
    cities: ["Ho Chi Minh", "Phu Quoc"],
    overview:
      "A multi-city Vietnam itinerary featuring Ho Chi Minh tours, Cu Chi, and beach-focused stay in Phu Quoc.",
    inclusions: [...baseInclusions, "English-speaking local guide for guided tours"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Ho Chi Minh", details: "Airport pickup and city orientation." },
      { day: "Day 2", title: "Cu Chi Tunnel Tour", details: "Half-day guided historical excursion." },
      { day: "Day 3", title: "City Exploration", details: "Museums, local markets, and café streets." },
      { day: "Day 4", title: "Fly to Phu Quoc", details: "Transfer and check-in with evening leisure." },
      { day: "Day 5", title: "Island Day Tour", details: "Scenic highlights and optional snorkeling." },
      { day: "Day 6", title: "Beach Leisure", details: "Relaxed day for personal exploration." },
      { day: "Day 7", title: "Departure", details: "Airport transfer and trip completion." },
    ],
    hotelRating: 4,
  },
  {
    id: 6,
    slug: "singapore-malaysia-family-package",
    title: "Singapore & Malaysia Family Package",
    location: "Singapore, Malaysia",
    category: "South East Asia",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "37,500",
    priceValue: 37500,
    rating: 4.7,
    image: imagePool[1],
    gallery: [imagePool[1], imagePool[2], imagePool[5], imagePool[0]],
    cities: ["Kuala Lumpur", "Singapore"],
    overview:
      "Family-friendly itinerary combining iconic attractions in Kuala Lumpur and Singapore with planned transfers.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Kuala Lumpur", details: "Airport transfer and check-in." },
      { day: "Day 2", title: "Kuala Lumpur City Tour", details: "Landmark visits and shopping stops." },
      { day: "Day 3", title: "Leisure or Optional Excursion", details: "Day at leisure for family activities." },
      { day: "Day 4", title: "Transfer to Singapore", details: "Intercity transfer and hotel check-in." },
      { day: "Day 5", title: "Singapore City Highlights", details: "Guided city orientation and photo spots." },
      { day: "Day 6", title: "Sentosa / Theme Experience", details: "Popular family outing day." },
      { day: "Day 7", title: "Departure", details: "Airport transfer for return travel." },
    ],
    hotelRating: 4,
  },
  {
    id: 7,
    slug: "dubai-delights",
    title: "Dubai Delights",
    location: "Dubai",
    category: "Urban Oasis",
    duration: "4D / 3N",
    days: 4,
    nights: 3,
    price: "22,500",
    priceValue: 22500,
    rating: 4.8,
    image: imagePool[5],
    gallery: [imagePool[5], imagePool[1], imagePool[0], imagePool[3]],
    cities: ["Dubai"],
    overview:
      "Short luxury break in Dubai with city landmarks, desert experience options, and comfortable stays.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Dubai", details: "Airport transfer and evening at leisure." },
      { day: "Day 2", title: "City Tour", details: "Half-day tour covering old and new Dubai." },
      { day: "Day 3", title: "Desert Safari", details: "Optional adventure with evening entertainment." },
      { day: "Day 4", title: "Departure", details: "Checkout and airport drop." },
    ],
    hotelRating: 3,
  },
  {
    id: 8,
    slug: "europe-signature-experience",
    title: "Europe Signature Experience",
    location: "Switzerland, France",
    category: "Europe",
    duration: "9D / 8N",
    days: 9,
    nights: 8,
    price: "1,56,000",
    priceValue: 156000,
    rating: 4.9,
    image: imagePool[6],
    gallery: [imagePool[6], imagePool[1], imagePool[5], imagePool[2]],
    cities: ["Zurich", "Paris"],
    overview:
      "A premium Europe trip focused on Swiss scenic landscapes and Paris city icons.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Zurich", details: "Airport transfer and evening leisure." },
      { day: "Day 2", title: "Zurich Sightseeing", details: "Lake and city highlights." },
      { day: "Day 3", title: "Mountain Excursion", details: "Scenic day outing from Zurich." },
      { day: "Day 4", title: "Transit Day", details: "Travel onward with check-in at next stop." },
      { day: "Day 5", title: "Arrive in Paris", details: "Relaxing evening in city center." },
      { day: "Day 6", title: "Paris City Tour", details: "Major monuments and districts." },
      { day: "Day 7", title: "Eiffel & Seine", details: "Iconic attractions and riverfront experiences." },
      { day: "Day 8", title: "Leisure in Paris", details: "Open day for shopping and cafés." },
      { day: "Day 9", title: "Departure", details: "Airport transfer and return." },
    ],
    hotelRating: 4,
  },
  {
    id: 9,
    slug: "golden-triangle-tour-package",
    title: "Golden Triangle Tour Package",
    location: "India",
    category: "Domestic",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "17,500",
    priceValue: 17500,
    rating: 4.9,
    image: imagePool[2],
    gallery: [imagePool[2], imagePool[3], imagePool[6], imagePool[5]],
    cities: ["New Delhi", "Agra", "Jaipur"],
    overview:
      "Extended Golden Triangle experience with deeper city exploration and optional local add-ons.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", details: "Airport transfer and check-in." },
      { day: "Day 2", title: "Delhi Heritage", details: "Full-day city landmarks and markets." },
      { day: "Day 3", title: "Delhi to Agra", details: "Road transfer with evening free." },
      { day: "Day 4", title: "Agra Sights", details: "Taj Mahal and Agra Fort exploration." },
      { day: "Day 5", title: "Transfer to Jaipur", details: "Scenic drive and city walk." },
      { day: "Day 6", title: "Jaipur Tour", details: "Fort and palace circuit." },
      { day: "Day 7", title: "Departure", details: "Final transfer for onward travel." },
    ],
    hotelRating: 3,
  },
  {
    id: 10,
    slug: "grand-european-discovery",
    title: "Grand European Discovery",
    location: "Europe",
    category: "Europe",
    duration: "16D / 15N",
    days: 16,
    nights: 15,
    price: "2,15,800",
    priceValue: 215800,
    rating: 4.9,
    image: imagePool[1],
    gallery: [imagePool[1], imagePool[6], imagePool[5], imagePool[0]],
    cities: ["Paris", "Lyon", "Zurich", "Milan", "Rome", "Florence", "Venice", "Salzburg", "Vienna"],
    overview:
      "Flagship multi-country Europe itinerary covering cultural capitals, scenic Alps routes, and classic city tours.",
    inclusions: [...baseInclusions, "Selected activities included as per summary"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Paris", details: "Airport transfer and hotel check-in." },
      { day: "Day 2", title: "Paris City Tour", details: "Landmark orientation with guide." },
      { day: "Day 3", title: "Eiffel & Seine", details: "Major attractions and cruise experience." },
      { day: "Day 4", title: "Paris to Lyon", details: "Intercity transfer and city orientation." },
      { day: "Day 5", title: "Lyon to Zurich", details: "Transit to Switzerland and evening free." },
      { day: "Day 6", title: "Swiss Excursion", details: "Mountain region day trip." },
      { day: "Day 7", title: "Zurich Leisure", details: "Open day and local exploration." },
      { day: "Day 8", title: "Zurich to Milan", details: "Transfer and Italian check-in." },
      { day: "Day 9", title: "Milan to Rome", details: "Travel to Rome, evening leisure." },
      { day: "Day 10", title: "Rome City Tour", details: "Guided city landmarks." },
      { day: "Day 11", title: "Rome to Florence", details: "Transfer and old-town stroll." },
      { day: "Day 12", title: "Florence to Venice", details: "Transit and canal-side free time." },
      { day: "Day 13", title: "Venice to Salzburg", details: "Cross-border transfer." },
      { day: "Day 14", title: "Salzburg to Vienna", details: "Evening in Vienna." },
      { day: "Day 15", title: "Vienna Exploration", details: "City tour and leisure." },
      { day: "Day 16", title: "Departure", details: "Airport transfer from Vienna." },
    ],
    hotelRating: 4,
  },
  {
    id: 11,
    slug: "scenic-european-journey",
    title: "Scenic European Journey",
    location: "Europe",
    category: "Europe",
    duration: "16D / 15N",
    days: 16,
    nights: 15,
    price: "2,32,500",
    priceValue: 232500,
    rating: 4.8,
    image: imagePool[6],
    gallery: [imagePool[6], imagePool[1], imagePool[4], imagePool[2]],
    cities: ["Rome", "Florence", "Venice", "Zurich", "Paris", "Rouen", "London", "Colchester", "Amsterdam", "Berlin"],
    overview:
      "A scenic long-form Europe route connecting major historic and cultural hubs from Italy to Germany.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Rome", details: "Transfer and check-in." },
      { day: "Day 2", title: "Rome Tour", details: "Guided city highlights." },
      { day: "Day 3", title: "Rome to Florence", details: "Intercity transfer and exploration." },
      { day: "Day 4", title: "Florence to Venice", details: "Transfer and canal district walk." },
      { day: "Day 5", title: "Venice to Zurich", details: "Travel to Swiss leg." },
      { day: "Day 6", title: "Zurich Excursion", details: "Alpine scenic day trip." },
      { day: "Day 7", title: "Zurich to Paris", details: "Transfer and evening free." },
      { day: "Day 8", title: "Paris Tour", details: "Half-day city exploration." },
      { day: "Day 9", title: "Paris to Rouen", details: "Regional transit and stay." },
      { day: "Day 10", title: "Rouen to London", details: "Travel and check-in." },
      { day: "Day 11", title: "London City Tour", details: "Classic city landmarks." },
      { day: "Day 12", title: "London to Colchester", details: "Road transfer." },
      { day: "Day 13", title: "Colchester to Amsterdam", details: "Ferry and transfer sequence." },
      { day: "Day 14", title: "Amsterdam Highlights", details: "Countryside and city combo tour." },
      { day: "Day 15", title: "Amsterdam to Berlin", details: "Intercity transfer." },
      { day: "Day 16", title: "Departure", details: "Final transfer and exit." },
    ],
    hotelRating: 4,
  },
  {
    id: 12,
    slug: "majestic-europe-holiday",
    title: "Majestic Europe Holiday",
    location: "Europe",
    category: "Europe",
    duration: "15D / 14N",
    days: 15,
    nights: 14,
    price: "2,78,200",
    priceValue: 278200,
    rating: 4.8,
    image: imagePool[5],
    gallery: [imagePool[5], imagePool[6], imagePool[1], imagePool[3]],
    cities: ["London", "Paris", "Zurich", "Rome"],
    overview:
      "A grand Europe circuit balancing iconic capitals, mountain landscapes, and cultural experiences.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in London", details: "Airport pickup and hotel check-in." },
      { day: "Day 2", title: "London Highlights", details: "Guided city orientation." },
      { day: "Day 3", title: "Leisure in London", details: "Optional experiences and shopping." },
      { day: "Day 4", title: "London to Paris", details: "Transfer and evening free." },
      { day: "Day 5", title: "Paris Full Day", details: "Landmarks and cultural stops." },
      { day: "Day 6", title: "Paris to Zurich", details: "Transfer to Swiss segment." },
      { day: "Day 7", title: "Swiss Excursion", details: "Scenic mountain experience." },
      { day: "Day 8", title: "Swiss Leisure", details: "Open day." },
      { day: "Day 9", title: "Transit to Italy", details: "Cross-border transfer." },
      { day: "Day 10", title: "Rome City Tour", details: "Guided old-city walk." },
      { day: "Day 11", title: "Rome Leisure", details: "Optional museum / food trails." },
      { day: "Day 12", title: "Regional Day Tour", details: "Day excursion nearby." },
      { day: "Day 13", title: "Buffer Leisure Day", details: "Relax and explore at your pace." },
      { day: "Day 14", title: "Departure Prep", details: "Last-minute shopping and stay." },
      { day: "Day 15", title: "Final Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 13,
    slug: "timeless-european-tale",
    title: "Timeless European Tale",
    location: "Europe",
    category: "Europe",
    duration: "14D / 13N",
    days: 14,
    nights: 13,
    price: "1,92,600",
    priceValue: 192600,
    rating: 4.7,
    image: imagePool[4],
    gallery: [imagePool[4], imagePool[1], imagePool[5], imagePool[2]],
    cities: ["Berlin", "Hanover", "Paris", "Zurich"],
    overview:
      "A timeless Europe route blending central and western Europe with city-focused sightseeing.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Berlin", details: "Pickup and check-in." },
      { day: "Day 2", title: "Berlin Tour", details: "Major attractions and historic quarter." },
      { day: "Day 3", title: "Berlin to Hanover", details: "Road transfer with evening free." },
      { day: "Day 4", title: "Hanover Sightseeing", details: "City walk and local experiences." },
      { day: "Day 5", title: "Transit Day", details: "Travel to next city." },
      { day: "Day 6", title: "Paris Segment", details: "Paris city exploration." },
      { day: "Day 7", title: "Paris Leisure", details: "Open day." },
      { day: "Day 8", title: "Swiss Transfer", details: "Move to Swiss base." },
      { day: "Day 9", title: "Alpine Excursion", details: "Scenic mountain route." },
      { day: "Day 10", title: "City + Culture", details: "Museums and old town zones." },
      { day: "Day 11", title: "Leisure", details: "Free exploration." },
      { day: "Day 12", title: "Regional Tour", details: "Nearby town visit." },
      { day: "Day 13", title: "Wrap-up Day", details: "Shopping and packing." },
      { day: "Day 14", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 14,
    slug: "canals-cobblestones-beyond",
    title: "Canals, Cobblestones & Beyond",
    location: "Europe",
    category: "Europe",
    duration: "9D / 8N",
    days: 9,
    nights: 8,
    price: "1,07,000",
    priceValue: 107000,
    rating: 4.7,
    image: imagePool[6],
    gallery: [imagePool[6], imagePool[5], imagePool[1], imagePool[2]],
    cities: ["Amsterdam", "Frankfurt"],
    overview:
      "A compact Europe holiday around canal cities, old quarters, and modern city breaks.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Amsterdam", details: "Airport pickup and check-in." },
      { day: "Day 2", title: "Amsterdam Highlights", details: "Canals and city tour." },
      { day: "Day 3", title: "Countryside Excursion", details: "Zaanse Schans and nearby villages." },
      { day: "Day 4", title: "Leisure in Amsterdam", details: "Open day for museums and cafés." },
      { day: "Day 5", title: "Transfer to Frankfurt", details: "Intercity transfer and stay." },
      { day: "Day 6", title: "Frankfurt Walk", details: "Historic center and riverside." },
      { day: "Day 7", title: "Regional Day Tour", details: "Optional nearby destination." },
      { day: "Day 8", title: "Leisure Day", details: "Shopping and local experiences." },
      { day: "Day 9", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 15,
    slug: "jordan-adventure",
    title: "Jordan Adventure",
    location: "Jordan",
    category: "Adventure",
    duration: "8D / 7N",
    days: 8,
    nights: 7,
    price: "1,08,700",
    priceValue: 108700,
    rating: 4.7,
    image: imagePool[3],
    gallery: [imagePool[3], imagePool[6], imagePool[5], imagePool[1]],
    cities: ["Amman", "Petra", "Wadi Rum"],
    overview:
      "Adventure-focused Jordan program covering cultural landmarks and desert landscapes.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Amman", details: "Airport transfer and check-in." },
      { day: "Day 2", title: "Amman City Tour", details: "Historical city points and markets." },
      { day: "Day 3", title: "Petra Excursion", details: "Full-day guided exploration." },
      { day: "Day 4", title: "Wadi Rum Experience", details: "Desert camp and jeep ride options." },
      { day: "Day 5", title: "Dead Sea Segment", details: "Leisure and relaxation." },
      { day: "Day 6", title: "Cultural Circuit", details: "Regional highlights." },
      { day: "Day 7", title: "Leisure", details: "Open day." },
      { day: "Day 8", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 16,
    slug: "lakshadweep-dreams-islands-adventures-tranquility",
    title: "Lakshadweep Dreams Islands, Adventures & Tranquility",
    location: "Lakshadweep",
    category: "Adventure",
    duration: "4D / 3N",
    days: 4,
    nights: 3,
    price: "47,600",
    priceValue: 47600,
    rating: 4.8,
    image: imagePool[0],
    gallery: [imagePool[0], imagePool[3], imagePool[2], imagePool[5]],
    cities: ["Lakshadweep"],
    overview:
      "Island-focused India escape combining relaxation and marine adventure activities.",
    inclusions: [...baseInclusions, "Selected activities included"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival", details: "Transfer and check-in at island stay." },
      { day: "Day 2", title: "Water Activities", details: "Guided sessions and beach time." },
      { day: "Day 3", title: "Island Exploration", details: "Scenic routes and leisure." },
      { day: "Day 4", title: "Departure", details: "Transfer and tour completion." },
    ],
    hotelRating: 3,
  },
  {
    id: 17,
    slug: "dubais-golden-mirage-adventure",
    title: "Dubai's Golden Mirage Adventure",
    location: "Dubai",
    category: "Urban Oasis",
    duration: "8D / 7N",
    days: 8,
    nights: 7,
    price: "22,500",
    priceValue: 22500,
    rating: 5,
    image: imagePool[7],
    gallery: [imagePool[7], imagePool[6], imagePool[5], imagePool[1]],
    cities: ["Dubai", "Abu Dhabi"],
    overview:
      "An immersive Dubai holiday with iconic city attractions, adventure parks, desert safari, and premium leisure experiences.",
    inclusions: [
      ...baseInclusions,
      "Burj Khalifa with Fountain Show",
      "IMG Worlds of Adventure",
      "Desert Safari with BBQ Dinner",
      "Atlantis and Aquaventure visit",
    ],
    exclusions: [
      ...baseExclusions,
      "Dirham Tourism fee payable at hotel",
      "Visa and insurance",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival + Burj Khalifa + Fountain Show", details: "Airport transfer, check-in, then evening Burj Khalifa 124th/125th floor with fountain show." },
      { day: "Day 2", title: "IMG Worlds of Adventure", details: "Full day at IMG theme park with hotel transfer." },
      { day: "Day 3", title: "Dubai City Tour", details: "Museum, souks, Palm Jumeirah photo stop, Al Fahidi district, and Dubai Frame views." },
      { day: "Day 4", title: "Desert Safari with BBQ Dinner", details: "Dune bashing, cultural performances, and dinner at desert camp." },
      { day: "Day 5", title: "Miracle Garden + Global Village + Butterfly Garden", details: "Triple-attraction day with floral park and evening cultural village." },
      { day: "Day 6", title: "Dubai Frame", details: "Panoramic old vs new Dubai experience at Dubai Frame." },
      { day: "Day 7", title: "Atlantis + Aquaventure", details: "Luxury Atlantis visit and waterpark adventure day." },
      { day: "Day 8", title: "Departure", details: "Breakfast and private airport transfer." },
    ],
    hotelRating: 3,
  },
  {
    id: 18,
    slug: "dazzling-dubai-vacation",
    title: "Dazzling Dubai Vacation",
    location: "Dubai",
    category: "Urban Oasis",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "25,900",
    priceValue: 25900,
    rating: 4.9,
    image: imagePool[7],
    gallery: [imagePool[7], imagePool[5], imagePool[10], imagePool[1]],
    cities: ["Dubai", "Abu Dhabi"],
    overview:
      "A compact Dubai circuit balancing luxury skyline moments with thrill-based attractions and signature experiences.",
    inclusions: [
      ...baseInclusions,
      "Ain Dubai visit",
      "Burj Khalifa and Global Village",
      "Ski Dubai and Desert Safari",
      "Aquaventure and Lost Chambers",
    ],
    exclusions: [
      ...baseExclusions,
      "Dirham Tourism fee payable at hotel",
      "Visa and insurance",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival + Ain Dubai", details: "Private airport transfer and sunset view from Ain Dubai observation wheel." },
      { day: "Day 2", title: "Burj Khalifa + Global Village", details: "Morning skyline views and evening cultural shopping village." },
      { day: "Day 3", title: "Ski Dubai + Desert Safari", details: "Indoor snow adventure and evening desert safari with BBQ." },
      { day: "Day 4", title: "Aquaventure + Lost Chambers", details: "Waterpark thrills and marine aquarium walk-through." },
      { day: "Day 5", title: "Dubai Mall Aquarium + Miracle Garden + Butterfly Garden", details: "City aquarium and floral attractions day." },
      { day: "Day 6", title: "Departure", details: "Private transfer to Dubai International Airport." },
    ],
    hotelRating: 3,
  },
  {
    id: 19,
    slug: "thailand-luxury-skyline-getaway",
    title: "Thailand Luxury Skyline Getaway",
    location: "Thailand",
    category: "South East Asia",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "33,500",
    priceValue: 33500,
    rating: 4.8,
    image: imagePool[8],
    gallery: [imagePool[8], imagePool[0], imagePool[1], imagePool[5]],
    cities: ["Bangkok", "Pattaya"],
    overview:
      "Premium Thailand itinerary with nightlife, island tours, and family-friendly experiences.",
    inclusions: [...baseInclusions, "Coral Island experience"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive Bangkok", details: "Airport transfer and check-in." },
      { day: "Day 2", title: "Bangkok Highlights", details: "City temple and shopping tour." },
      { day: "Day 3", title: "Transfer to Pattaya", details: "Road transfer and leisure." },
      { day: "Day 4", title: "Coral Island", details: "Full-day island activity." },
      { day: "Day 5", title: "Leisure", details: "Optional activities and relaxation." },
      { day: "Day 6", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 20,
    slug: "bali-bliss-cultural-retreat",
    title: "Bali Bliss Cultural Retreat",
    location: "Indonesia",
    category: "Island Escape",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "42,900",
    priceValue: 42900,
    rating: 4.9,
    image: imagePool[0],
    gallery: [imagePool[0], imagePool[6], imagePool[8], imagePool[5]],
    cities: ["Kuta", "Ubud"],
    overview:
      "A deeper Bali immersion featuring beaches, cultural temples, and scenic highland experiences.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Bali", details: "Airport transfer and resort check-in." },
      { day: "Day 2", title: "Kuta Beach Day", details: "Leisure and beachfront exploration." },
      { day: "Day 3", title: "Ubud Circuit", details: "Rice terrace and temple experience." },
      { day: "Day 4", title: "Waterfall Trail", details: "Nature day with local stops." },
      { day: "Day 5", title: "Sunset Temple Tour", details: "Iconic sunset coastal temples." },
      { day: "Day 6", title: "Leisure", details: "Optional spa and market time." },
      { day: "Day 7", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 21,
    slug: "vietnam-coastal-delight",
    title: "Vietnam Coastal Delight",
    location: "Vietnam",
    category: "South East Asia",
    duration: "8D / 7N",
    days: 8,
    nights: 7,
    price: "34,800",
    priceValue: 34800,
    rating: 4.8,
    image: imagePool[3],
    gallery: [imagePool[3], imagePool[9], imagePool[1], imagePool[6]],
    cities: ["Ho Chi Minh", "Phu Quoc", "Da Nang"],
    overview:
      "Balanced Vietnam route with heritage, food trails, and coastal leisure.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive Ho Chi Minh", details: "Transfer and orientation." },
      { day: "Day 2", title: "City + Cu Chi", details: "Cultural and historical day tour." },
      { day: "Day 3", title: "Fly to Da Nang", details: "Transit and evening leisure." },
      { day: "Day 4", title: "Da Nang & Hoi An", details: "City and old-town exploration." },
      { day: "Day 5", title: "Fly to Phu Quoc", details: "Beach destination transfer." },
      { day: "Day 6", title: "Island Activity", details: "Snorkeling or island tour options." },
      { day: "Day 7", title: "Leisure", details: "Resort day." },
      { day: "Day 8", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 22,
    slug: "singapore-urban-family-escape",
    title: "Singapore Urban Family Escape",
    location: "Singapore",
    category: "South East Asia",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "45,500",
    priceValue: 45500,
    rating: 4.7,
    image: imagePool[9],
    gallery: [imagePool[9], imagePool[1], imagePool[6], imagePool[5]],
    cities: ["Singapore"],
    overview:
      "An urban escape packed with attractions, skyline, and family entertainment in Singapore.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival", details: "Transfer and Marina Bay orientation." },
      { day: "Day 2", title: "City and Gardens", details: "City highlights with evening light show." },
      { day: "Day 3", title: "Sentosa", details: "Island attractions and waterfront time." },
      { day: "Day 4", title: "Universal Studios", details: "Theme park full day." },
      { day: "Day 5", title: "Departure", details: "Airport transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 23,
    slug: "assam-brahmaputra-tea-trails",
    title: "Assam Brahmaputra Tea Trails",
    location: "Assam",
    category: "Monsoon Magic",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "21,800",
    priceValue: 21800,
    rating: 4.8,
    image: "/hero-bg.png",
    gallery: ["/hero-bg.png", "/thailand.png", "/singapore.png", "/bali.png"],
    cities: ["Guwahati", "Kaziranga", "Jorhat"],
    overview:
      "A North East India holiday focused on tea estates, river landscapes, and wildlife experiences in Assam.",
    inclusions: [...baseInclusions, "Kaziranga jeep safari", "Sunset river cruise"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Guwahati", details: "Airport transfer and evening riverfront orientation." },
      { day: "Day 2", title: "Kamakhya & City Tour", details: "Temple visit and local market exploration." },
      { day: "Day 3", title: "Transfer to Kaziranga", details: "Road journey and evening cultural program." },
      { day: "Day 4", title: "Kaziranga Safari", details: "Morning and afternoon safari with local guide." },
      { day: "Day 5", title: "Tea Estate Circuit", details: "Drive to Jorhat and tea garden experience." },
      { day: "Day 6", title: "Departure", details: "Transfer for onward travel." },
    ],
    hotelRating: 3,
  },
  {
    id: 24,
    slug: "meghalaya-living-root-bridges",
    title: "Meghalaya Living Root Bridges",
    location: "Meghalaya",
    category: "Monsoon Magic",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "19,500",
    priceValue: 19500,
    rating: 4.9,
    image: "/thailand.png",
    gallery: ["/thailand.png", "/hero-bg.png", "/bali.png", "/maldives.png"],
    cities: ["Shillong", "Cherrapunji", "Dawki"],
    overview:
      "A scenic Meghalaya package covering waterfalls, limestone caves, and iconic living root bridges.",
    inclusions: [...baseInclusions, "Mawlynnong day excursion"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival and Transfer", details: "Arrive and transfer to Shillong with evening leisure." },
      { day: "Day 2", title: "Shillong Local Tour", details: "Visit viewpoints, lake, and local attractions." },
      { day: "Day 3", title: "Cherrapunji Excursion", details: "Waterfalls, caves, and monsoon landscapes." },
      { day: "Day 4", title: "Dawki & Mawlynnong", details: "River boating and village tour." },
      { day: "Day 5", title: "Departure", details: "Drive back for onward transfer." },
    ],
    hotelRating: 3,
  },
  {
    id: 25,
    slug: "arunachal-tawang-highland-expedition",
    title: "Arunachal Tawang Highland Expedition",
    location: "Arunachal Pradesh",
    category: "Summer Escapes",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "32,700",
    priceValue: 32700,
    rating: 4.8,
    image: "/singapore.png",
    gallery: ["/singapore.png", "/hero-bg.png", "/thailand.png", "/dubai.png"],
    cities: ["Bhalukpong", "Dirang", "Tawang"],
    overview:
      "A high-altitude Himalayan journey through monasteries, mountain passes, and dramatic North East landscapes.",
    inclusions: [...baseInclusions, "Inner line permit assistance"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Assam", details: "Pickup and transfer to foothill stay." },
      { day: "Day 2", title: "Drive to Dirang", details: "Mountain drive with photo stops." },
      { day: "Day 3", title: "Dirang to Tawang", details: "Sela Pass transit and monastery views." },
      { day: "Day 4", title: "Tawang Exploration", details: "Monastery, war memorial, and town market." },
      { day: "Day 5", title: "Highland Excursion", details: "Nearby valleys and lakes visit." },
      { day: "Day 6", title: "Return Journey", details: "Drive back to Dirang / Bomdila." },
      { day: "Day 7", title: "Departure", details: "Transfer for onward travel." },
    ],
    hotelRating: 3,
  },
  {
    id: 26,
    slug: "nagaland-hornbill-cultural-circuit",
    title: "Nagaland Hornbill Cultural Circuit",
    location: "Nagaland",
    category: "Festive Specials",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "24,900",
    priceValue: 24900,
    rating: 4.7,
    image: "/maldives.png",
    gallery: ["/maldives.png", "/hero-bg.png", "/dubai.png", "/bali.png"],
    cities: ["Kohima", "Kisama", "Dimapur"],
    overview:
      "A festival-led cultural journey through Nagaland with local heritage interactions and scenic hill drives.",
    inclusions: [...baseInclusions, "Festival ground transfer"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Dimapur", details: "Meet and transfer to Kohima." },
      { day: "Day 2", title: "Kohima Heritage", details: "Local market and heritage village walk." },
      { day: "Day 3", title: "Festival Experience", details: "Full-day Hornbill activity zone visit." },
      { day: "Day 4", title: "Scenic Excursion", details: "Nearby viewpoints and local cuisine trail." },
      { day: "Day 5", title: "Departure", details: "Transfer to airport/railway." },
    ],
    hotelRating: 3,
  },
  {
    id: 27,
    slug: "mizoram-hills-and-handloom-trail",
    title: "Mizoram Hills and Handloom Trail",
    location: "Mizoram",
    category: "Summer Escapes",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "23,400",
    priceValue: 23400,
    rating: 4.7,
    image: "/bali.png",
    gallery: ["/bali.png", "/hero-bg.png", "/singapore.png", "/thailand.png"],
    cities: ["Aizawl", "Reiek", "Hmuifang"],
    overview:
      "A serene hillside itinerary featuring panoramic views, local crafts, and gentle nature walks.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Aizawl", details: "Airport transfer and local orientation." },
      { day: "Day 2", title: "Aizawl City Tour", details: "Museums, markets, and handloom centers." },
      { day: "Day 3", title: "Reiek Day Tour", details: "Scenic hilltop excursion and village stop." },
      { day: "Day 4", title: "Hmuifang Nature Trail", details: "Leisurely nature and food experience." },
      { day: "Day 5", title: "Departure", details: "Transfer for onward travel." },
    ],
    hotelRating: 3,
  },
  {
    id: 28,
    slug: "manipur-loktak-valley-retreat",
    title: "Manipur Loktak Valley Retreat",
    location: "Manipur",
    category: "Summer Escapes",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "22,900",
    priceValue: 22900,
    rating: 4.8,
    image: "/thailand.png",
    gallery: ["/thailand.png", "/hero-bg.png", "/maldives.png", "/singapore.png"],
    cities: ["Imphal", "Loktak Lake", "Moirang"],
    overview:
      "A calm Manipur retreat combining lake landscapes, cultural landmarks, and local cuisine experiences.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Imphal", details: "Airport pickup and check-in." },
      { day: "Day 2", title: "Imphal Cultural Circuit", details: "Market and memorial sightseeing." },
      { day: "Day 3", title: "Loktak Lake Visit", details: "Boat ride and floating island viewpoints." },
      { day: "Day 4", title: "Moirang Excursion", details: "Historic tour and local interaction." },
      { day: "Day 5", title: "Departure", details: "Transfer for return journey." },
    ],
    hotelRating: 3,
  },
  {
    id: 29,
    slug: "sikkim-himalayan-panorama",
    title: "Sikkim Himalayan Panorama",
    location: "Sikkim",
    category: "Winter Wonderland",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "26,600",
    priceValue: 26600,
    rating: 4.9,
    image: "/singapore.png",
    gallery: ["/singapore.png", "/hero-bg.png", "/thailand.png", "/maldives.png"],
    cities: ["Gangtok", "Tsomgo", "Pelling"],
    overview:
      "A mountain holiday in Sikkim featuring snow views, monastery circuits, and high-altitude lakes.",
    inclusions: [...baseInclusions, "Permit support for high-altitude sightseeing"],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Gangtok", details: "Transfer and evening market walk." },
      { day: "Day 2", title: "Gangtok Sightseeing", details: "Monastery and local viewpoints." },
      { day: "Day 3", title: "Tsomgo Excursion", details: "Day trip to alpine lake area." },
      { day: "Day 4", title: "Transfer to Pelling", details: "Scenic drive through mountain roads." },
      { day: "Day 5", title: "Pelling Highlights", details: "Skywalk, monasteries, and valley views." },
      { day: "Day 6", title: "Departure", details: "Transfer for onward route." },
    ],
    hotelRating: 4,
  },
  {
    id: 30,
    slug: "himachal-snow-and-valley-escape",
    title: "Himachal Snow and Valley Escape",
    location: "Himachal",
    category: "Winter Wonderland",
    duration: "6D / 5N",
    days: 6,
    nights: 5,
    price: "25,400",
    priceValue: 25400,
    rating: 4.8,
    image: "/hero-bg.png",
    gallery: ["/hero-bg.png", "/thailand.png", "/dubai.png", "/bali.png"],
    cities: ["Shimla", "Kullu", "Manali"],
    overview:
      "A classic Himachal route blending hill station charm, snowy landscapes, and adventure-friendly stopovers.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Shimla", details: "Road transfer and mall road stroll." },
      { day: "Day 2", title: "Shimla Local Tour", details: "Heritage points and ridge viewpoints." },
      { day: "Day 3", title: "Transfer to Manali", details: "Scenic drive via Kullu valley." },
      { day: "Day 4", title: "Manali & Solang", details: "Adventure and snow-point options." },
      { day: "Day 5", title: "Leisure in Manali", details: "Cafes, markets, and optional activities." },
      { day: "Day 6", title: "Departure", details: "Return transfer." },
    ],
    hotelRating: 4,
  },
  {
    id: 31,
    slug: "delhi-agra-royal-weekend",
    title: "Delhi Agra Royal Weekend",
    location: "Delhi Agra",
    category: "Festive Specials",
    duration: "4D / 3N",
    days: 4,
    nights: 3,
    price: "14,800",
    priceValue: 14800,
    rating: 4.7,
    image: "/dubai.png",
    gallery: ["/dubai.png", "/hero-bg.png", "/thailand.png", "/singapore.png"],
    cities: ["New Delhi", "Agra"],
    overview:
      "A short heritage package for iconic Mughal landmarks and vibrant Old Delhi experiences.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", details: "Airport/railway pickup and check-in." },
      { day: "Day 2", title: "Delhi Sightseeing", details: "Old and New Delhi city tour." },
      { day: "Day 3", title: "Agra Day Journey", details: "Taj Mahal and fort circuit." },
      { day: "Day 4", title: "Departure", details: "Return and transfer." },
    ],
    hotelRating: 3,
  },
  {
    id: 32,
    slug: "south-india-temple-coastline-trail",
    title: "South India Temple and Coastline Trail",
    location: "South India",
    category: "Summer Escapes",
    duration: "7D / 6N",
    days: 7,
    nights: 6,
    price: "34,200",
    priceValue: 34200,
    rating: 4.8,
    image: "/maldives.png",
    gallery: ["/maldives.png", "/bali.png", "/hero-bg.png", "/thailand.png"],
    cities: ["Chennai", "Mahabalipuram", "Pondicherry", "Madurai"],
    overview:
      "A South India circuit combining temple architecture, coastal heritage towns, and local culinary experiences.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Chennai", details: "Pickup and city orientation." },
      { day: "Day 2", title: "Mahabalipuram Excursion", details: "Shore temple and sculpture sites." },
      { day: "Day 3", title: "Pondicherry Transfer", details: "French quarter and promenade walk." },
      { day: "Day 4", title: "Travel to Madurai", details: "Intercity transfer and evening leisure." },
      { day: "Day 5", title: "Temple Trail", details: "Guided heritage tour and markets." },
      { day: "Day 6", title: "Leisure Day", details: "Optional local tours." },
      { day: "Day 7", title: "Departure", details: "Airport/railway drop." },
    ],
    hotelRating: 4,
  },
  {
    id: 33,
    slug: "mumbai-konkan-city-and-coast",
    title: "Mumbai Konkan City and Coast",
    location: "Mumbai",
    category: "Festive Specials",
    duration: "5D / 4N",
    days: 5,
    nights: 4,
    price: "23,600",
    priceValue: 23600,
    rating: 4.7,
    image: "/singapore.png",
    gallery: ["/singapore.png", "/hero-bg.png", "/maldives.png", "/dubai.png"],
    cities: ["Mumbai", "Alibaug", "Lonavala"],
    overview:
      "A lively Mumbai holiday with city icons, coastal drives, and short scenic escapes.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrive in Mumbai", details: "Transfer and Marine Drive evening." },
      { day: "Day 2", title: "Mumbai Heritage Tour", details: "Gateway, Colaba, and local experiences." },
      { day: "Day 3", title: "Alibaug Excursion", details: "Ferry and coastal leisure day." },
      { day: "Day 4", title: "Lonavala Day Trip", details: "Hill drive and viewpoints." },
      { day: "Day 5", title: "Departure", details: "Transfer for onward journey." },
    ],
    hotelRating: 4,
  },
  {
    id: 34,
    slug: "incredible-india-grand-circuit",
    title: "Incredible India Grand Circuit",
    location: "India",
    category: "Domestic",
    duration: "9D / 8N",
    days: 9,
    nights: 8,
    price: "39,900",
    priceValue: 39900,
    rating: 4.9,
    image: "/hero-bg.png",
    gallery: ["/hero-bg.png", "/dubai.png", "/thailand.png", "/singapore.png"],
    cities: ["Delhi", "Agra", "Jaipur", "Varanasi"],
    overview:
      "A comprehensive India starter circuit for travelers looking to blend heritage, culture, and city highlights.",
    inclusions: [...baseInclusions],
    exclusions: [...baseExclusions],
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", details: "Airport transfer and check-in." },
      { day: "Day 2", title: "Delhi City Tour", details: "Monuments and market exploration." },
      { day: "Day 3", title: "Transfer to Agra", details: "Road journey and local evening." },
      { day: "Day 4", title: "Agra to Jaipur", details: "Taj visit and transfer onward." },
      { day: "Day 5", title: "Jaipur Heritage Day", details: "Fort and palace experiences." },
      { day: "Day 6", title: "Fly/Train to Varanasi", details: "Transit and evening ghat views." },
      { day: "Day 7", title: "Varanasi Spiritual Circuit", details: "Boat ride and old city walk." },
      { day: "Day 8", title: "Return Transit", details: "Travel back to Delhi." },
      { day: "Day 9", title: "Departure", details: "Final transfer." },
    ],
    hotelRating: 4,
  },
]

export const tripCategories = [
  "All",
  ...Array.from(new Set(tripPackages.map((trip) => trip.category))),
]

const destinationPackageMap: Record<string, string[]> = {
  india: ["beautiful-taj-mahal-tour", "golden-triangle-tour-package", "incredible-india-grand-circuit"],
  assam: ["assam-brahmaputra-tea-trails"],
  meghalaya: ["meghalaya-living-root-bridges"],
  "arunachal-pradesh": ["arunachal-tawang-highland-expedition"],
  arunachal: ["arunachal-tawang-highland-expedition"],
  nagaland: ["nagaland-hornbill-cultural-circuit"],
  mizoram: ["mizoram-hills-and-handloom-trail"],
  manipur: ["manipur-loktak-valley-retreat"],
  sikkim: ["sikkim-himalayan-panorama"],
  himachal: ["himachal-snow-and-valley-escape"],
  "delhi-agra": ["delhi-agra-royal-weekend", "golden-triangle-tour-package"],
  delhi: ["beautiful-taj-mahal-tour", "golden-triangle-tour-package", "delhi-agra-royal-weekend"],
  "south-india": ["south-india-temple-coastline-trail"],
  mumbai: ["mumbai-konkan-city-and-coast"],
  "summer-escapes": [
    "arunachal-tawang-highland-expedition",
    "mizoram-hills-and-handloom-trail",
    "manipur-loktak-valley-retreat",
    "south-india-temple-coastline-trail",
  ],
  "winter-wonderland": ["sikkim-himalayan-panorama", "himachal-snow-and-valley-escape"],
  "monsoon-magic": ["assam-brahmaputra-tea-trails", "meghalaya-living-root-bridges"],
  "festive-specials": [
    "nagaland-hornbill-cultural-circuit",
    "delhi-agra-royal-weekend",
    "mumbai-konkan-city-and-coast",
  ],
  thailand: ["wonders-of-thailand", "mesmerizing-phuket-holiday", "thailand-luxury-skyline-getaway"],
  bali: ["bali-adventure-beach-escape", "bali-bliss-cultural-retreat"],
  dubai: ["dubai-delights", "dubais-golden-mirage-adventure", "dazzling-dubai-vacation"],
  malaysia: ["singapore-malaysia-family-package"],
  singapore: ["singapore-malaysia-family-package", "singapore-urban-family-escape"],
  vietnam: ["ultimate-vietnam-experience", "vietnam-coastal-delight"],
  phuket: ["mesmerizing-phuket-holiday", "thailand-luxury-skyline-getaway"],
  lakshadweep: ["lakshadweep-dreams-islands-adventures-tranquility"],
  jordan: ["jordan-adventure"],
  europe: ["grand-european-discovery"],
  swiss: ["europe-signature-experience", "grand-european-discovery"],
  switzerland: ["europe-signature-experience"],
  paris: ["europe-signature-experience", "grand-european-discovery"],
  italy: ["grand-european-discovery", "scenic-european-journey"],
  amsterdam: ["canals-cobblestones-beyond"],
  abudhabi: ["dubai-delights"],
  maldives: ["wonders-of-thailand"],
  egypt: ["grand-european-discovery"],
  turkey: ["timeless-european-tale"],
}

export function getTripBySlug(slug: string): TripPackage | undefined {
  const normalizedSlug = slug.toLowerCase()
  const exactMatch = tripPackages.find((trip) => trip.slug === normalizedSlug)
  if (exactMatch) return exactMatch

  const aliasTargets = destinationPackageMap[normalizedSlug]
  if (aliasTargets?.length) {
    return tripPackages.find((trip) => aliasTargets.includes(trip.slug))
  }

  return tripPackages.find((trip) =>
    trip.location.toLowerCase().includes(normalizedSlug)
  )
}

export function getTripByExactSlug(slug: string): TripPackage | undefined {
  const normalizedSlug = slug.toLowerCase()
  return tripPackages.find((trip) => trip.slug === normalizedSlug)
}

function normalizeTripToken(value: string): string {
  const cleanedValue = value
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?Happy Journey\.com\//, "/")
    .replace(/^\/package\//, "")
    .replace(/^package\//, "")

  return cleanedValue
    .replace(/^\/trips\/destination\//, "")
    .replace(/^trips\/destination\//, "")
    .replace(/^\/destination\//, "")
    .replace(/^\/trips\//, "")
    .replace(/^destination-/, "")
    .replace(/\/+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9- ]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function getPackagesForDestinationSlug(slug: string): TripPackage[] {
  const normalized = normalizeTripToken(slug)
  const mappedSlugs = destinationPackageMap[normalized]

  if (mappedSlugs?.length) {
    const mappedPackages = mappedSlugs
      .map((mappedSlug) => tripPackages.find((trip) => trip.slug === mappedSlug))
      .filter((trip): trip is TripPackage => Boolean(trip))

    if (mappedPackages.length > 0) return mappedPackages
  }

  return tripPackages.filter((trip) => {
    const titleToken = normalizeTripToken(trip.title)
    const locationToken = normalizeTripToken(trip.location)
    const cityTokens = trip.cities.map((city) => normalizeTripToken(city))

    return (
      titleToken.includes(normalized) ||
      locationToken.includes(normalized) ||
      cityTokens.some((city) => city.includes(normalized))
    )
  })
}

export function getDestinationLabel(slug: string): string {
  const normalized = normalizeTripToken(slug)
  if (!normalized) return "Destination"

  return normalized
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export function getDestinationRouteFromInput(input?: string): string {
  if (!input) return "/trips"

  const normalized = normalizeTripToken(input)
  if (!normalized) return "/trips"

  return `/trips/destination/${normalized}`
}

export function getTripRouteFromDestination(input?: string): string {
  if (!input) return "/trips"

  const normalized = normalizeTripToken(input)
  if (!normalized) return "/trips"

  const fromAlias = destinationPackageMap[normalized]?.[0]
  if (fromAlias) return `/trips/destination/${normalized}`

  const directMatch = tripPackages.find((trip) => trip.slug === normalized)
  if (directMatch) return `/trips/destination/${normalized}`

  const fuzzyMatch = tripPackages.find((trip) => {
    const titleToken = normalizeTripToken(trip.title)
    const locationToken = normalizeTripToken(trip.location)
    return (
      titleToken.includes(normalized) ||
      normalized.includes(titleToken) ||
      locationToken.includes(normalized) ||
      normalized.includes(locationToken)
    )
  })

  return fuzzyMatch ? `/trips/destination/${normalized}` : "/trips"
}
