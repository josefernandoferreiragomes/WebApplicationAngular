import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'example-app',
  templateUrl: './formExample.component.html'
})
export class SimpleFormComp {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
