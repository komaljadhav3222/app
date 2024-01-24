import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpMovieService {

  apiUrl:string=`https://api.themoviedb.org/3/discover`
  apiKey:string="5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  
  searchApi:any='';
  searchApiUrl:string=`https://api.themoviedb.org/3/search`
  searchApiKey:string=`5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&query=${this.searchApi}&page=1&include_adult=false`

  getMovieDetails:any='';
  getMovieApiUrl:string='https://api.themoviedb.org/3'
  getMovieApiKey:string='5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US'
  constructor(private _httpClient: HttpClient) {

   }
   getMovie() : Observable<any> {    
    const url = `${this.apiUrl}/movie?api_key=${this.apiKey}`;
    return this._httpClient.get(url);
  }

  searchMovie(searchText:string):Observable<any> {
    this.searchApi=searchText;
    return this._httpClient.get(`${this.searchApiUrl}/movie?api_key=${this.searchApiKey}`);
  }

  getMoviesDetails(getMovie:string) : Observable<any> {  
    this.getMovieDetails=getMovie;  
    const url = `${this.getMovieApiUrl}/movie/${this.getMovieDetails}?api_key=${this.getMovieApiKey}`;
    return this._httpClient.get(url);
  }

}
