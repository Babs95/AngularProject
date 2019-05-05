import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
/*tabItem: any[];
  baseUrl = 'http://localhost/MVC/Gestion_Water_Exam/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }*/
  /*private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  getAll(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/test?num`).pipe(
      map((res) => {
        this.tabItem = res['data'];
        return this.tabItem;
      }),
      catchError(this.handleError));
  }*/
  /*onSearch(data) {
    this.http.get<any[]>('http://localhost/MVC/Gestion_Water_Exam/angular?num="+data.numero+"').subscribe(
      (babs) => {
        this.tabItem = babs;
        console.log(babs);
      }
    )
  }*/
  me: any;
  x: any;
  alert1 = 0;
  alert2 = 0;
  alert3 = 0;
  ui1: string;
  ui2: string;
  ui3: string;
  ui4: string;
  babs1: string;
  babs2: string;
  babs3: string;
  babs4: string;
  //cars[i].mode
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  verif() {

    this.http.get("http://localhost/api/list.php?num="+this.me).subscribe(
      (xx) => {
        this.x = xx['data'];
        console.log(xx);
        //console.log(x[i].mois );
        console.log(this.x.reglement);
        console.log(this.x[0].consommation);
        if (this.x[0].reglement == 'payer') {
          this.ui1 = this.x[1].mois;
          this.ui2 = this.x[1].consommation;
          this.ui3 = this.x[1].prix;
          this.ui4 = this.x[1].reglement;

          this.babs1 = this.x[0].mois;
          this.babs2 = this.x[0].consommation;
          this.babs3 = this.x[0].prix;
          this.babs4 = this.x[0].reglement;

          this.alert1 = 1
          this.alert2 = 0
          this.alert3 = 0

        } else if (this.x[0].reglement == 'non payer' ) {

          this.ui1 = this.x[1].mois;
          this.ui2 = this.x[1].consommation;
          this.ui3 = this.x[1].prix;
          this.ui4 = this.x[1].reglement;

          this.babs1 = this.x[0].mois;
          this.babs2 = this.x[0].consommation;
          this.babs3 = this.x[0].prix;
          this.babs4 = this.x[0].reglement;

          this.alert2 = 1
          this.alert1 = 0
          this.alert3 = 0
        } else {
          this.alert2 = 0
          this.alert1 = 0
          this.alert3 = 1
          this.me = "";
        }
      },
      () => {
        console.log('Bad');
      }
    );
  }
}
