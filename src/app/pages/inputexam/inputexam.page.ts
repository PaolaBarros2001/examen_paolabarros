import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputexam',
  templateUrl: './inputexam.page.html',
  styleUrls: ['./inputexam.page.scss'],
})
export class InputexamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mostrarAlerta() {
    alert('Guardado');
  }
  }
