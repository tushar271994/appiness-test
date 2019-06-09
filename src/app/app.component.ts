import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userprofileArray: any;
  user: any;
  countries: string[] = ['USA', 'UK', 'Canada'];
  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private util: UtilityService) {}

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('userData'))) {
      // this.updatedCartData$.subscribe(res => {
      //   console.log('updated res', res);
      //   this.userprofileArray = res;
      // });
      this.userprofileArray = JSON.parse(localStorage.getItem('userData'));
    }
  }
}
