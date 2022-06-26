/*
 * Title: app.component.ts
 * Author: David Rachwalik
 * Date: 2022/06/25
 * Description: Main application component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment = 'Assignment 4.4 - Async Pipe';
}
