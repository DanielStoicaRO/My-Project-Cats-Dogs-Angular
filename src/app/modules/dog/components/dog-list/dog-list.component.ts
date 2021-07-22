import {Component, OnInit} from '@angular/core';
import {Dog} from "../../models/dog";
import {DogService} from "../../services/dog.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  // doggies = [
  //   new Dog("Rex", 1, "Ciobanesc"),
  //   new Dog("Yoyo", 2, "Havanez"),
  //   new Dog("Elly", 3, "Sitzu"),

  // {name: "Rex", age: 1, race: "Maidanez"},
  // {name: "Yoyo", age: 2, race: "Havanez"},
  // {name: "Elly", age: 3, race: "Sitzu"},
  // ]
  doggies: Dog[] = [];
  currentDog: Dog = new Dog();
  dogToDelete: Dog = new Dog();
  editModeOn: boolean = false;
  closeResult = '';

  //injectare ruta pentru buton: private router: Router
  constructor(private dogService: DogService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(): void {
    this.dogService.getDogs().subscribe(data => {
      this.doggies = data;
    });
  }

  onClickWoof(): void {
    alert('Woof Woof Woof!')
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onAddDogClick() {
    //adaugare fara backend
    this.doggies.push(this.currentDog);

    //Adaugare REST API
    this.dogService.addDog(this.currentDog).subscribe(
      data => {
        this.fetchDogs();
      },
      error => {
        // alert('An error has ocured' + JSON.stringify(error));
        alert('An error has ocured' + error.status);
      });
    //asta trebuie oricum pt reinitializare
    this.currentDog = new Dog();
  }

  onDeleteDogClick(index: number) {
    //stergere fara backend
    this.doggies.splice(index, 1);

    //  stergere cu API
    this.dogService.deleteDog(index).subscribe(data => {
      alert(data);
      this.fetchDogs();
    });
  }

  openDeleteConfirmationModal(content: any, index: number) {
    this.dogToDelete = this.doggies[index];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.onDeleteDogClick(index);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  enterEditMode(dog: Dog) {
    this.editModeOn = true;
    this.currentDog = dog;
  }

  leaveEditMode() {
    //Editare fara BE !!! Comentati cand se foloseste REST API
    this.editModeOn = false;
    this.currentDog = new Dog();

    //  Editare cu REST API
    this.dogService.editDog(this.currentDog).subscribe(data => {
      this.fetchDogs();
    })
  }

  goToDogDetails(id:number){
    this.router.navigate(['dogs/details',id]);
  }

}
