const Message = function(chat_id, text, reply_markup = null) {
    this.chat_id = chat_id;
    this.text = text;
    this.parse_mode = "HTML";

    if (reply_markup != null) {
        this.reply_markup = reply_markup;
    }
}

const InlineKeyboard = function(inline_keyboard) {
    this.inline_keyboard = inline_keyboard;
}

const InlineKeyboardButton = function(text, callback_data = null) {
    this.text = text;
    
    if (callback_data == null) {
        this.callback_data = text;
    } else {
        this.callback_data = callback_data;
    }   
}

const Breakfast = function(
    breadsCakes = ["Assorted Buns/Cakes", "Assorted Sandwiches", "Assorted Burgers"], 
    continentalDelights = "Grilled Ham and Cheese Toastie", 
    orientalDelights = "Chee Cheong Fun", 
    hotSelection = ["Maggie Goreng", "Local Fried Kway Teow", "Vegetarian Yang Zhou Fried Rice"], 
    sides = "Yakitori Chicken Skewers", 
    cereal = "Cereal w Milk", 
    enrichedBread = "Enriched Bread w Spreads", 
    dailySpecials = "Homemade Lor Mee", 
    drinks = "Coffee and Tea"
) {

    this.get = function() {
        return {
            "Breads and Cakes": breadsCakes,
            "Continental Delights": continentalDelights,
            "Oriental Delights": orientalDelights,
            "Hot Selection": hotSelection,
            "Sides": sides,
            "Cereal": cereal,
            "Enriched Bread": enrichedBread,
            "Daily Specials": dailySpecials,
            "Drinks": drinks
        };
    }

}

const Dinner = function(
    rice = "Steamed White Rice",
    pork = "Kam Hiong Pork",
    chicken = "Ginger Scallion Chicken",
    seafood = "Superior Soya Sauce Tossed Chicken",
    sides = ["Thai Style Mango Beancurd", "Tomato Scrambled Eggs", "Seafood Wanton"],
    vegetables = "2 Types of Seasonal Vegetables",
    soup = "Egg Drop Seaweed Soup",
    fruitDessert = "Chilled Almond Jelly with Longan",
    drinks = "Cordial Drink"
) {
    
    this.get = function() {
        return {
            "Rice": rice,
            "Pork": pork,
            "Chicken": chicken,
            "Seafood": seafood,
            "Sides": sides,
            "Vegetables": vegetables,
            "Soup of the Day": soup,
            "Fruit / Dessert": fruitDessert,
            "Drinks": drinks
        };
    }

}

const SpecialDinner = function(
    set1 = "Penne Tomato Cream Sauce, Rosemary Chicken Chop & Mashed Potatoes", 
    set2 = "Ma La Xiang Guo Set", 
    fruitDessert = "Banana", 
    drink = "Cordial Drink"
) {

    this.get = function() {
        return {
            "Set A": set1,
            "Set B": set2,
            "Fruit / Dessert": fruitDessert,
            "Drinks": drink
        };
    }

}