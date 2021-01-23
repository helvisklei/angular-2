import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.componet';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
    `,
    directives: [MeuPrimeiroComponent]
})
export class AppComponent { }
