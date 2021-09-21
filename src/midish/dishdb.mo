import Iter "mo:base/Iter";
import Hash "mo:base/Hash";
import TrieMap "mo:base/TrieMap";

import Types "types";

module {
  
  type Dish = Types.Dish;
  type DishId = Types.DishId;

  func isEq(x : DishId, y : DishId): Bool { x == y };
  func hash(x : DishId) : Hash.Hash { x };

  public class DishRepository() {
    
    let hashMap = TrieMap.TrieMap<DishId, Dish>(isEq, hash);

    public func upsert(dishId : DishId, dish: Dish) {
      hashMap.put(dishId, dish);
    };

    public func findOne(dishId : DishId): ?Dish {
      hashMap.get(dishId);
    };

    public func getAllDishes() : TrieMap.TrieMap<DishId, Dish> {
      return hashMap;
    };

  };
};