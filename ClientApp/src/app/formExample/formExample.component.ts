import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'example-app',
  templateUrl: './formExample.component.html'
})
export class SimpleFormComp {
  private shttp: HttpClient;
  private sBaseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.shttp = http;
    this.sBaseUrl = baseUrl;
  }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    
    this.shttp.post<SimpleFormExample>(this.sBaseUrl + 'weatherforecast', f.value).subscribe(result => {
      f.setValue({
        first: result.first,
        last: result.last,
        dateinput: result.dateinput,
        resultResponse: "server responded"
      });
    }, error => console.error(error));
  }
}

class SimpleFormExample {
  first: string;
  last: string;
  dateinput: string;
}

function f<T>(arg0: string, f: any) {
    throw new Error('Function not implemented.');
}
