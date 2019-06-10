import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../service/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit, OnDestroy {
  user: any = [];
  countries: string[] = ['INDIA', 'USA', 'UK', 'Canada'];
  registrationForm: FormGroup;
  submitted = false;
  result: any = [];
  register = false;
  update = true;
  unsubscribe: any;
  getData: any;
  test: any;

  constructor(
    private formBuilder: FormBuilder,
    private util: UtilityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.test = this.util.updatedUserData$.subscribe(response => {
      this.result = response;
      console.log('result', this.result);
      this.registrationForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['', Validators.required],
        country: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        address: ['', Validators.required]
      });

      if (this.result && this.result.email) {
        this.update = false;
        this.registrationForm.setValue({
          firstName: this.result.firstName,
          lastName: this.result.lastName,
          email: this.result.email,
          age: this.result.age,
          country: this.result.country,
          dateOfBirth: this.result.dateOfBirth,
          address: this.result.address
        });
      }
    });
  }
  ngOnDestroy() {
    this.test.unsubscribe();
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }
    if (JSON.parse(localStorage.getItem('userData'))) {
      const userGetData = JSON.parse(localStorage.getItem('userData'));
      for (let i = 0; i < userGetData.length; i++) {
        if (userGetData[i].email === this.registrationForm.value.email) {
          userGetData[i] = this.registrationForm.value;
          localStorage.setItem('userData', JSON.stringify(userGetData));
          break;
        }
      }
      if (this.update) {
        userGetData.push(this.registrationForm.value);
        localStorage.setItem('userData', JSON.stringify(userGetData));
        this.util.updateUserDataSubscription(userGetData);
      }
    } else {
      this.user.push(this.registrationForm.value);
      localStorage.setItem('userData', JSON.stringify(this.user));
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value));
    this.registrationForm.reset();
    alert('Successfully done');
  }
  usersNavigation() {
    this.router.navigate(['/getuser']);
  }
}
