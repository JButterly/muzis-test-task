import { Component } from '@angular/core';

import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent {
    model = new User('', '');

    submitted = false;

    onSubmit() { 
        this.submitted = true; 
        console.log(JSON.stringify(this.model.name + ' ' + this.model.surname))
    }
}
