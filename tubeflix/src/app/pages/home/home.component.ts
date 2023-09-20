import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private service:MovieApiService) { }

  ngOnInit(): void {
    this.bannerData();
  }

  // Banner Data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerResult#');
    });
  }

}
