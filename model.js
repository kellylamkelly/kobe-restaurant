// Retrieve list of items
function getItems() {
    const itemList = [
        // Appetizers
        {
            id: 114,
            name: "House Soup",
            price: 1.95,
            image: "114.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 115,
            name: "Miso Soup",
            price: 1.95,
            image: "115.jpeg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 119,
            name: "One Quart Soup (Takeout only)",
            price: 7.00,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 116,
            name: "Kobe Salad",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 117,
            name: "Large Kobe Salad",
            price: 4.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 102,
            name: "Seaweed Salad",
            price: 4.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 103,
            name: "Tako Salad",
            price: 5.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 104,
            name: "Crab Salad",
            price: 5.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 100,
            name: "Edamame",
            price: 4.25,
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 101,
            name: "Spring Rolls",
            price: 4.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 105,
            name: "Gyoza",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 106,
            name: "Kobe Appetizer",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 107,
            name: "Yakitori",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 108,
            name: "Crab Cakes",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 111,
            name: "Unagi Kabayaki",
            price: 9.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 112,
            name: "Sushi Appetizer",
            price: 9.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 113,
            name: "Sashimi Appetizer",
            price: 10.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 109,
            name: "Side Noodles",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 110,
            name: "Udon Noodles",
            price: 13.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 118,
            name: "Fried/Steamed Rice",
            price: 4.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        // Teppanyaki Entrees
        {
            id: 300,
            name: "Teriyaki Chicken",
            price: 17.95,
            abbrev: "TC",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 301,
            name: "Vegetables",
            price: 16.95,
            abbrev: "Veg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 302,
            name: "Salmon",
            price: 20.95,
            abbrev: "Sal",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 303,
            name: "Shrimp",
            price: 21.95,
            abbrev: "Shr",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 304,
            name: "Scallops",
            price: 22.95,
            abbrev: "SC",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 305,
            name: "Lobster",
            price: 39.95,
            abbrev: "Lob",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 306,
            name: "Ribeye",
            price: 17.95,
            abbrev: "Rib",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 307,
            name: "Ribeye w/ Pepper",
            price: 17.95,
            abbrev: "Rib/Pep",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 308,
            name: "Filet Mignon",
            price: 17.95,
            abbrev: "F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 309,
            name: "Filet Mignon w/ Broccoli",
            price: 17.95,
            abbrev: "F/Bro",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 310,
            name: "Yakiniku",
            price: 17.95,
            abbrev: "Yak",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 311,
            name: "Teriyaki Chicken",
            price: 15.95,
            abbrev: "Sm TC",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 314,
            name: "Ribeye",
            price: 16.95,
            abbrev: "Sm Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 315,
            name: "Filet Mignon",
            price: 17.95,
            abbrev: "Sm F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 312,
            name: "Shrimp",
            price: 16.95,
            abbrev: "Sm Shr",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 313,
            name: "Scallops",
            price: 18.95,
            abbrev: "Sm SC",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 341,
            name: "Sumo Teriyaki Chicken",
            price: 26.95,
            abbrev: "Sumo TC",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 342,
            name: "Sumo Ribeye",
            price: 33.95,
            abbrev: "Sumo Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 343,
            name: "Sumo Filet Mignon",
            price: 33.95,
            abbrev: "Sumo F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 316,
            name: "Teriyaki Chicken & Lobster",
            price: 33.95,
            abbrev: "TC/Lob",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 317,
            name: "Teriyaki Chicken & Ribeye",
            price: 24.95,
            abbrev: "TC/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 318,
            name: "Teriyaki Chicken & Filet Mignon",
            price: 27.95,
            abbrev: "TC/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 319,
            name: "Teriyaki Chicken & Shrimp",
            price: 24.95,
            abbrev: "TC/Shr",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 320,
            name: "Teriyaki Chicken & Scallops",
            price: 25.95,
            abbrev: "TC/Sc",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 321,
            name: "Teriyaki Chicken & Salmon",
            price: 25.95,
            abbrev: "TC/Sal",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 322,
            name: "Shrimp & Salmon",
            price: 25.95,
            abbrev: "Shr/Sal",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 323,
            name: "Shrimp & Lobster",
            price: 34.95,
            abbrev: "Shr/Lob",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 324,
            name: "Shrimp & Scallops",
            price: 27.95,
            abbrev: "Shr/Sc",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 353,
            name: "Shrimp & Filet Mignon",
            price: 28.95,
            abbrev: "Shr/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 329,
            name: "Shrimp & Ribeye",
            price: 25.95,
            abbrev: "Shr/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 326,
            name: "Scallops & Salmon",
            price: 26.95,
            abbrev: "Sc/Sal",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 325,
            name: "Scallops & Lobster",
            price: 34.95,
            abbrev: "Sc/Lob",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 327,
            name: "Scallops & Filet Mignon",
            price: 29.95,
            abbrev: "Sc/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 328,
            name: "Scallops & Ribeye",
            price: 26.95,
            abbrev: "Sc/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 330,
            name: "Filet & Lobster",
            price: 34.95,
            abbrev: "F/Lob",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 331,
            name: "Teriyaki Chicken, Shrimp, & Ribeye",
            price: 33.95,
            abbrev: "TC/Shr/Rib",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 332,
            name: "Teriyaki Chicken, Shrimp, & Filet Mignon",
            price: 34.95,
            abbrev: "TC/Shr/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 333,
            name: "Teriyaki Chicken, Scallops, & Ribeye",
            price: 34.95,
            abbrev: "TC/Sc/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 334,
            name: "Teriyaki Chicken, Scallops, & Filet Mignon",
            price: 35.95,
            abbrev: "TC/Sc/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 335,
            name: "Teriyaki Chicken, Lobster, & Ribeye",
            price: 38.95,
            abbrev: "TC/Lob/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 336,
            name: "Shrimp, Lobster, & Salmon",
            price: 39.95,
            abbrev: "Shr/Lob/Sal",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 337,
            name: "Shrimp, Lobster, & Scallops",
            price: 40.95,
            abbrev: "Shr/Lob/Sc",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 338,
            name: "Shrimp, Lobster, & Filet Mignon",
            price: 40.95,
            abbrev: "Shr/Lob/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 339,
            name: "Shrimp, Scallops, & Filet Mignon",
            price: 35.95,
            abbrev: "Shr/Sc/F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 340,
            name: "Shrimp, Scallops, and Ribeye",
            price: 34.95,
            abbrev: "Shr/Sc/Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 347,
            name: "Extra Teriyaki Chicken",
            price: 11.95,
            abbrev: "+TC",
            image: "100.png",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 348,
            name: "Extra Ribeye",
            price: 11.95,
            abbrev: "+Rib",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 349,
            name: "Extra Shrimp",
            price: 11.95,
            abbrev: "+Shr",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 350,
            name: "Extra Scallops",
            price: 12.95,
            abbrev: "+Sc",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 351,
            name: "Extra Lobster",
            price: 17.95,
            abbrev: "+Lob",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 352,
            name: "Extra Filet Mignon",
            price: 12.95,
            abbrev: "+F",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 344,
            name: "Extra Vegatables",
            price: 5.25,
            abbrev: "+Veg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 345,
            name: "Add egg",
            price: 1.75,
            abbrev: "+Egg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 354,
            name: "Add broccoli",
            price: 1.75,
            abbrev: "+Bro",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 355,
            name: "Add mushrooms",
            price: 1.75,
            abbrev: "+Mush",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 356,
            name: "Add zucchini",
            price: 1.75,
            abbrev: "+Zucc",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 357,
            name: "Add onion",
            price: 1.75,
            abbrev: "+Onion",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 358,
            name: "Add green peppers",
            price: 1.75,
            abbrev: "+Pepper",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 359,
            name: "Add carrot",
            price: 1.75,
            abbrev: "+Carrot",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        // Sushi
        {
            id: 200,
            name: "Tuna",
            price: 2.50,
            image: "115.jpeg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 201,
            name: "Yellow Tail",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 202,
            name: "White Tuna",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 203,
            name: "Salmon",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 204,
            name: "Smoked Salmon",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 205,
            name: "Shrimp",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 206,
            name: "Octopus",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 207,
            name: "Squid",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 208,
            name: "Crab Stick",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 209,
            name: "Grilled Eel",
            price: 3.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 210,
            name: "Sweet Shrimp",
            price: 3.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 211,
            name: "Surf Clam",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 212,
            name: "Red Snapper",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 213,
            name: "Smelt Roe",
            price: 2.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 214,
            name: "Sea Urchin",
            price: 3.75,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 215,
            name: "Egg Cake",
            price: 2.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 216,
            name: "Salmon Eggs",
            price: 3.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 217,
            name: "Quail Egg",
            price: 0.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 218,
            name: "Alaska Roll",
            price: 5.95,
            image: "115.jpeg",
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 219,
            name: "Arizona Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 220,
            name: "Avocado Roll",
            price: 4.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 221,
            name: "Big Roll (Futomaki)",
            price: 11.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 222,
            name: "California Roll",
            price: 5.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 223,
            name: "Crab Roll",
            price: 5.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 224,
            name: "Crazy Roll",
            price: 12.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 225,
            name: "Cucumber Roll",
            price: 4.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 226,
            name: "Dragon Roll",
            price: 12.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 227,
            name: "Eel Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 228,
            name: "Hollywood Roll",
            price: 7.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 229,
            name: "House Roll",
            price: 7.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 230,
            name: "KFC Roll",
            price: 6.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 231,
            name: "Kobe Roll",
            price: 10.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 232,
            name: "Kobe Giant Roll",
            price: 16.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 233,
            name: "Lobster Roll",
            price: 13.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 234,
            name: "Mixed Vegetable Roll",
            price: 5.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 235,
            name: "Oisy Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 236,
            name: "Osaka Roll",
            price: 10.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 237,
            name: "Philadelphia Roll",
            price: 7.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 238,
            name: "Rainbow Roll",
            price: 14.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 239,
            name: "Salmon Roll",
            price: 4.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 240,
            name: "Salmon Avocado Roll",
            price: 5.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 241,
            name: "Spicy Crab Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 242,
            name: "Spicy Salmon Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 243,
            name: "Spicy Scallops Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 244,
            name: "Spicy Tuna Roll",
            price: 5.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 245,
            name: "Spider Roll",
            price: 10.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 246,
            name: "Steelers Roll",
            price: 12.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 247,
            name: "Tempura Roll",
            price: 8.25,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 248,
            name: "Tokyo Roll",
            price: 10.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 249,
            name: "Tuna Roll",
            price: 4.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 250,
            name: "Tuna Avocado Roll",
            price: 5.50,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 251,
            name: "Volcano Roll",
            price: 9.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        // Entrees
        {
            id: 252,
            name: "Sushi A",
            price: 23.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 253,
            name: "Sushi B",
            price: 28.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 254,
            name: "Unagi Don",
            price: 19.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 255,
            name: "Sashimi Regular",
            price: 24.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 256,
            name: "Sashimi Deluxe",
            price: 29.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 257,
            name: "Chicken Katsu",
            price: 19.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        },
        {
            id: 258,
            name: "Kobe Tuna",
            price: 22.95,
            quantity: 1, maxQuantity: 15, minQuantity: 1
        }
    ];

    return itemList;
}

// Search for item with given id in list
function getItemByID(id, itemList) {
    for (let item of itemList) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}

// Add item with given id to cart
// Parameters: id (from request), cart (stored in session), items (stored in session)
function addItem(id, cart, itemList) {
    // search list of items for one with the given id
    var item = getItemByID(id, itemList);

    // check whether cart exists yet and create if not
    if (cart == null) {
        cart = [];
    }

    cart.push(item); // add item to end of cart array
    return cart;
}

// Get the index of the item with the given id in the cart,
// or -1 if no item with that id in cart
function getIndex(id, cart) {
    count = 0;
    for (let item of cart) { // loop through cart array
        if (id === item.id) { // compare ids
            return count; // if match, item with id at this index
        }
        count++;
    }
    return -1; // give id not found in cart
}

// Change quantity of item with given id to n
function changeQuantity(id, n, cart) {
    // get index of item with given id in cart
    var where = getIndex(id, cart);
    // validate this item is actually in cart
    if (where != -1) {
        // change quantity property to new value
        cart[where].quantity = n;
    }
    return cart;
}

// Remove item with given id from cart
function removeItem(id, cart) {
    // get index of item with given id in cart
    var where = getIndex(id, cart);
    // validate this item is actually in cart
    if (where != -1) {
        // splice list before and list after item together
        cart.splice(where, 1);
    }
    return cart;
}

// Compute cost of item in terms of item type
function getTotal(cart) {
    var total = 0; // running total of price
    for (let item of cart) {
        total += (parseInt(item.quantity) * item.price);
    }
    return total;
}

// Make sure item not in cart before adding
function validateAdd(id, cart) {
    var errors = {}; // new empty object
    if (cart) { // only search if cart exists
        var where = getIndex(id, cart);
        if (where != -1) {
            // Add error to list
            errors.DuplicateItem = true;
        }
    }
    return errors;
}

// Make function available publicly
module.exports = {
    getItems,
    getItemByID,
    getIndex,
    changeQuantity,
    addItem,
    removeItem,
    getTotal,
    validateAdd
}