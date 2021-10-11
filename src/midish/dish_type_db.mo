import Hash "mo:base/Hash";
import TrieMap "mo:base/TrieMap";
import Types "types";
module {
    type DishType = Types.DishType;
    type DishTypeId = Types.DishTypeId;

    func isDishTypeEq(x : DishTypeId, y : DishTypeId): Bool { x == y };
    func hashDishType(x : DishTypeId) : Hash.Hash { x };

    public class DishTypeRepository() {
        let dishTypeHashMap = TrieMap.TrieMap<DishTypeId, DishType>(isDishTypeEq, hashDishType);

        public func upsertDishType(dishTypeId : DishTypeId, dishType: DishType){
            dishTypeHashMap.put(dishTypeId, dishType);
        };

        public func findOneDishType(dishTypeId: DishTypeId) : ?DishType {
            dishTypeHashMap.get(dishTypeId);
        };

        public func getAllDishTypes() : TrieMap.TrieMap<DishTypeId, DishType> {
            return dishTypeHashMap;
        };
    };
}