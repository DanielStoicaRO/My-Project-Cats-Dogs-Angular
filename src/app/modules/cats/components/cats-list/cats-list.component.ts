import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Cat} from "../../classes/cats";
import {CatsService} from "../../services/cats.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {

  catties: Cat[] = [];
  currentCat: Cat = new Cat();
  catToDelete: Cat = new Cat();
  editModeOn: boolean = false;
  closeResult = '';

  constructor(private router: Router, private catService: CatsService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.fetchCats();
  }

  fetchCats(): void {
    this.catService.getCats().subscribe(data => {
      this.catties = data;
    });
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

  onAddCatClick() {
    //adaugare fara backend
    this.catties.push(this.currentCat);

    //Adaugare REST API
    this.catService.addCat(this.currentCat).subscribe(
      data => {
        this.fetchCats();
      },
      error => {
        alert('An error has ocured' + error.status);
      });
    //asta trebuie oricum pt reinitializare
    this.currentCat = new Cat();
  }

  onDeleteCatClick(index: number) {
    this.catties.splice(index, 1);

    this.catService.deleteCat(index).subscribe(data=> {
      alert(data);
      this.fetchCats();
    });
  }

  openDeleteConfirmationModal(content: any, index: number) {
    this.catToDelete = this.catties[index];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.onDeleteCatClick(index);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  enterEditMode(cat: Cat) {
    this.editModeOn = true;
    this.currentCat = cat;
  }

  leaveEditMode() {
    //Editare fara BE !!! Comentati cand se foloseste REST API
    this.editModeOn = false;
    this.currentCat = new Cat();

    //  Editare cu REST API
    this.catService.editCat(this.currentCat).subscribe(data=> {
      this.fetchCats();
    })
  }

  //buton goToLoveMe
  goToLoveMe() {
    this.router.navigate(['takemehome']);
    this.modalService.dismissAll();
  }
}

