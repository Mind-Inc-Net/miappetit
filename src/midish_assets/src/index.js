import { midish, idlFactory } from '../../declarations/midish';
import { IDL } from '@dfinity/candid';

document.getElementById('addDishBtn').addEventListener('click', async () => {
  const dish = {
    'defaultName': { 'cusine': 'Kerala', 'name': 'KL' },
    'name': [
      { 'cusine': 'Kerala', 'name': 'KL' }
    ],
    'ratings': [
      { 'ratingType': { 'own': null }, 'score': { 'five': null } },
      { 'ratingType': { 'pub': null }, 'score': { 'three': null } },
    ],
    'description': 'A sample dish',
    'defaultImage': 'https://myimages.img/1',
    'images': ['https://myimages.img/1', 'https://myimages.img/2'],
    'dishType': { 'name': 'Soup', 'dishTypeId': BigInt(1), 'parentDishTypeId': BigInt(0), 'description': 'Soup', },
    'ingredients': ['Sugar'],
    'mealType': { 'mealTypeId': BigInt(1), 'name': 'Breakfast', 'description': 'Breakfast', 'timeFrom': '6 AM', 'timeTo': '11 AM', 'imageUrl': 'images.com/dummyurl', }
  };

  await midish.addDish(dish);
});

document.getElementById('clickMeBtn').addEventListener('click', async () => {
  console.log(await midish.getAllDishes());
  console.log(await midish.getDish(BigInt(document.getElementById('dishId').value)));
});
