import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";

import Types "types";
import DishDB "dishdb";
import CuisineDB "cuisinedb";
import DishTypeDB "dish_type_db";
import MealTypeDB "meal_type_db";

actor MiDish {
    type Dish = Types.Dish;
    type DishId = Types.DishId;
    type DishConcept = { dishId : DishId; dish : Dish; };
    let dishRepository: DishDB.DishRepository = DishDB.DishRepository();
    private stable var dishes : [(DishId, Dish)] = [];
    private stable var nextDishId : DishId = 1;

    type Cuisine = Types.Cuisine;
    type CuisineId = Types.CuisineId;
    type CuisineConcept = { cuisineId : CuisineId; cuisine : Cuisine; };
    let cuisineRepository: CuisineDB.CuisineRepository = CuisineDB.CuisineRepository();
    private stable var cuisines : [(CuisineId, Cuisine)] = [];
    private stable var nextCuisineId : CuisineId = 1;

    type DishType = Types.DishType;
    type DishTypeId = Types.DishTypeId;
    type DishTypeConcept = { dishTypeId : DishTypeId; dishType : DishType; };
    let dishTypeRepository: DishTypeDB.DishTypeRepository = DishTypeDB.DishTypeRepository();
    private stable var dishTypes : [(DishTypeId, DishType)] = [];
    private stable var nextDishTypeId : DishTypeId = 1;

    type MealType = Types.MealType;
    type MealTypeId = Types.MealTypeId;
    type MealTypeConcept = { mealTypeId : MealTypeId; mealType : MealType; };
    let mealTypeRepository: MealTypeDB.MealTypeRepository = MealTypeDB.MealTypeRepository();
    private stable var mealTypes : [(MealTypeId, MealType)] = [];
    private stable var nextMealTypeId : MealTypeId = 1;


    public query func getAllDishes() : async [DishConcept] {
        let result = Iter.map(dishRepository.getAllDishes().entries(), func (kv : (DishId, Dish)) : DishConcept { 
            { dishId = kv.0; dish = kv.1; }
        });
        
        return Iter.toArray(result);
    };

    public query func getDish(dishId: DishId) : async ?Dish {
        let result = dishRepository.findOne(dishId);
        return result;
    };

    public func addDish(dish: Dish) : async () {
        dishRepository.upsert(nextDishId, dish);
        nextDishId += 1;
    };

    public query func getAllCuisines() : async [CuisineConcept] {
        let result = Iter.map(cuisineRepository.getAllCuisines().entries(), func (kv : (CuisineId, Cuisine)) : CuisineConcept { 
            { cuisineId = kv.0; cuisine = kv.1; }
        });
        
        return Iter.toArray(result);
    };

    public query func getCuisine(cuisineId: CuisineId) : async ?Cuisine {
        let result = cuisineRepository.findOneCuisine(cuisineId);
        return result;
    };

    public func addCuisine(cuisine: Cuisine) : async () {
        cuisineRepository.upsertCuisine(nextCuisineId, cuisine);
        nextCuisineId += 1;
    };

    public query func getAllMealTypes() : async [MealTypeConcept] {
        let result = Iter.map(mealTypeRepository.getAllMealTypes().entries(), func (kv : (MealTypeId, MealType)) : MealTypeConcept {
            { mealTypeId = kv.0; mealType = kv.1; }
        } );

        return Iter.toArray(result);
    };

    public query func getMealType( mealTypeId: MealTypeId) : async ?MealType {
         let result = mealTypeRepository.findOneMealType(mealTypeId);
         return result;
    };

    public func addMealType( mealType : MealType ) : async () {
         mealTypeRepository.upsertMealType( nextMealTypeId, mealType);
         nextMealTypeId += 1;
    };

    public query func getAllDishTypes() : async [DishTypeConcept] {
        let result = Iter.map(dishTypeRepository.getAllDishTypes().entries(), func (kv : (DishTypeId, DishType)) : DishTypeConcept {
            { dishTypeId = kv.0; dishType = kv.1; }
        } );

        return Iter.toArray(result);
    };

    public query func getDishType( dishTypeId: DishTypeId) : async ?DishType {
         let result = dishTypeRepository.findOneDishType(dishTypeId);
         return result;
    };

    public func addDishType( dishType : DishType ) : async () {
         dishTypeRepository.upsertDishType( nextDishTypeId, dishType);
         nextDishTypeId += 1;
    };

    system func preupgrade() {
        dishes := Iter.toArray(dishRepository.getAllDishes().entries());
        cuisines := Iter.toArray(cuisineRepository.getAllCuisines().entries());
        mealTypes := Iter.toArray(mealTypeRepository.getAllMealTypes().entries());
        dishTypes := Iter.toArray(dishTypeRepository.getAllDishTypes().entries());
    };

    system func postupgrade () {
        for ((dishId, dish)  in dishes.vals()) {
            dishRepository.upsert(dishId, dish);
        };

        dishes := [];
        
        for ((cuisineId, cuisine)  in cuisines.vals()) {
            cuisineRepository.upsertCuisine(cuisineId, cuisine);
        };

        cuisines := [];
        
        for ((mealTypeId, mealType)  in mealTypes.vals()) {
            mealTypeRepository.upsertMealType(mealTypeId, mealType);
        };

        mealTypes := [];

        for ((dishTypeId, dishType)  in dishTypes.vals()) {
            dishTypeRepository.upsertDishType(dishTypeId, dishType);
        };

        dishTypes := [];
    };
};
