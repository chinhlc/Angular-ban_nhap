import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import {IBlog} from '../type-blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: IBlog[] = [
    {
      id: '85500',
      name: 'Crossed design dress',
      view: 1599,
      imageUrl: 'assets/shop/f-crossed-design-dress.jpg',
      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '85501',
      name: 'Fitted textured dress',
      view: 1999,
      imageUrl: 'assets/shop/f-fitted-textured-dress.jpg',
      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '85502',
      name: 'Neoprene effect dress',
      view: 2049,
      imageUrl: 'assets/shop/f-neoprene-effect-dress.jpg',
      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '85503',
      name: 'Printed ruffle dress',
      view: 4999,
      imageUrl: 'assets/shop/f-printed-ruffle-dress.jpg',
      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '85504',
      name: 'Message cotton t-shirt',
      view: 2499,
      imageUrl: 'assets/shop/m-message-cotton-t-shirt.jpg',
      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '85505',
      name: 'Regular fit chest pocket shirt',
      view: 2099,
      imageUrl: 'assets/shop/m-regular-fit-chest-pocket-shirt.jpg',
      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '85506',
      name: 'Regular fit printed cotton shirt',
      view: 2999,
      imageUrl: 'assets/shop/m-regular-fit-printed-cotton-shirt.jpg',
      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '85507',
      name: 'Striped cotton t-shirt',
      view: 5599,
      imageUrl: 'assets/shop/m-striped-cotton-t-shirt.jpg',
      categories: [
        'male',
        'shirt'
      ]
    }
  ];

  constructor() { }
  getBlogList(): Observable<IBlog[]> {
    return of(this.blogs).pipe(delay(50));
  }

  findBlogById(id: string): Observable<IBlog> {
    const blog = this.blogs.find(p => p.id === id);
    if (blog) {
      return of(blog).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
