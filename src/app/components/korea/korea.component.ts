import { Component, OnInit } from '@angular/core';
import { Music } from "../../Models/music.model"
import { MusicService } from '../../services/music.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-korea',
  templateUrl: './korea.component.html',
  styleUrls: ['./korea.component.css']
})
export class KoreaComponent implements OnInit {

  private list : Music[]

  constructor(private router:Router, private musicService:MusicService) { }

  ngOnInit() {
    this.musicService.getMusic().subscribe((response) => {this.list = response
    })
  }

}
