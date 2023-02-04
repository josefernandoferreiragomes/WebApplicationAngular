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
    
    this.shttp.post<SimpleWeatherCalculate>(this.sBaseUrl + 'weatherforecast', f.value).subscribe(result => {
      f.setValue({
        firstHour: result.firstHour,
        lastHour: result.lastHour,
        dateInput: result.dateInput,
        resultResponse: result.resultResponse
      });
    }, error => console.error(error));
  }
}

class SimpleWeatherCalculate {
  firstHour: string;
  lastHour: string;
  dateInput: string;
  resultResponse: string;
}

function f<T>(arg0: string, f: any) {
    throw new Error('Function not implemented.');
}
