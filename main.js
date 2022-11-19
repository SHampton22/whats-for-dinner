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

     
     

     var potImage = document.querySelector('.pot');
     var recipeSuggestion = document.querySelector('.recipe-suggestion');
     var sideSelection = document.querySelector('#side');
     var mainDishSelection = document.querySelector('#main-dish');
     var dessertSelection = document.querySelector('#dessert');
     var randomRecipe = document.querySelector('#random-recipe');
     var suggestionBox = document.querySelector('.suggestion-box');
     
     var letsCookButton = document.querySelector('.cook-button');
     var removeSuggestionButton = document.querySelector('#remove-suggestion-button');
     var deleteSuggestionButton = document.querySelector('#delete-suggestion-button');
        

     letsCookButton.addEventListener('click', showRandomDish);
     removeSuggestionButton.addEventListener('click', clearSelection);
     deleteSuggestionButton.addEventListener('click', deleteRecipe);

     function getRandomIndex(array) {
        var randomIndexNumber = Math.floor(Math.random() * array.length);
         return array[randomIndexNumber];
     };


     function hideShow(hide, show) {
        hide.classList.add('hidden');
        show.classList.remove('hidden');
     };


     function showRandomDish() {
        
        if (sideSelection.checked) {
            hideShow(potImage, suggestionBox);
            randomRecipe.innerHTML = getRandomIndex(sides);
        } else if (mainDishSelection.checked) {
             hideShow(potImage, suggestionBox);
             randomRecipe.innerHTML = getRandomIndex(mainDishes);
        } else if (dessertSelection.checked) {
             hideShow(potImage, suggestionBox);
             randomRecipe.innerHTML = getRandomIndex(desserts);
        }
        
     };


     function deleteRecipe() {
        var sideToRemove = sides.indexOf(randomRecipe.innerHTML);
        var mainDishToRemove = mainDishes.indexOf(randomRecipe.innerHTML);
        var dessertToRemove = desserts.indexOf(randomRecipe.innerHTML);

        if (sides.includes(randomRecipe.innerHTML)) {
            sides.splice(sideToRemove, 1);
        }   else if (mainDishes.includes(randomRecipe.innerHTML)) {
            mainDishes.splice(mainDishToRemove, 1);
        }   else if (desserts.includes(randomRecipe.innerHTML)) {
            desserts.splice(dessertToRemove, 1);
        }
        return window.alert("YUCK! YOU WON'T HAVE TO SEE THAT RECIPE AGAIN!")
     };


     function clearSelection() {
        sideSelection.checked = false;
        mainDishSelection.checked = false;
        dessertSelection.checked = false;
        hideShow(suggestionBox, potImage)
     };

