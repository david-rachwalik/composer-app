/*
 * Title: composer.service.ts
 * Author: David Rachwalik
 * Date: 2022/06/25
 * Description: Composer service
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Ludwig van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
    ];
  }

  // Return list of all composers
  getComposers(): Observable<IComposer[]> {
    // https://rxjs.dev/api/index/function/of
    return of(this.composers);
  }

  // Return selected composer by ID
  getComposer(composerId: number): IComposer {
    for (const composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  // Return selected composers by name
  filterComposers(name: string): Observable<IComposer[]> {
    // https://rxjs.dev/api/operators/map
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
