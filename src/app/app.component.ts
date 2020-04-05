import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'restapi';

  resData;
  newsdata;


  constructor (private http: HttpClient) { }

  ngOnInit() {
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-05&sortBy=publishedAt&apiKey=7b3396e89f5c4563a02f47d053985b96";
    this.http.get(url).subscribe(res=>{
      this.resData = res;
      this.newsdata = this.resData.articles;
    })
  
}

}


