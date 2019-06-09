import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.sass']
})
export class GetUserComponent implements OnInit {
  userprofileArray: any;

  constructor(private util: UtilityService, private router: Router) {}

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('userData'))) {
      this.util.updatedCartData$.subscribe(res => {
        console.log('updated res', res);
        this.userprofileArray = res;
      });
      this.userprofileArray = JSON.parse(localStorage.getItem('userData'));
    }
  }
  addUser() {
    const obj = {};
    obj['data'] = [];
    obj['index'] = true;
    console.log('obj', obj);
    this.util.setuserData(obj);
    this.router.navigate(['/addUser']);
  }
  editUserDetail(userData: any, index: any) {
    console.log('data edit', index);
    userData.index = index;
    this.util.updateUserDetailDataSubscription(userData);
    this.router.navigate(['/addUser']);
  }
}
