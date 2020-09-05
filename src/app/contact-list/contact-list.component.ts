import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  title = 'Contact List';

  searchText;
  contacts = [
    { id: 11, name: 'Mr. Nice', Email: 'nice@gmail.com', phone: '+41 6667 4154 ' },
    { id: 12, name: 'Narco' , Email: 'narco@gmail.com', phone: '+41 7888 2458 ' },
     { id: 13, name: 'Bombasto' , Email: 'bombasto@gmail.com', phone: '+41 3458 3654 ' },
    /*{ id: 14, name: 'Celeritas' , Email: 'celeritas@gmail.com', phone: '+41 6667 4154 ' },
    { id: 15, name: 'Magneta' , Email: 'magneta@gmail.com', phone: '+41 6667 4154 ' },
    { id: 16, name: 'RubberMan' , Email: 'rubberMan@gmail.com', phone: '+41 6667 4154 ' },
    { id: 17, name: 'Dynama' , Email: 'dynama@gmail.com', phone: '+41 6667 4154 ' },
    { id: 18, name: 'Dr IQ' , Email: 'dr.IQ@gmail.com', phone: '+41 6667 4154 ' },
    { id: 19, name: 'Magma' , Email: 'magma@gmail.com', phone: '+41 6667 4154 ' },
    { id: 20, name: 'Tornado' , Email: 'tornado@gmail.com', phone: '+41 6667 4154 ' } */
  ];

  ngOnInit() {
  }

  clicked = false;

  actionMethod(){
    alert('This user is reveal...');
  }

}
