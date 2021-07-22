import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takemehome-list',
  templateUrl: './takemehome-list.component.html',
  styleUrls: ['./takemehome-list.component.scss']
})
export class TakemehomeListComponent implements OnInit {
  images: string[] = [

    "assets/imagine/takehome4.jpg",
    "assets/imagine/takehome6.jpg",
    "assets/imagine/takehome7.jpg",
    "assets/imagine/takehome8.jpg"

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
