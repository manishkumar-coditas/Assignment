import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.less']
})
export class CardViewComponent implements OnInit {

  @Input() list;
  @Output() selectedPizza = new EventEmitter();
  constructor() { 
  }

  ngOnInit() {
  }

  buttonClicked(data) {
    this.selectedPizza.emit(data);
  }
}
