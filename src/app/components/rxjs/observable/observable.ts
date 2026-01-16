import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common-service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class ObservableDemoComponent implements OnInit, OnDestroy {

  private numsSub !: Subscription;
  userData: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    // get All User
    this.commonService.getAllUser().subscribe({
      next: (res) => {
        this.userData = res;
        // console.log(this.userData)
      },
      error: (err) => {
        console.log('Error ', err.error.message)
      }
    })


    // Observable
    console.log('before subscribe');
    this.numsSub = this.commonService.nums1$.subscribe({
      next: (val) => console.log('of Value:', val),
      error: (err) => console.log('Error:', err),
      complete: () => console.log('Stream finished')
    });

    this.commonService.nums2$.pipe(filter(data => data % 2 !== 0), map(v => v * v)).subscribe((res) => {
      // console.log('from value:', res)
    });

    // Observer
    // this.commonService.observerData.next('Get Observer Data')


    // Creations Operators
    // this.commonService.creationsObs.subscribe((res:any) => {
    //   console.log('Creations:', res);
    // });

    // Transformations Operators
    // this.commonService.trans.subscribe((res: any) => {
    //   console.log('Transformations:', res);
    // });

    // Filtring Operators
    // this.commonService.filOpr.subscribe((res: any) => {
    //   console.log('Filter Operations:', res);
    // });

    // // Take Operators
    // this.commonService.takeOpr.subscribe((res: any) => {
    //   console.log('Filter Operations:', res);
    // });

    // Join Operators
    // this.commonService.joinOpr.subscribe((res: any) => {
    //   console.log('Filter Operations:', res);
    // });

    // this.commonService.finalData.subscribe((res)=>{
    //   console.log('custorm pipe function', res)
    // })


  }

  ngOnDestroy(): void {
    this.numsSub.unsubscribe();
    console.log('unsubscribed')
  }

}
