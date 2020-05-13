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

  private _rhymeBookContent: BehaviorSubject<string> = new BehaviorSubject("");

  public readonly rhymeBookContent: Observable<string> = this._rhymeBookContent.asObservable();
  
  // private baseURL = "http://localhost:3000/api/";
  private baseURL = "https://real-write-rap.ue.r.appspot.com/api/";


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


  ///////////////////////////Store Services /////////////////////////////////
  
  saveRhymeBookContent(content: string) {
    console.log("Saving Content");
    return this._rhymeBookContent.next(content);
  }





  ///////////////////////////Rhyme Services /////////////////////////////////
  wordSearch(rhyme,sl,topics): Observable<any> {
    return this.http.get<any[]>(`${this.baseURL}wordSearch/${rhyme}/${topics}`);

  }

  initializeResults(rhyme,sl,topics): Observable<any> { 

    return this.http.get<any[]>(`${this.baseURL}wordSearch/${rhyme}/${topics}`);
    // this.currentEnc = new BehaviorSubject<any>(this.encResults);
         
  }

  


  }