export const idlFactory = ({ IDL }) => {
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
  const DishType = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const Ingredient = IDL.Text;
  const MealType = IDL.Variant({
    'breakfast' : IDL.Null,
    'lunch' : IDL.Null,
    'dinner' : IDL.Null,
  });
  const Dish = IDL.Record({
    'defaultName' : DishName,
    'name' : IDL.Vec(DishName),
    'ratings' : IDL.Vec(Rating),
    'description' : IDL.Text,
    'defaultImage' : Image,
    'dishType' : DishType,
    'ingredients' : IDL.Vec(Ingredient),
    'mealType' : MealType,
    'images' : IDL.Vec(Image),
  });
  const DishId = IDL.Nat32;
  const DishConcept = IDL.Record({ 'dish' : Dish, 'dishId' : DishId });
  return IDL.Service({
    'addDish' : IDL.Func([Dish], [], []),
    'getAllDishes' : IDL.Func([], [IDL.Vec(DishConcept)], ['query']),
    'getDish' : IDL.Func([DishId], [IDL.Opt(Dish)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
