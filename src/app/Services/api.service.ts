import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../module/user.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL = environment.URL;

  constructor(private http:HttpClient) { }

public lista(): Observable<Usuarios[]> {
  return this.http.get<Usuarios[]>(this.URL);
}
public detalle(id:number): Observable<Usuarios>{
  return this.http.get<Usuarios>(this.URL + `/${id}`);
}

public guardar(usuarios:Usuarios): Observable<Usuarios> {
  return this.http.post<Usuarios>(this.URL, usuarios);

}
public delete(id:number): Observable<any>{
  return this.http.delete<any>(this.URL + `/${id}`);
}
public update(id:number, usuarios:Usuarios): Observable<any>{
  return this.http.put<any>(this.URL + `/${id}`, usuarios);
}
}
  
