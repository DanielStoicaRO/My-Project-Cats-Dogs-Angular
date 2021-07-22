import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DogService} from "../../services/dog.service";
import {Dog} from "../../models/dog";

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  //pentru BUTONUL de ROOTING
  id: number = -1;
  dog: Dog = new Dog();

  //pentru BUTONUL de ROOTING: private dogService: DogService
  constructor(private route: ActivatedRoute, private router: Router, private dogService: DogService) {
  }

  //pt buton ROOTING
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dogService.getDog(this.id).subscribe(data => {
        this.dog = data;
      });
    });
  }

  goToDogList() {
    this.router.navigate(['dogs']);
  }
}
