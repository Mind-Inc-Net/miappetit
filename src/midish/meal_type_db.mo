import Hash "mo:base/Hash";
import TrieMap "mo:base/TrieMap";
import Types "types";
module {
    type MealType = Types.MealType;
    type MealTypeId = Types.MealTypeId;

    func isMealTypeEq( x : MealTypeId, y : MealTypeId ) : Bool { x == y };
    func hashMealType( x: MealTypeId ) : Hash.Hash { x };

    public class MealTypeRepository() {
        let mealTypeHashMap = TrieMap.TrieMap<MealTypeId, MealType>(isMealTypeEq, hashMealType);

        public func upsertMealType(mealTypeId : MealTypeId, mealType : MealType) {
            mealTypeHashMap.put(mealTypeId, mealType);
        };

        public func findOneMealType(mealTypeId : MealTypeId) : ?MealType {
            mealTypeHashMap.get(mealTypeId);
        };

        public func getAllMealTypes() : TrieMap.TrieMap<MealTypeId, MealType> {
            return mealTypeHashMap;
        };
    };
}