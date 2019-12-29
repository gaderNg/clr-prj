import { Component } from '@angular/core';

export interface Person {
  name: string
  blogurl: string
  twitter: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  people: Person[] = [
    {name: 'Tutsplus blog', blogurl: 'https://code.tutsplus.com/categories/angular', twitter: "@"},
    {name: 'The New!', blogurl: 'https://www.tothenew.com/blog/category/technology/angular/', twitter: "@"},
    {name: 'Juri', blogurl: 'https://juristr.com/page/speaking/', twitter: "@"},
    {name: 'Dan', blogurl: 'https://blog.codewithdan.com/', twitter: "@"},
    {name: 'Adrain Meja', blogurl: 'https://adrianmejia.com/', twitter: "@"},
    {name: 'Jason watmore', blogurl: 'https://jasonwatmore.com/', twitter: "@"}
  ]
}
