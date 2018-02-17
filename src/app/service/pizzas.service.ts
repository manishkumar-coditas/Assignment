import { Injectable } from '@angular/core';

@Injectable()
export class PizzasService {

  constructor() { }

  getPizzasList() {
    return [
      {
        id: 'pizza1',
        name: 'Pizza 1',
        description: 'Nice pizza',
        price: '200',
        available: 'yes'
      },
      {
        id: 'pizza2',
        name: 'Pizza 2',
        description: 'Nice pizza2',
        price: '202',
        available: 'no'
      },
      {
        id: 'pizza3',
        name: 'Pizza 3',
        description: 'Nice pizza3',
        price: '203',
        available: 'yes'
      },
      {
        id: 'pizza4',
        name: 'Pizza 4',
        description: 'Nice pizza 4',
        price: '204',
        available: 'yes'
      },
      {
        id: 'pizza5',
        name: 'Pizza 5',
        description: 'Nice pizza 5',
        price: '205',
        available: 'yes'
      }
    ]
  }
}
