import {Component, Input, OnInit} from '@angular/core';
import {Dog} from "../../models/dog";

@Component({
  selector: 'app-dog-list-element',
  templateUrl: './dog-list-element.component.html',
  styleUrls: ['./dog-list-element.component.scss']
})
export class DogListElementComponent implements OnInit {

  @Input() dog: Dog = new Dog();

  constructor() {
  }

  ngOnInit(): void {
  }

}
