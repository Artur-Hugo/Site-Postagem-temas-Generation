import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }
   

  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogcybercinza.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogcybercinza.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogcybercinza.herokuapp.com/usuarios/${id}`,this.token)
  }

  putUsuario(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://blogcybercinza.herokuapp.com/usuarios/alterar',user, this.token)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok

  }
}
