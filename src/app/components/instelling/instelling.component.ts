import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instelling',
  templateUrl: './instelling.component.html',
  styleUrls: ['./instelling.component.css'],
})
export class InstellingComponent implements OnInit {
  open() {}

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
