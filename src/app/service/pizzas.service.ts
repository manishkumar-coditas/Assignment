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
        price: '545',
        userDetails: {}
      },
      {
        id: '2',
        type: 'Supreme',
        name: 'Exotica',
        description: 'Red Capsicum, Green Capsicum, Baby Corn, Black Olives, Jalapenos',
        size: 'Medium',
        price: '455',
        userDetails: {}
      },
      {
        id: '3',
        type: 'Supreme',
        name: 'Paneer Vegorama',
        description: 'Paneer, Onion, Capsicum, Black Olives, Red Paprika',
        size: 'Medium',
        price: '665',
        userDetails: {}
      },
      {
        id: '4',
        type: 'Supreme',
        name: 'Chicken Supreme',
        description: 'Chicken Tikka, Chicken Hot & Chilly, Chicken Meatball',
        size: 'Medium',
        price: '567',
        userDetails: {}
      },
      {
        id: '5',
        type: 'Supreme',
        name: 'Triple Chicken Feast',
        description: 'Chicken Keema, Chicken Meatball, Chicken Hot & Chilly, Capsicum, Onion, Sweet Corn',
        size: 'Medium',
        price: '777',
        userDetails: {}
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
        oldPrice: '554',
        price: '245',
        userDetails: {}
      },
      {
        id: '4',
        type: 'Supreme',
        name: 'Chicken Supreme',
        description: 'Chicken Tikka, Chicken Hot & Chilly, Chicken Meatball',
        size: 'Medium',
        oldPrice: '656',
        price: '267',
        userDetails: {}
      },
      {
        id: '5',
        type: 'Supreme',
        name: 'Triple Chicken Feast',
        description: 'Chicken Keema, Chicken Meatball, Chicken Hot & Chilly, Capsicum, Onion, Sweet Corn',
        size: 'Medium',
        oldPrice: '543',
        price: '377',
        userDetails: {}
      }
    ]
  }
}
