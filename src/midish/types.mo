import Text "mo:base/Text";
import Map "mo:base/HashMap";

module {
    public type Dish = {
        images : [Image];
        defaultImage : Image;
        name : [DishName];
        defaultName : DishName;
        ingredients : [Ingredient];
        description : Text;
        mealType : MealType;
        dishType : DishType;
        ratings : [Rating]
    };

    public type DishName = {
        name : Text;
        cusine : Text;
    };

    // public type MealType = { #breakfast; #lunch; #dinner; };

    public type MealType = {
        mealTypeId : Nat;
        name : Text;
        description : Text;
        timeFrom : Text;
        timeTo : Text;
        imageUrl : Text;
    };
    
    public type DishType = { 
        name : Text;
        dishTypeId : Nat;
        parentDishTypeId : Nat;
        description: Text;
    };

    // {
    //   "dishTypeId": 1,
    //   "name": "Soups",
    //   "description": "Soups",
    //   "parentDishType": null
    // },

    public type Rating = {
        score : RatingScore;
        ratingType : RatingType;
    };

    public type RatingScore = { #one; #two; #three; #four; #five };

    public type RatingType = { #pub; #own; };

    public type Image = Text;

    public type Ingredient = Text;

    public type DishId = Nat32;

    public type DishTypeId = Nat32;
    
    public type MealTypeId = Nat32;

    public type Cuisine = {
        name : Text;
        description : Text;
        image : Text;
        parentCuisineId : Nat32;
        triviaId : Nat32;
        isEthnic : Bool;
        cuisinePath : Text
    };

    public type CuisineId = Nat32;
}