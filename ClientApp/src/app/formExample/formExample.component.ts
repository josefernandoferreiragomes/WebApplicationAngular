import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'example-app',
  templateUrl: './formExample.component.html'
})
export class SimpleFormComp {
  public simpleform: SimpleFormExample;
  private shttp: HttpClient;
  private sBaseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.shttp = http;
    this.sBaseUrl = baseUrl;
  }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.simpleform = new SimpleFormExample();
    this.simpleform.first = "3";
    this.simpleform.last = "2";
    this.simpleform.dateinput = "1";
    this.shttp.post<SimpleFormExample>(this.sBaseUrl + 'weatherforecast', this.simpleform).subscribe(result => {
      var a = 1;
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
