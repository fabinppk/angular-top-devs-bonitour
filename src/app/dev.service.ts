import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dev } from './dev';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class DevService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  setHeaders() {
    let headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .set("secret_key", "vSMtK8VnNI97RGxrEFM2Dg")
    .set("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpQGJvbml0b3VyLmNvbS5iciIsImV4cCI6MTU3OTA5MDg3M30.eyLkJgU6YKSuX5HQjuW3oCfl7GEpkKf_mGlQnVod7bY");
    return headers;
  }

  getResources(){
    const apiUrl = "https://api.bonitour.com.br/api/v3/devs";
    const headers = this.setHeaders();
    return this.http.get<Dev[]>(apiUrl, {headers});
  }

  getResourceDev(nome: string){
    const apiUrlDev = `https://api.bonitour.com.br/api/v3/dev/${nome}`;
    const nomeNoSlug = `${nome}`.replace('-', ' ').toUpperCase();
    this.messageService.add(`Get ${nomeNoSlug}`);
    const headers = this.setHeaders();
    return this.http.get<Dev[]>(apiUrlDev, {headers});
  }
}
