import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModifyComponent } from './create-modify/create-modify.component';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  users:any[] = [{name:'prueba',lastName:'prueba ', rol:'role'}];
  user: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEdit(): void{

    const dialogRef = this.dialog.open(CreateModifyComponent, {
      width: '80%',
      height: 'auto',
      data: this.user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onCreate():void{

    const dialogRef = this.dialog.open(CreateModifyComponent, {
      width: '250px',
      height: '500px',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
