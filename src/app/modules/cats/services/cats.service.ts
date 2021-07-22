import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../classes/cats";


@Injectable({
  providedIn: 'root'
})
export class CatsService {
  catsUrl = 'https://12d17673-a9ae-4c9d-880f-6ad430fb549b.mock.pstmn.io/cats';

  constructor(private http: HttpClient) {
  }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl);
  }

  addCat(cat: Cat): Observable<string> {
    return this.http.post<string>(this.catsUrl, cat);
  }

  deleteCat(catId: number): Observable<string> {
    return this.http.delete<string>(this.catsUrl + '/' + catId);
  }

  editCat(cat: Cat): Observable<string> {
    return this.http.put<string>(this.catsUrl, cat);
  }
}
