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

    public type MealType = { #breakfast; #lunch; #dinner; };
    
    public type DishType = { 
        name : Text;
        id : Nat;
        parent : Nat;
    };

    public type Rating = {
        score : RatingScore;
        ratingType : RatingType;
    };

    public type RatingScore = { #one; #two; #three; #four; #five };

    public type RatingType = { #pub; #own; };

    public type Image = Text;

    public type Ingredient = Text;

    public type DishId = Nat32;
}