import { Injectable } from '@angular/core';

import { Music } from "../Models/music.model"
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class MusicService {

  private Path: String = 'http://localhost:3000/api/music/add'

  constructor(private http: HttpClient) { }

  //ทำหน้าที่คล้ายๆ Postman แต่มายิงผ่าน Angular
  getMusic(): Observable<Music[]> {
    return this.http.get<Music[] > ('${this.path}')
  }
}
