import { Injectable } from '@angular/core';

@Injectable()
export class PizzasService {

  constructor() { }
  getPizzasList() {
    return [
      {
        id: '1',
        type: 'Supreme',
        name: 'Veggie Supreme',
        description: 'Onion, Capsicum, Mushroom, Red Peprika, Black Olives, Sweet Corn',
        size: 'Medium',
        price: '545'
      },
      {
        id: '2',
        type: 'Supreme',
        name: 'Exotica',
        description: 'Red Capsicum, Green Capsicum, Baby Corn, Black Olives, Jalapenos',
        size: 'Medium',
        price: '455'
      },
      {
        id: '3',
        type: 'Supreme',
        name: 'Paneer Vegorama',
        description: 'Paneer, Onion, Capsicum, Black Olives, Red Paprika',
        size: 'Medium',
        price: '665'
      },
      {
        id: '4',
        type: 'Supreme',
        name: 'Chicken Supreme',
        description: 'Chicken Tikka, Chicken Hot & Chilly, Chicken Meatball',
        size: 'Medium',
        price: '567'
      },
      {
        id: '5',
        type: 'Supreme',
        name: 'Triple Chicken Feast',
        description: 'Chicken Keema, Chicken Meatball, Chicken Hot & Chilly, Capsicum, Onion, Sweet Corn',
        size: 'Medium',
        price: '777'
      }
    ]
  }
  getOfferPizzasList() {
    return [
      {
        id: '1',
        type: 'Supreme',
        name: 'Veggie Supreme',
        description: 'Onion, Capsicum, Mushroom, Red Peprika, Black Olives, Sweet Corn',
        size: 'Medium',
        price: '245'
      },
      {
        id: '4',
        type: 'Supreme',
        name: 'Chicken Supreme',
        description: 'Chicken Tikka, Chicken Hot & Chilly, Chicken Meatball',
        size: 'Medium',
        price: '267'
      },
      {
        id: '5',
        type: 'Supreme',
        name: 'Triple Chicken Feast',
        description: 'Chicken Keema, Chicken Meatball, Chicken Hot & Chilly, Capsicum, Onion, Sweet Corn',
        size: 'Medium',
        price: '377'
      }
    ]
  }
}
