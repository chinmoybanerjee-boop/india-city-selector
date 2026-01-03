import '../styles/globals.css'
import React, { useState } from 'react';
import { Search, Home, TrendingUp, Heart, Wifi, GraduationCap, Briefcase, Car, Shield, Wind, DollarSign, ChevronDown, ChevronUp, Mail, MessageSquare, MapPin, Building2, Droplets, Users, AlertCircle, Star, Filter } from 'lucide-react';

// Comprehensive city data
const citiesData = [
  {
    id: 1,
    name: "Bangalore",
    state: "Karnataka",
    costOfLiving: 75,
    pollution: 65,
    healthcare: 90,
    safety: 80,
    internet: 95,
    education: 92,
    jobMarket: 95,
    traffic: 40,
    waterAvailability: 55,
    waterSource: "Cauvery River + Tankers (frequent shortages)",
    socialVibe: "Liberal",
    weather: "Pleasant year-round (15-30°C)",
    overallScore: 79,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400",
    description: "India's Silicon Valley with cosmopolitan culture and startup ecosystem",
    goodThings: [
      "Best job opportunities in IT/Tech sector",
      "Moderate weather year-round",
      "Vibrant startup culture and innovation hub",
      "Excellent educational institutions (IISc, IIMs)",
      "Diverse food scene and nightlife",
      "High English proficiency"
    ],
    badThings: [
      "Severe traffic congestion (worst in India)",
      "Water scarcity - heavy dependence on tankers",
      "High cost of living and rentals",
      "Infrastructure struggling with rapid growth",
      "Frequent power cuts in some areas"
    ],
    majorAreas: [
      "Koramangala - Hip, trendy with cafes & startups",
      "Whitefield - IT corridor, expat-friendly",
      "Indiranagar - Upscale, restaurants & shopping",
      "HSR Layout - Family-oriented, planned layout",
      "JP Nagar - Established residential area",
      "Electronic City - Tech parks, affordable",
      "Yelahanka - Near airport, upcoming area",
      "Malleshwaram - Traditional, cultural hub"
    ],
    neighborhoods: [
      { 
        name: "Koramangala", 
        housing: ["Sobha City", "Prestige Falcon City", "Mantri Espana"], 
        avgRent: "₹30,000-50,000",
        buyPrice: "₹8,000-15,000/sqft",
        safety: 85,
        highlights: "Startup hub, cafes, young crowd"
      },
      { 
        name: "Whitefield", 
        housing: ["Brigade Gateway", "Prestige Shantiniketan", "Phoenix One"], 
        avgRent: "₹25,000-45,000",
        buyPrice: "₹6,500-12,000/sqft",
        safety: 82,
        highlights: "IT parks, malls, expat community"
      },
      { 
        name: "HSR Layout", 
        housing: ["Mantri Serenity", "Sobha Dream Gardens", "Shriram Chirping Woods"], 
        avgRent: "₹28,000-48,000",
        buyPrice: "₹7,500-13,000/sqft",
        safety: 88,
        highlights: "Family-friendly, parks, schools"
      }
    ],
    publicTransport: "Metro expanding, buses available, heavy reliance on cabs/autos",
    airports: "Kempegowda International Airport (40 km from city center)",
    hospitals: "Manipal, Apollo, Fortis, Narayana Health - World-class facilities"
  },
  {
    id: 2,
    name: "Pune",
    state: "Maharashtra",
    costOfLiving: 70,
    pollution: 60,
    healthcare: 85,
    safety: 85,
    internet: 90,
    education: 88,
    jobMarket: 85,
    traffic: 55,
    waterAvailability: 70,
    waterSource: "Khadakwasla Dam + Municipal supply (mostly adequate)",
    socialVibe: "Moderate to Liberal",
    weather: "Hot summers, pleasant winters (12-38°C)",
    overallScore: 77,
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400",
    description: "Cultural capital of Maharashtra with growing IT sector and student-friendly environment",
    goodThings: [
      "Rich cultural heritage and educational hub",
      "Lower cost of living than Bangalore/Mumbai",
      "Pleasant weather (except summer)",
      "Growing IT and automotive industry",
      "Proximity to hill stations (Lonavala, Mahabaleshwar)",
      "Good balance of traditional and modern"
    ],
    badThings: [
      "Traffic increasing rapidly",
      "Limited metro coverage (under construction)",
      "Hot and dry summers",
      "Job opportunities fewer than Bangalore",
      "Water issues in summer months"
    ],
    majorAreas: [
      "Koregaon Park - Upscale, expat area",
      "Hinjewadi - IT hub, tech parks",
      "Viman Nagar - Airport proximity, modern",
      "Kothrud - Established, family-friendly",
      "Baner - Young professionals, nightlife",
      "Wakad - Affordable, growing rapidly",
      "Magarpatta - Integrated township",
      "Pimpri-Chinchwad - Industrial belt"
    ],
    neighborhoods: [
      { 
        name: "Koregaon Park", 
        housing: ["Amanora Park Town", "Kalpataru Sparkle", "Trump Towers"], 
        avgRent: "₹25,000-40,000",
        buyPrice: "₹7,000-14,000/sqft",
        safety: 90,
        highlights: "Osho Ashram, pubs, expat-friendly"
      },
      { 
        name: "Hinjewadi", 
        housing: ["Blue Ridge", "Megapolis", "Nyati Elysia"], 
        avgRent: "₹20,000-35,000",
        buyPrice: "₹5,500-9,000/sqft",
        safety: 83,
        highlights: "Rajiv Gandhi IT Park, many tech companies"
      },
      { 
        name: "Viman Nagar", 
        housing: ["Gera Imperium", "Nyati Empress", "Kumar Peninsula"], 
        avgRent: "₹22,000-38,000",
        buyPrice: "₹6,000-11,000/sqft",
        safety: 87,
        highlights: "Near airport, Phoenix Mall"
      }
    ],
    publicTransport: "Metro under construction, good bus network, app cabs readily available",
    airports: "Pune International Airport (10 km from city)",
    hospitals: "Ruby Hall, Sahyadri, Jehangir, Deenanath Mangeshkar - Excellent facilities"
  },
  {
    id: 3,
    name: "Hyderabad",
    state: "Telangana",
    costOfLiving: 65,
    pollution: 58,
    healthcare: 88,
    safety: 82,
    internet: 92,
    education: 85,
    jobMarket: 88,
    traffic: 60,
    waterAvailability: 75,
    waterSource: "Godavari, Krishna rivers + Municipal (generally adequate)",
    socialVibe: "Moderate",
    weather: "Hot summers, pleasant winters (15-40°C)",
    overallScore: 77,
    image: "https://images.unsplash.com/photo-1603262110857-c5a1e16e6ec9?w=400",
    description: "Emerging tech hub with rich Nizami heritage and affordable living",
    goodThings: [
      "Lower cost of living than metros",
      "Rapidly growing IT sector (Google, Microsoft, Amazon)",
      "Rich historical heritage (Charminar, Golconda)",
      "Famous biryani and Hyderabadi cuisine",
      "Good infrastructure development",
      "Pleasant winter weather",
      "Metro connectivity improving"
    ],
    badThings: [
      "Extremely hot summers (up to 45°C)",
      "Language barrier (Telugu/Urdu dominant)",
      "Slower pace compared to Bangalore",
      "Lesser diversity in job sectors",
      "Traffic can be chaotic"
    ],
    majorAreas: [
      "Gachibowli - IT hub, modern",
      "Madhapur - HITEC City, tech corridor",
      "Jubilee Hills - Upscale residential",
      "Banjara Hills - Premium, central",
      "Kondapur - Mid-range, IT professionals",
      "Miyapur - Metro connected, growing",
      "Secunderabad - Old city charm",
      "Kukatpally - Established residential"
    ],
    neighborhoods: [
      { 
        name: "Gachibowli", 
        housing: ["My Home Bhooja", "Aparna Sarovar", "Mantri Serenity"], 
        avgRent: "₹20,000-35,000",
        buyPrice: "₹5,500-10,000/sqft",
        safety: 85,
        highlights: "HITEC City, DLF Cyber City nearby"
      },
      { 
        name: "Madhapur", 
        housing: ["Ramky One Galaxia", "Prestige Lakeside", "Aparna Cyber Life"], 
        avgRent: "₹22,000-38,000",
        buyPrice: "₹6,000-11,000/sqft",
        safety: 83,
        highlights: "Tech corridor, cafes, startups"
      },
      { 
        name: "Jubilee Hills", 
        housing: ["My Home Avatar", "Aparna Hill Park", "Vasavi Lavelle"], 
        avgRent: "₹30,000-55,000",
        buyPrice: "₹8,000-18,000/sqft",
        safety: 90,
        highlights: "Premium area, film industry presence"
      }
    ],
    publicTransport: "Expanding Metro, TSRTC buses, affordable auto-rickshaws",
    airports: "Rajiv Gandhi International Airport (24 km from city)",
    hospitals: "Apollo, Yashoda, KIMS, Care - Top-notch healthcare"
  },
  {
    id: 4,
    name: "Chennai",
    state: "Tamil Nadu",
    costOfLiving: 68,
    pollution: 62,
    healthcare: 90,
    safety: 88,
    internet: 88,
    education: 90,
    jobMarket: 80,
    traffic: 50,
    waterAvailability: 60,
    waterSource: "Desalination plants + Tankers (water stress during summer)",
    socialVibe: "Conservative to Moderate",
    weather: "Hot & humid year-round (25-40°C)",
    overallScore: 77,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400",
    description: "Detroit of India - Automotive & manufacturing hub with strong Tamil culture",
    goodThings: [
      "Excellent healthcare facilities (medical tourism)",
      "Strong manufacturing sector (auto, electronics)",
      "Best South Indian food and filter coffee",
      "Safer for women compared to North Indian cities",
      "Strong educational institutions (IIT-M, Anna Uni)",
      "Beach city with Marina Beach",
      "Traditional values and culture"
    ],
    badThings: [
      "Extremely hot and humid climate",
      "Water scarcity - heavy tanker dependence",
      "Language barrier (Tamil dominant)",
      "Conservative social environment",
      "Limited nightlife options",
      "Flooding issues during monsoons",
      "Lesser IT jobs compared to Bangalore/Pune"
    ],
    majorAreas: [
      "OMR (IT Corridor) - Tech parks",
      "Velachery - Residential, IT proximity",
      "Adyar - Upscale, beach access",
      "Anna Nagar - Established, spacious",
      "T. Nagar - Commercial, shopping hub",
      "Thoraipakkam - IT professionals",
      "Porur - Western suburbs, growing",
      "Mylapore - Cultural heart, temples"
    ],
    neighborhoods: [
      { 
        name: "Velachery", 
        housing: ["Casagrand Crescendo", "Olympia Opaline", "Shriram Blue"], 
        avgRent: "₹18,000-32,000",
        buyPrice: "₹5,500-9,500/sqft",
        safety: 86,
        highlights: "Central location, IT corridor access"
      },
      { 
        name: "OMR (Old Mahabalipuram Road)", 
        housing: ["Hiranandani Upscale", "Purva Riviera", "Casagrand"], 
        avgRent: "₹22,000-40,000",
        buyPrice: "₹6,000-11,000/sqft",
        safety: 84,
        highlights: "IT hub, beach proximity, ECR access"
      },
      { 
        name: "Adyar", 
        housing: ["Shriram Chirping Woods", "Prestige Tranquility", "Akshaya"], 
        avgRent: "₹25,000-45,000",
        buyPrice: "₹7,500-14,000/sqft",
        safety: 90,
        highlights: "Posh area, beach, cultural spots"
      }
    ],
    publicTransport: "Metro expanding, extensive bus network, affordable local trains",
    airports: "Chennai International Airport (16 km from city center)",
    hospitals: "Apollo, MIOT, Fortis Malar, Global - World-renowned medical care"
  },
  {
    id: 5,
    name: "Mumbai",
    state: "Maharashtra",
    costOfLiving: 95,
    pollution: 70,
    healthcare: 92,
    safety: 75,
    internet: 93,
    education: 88,
    jobMarket: 90,
    traffic: 35,
    waterAvailability: 80,
    waterSource: "Lakes (Vihar, Tulsi, Tansa) + Municipal (generally good)",
    socialVibe: "Very Liberal",
    weather: "Hot & humid, monsoons (20-35°C)",
    overallScore: 78,
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400",
    description: "Financial capital & city of dreams with unmatched energy and opportunities",
    goodThings: [
      "Maximum career opportunities - finance, media, entertainment",
      "Best public transport in India (local trains)",
      "City that never sleeps - 24/7 lifestyle",
      "Extremely safe for women even at night",
      "Most cosmopolitan and diverse city",
      "Sea-facing lifestyle, beaches",
      "Best nightlife and entertainment"
    ],
    badThings: [
      "Extremely high cost of living - HIGHEST in India",
      "Very expensive real estate (₹20,000-50,000/sqft)",
      "Severe space crunch - tiny apartments",
      "Worst traffic and commute times (2-3 hrs daily)",
      "Overcrowded local trains",
      "Heavy monsoons with flooding",
      "High pollution levels",
      "Work-life balance challenging"
    ],
    majorAreas: [
      "Powai - IT hub, lakes",
      "Bandra - Upscale, celebrities",
      "Andheri - Central, well-connected",
      "Lower Parel - Business district",
      "Worli - Sea-facing, premium",
      "Goregaon - Film City proximity",
      "Thane - Affordable alternative",
      "Navi Mumbai - Planned, spacious"
    ],
    neighborhoods: [
      { 
        name: "Powai", 
        housing: ["Hiranandani Gardens", "Raheja Vihar", "Oberoi Springs"], 
        avgRent: "₹40,000-70,000",
        buyPrice: "₹18,000-32,000/sqft",
        safety: 82,
        highlights: "IT companies, beautiful lakes, premium"
      },
      { 
        name: "Bandra", 
        housing: ["Rizvi Cedar", "Rustomjee Paramount", "Pali Hill"], 
        avgRent: "₹50,000-90,000",
        buyPrice: "₹35,000-70,000/sqft",
        safety: 80,
        highlights: "Celebrities, nightlife, sea-facing"
      },
      { 
        name: "Andheri", 
        housing: ["Oberoi Splendor", "Runwal Gardens", "Lokhandwala"], 
        avgRent: "₹35,000-60,000",
        buyPrice: "₹20,000-40,000/sqft",
        safety: 78,
        highlights: "Central location, airport access"
      }
    ],
    publicTransport: "Excellent - Local trains (lifeline), Metro expanding, buses everywhere",
    airports: "Chhatrapati Shivaji International Airport (South Mumbai 30 km)",
    hospitals: "Breach Candy, Lilavati, Hinduja, Nanavati - Premium healthcare"
  },
  {
    id: 6,
    name: "Gurgaon",
    state: "Haryana",
    costOfLiving: 80,
    pollution: 75,
    healthcare: 85,
    safety: 78,
    internet: 94,
    education: 82,
    jobMarket: 92,
    traffic: 45,
    waterAvailability: 65,
    waterSource: "Groundwater + Tankers (declining water table)",
    socialVibe: "Liberal",
    weather: "Extreme - very hot summer, cold winter (5-45°C)",
    overallScore: 77,
    image: "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=400",
    description: "Millennium City - Corporate hub with gleaming skyscrapers and MNC offices",
    goodThings: [
      "Excellent corporate job opportunities",
      "Modern infrastructure and planned development",
      "Close to Delhi (national capital access)",
      "High-end malls and shopping",
      "Good schools and expat community",
      "Metro connectivity to Delhi"
    ],
    badThings: [
      "Severe air pollution (especially winter)",
      "Waterlogging during monsoons",
      "Water scarcity - groundwater depleting",
      "Extreme weather (very hot/very cold)",
      "High crime rate compared to South India",
      "Expensive real estate",
      "Traffic congestion on major roads",
      "Poor municipal governance"
    ],
    majorAreas: [
      "DLF Phase 1-5 - Premium residential",
      "Golf Course Road - Luxury apartments",
      "Sohna Road - Upcoming, affordable",
      "MG Road - Commercial spine",
      "Cyber City - IT/corporate hub",
      "New Gurgaon - Developing rapidly",
      "Sector 56-57 - Established areas",
      "Manesar - Industrial belt"
    ],
    neighborhoods: [
      { 
        name: "DLF Phase 3", 
        housing: ["DLF Park Place", "Magnolias", "Aralias"], 
        avgRent: "₹35,000-60,000",
        buyPrice: "₹9,000-16,000/sqft",
        safety: 80,
        highlights: "Central, malls, restaurants"
      },
      { 
        name: "Golf Course Road", 
        housing: ["DLF Crest", "Ireo Victory Valley", "Lemon Tree"], 
        avgRent: "₹40,000-75,000",
        buyPrice: "₹12,000-25,000/sqft",
        safety: 82,
        highlights: "Premium location, corporate offices"
      },
      { 
        name: "Sohna Road", 
        housing: ["Godrej Summit", "M3M Golfestate", "Emaar MGF"], 
        avgRent: "₹25,000-45,000",
        buyPrice: "₹6,500-11,000/sqft",
        safety: 76,
        highlights: "More affordable, upcoming metro"
      }
    ],
    publicTransport: "Metro (Rapid Metro + Delhi Metro), app cabs, limited buses",
    airports: "Indira Gandhi International Airport (15 km)",
    hospitals: "Medanta, Artemis, Fortis, Max - Top-tier facilities"
  },
  {
    id: 7,
    name: "Noida",
    state: "Uttar Pradesh",
    costOfLiving: 72,
    pollution: 78,
    healthcare: 83,
    safety: 76,
    internet: 91,
    education: 80,
    jobMarket: 85,
    traffic: 55,
    waterAvailability: 70,
    waterSource: "Ganga canal + Groundwater + Municipal (adequate)",
    socialVibe: "Moderate",
    weather: "Extreme - hot summer, cold winter (4-44°C)",
    overallScore: 75,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400",
    description: "Planned satellite city of Delhi with growing IT and media sector",
    goodThings: [
      "Well-planned with wide roads",
      "Lower cost than Delhi/Gurgaon",
      "Growing IT/ITES sector",
      "Good connectivity to Delhi via Metro",
      "Upcoming Jewar Airport (massive boost)",
      "Many educational institutions",
      "Film City - media hub"
    ],
    badThings: [
      "Severe air pollution (AQI often 300+)",
      "Safety concerns, especially at night",
      "Extreme weather conditions",
      "Lesser entertainment options than metros",
      "Not as developed as Gurgaon",
      "Political instability (UP govt issues)"
    ],
    majorAreas: [
      "Sector 62 - IT companies",
      "Sector 18 - Commercial hub, metro",
      "Greater Noida - Expressway, institutions",
      "Noida Extension - Affordable housing",
      "Film City - Media industry",
      "Sectors 75-78 - Residential",
      "Sector 50 - Central location"
    ],
    neighborhoods: [
      { 
        name: "Sector 62", 
        housing: ["ATS Advantage", "Supertech Capetown", "Logix Blossom"], 
        avgRent: "₹18,000-32,000",
        buyPrice: "₹5,500-9,000/sqft",
        safety: 78,
        highlights: "IT hub, HCL, Samsung offices"
      },
      { 
        name: "Sector 78", 
        housing: ["Gardenia Gateway", "Assotech Blith", "Prateek Wisteria"], 
        avgRent: "₹20,000-35,000",
        buyPrice: "₹6,000-10,000/sqft",
        safety: 76,
        highlights: "Well-planned, parks, schools"
      }
    ],
    publicTransport: "Excellent Metro connectivity, Delhi DTC buses, app cabs",
    airports: "IGI Airport Delhi (30 km), Jewar Airport upcoming (40 km)",
    hospitals: "Fortis, Jaypee, Felix, Max - Good healthcare options"
  },
  {
    id: 8,
    name: "Ahmedabad",
    state: "Gujarat",
    costOfLiving: 62,
    pollution: 68,
    healthcare: 82,
    safety: 80,
    internet: 87,
    education: 85,
    jobMarket: 78,
    traffic: 62,
    waterAvailability: 72,
    waterSource: "Narmada canal + Sabarmati river (adequate)",
    socialVibe: "Conservative",
    weather: "Hot & dry, pleasant winter (12-43°C)",
    overallScore: 75,
    image: "https://images.unsplash.com/photo-1609157449937-c8dbadee5f10?w=400",
    description: "Heritage city with strong entrepreneurial culture and Gujarati business mindset",
    goodThings: [
      "Very affordable cost of living",
      "Strong business and entrepreneurial ecosystem",
      "UNESCO World Heritage city (old Ahmedabad)",
      "Vegetarian-friendly food culture",
      "Good education (IIM-A, CEPT, NID)",
      "Safe and peaceful environment",
      "Developing startup scene",
      "Sabarmati Riverfront development"
    ],
    badThings: [
      "Very hot and dry summers (45°C+)",
      "Conservative social atmosphere (alcohol ban)",
      "Limited IT job opportunities",
      "Language barrier (Gujarati dominant)",
      "Lesser cosmopolitan culture",
      "Air pollution increasing",
      "Limited public transport"
    ],
    majorAreas: [
      "SG Highway - IT corridor",
      "Prahlad Nagar - Upscale residential",
      "Satellite - Established area",
      "Vastrapur - Central, convenient",
      "Bodakdev - Premium locality",
      "Bopal - New development",
      "Thaltej - Serene, spacious",
      "Old City - Heritage area"
    ],
    neighborhoods: [
      { 
        name: "Prahlad Nagar", 
        housing: ["Goyal Orchid", "Shivalik Shilp", "Safal Profitaire"], 
        avgRent: "₹15,000-28,000",
        buyPrice: "₹5,000-8,500/sqft",
        safety: 85,
        highlights: "Prime location, malls nearby"
      },
      { 
        name: "Satellite", 
        housing: ["Sattva Group", "Goyal Heights", "Surya Palace"], 
        avgRent: "₹12,000-25,000",
        buyPrice: "₹4,500-7,500/sqft",
        safety: 82,
        highlights: "Established, good connectivity"
      }
    ],
    publicTransport: "BRTS system, Metro under construction, auto-rickshaws, buses",
    airports: "Sardar Vallabhbhai Patel Airport (9 km from city)",
    hospitals: "Sterling, Apollo, Shalby, SAL - Good facilities"
  },
  {
    id: 9,
    name: "Indore",
    state: "Madhya Pradesh",
    costOfLiving: 58,
    pollution: 65,
    healthcare: 78,
    safety: 82,
    internet: 83,
    education: 80,
    jobMarket: 70,
    traffic: 68,
    waterAvailability: 75,
    waterSource: "Narmada river (good supply)",
    socialVibe: "Moderate",
    weather: "Hot summer, pleasant winter (10-42°C)",
    overallScore: 73,
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400",
    description: "Cleanest city of India with food culture and affordable living",
    goodThings: [
      "Cleanest city in India (Swachh Survekshan winner)",
      "Very affordable cost of living",
      "Famous street food capital",
      "Growing commercial hub of central India",
      "IIT Indore, IIM Indore presence",
      "Friendly and welcoming people",
      "Lower traffic congestion"
    ],
    badThings: [
      "Limited IT/Tech job opportunities",
      "Smaller city - less cosmopolitan",
      "Very hot summers",
      "Limited entertainment and nightlife",
      "Connectivity - no Metro (under planning)",
      "Career growth slower than metros"
    ],
    majorAreas: [
      "Vijay Nagar - Educational hub",
      "Sudama Nagar - Commercial",
      "Sapna Sangeeta - Central",
      "AB Road - Main artery",
      "Scheme No. 78 - Premium",
      "Rau - Outskirts, affordable",
      "Nipania - IT companies"
    ],
    neighborhoods: [
      { 
        name: "Vijay Nagar", 
        housing: ["Symphony Tower", "Brilliant Solitaire", "Nakshatra Aarambh"], 
        avgRent: "₹10,000-20,000",
        buyPrice: "₹3,500-6,000/sqft",
        safety: 85,
        highlights: "Student hub, affordable, markets"
      },
      { 
        name: "Scheme No. 78", 
        housing: ["Silver Spring", "Shree Balaji", "Brilliant Convention"], 
        avgRent: "₹12,000-25,000",
        buyPrice: "₹4,000-7,500/sqft",
        safety: 88,
        highlights: "Premium area, planned layout"
      }
    ],
    publicTransport: "City buses, auto-rickshaws, app cabs available, Metro planned",
    airports: "Devi Ahilya Bai Holkar Airport (8 km from city)",
    hospitals: "CHL, Bombay Hospital, Apollo, Greater Kailash - Decent facilities"
  },
  {
    id: 10,
    name: "Chandigarh",
    state: "Punjab/Haryana",
    costOfLiving: 75,
    pollution: 60,
    healthcare: 85,
    safety: 90,
    internet: 89,
    education: 86,
    jobMarket: 72,
    traffic: 70,
    waterAvailability: 85,
    waterSource: "Bhakra Nangal reservoir (excellent supply)",
    socialVibe: "Liberal",
    weather: "Pleasant 6 months, hot summer, cold winter (5-42°C)",
    overallScore: 78,
    image: "https://images.unsplash.com/photo-1595587637401-f8f03db0fcd7?w=400",
    description: "Le Corbusier's planned city - India's most liveable and greenest city",
    goodThings: [
      "Most liveable city - well-planned, clean",
      "Extremely safe, especially for women",
      "Beautiful, green with wide roads",
      "Best urban planning in India",
      "Proximity to Himalayas (weekend getaways)",
      "Good quality of life",
      "Well-maintained infrastructure",
      "PGI - Best government hospital"
    ],
    badThings: [
      "Very limited job opportunities",
      "Expensive real estate relative to jobs",
      "Mostly government jobs",
      "Small city - can feel limited",
      "Extreme weather - very hot/very cold",
      "Lesser entertainment than metros",
      "Need to go to Delhi NCR for career growth"
    ],
    majorAreas: [
      "Sector 17 - City center, shopping",
      "Sector 9-11 - Residential, central",
      "Sector 34-35 - Prime areas",
      "Mohali - IT hub, affordable",
      "Panchkula - Adjacent city, connected"
    ],
    neighborhoods: [
      { 
        name: "Sector 9", 
        housing: ["DLF Apartments", "CHB Housing", "Private Kothi"], 
        avgRent: "₹20,000-35,000",
        buyPrice: "₹8,000-15,000/sqft",
        safety: 92,
        highlights: "Central location, peaceful"
      },
      { 
        name: "Mohali", 
        housing: ["Aerocity", "Gillco Valley", "Bestech Park View"], 
        avgRent: "₹15,000-28,000",
        buyPrice: "₹5,500-9,000/sqft",
        safety: 88,
        highlights: "IT companies, more affordable"
      }
    ],
    publicTransport: "Excellent local bus service, auto-rickshaws, app cabs readily available",
    airports: "Chandigarh International Airport (11 km from city)",
    hospitals: "PGI (best govt hospital in India), Fortis Mohali, Max, GMCH"
  }
];

const metrics = [
  { key: 'costOfLiving', label: 'Cost of Living', icon: DollarSign, lower: true },
  { key: 'pollution', label: 'Pollution Level', icon: Wind, lower: true },
  { key: 'healthcare', label: 'Healthcare', icon: Heart },
  { key: 'safety', label: 'Safety', icon: Shield },
  { key: 'internet', label: 'Internet', icon: Wifi },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'jobMarket', label: 'Job Market', icon: Briefcase },
  { key: 'traffic', label: 'Traffic', icon: Car, lower: true },
  { key: 'waterAvailability', label: 'Water Supply', icon: Droplets }
];

export default function IndiaCitySelector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [expandedCity, setExpandedCity] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [filterVibe, setFilterVibe] = useState('all');
  const [sortBy, setSortBy] = useState('overallScore');

  let filteredCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterVibe !== 'all') {
    filteredCities = filteredCities.filter(city => 
      city.socialVibe.toLowerCase().includes(filterVibe.toLowerCase())
    );
  }

  filteredCities.sort((a, b) => {
    if (sortBy === 'overallScore' || sortBy === 'jobMarket' || sortBy === 'safety' || sortBy === 'education') {
      return b[sortBy] - a[sortBy];
    } else if (sortBy === 'costOfLiving' || sortBy === 'pollution') {
      return a[sortBy] - b[sortBy];
    }
    return 0;
  });

  const toggleCitySelection = (cityId) => {
    if (selectedCities.includes(cityId)) {
      setSelectedCities(selectedCities.filter(id => id !== cityId));
    } else if (selectedCities.length < 3) {
      setSelectedCities([...selectedCities, cityId]);
    }
  };

  const getScoreColor = (score, lower = false) => {
    const adjustedScore = lower ? 100 - score : score;
    if (adjustedScore >= 80) return 'bg-green-500';
    if (adjustedScore >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleSubmitFeedback = () => {
    if (userEmail && feedback) {
      console.log('Feedback submitted:', { userEmail, feedback });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setUserEmail('');
        setFeedback('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Return to India</h1>
                <p className="text-sm text-gray-600">Find your perfect city to settle back home</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Comparing Indian Cities</div>
                <div className="text-xs text-gray-500">Updated: Jan 2026</div>
              </div>
              <TrendingUp className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-4 text-lg border-2 border-indigo-300 rounded-xl focus:outline-none focus:border-indigo-500 shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-indigo-600" />
              <select
                value={filterVibe}
                onChange={(e) => setFilterVibe(e.target.value)}
                className="px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="all">All Social Vibes</option>
                <option value="liberal">Liberal</option>
                <option value="moderate">Moderate</option>
                <option value="conservative">Conservative</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="overallScore">Overall Score</option>
                <option value="jobMarket">Job Market</option>
                <option value="costOfLiving">Lowest Cost</option>
                <option value="safety">Safest</option>
                <option value="education">Education</option>
                <option value="pollution">Least Polluted</option>
              </select>
            </div>
          </div>
        </div>

        {selectedCities.length > 0 && (
          <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Compare Cities ({selectedCities.length}/3)
              </h2>
              <button
                onClick={() => setShowCompare(!showCompare)}
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                <span>{showCompare ? 'Hide' : 'Show'} Comparison</span>
                {showCompare ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>

            {showCompare && (
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-max">
                  {selectedCities.map(cityId => {
                    const city = citiesData.find(c => c.id === cityId);
                    return (
                      <div key={cityId} className="border-2 border-indigo-200 rounded-lg p-4 min-w-[300px]">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{city.name}</h3>
                        <div className="text-sm text-gray-600 mb-3">Social Vibe: {city.socialVibe}</div>
                        {metrics.map(metric => (
                          <div key={metric.key} className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-gray-600">{metric.label}</span>
                              <span className="text-sm font-semibold">{city[metric.key]}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${getScoreColor(city[metric.key], metric.lower)}`}
                                style={{ width: `${city[metric.key]}%` }}
                              />
                            </div>
                          </div>
                        ))}
                        <div className="mt-4 pt-4 border-t">
                          <div className="text-center">
                            <span className="text-sm text-gray-600">Overall Score</span>
                            <div className="text-3xl font-bold text-indigo-600">{city.overallScore}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCities.map(city => (
            <div key={city.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                    <p className="text-sm text-gray-600">{city.state}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">{city.overallScore}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-3 text-sm">{city.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">{city.socialVibe}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{city.waterAvailability}/100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {metrics.slice(0, 4).map(metric => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.key} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-indigo-600" />
                        <div className="flex-1">
                          <div className="text-xs text-gray-600">{metric.label}</div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${getScoreColor(city[metric.key], metric.lower)}`}
                              style={{ width: `${city[metric.key]}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleCitySelection(city.id)}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      selectedCities.includes(city.id)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    disabled={!selectedCities.includes(city.id) && selectedCities.length >= 3}
                  >
                    {selectedCities.includes(city.id) ? 'Selected' : 'Compare'}
                  </button>
                  <button
                    onClick={() => setExpandedCity(expandedCity === city.id ? null : city.id)}
                    className="py-2 px-4 bg-indigo-100 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-200 transition-colors"
                  >
                    {expandedCity === city.id ? 'Hide' : 'Details'}
                  </button>
                </div>

                {expandedCity === city.id && (
                  <div className="mt-6 pt-6 border-t space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-green-600" />
                        What's Great
                      </h4>
                      <ul className="space-y-1">
                        {city.goodThings.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                        Challenges
                      </h4>
                      <ul className="space-y-1">
                        {city.badThings.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-red-600 mr-2">!</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Weather & Climate</h4>
                      <p className="text-sm text-gray-700">{city.weather}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Droplets className="w-5 h-5 mr-2 text-blue-600" />
                        Water Supply
                      </h4>
                      <p className="text-sm text-gray-700">{city.waterSource}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                        Major Areas
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {city.majorAreas.map((area, idx) => (
                          <div key={idx} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Building2 className="w-5 h-5 mr-2 text-indigo-600" />
                        Top Neighborhoods
                      </h4>
                      {city.neighborhoods.map((neighborhood, idx) => (
                        <div key={idx} className="mb-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{neighborhood.name}</h5>
                            <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                              Safety: {neighborhood.safety}/100
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2 italic">{neighborhood.highlights}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                            <div>
                              <span className="font-medium text-gray-700">Rent:</span>
                              <span className="text-gray-600 ml-1">{neighborhood.avgRent}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Buy:</span>
                              <span className="text-gray-600 ml-1">{neighborhood.buyPrice}</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600">
                            <span className="font-medium">Housing:</span> {neighborhood.housing.join(', ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold text-gray-900">Transport:</span>
                        <p className="text-gray-700 mt-1">{city.publicTransport}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold text-gray-900">Airport:</span>
                        <p className="text-gray-700 mt-1">{city.airports}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="font-semibold text-gray-900">Healthcare:</span>
                        <p className="text-gray-700 mt-1">{city.hospitals}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Help Us Improve</h2>
          
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
              Thank you for your feedback! We appreciate your input. 🙏
            </div>
          )}

          <div className="max-w-2xl mx-auto space-y-4">
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                Email Address
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts, suggest cities, or report data inaccuracies..."
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              onClick={handleSubmitFeedback}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!userEmail || !feedback}
            >
              Submit Feedback
            </button>
          </div>
        </div>

        <footer className="text-center text-gray-600 py-8 border-t">
          <p className="mb-2 font-semibold">Making your return to India easier, one city at a time.</p>
          <p className="text-sm mb-4">Data last updated: January 2026 | MVP Version 1.0</p>
          <p className="text-xs text-gray-500">
            Follow us for more insights • Share your relocation story • Suggest improvements
          </p>
        </footer>
      </main>
    </div>
  );
}