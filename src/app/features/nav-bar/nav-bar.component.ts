import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-nav-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a class="navbar-brand" href="#">SuperCatalog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="/catalog">Catalog <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavBarComponent {

}
