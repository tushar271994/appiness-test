import { Injectable, Inject } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs/';

@Injectable()
export class UtilityService {
  profiledata: any;
  /* observable sources */
  private updatedCartData = new BehaviorSubject<any>('');
  public updatedCartData$ = this.updatedCartData.asObservable();

  private updatedUserData = new BehaviorSubject<any>('');
  public updatedUserData$ = this.updatedUserData.asObservable();

  updateUserDetailDataSubscription(action) {
    // if(this.allSubscriptions.indexOf(subscription) < 0) {
    this.updatedUserData.next(action);
    // }
  }

  updateUserDataSubscription(action) {
    // if(this.allSubscriptions.indexOf(subscription) < 0) {
    this.updatedCartData.next(action);
    // }
  }
  setuserData(data: any) {
    this.profiledata = data;
  }
  getuserData() {
    return this.profiledata;
  }
}
