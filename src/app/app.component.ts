import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {filter, from, map} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'angular-observables';
    data: any[] = [];
    array1 = [1, 3, 5, 7, 9];
    array2 = ['A', 'B', 'C', 'D'];

    // fromEvent Observable
    @ViewChild("createBtn")
    createBtn: ElementRef;

    createBtnObservable;

    // from Observable
    promiseData = new Promise((resolve, reject) => {
        resolve([10, 20, 30, 40, 50, 60, 12]);
    });

    // myObservable = of(this.array1, this.array2, 20, 30, 'Hello', true);

    myObservable = from([2, 4, 6, 8, 10]);
    transformObs = this.myObservable.pipe(map((val) => {
        return val * 5;
    }), filter((val: number) => {
        return val % 4 === 0;
    }));


    // filteredObs = this.transformObs.pipe(filter((val: number) => {
    //     return val % 4 === 0;
    // }));

    // Observable
    // myObservable = new Observable((observer) => {
    //     setTimeout(() => {
    //         (observer.next(1))
    //     }, 1000);
    //     setTimeout(() => {
    //         (observer.next(2))
    //     }, 2000);
    //     setTimeout(() => {
    //         (observer.next(3))
    //     }, 3000);
    //     // setTimeout(() => {
    //     //     (observer.error(new Error('Something went wrong. Please try again later! ')))
    //     // }, 3000);
    //     setTimeout(() => {
    //         (observer.next(4))
    //     }, 4000);
    //     setTimeout(() => {
    //         (observer.next(5))
    //     }, 5000);
    //     setTimeout(() => {
    //         (observer.next(6))
    //     }, 6000);
    //     setTimeout(() => {
    //         (observer.complete())
    //     }, 6000);
    // });

    GetAsyncData() {
        // this.myObservable.subscribe((val: any) => {
        //         this.data.push(val);
        //     },
        //     (error) => {
        //         alert(error.message)
        //     },
        //     () => {
        //         alert("All the data is streamed!")
        //     });

        this
            .transformObs
            .subscribe({
                next:

                    (
                        val: any
                    ) => {
                        this
                            .data
                            .push(val);

                        console
                            .log(val);
                    }

                ,
                error(err) {
                    alert(err.message)
                }
                ,
                complete() {
                    alert("All the data is streamed!");
                }
            })
        ;
    }


// fromEvent Observable
// buttonClicked() {
//     let count = 0;
//     this.createBtnObservable = fromEvent(this.createBtn.nativeElement, 'click')
//         .subscribe((data) => {
//             console.log(data);
//             // this.showItem(++count);
//         });
// }

    ngAfterViewInit() {
        // this.buttonClicked();
    }

// showItem(val: number) {
//     let div = document.createElement('div');
//     div.innerText = 'Item' + val;
//     div.className = 'data-list';
//     document.getElementById('container').appendChild(div);
// }

}
