import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  template: `
    <div class="container mt-3">
      <ap-nav-bar></ap-nav-bar>
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {

}
