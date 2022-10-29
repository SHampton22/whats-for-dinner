var sides = [
    "Miso Glazed Carrots!",
    "Coleslaw!",
    "Garden Salad!",
    "Crispy Potatoes!",
    "Sweet Potato Tots!",
    "Coconut Rice!",
    "Caeser Salad!",
    "Shrimp Summer Rolls!",
    "Garlic Butter Mushrooms!",
    "Hush Puppies!",
    ];
    
var mainDishes = [
    "Spaghetti and Meatballs!",
     "Pineapple Chicken!",
     "Shakshuka!",
     "Thai Yellow Curry!",
     "Bibimbap!",
     "Chicken Parmesean!",
     "Butternut Squash Soup!",
     "BBQ Chicken Burgers!",
     "Ramen!",
     "Empanadas!",
     "Chicken Fried Rice!",
     "Sheet Pan Fajitas!",
     "Margarita Pizza!",
     ];
        
var desserts = [
     "Apple Pie!",
     "Lemon Meringue Pie!",
     "Black Forest Cake!",
     "Banana Bread!",
     "Peach Cobbler!",
     "Cheesecake!",
     "Funfetti Cake!",
     "Baklava!",
     "Flan!",
     "Macarons!",
     "Macaroons!",
     "Chocolate Cupcakes!",
     "Pavlova!",
     "Pumpkin Pie!",
     "Key Lime Pie!",
     "Tart Tatin!",
     "Croissants!",
      "Eclairs!",
     ];

     var sidesIndexNum = getRandomIndex(sides);
     var mainDishesIndexNum = getRandomIndex(mainDishes);
     var dessertsIndexNum = getRandomIndex(desserts);


     var potImage = document.querySelector('.pot')
     var recipeSuggestion = document.querySelector('.recipe-suggestion')
     var sideSelection = document.querySelector('#side');
     var mainDishSelection = document.querySelector('#main-dish');
     var dessertSelection = document.querySelector('#dessert');
     var randomRecipe = document.querySelector('#random-recipe');
     var suggestionBox = document.querySelector('.suggestion-box')

     var removeSuggestionButton = document.querySelector('#remove-suggestion-button')
     var letsCookButton = document.querySelector('.cook-button');
     

   

     letsCookButton.addEventListener('click', showRandomDish);
     removeSuggestionButton.addEventListener('click', function(){ hideShow(suggestionBox, potImage) });


     function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
     }

     function showRandomDish() {
        hideShow(potImage, suggestionBox);

        if (sideSelection.checked === true) {
           randomRecipe.innerHTML = sides[sidesIndexNum];
        } else if (mainDishSelection.checked === true) {
             randomRecipe.innerHTML = mainDishes[mainDishesIndexNum];
        } else if (dessertSelection.checked === true) {
             randomRecipe.innerHTML = desserts[dessertsIndexNum];
        }
        
     }

     function hideShow(hide, show) {
        hide.classList.add('hidden');
        show.classList.remove('hidden');
     }

     function clearUserInput() {
        hideShow(suggestionBox, pot)
     }