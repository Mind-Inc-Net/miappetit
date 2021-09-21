import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";

import Types "types";
import DishDB "dishdb";

actor MiDish {
    type Dish = Types.Dish;
    type DishId = Types.DishId;
    type DishConcept = { dishId : DishId; dish : Dish; };

    let dishRepository: DishDB.DishRepository = DishDB.DishRepository();

    private stable var dishes : [(DishId, Dish)] = [];
    private stable var nextId : DishId = 1;

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
        dishRepository.upsert(nextId, dish);
        nextId += 1;
    };

    system func preupgrade() {
        dishes := Iter.toArray(dishRepository.getAllDishes().entries());
    };

    system func postupgrade () {
        for ((dishId, dish)  in dishes.vals()) {
            dishRepository.upsert(dishId, dish);
        };

        dishes := [];
    };
};
