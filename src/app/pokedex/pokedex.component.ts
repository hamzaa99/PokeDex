import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

   page: number | undefined ;
   previousPage: number | undefined ;
   nextPage: number | undefined ;
   start: number | undefined ;
   end: number | undefined ;
   idTable: number[] = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.page = params.page);

    if (this.page){
      if (this.page > 1 ) {this.previousPage = this.page - 1 ; }
      if (this.page > 1 ) {this.nextPage =  +this.page + (+1) ; }
      this.start = ((this.page - 1) * 10) + 1 ;
      this.end = this.page * 10;
    }
    this.setTable();

  }

  public next(): void{
    if (this.nextPage) {
      this.start = ((this.nextPage - 1) * 10) + 1 ;
      this.end = this.nextPage * 10;
      this.idTable = [];
      this.setTable();
      if (this.nextPage > 1 ){
        this.nextPage --;
        if ( this.previousPage ) { this.previousPage --; }
      }

    }

  }
  public previous(): void{
    if (this.previousPage) {
      this.start = ((this.previousPage - 1) * 10) + 1 ;
      this.end = this.previousPage * 10;
      this.idTable = [];
      this.setTable();
      if (this.previousPage > 1 ){
        this.previousPage --;
        if ( this.nextPage ) { this.nextPage --; }
      }

    }

  }
  public setTable(): void{
    if (this.start && this.end){
      for ( let i = this.start; i <= this.end; i++){
        this.idTable.push(i);
      }
    }
    else{
      for ( let i = 1; i <= 10; i++){
        this.idTable.push(i);
      }
    }
    console.log(this.idTable);

  }

}
