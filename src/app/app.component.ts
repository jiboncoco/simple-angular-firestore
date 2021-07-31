import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-firestore';
    myData: any[] = [];
    id;
    username;
    firstName;
    lastName;
    email;
    birthDate;
    basicSalary;
    status;
    group;
    description;

    isEdit;
    
    constructor( private firestore: AngularFirestore ){
        this.tampilData();
    }

    tampilData() {
        let data = this.firestore.collection('employees');
        let dataTerbaru = data.valueChanges({ idField: 'id' });
        dataTerbaru.subscribe(ss => this.myData = ss);
        this.isEdit = false
    }

    simpan() {
        let data = {
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            basicSalary: this.basicSalary,
            status: this.status,
            group: this.group,
            description: this.description
        }
        this.firestore.collection('employees')
        .add(data)
        .then(res => {
            console.log(res);
            this.tampilData();
            this.reset();
        })
        .catch(e => {
            console.log(e);
        })
    }

    getEdit(arr) {
        this.isEdit = true;
        this.id = arr.id;
        this.username = arr.username;
        this.firstName = arr.firstName;
        this.lastName = arr.lastName;
        this.email = arr.email;
        this.birthDate = arr.birthDate;
        this.basicSalary = arr.basicSalary;
        this.status = arr.status;
        this.group = arr.group;
        this.description = arr.description;
    }

    edit() {
        let data = {
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            basicSalary: this.basicSalary,
            status: this.status,
            group: this.group,
            description: this.description
        }
        this.firestore.collection('employees')
        .doc(this.id)
        .update(data)
        .then(res => {
            console.log(res);
            this.tampilData();
            this.reset();
        })
        .catch(e => {
            console.log(e);
        })
    }

    delete(arr) {
        this.firestore.collection('employees')
        .doc(arr.id)
        .delete()
        .then(res => {
            console.log(res);
            this.tampilData();
            this.reset();
        })
        .catch(e => {
            console.log(e);
        })
    }

    reset() {
        this.isEdit = false;
        this.username = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.birthDate = "";
        this.basicSalary = "";
        this.status = "";
        this.group = "";
        this.description = "";
    }
}
