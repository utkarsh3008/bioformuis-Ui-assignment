import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ApiUrl = "http://localhost:3000/domainList"

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  public get(): Observable<any> {
    return this._http.get(ApiUrl).pipe(map(res => res));
  }

  public postData(data: any):Observable<any> {
    return this._http.post(ApiUrl , data)
  }
}
