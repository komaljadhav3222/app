import { Component, OnInit } from '@angular/core';
import { HttpMovieService } from '../services/http-movie.service';

@Component({
  selector: 'app-http-movie',
  templateUrl: './http-movie.component.html',
  styleUrls: ['./http-movie.component.css']
})
export class HttpMovieComponent implements OnInit {
  response: any;
  backdropPaths:any;
  MovieNames:any;
  result:any=[];
  searchText: string = '';
  imgPrefix:string="https://www.themoviedb.org/t/p/w1280"

  constructor(private _httpMovie:HttpMovieService) { }
 
 
  ngOnInit(): void {
    this._httpMovie.
    getMovie().subscribe( (res) => {
      console.log('getting data from server', res);
      this.result.push(res.results);   
      this.response=res;
     this.backdropPaths = res.results.map((movie: { backdrop_path: any }) => this.imgPrefix+movie.backdrop_path);
     this.MovieNames = res.results.map((movie: { original_title: any }) => movie.original_title);
   
     
      console.log("backdrop_path = ",this.backdropPaths,"Movie Name = ",this.MovieNames);
      
     })   
  }
  searchMovie(searchText: string){
 this._httpMovie.searchMovie(searchText).subscribe((res)=>{
  console.log("searchMovie response",res);
  
 })
 
}
}
