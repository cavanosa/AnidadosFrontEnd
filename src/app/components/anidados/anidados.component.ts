import { Component, OnInit } from '@angular/core';
import { Marca } from '../../models/marca';
import { Modelo } from '../../models/modelo';
import { AnidadosService } from '../../services/anidados.service';

@Component({
  selector: 'app-anidados',
  templateUrl: './anidados.component.html',
  styleUrls: ['./anidados.component.css']
})
export class AnidadosComponent implements OnInit {

  coches: Marca[];
  marcaElegida: Marca = null;
  modelos: Modelo[] = [];

  constructor(private anidadosService: AnidadosService) { }

  ngOnInit() {
    this.anidadosService.getCoches().subscribe(coches => this.coches = coches);
  }

}
