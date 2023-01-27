import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  currentCount : string = "0";
  favouriteFood : string = "Orange";
  comment : string = "pineapple";
  public incrementEdit() {
    this.currentCount = this.favouriteFood + " " + this.comment;
  }
}

