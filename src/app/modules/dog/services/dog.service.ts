import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dog} from "../models/dog";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogsUrl = 'https://490f9a6b-6d99-4b07-ab1a-9968be60d22f.mock.pstmn.io/dogs';

  constructor(private http: HttpClient) {
  }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  addDog(dog: Dog): Observable<string> {
    return this.http.post<string>(this.dogsUrl, dog);
  }

  deleteDog(dogId: number): Observable<string> {
    return this.http.delete<string>(this.dogsUrl + '/' + dogId);
  }

  editDog(dog: Dog): Observable<string> {
    return this.http.put<string>(this.dogsUrl, dog);
  }

  //pentru Button ROOTING
  getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(this.dogsUrl + '/details/' + id);
  }
}
