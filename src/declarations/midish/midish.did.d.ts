import type { Principal } from '@dfinity/principal';
export interface Cuisine {
  'name' : string,
  'cuisinePath' : string,
  'description' : string,
  'parentCuisineId' : number,
  'triviaId' : number,
  'image' : string,
  'isEthnic' : boolean,
}
export interface CuisineConcept { 'cuisineId' : CuisineId, 'cuisine' : Cuisine }
export type CuisineId = number;
export interface Dish {
  'defaultName' : DishName,
  'name' : Array<DishName>,
  'ratings' : Array<Rating>,
  'description' : string,
  'defaultImage' : Image,
  'dishType' : DishType__1,
  'ingredients' : Array<Ingredient>,
  'mealType' : MealType__1,
  'images' : Array<Image>,
}
export interface DishConcept { 'dish' : Dish, 'dishId' : DishId }
export type DishId = number;
export interface DishName { 'cusine' : string, 'name' : string }
export interface DishType {
  'parentDishTypeId' : bigint,
  'name' : string,
  'description' : string,
  'dishTypeId' : bigint,
}
export interface DishTypeConcept {
  'dishType' : DishType,
  'dishTypeId' : DishTypeId,
}
export type DishTypeId = number;
export interface DishType__1 {
  'parentDishTypeId' : bigint,
  'name' : string,
  'description' : string,
  'dishTypeId' : bigint,
}
export type Image = string;
export type Ingredient = string;
export interface MealType {
  'timeTo' : string,
  'name' : string,
  'description' : string,
  'imageUrl' : string,
  'mealTypeId' : bigint,
  'timeFrom' : string,
}
export interface MealTypeConcept {
  'mealTypeId' : MealTypeId,
  'mealType' : MealType,
}
export type MealTypeId = number;
export interface MealType__1 {
  'timeTo' : string,
  'name' : string,
  'description' : string,
  'imageUrl' : string,
  'mealTypeId' : bigint,
  'timeFrom' : string,
}
export interface Rating { 'ratingType' : RatingType, 'score' : RatingScore }
export type RatingScore = { 'one' : null } |
  { 'two' : null } |
  { 'three' : null } |
  { 'five' : null } |
  { 'four' : null };
export type RatingType = { 'own' : null } |
  { 'pub' : null };
export interface _SERVICE {
  'addCuisine' : (arg_0: Cuisine) => Promise<undefined>,
  'addDish' : (arg_0: Dish) => Promise<undefined>,
  'addDishType' : (arg_0: DishType) => Promise<undefined>,
  'addMealType' : (arg_0: MealType) => Promise<undefined>,
  'getAllCuisines' : () => Promise<Array<CuisineConcept>>,
  'getAllDishTypes' : () => Promise<Array<DishTypeConcept>>,
  'getAllDishes' : () => Promise<Array<DishConcept>>,
  'getAllMealTypes' : () => Promise<Array<MealTypeConcept>>,
  'getCuisine' : (arg_0: CuisineId) => Promise<[] | [Cuisine]>,
  'getDish' : (arg_0: DishId) => Promise<[] | [Dish]>,
  'getDishType' : (arg_0: DishTypeId) => Promise<[] | [DishType]>,
  'getMealType' : (arg_0: MealTypeId) => Promise<[] | [MealType]>,
}
