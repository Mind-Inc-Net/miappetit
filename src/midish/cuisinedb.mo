import Iter "mo:base/Iter";
import Hash "mo:base/Hash";
import TrieMap "mo:base/TrieMap";

import Types "types";

module {
    type Cuisine = Types.Cuisine;
    type CuisineId = Types.CuisineId;

    func isCuisineEq(x : CuisineId, y : CuisineId): Bool { x == y };
    func hashCuisine(x : CuisineId) : Hash.Hash { x };

    public class CuisineRepository() {
      let cuisineHashMap = TrieMap.TrieMap<CuisineId, Cuisine>(isCuisineEq, hashCuisine);

        public func upsertCuisine(cuisineId : CuisineId, cuisine: Cuisine) {
            cuisineHashMap.put(cuisineId, cuisine);
        };

        public func findOneCuisine(cuisineId : CuisineId): ?Cuisine {
            cuisineHashMap.get(cuisineId);
        };

        public func getAllCuisines() : TrieMap.TrieMap<CuisineId, Cuisine> {
            return cuisineHashMap;
        };
  };
}