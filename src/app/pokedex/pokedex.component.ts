import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

   page: number | undefined ;
   start: number | undefined ;
   end: number | undefined ;
   idTable: number[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe( params => this.page = params.page);
    if (this.page){
      this.start = ((this.page - 1) * 12) + 1 ;
      this.end = this.page * 12;
    }
  }

  ngOnInit(): void {
    if (this.start && this.end){
      for ( let i = this.start; i <= this.end; i++){
          this.idTable.push(i);
      }
    }
    else{
      for ( let i = 1; i <= 12; i++){
        this.idTable.push(i);
      }
    }
    console.log(this.idTable);

  }

}
