import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpEventType
} from "@angular/common/http";
import { Observable, throwError, Subscription, BehaviorSubject } from "rxjs";
import { catchError, map } from "rxjs/operators";




const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class BackendService {


  
  private baseURL = "http://localhost:3000/api/";
  // private baseURL = "https://real-write.appspot.com/api/";


  rhymeResult = null;

  constructor(private http: HttpClient) {}

  errorHandler(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.error('Allocation Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError(`Something happened...long story short there is a problem with the service,
      please let Kevin know about this and where it happened.`)
  }

  
  initializeResults(relate,rhyme,sl,topics) { 

    this.rhymeResult = this.http.get<any[]>(`${this.baseURL}wordSearch/${relate}/${rhyme}/${sl}/${topics}`);
    // this.currentEnc = new BehaviorSubject<any>(this.encResults);
         
  }

  ///////////////////////////Retainer /////////////////////////////////
  wordSearch(relate,rhyme,sl,topics) {
    this.rhymeResult = this.http.get<any[]>(`${this.baseURL}wordSearch/${relate}/${rhyme}/${sl}/${topics}`);

  }

  // initializeResults(relate,rhyme,sl,topics) { 
  //   let url = `${this.baseURL}wordSearch`;
  //   if(relate) {
  //     url += `/${relate}`;
  //   } else if(rhyme) {
  //     url += `/${rhyme}`;
  //   } else if(sl) {
  //     url += `/${sl}`;
  //   } else if(topics) {
  //     url += `/${topics}`;
  //   }
  
  //   this.rhymeResult = this.http.get<any[]>(url);

         
  // }


  
  // wordSearch(relate,rhyme,sl,topics) {
  //   let url = `${this.baseURL}wordSearch`;
  //   if(relate) {
  //     url += `/${relate}`;
  //   } else if(rhyme) {
  //     url += `/${rhyme}`;
  //   } else if(sl) {
  //     url += `/${sl}`;
  //   } else if(topics) {
  //     url += `/${topics}`;
  //   }
  
  //   this.rhymeResult = this.http.get<any[]>(url);

  // }



  }