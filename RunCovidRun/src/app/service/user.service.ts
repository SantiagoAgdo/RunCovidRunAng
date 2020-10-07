import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl = 'http://localhost:8080/user/';

  constructor(private httpClient: HttpClient) {

  }

  public List(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl + 'list');
  }

  public save(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userUrl + 'createuser', user);
  }

  public checkUser(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userUrl + 'checkUser', user);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<User[]>(this.userUrl + `delete/${id}`);
  }

  public update(id: number, user: User): Observable<any> {
    return this.httpClient.put<User[]>(this.userUrl + `updateuser/${id}`, user);
  }
}
