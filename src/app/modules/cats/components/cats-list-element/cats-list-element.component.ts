import {Component, Input, OnInit} from '@angular/core';
import {Cat} from "../../classes/cats";

@Component({
  selector: 'app-cats-list-element',
  templateUrl: './cats-list-element.component.html',
  styleUrls: ['./cats-list-element.component.scss']
})
export class CatsListElementComponent implements OnInit {

  @Input() cat: Cat = new Cat();

  constructor() { }

  ngOnInit(): void {
  }

}
