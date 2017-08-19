import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  onButtonSubmit() {
    console.log('BUTTON SUBMITTED');
  }

}
