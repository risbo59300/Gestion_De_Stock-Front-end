import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.css']
})
export class BoutonActionComponent implements OnInit {

  @Output() //Envoie des info du composant fils vers le composant parent
  clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  boutonNouveauClick(): void{
      this.clickEvent.emit();
  }

}
