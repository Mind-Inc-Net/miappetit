import type { Principal } from '@dfinity/principal';
export interface Dish {
  'defaultName' : DishName,
  'name' : Array<DishName>,
  'ratings' : Array<Rating>,
  'description' : string,
  'defaultImage' : Image,
  'dishType' : DishType,
  'ingredients' : Array<Ingredient>,
  'mealType' : MealType,
  'images' : Array<Image>,
}
export interface DishConcept { 'dish' : Dish, 'dishId' : DishId }
export type DishId = number;
export interface DishName { 'cusine' : string, 'name' : string }
export interface DishType { 'id' : bigint, 'name' : string, 'parent' : bigint }
export type Image = string;
export type Ingredient = string;
export type MealType = { 'breakfast' : null } |
  { 'lunch' : null } |
  { 'dinner' : null };
export interface Rating { 'ratingType' : RatingType, 'score' : RatingScore }
export type RatingScore = { 'one' : null } |
  { 'two' : null } |
  { 'three' : null } |
  { 'five' : null } |
  { 'four' : null };
export type RatingType = { 'own' : null } |
  { 'pub' : null };
export interface _SERVICE {
  'addDish' : (arg_0: Dish) => Promise<undefined>,
  'getAllDishes' : () => Promise<Array<DishConcept>>,
  'getDish' : (arg_0: DishId) => Promise<[] | [Dish]>,
}
