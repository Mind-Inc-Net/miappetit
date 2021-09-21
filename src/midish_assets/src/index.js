import { midish, idlFactory  } from '../../declarations/midish';
import { IDL } from '@dfinity/candid';

document.getElementById('addDishBtn').addEventListener('click', async () => {
  const dish = {
    'defaultName': { 'cusine': 'Kerala', 'name': 'KL'},
    'name': [
      { 'cusine': 'Kerala', 'name': 'KL'}
    ],
    'ratings': [
      { 'ratingType' : {'own': null }, 'score' : {'five' : null }},
      { 'ratingType' : {'pub': null }, 'score' : {'three': null }},
    ],
    'description': 'A sample dish',
    'defaultImage': 'https://myimages.img/1',
    'images': ['https://myimages.img/1', 'https://myimages.img/2'],
    'dishType': { 'id' : BigInt(1), 'name' : 'Soup', 'parent' : BigInt(0) },
    'ingredients': [ 'Sugar' ],
    'mealType': {'breakfast': null }
  };

  await midish.addDish(dish);
});

document.getElementById('clickMeBtn').addEventListener('click', async () => {
  console.log(await midish.getAllDishes());
  console.log( await midish.getDish(BigInt(document.getElementById('dishId').value)));
});
