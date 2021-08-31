import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.scss']
})
export class BoutonActionComponent implements OnInit {
  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonNouveauClick(): void{
    this.clickEvent.emit();

  }

}
