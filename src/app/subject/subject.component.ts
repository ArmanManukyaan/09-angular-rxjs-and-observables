import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    ngOnInit(): void {
        // let obs = new Observable((observer) => {
        //     observer.next(Math.random());
        // });
        // const subject = new Subject();
        // const subject = new ReplaySubject();
        // const subject = new BehaviorSubject<number>(100);


        // Subscriber 1
        // subject.subscribe((data) => {
        //     console.log(data);
        // });
        //
        // // Subscriber 2
        // subject.subscribe((data) => {
        //     console.log(data)
        // });
        //
        // subject.next(100);
        // subject.next(200);
        // subject.next(300);

        // subject.next(2020);

        // AJAX CALL
        //     const subject = new Subject();
        //     const data = ajax('https://randomuser.me/api/');
        //     data.subscribe((res) => {
        //         console.log(res)
        //     })
        //
        //     data.subscribe((res) => {
        //         console.log(res)
        //     })
        //
        //     data.subscribe((res) => {
        //         console.log(res)
        //     })
        //
        //     data.subscribe(subject);
        //
        // }


        // Promise vs Observable
        const promise = new Promise((resolve, reject) => {
            console.log("Promise is called");
            resolve(100);
            resolve(200);
            resolve(300);
        });

        promise.then((data) => {
            console.log(data);
        });

        const obs = new Observable((sub) => {
            console.log("Observable is called");
            sub.next(100);
            sub.next(200);
            sub.next(300);
        });

        obs.subscribe((data) => {
            console.log(data)
        });

    }
}
