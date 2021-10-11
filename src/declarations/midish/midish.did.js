export const idlFactory = ({ IDL }) => {
  const Cuisine = IDL.Record({
    'name' : IDL.Text,
    'cuisinePath' : IDL.Text,
    'description' : IDL.Text,
    'parentCuisineId' : IDL.Nat32,
    'triviaId' : IDL.Nat32,
    'image' : IDL.Text,
    'isEthnic' : IDL.Bool,
  });
  const DishName = IDL.Record({ 'cusine' : IDL.Text, 'name' : IDL.Text });
  const RatingType = IDL.Variant({ 'own' : IDL.Null, 'pub' : IDL.Null });
  const RatingScore = IDL.Variant({
    'one' : IDL.Null,
    'two' : IDL.Null,
    'three' : IDL.Null,
    'five' : IDL.Null,
    'four' : IDL.Null,
  });
  const Rating = IDL.Record({
    'ratingType' : RatingType,
    'score' : RatingScore,
  });
  const Image = IDL.Text;
  const DishType__1 = IDL.Record({
    'parentDishTypeId' : IDL.Nat,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'dishTypeId' : IDL.Nat,
  });
  const Ingredient = IDL.Text;
  const MealType__1 = IDL.Record({
    'timeTo' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'mealTypeId' : IDL.Nat,
    'timeFrom' : IDL.Text,
  });
  const Dish = IDL.Record({
    'defaultName' : DishName,
    'name' : IDL.Vec(DishName),
    'ratings' : IDL.Vec(Rating),
    'description' : IDL.Text,
    'defaultImage' : Image,
    'dishType' : DishType__1,
    'ingredients' : IDL.Vec(Ingredient),
    'mealType' : MealType__1,
    'images' : IDL.Vec(Image),
  });
  const DishType = IDL.Record({
    'parentDishTypeId' : IDL.Nat,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'dishTypeId' : IDL.Nat,
  });
  const MealType = IDL.Record({
    'timeTo' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'mealTypeId' : IDL.Nat,
    'timeFrom' : IDL.Text,
  });
  const CuisineId = IDL.Nat32;
  const CuisineConcept = IDL.Record({
    'cuisineId' : CuisineId,
    'cuisine' : Cuisine,
  });
  const DishTypeId = IDL.Nat32;
  const DishTypeConcept = IDL.Record({
    'dishType' : DishType,
    'dishTypeId' : DishTypeId,
  });
  const DishId = IDL.Nat32;
  const DishConcept = IDL.Record({ 'dish' : Dish, 'dishId' : DishId });
  const MealTypeId = IDL.Nat32;
  const MealTypeConcept = IDL.Record({
    'mealTypeId' : MealTypeId,
    'mealType' : MealType,
  });
  return IDL.Service({
    'addCuisine' : IDL.Func([Cuisine], [], []),
    'addDish' : IDL.Func([Dish], [], []),
    'addDishType' : IDL.Func([DishType], [], []),
    'addMealType' : IDL.Func([MealType], [], []),
    'getAllCuisines' : IDL.Func([], [IDL.Vec(CuisineConcept)], ['query']),
    'getAllDishTypes' : IDL.Func([], [IDL.Vec(DishTypeConcept)], ['query']),
    'getAllDishes' : IDL.Func([], [IDL.Vec(DishConcept)], ['query']),
    'getAllMealTypes' : IDL.Func([], [IDL.Vec(MealTypeConcept)], ['query']),
    'getCuisine' : IDL.Func([CuisineId], [IDL.Opt(Cuisine)], ['query']),
    'getDish' : IDL.Func([DishId], [IDL.Opt(Dish)], ['query']),
    'getDishType' : IDL.Func([DishTypeId], [IDL.Opt(DishType)], ['query']),
    'getMealType' : IDL.Func([MealTypeId], [IDL.Opt(MealType)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
