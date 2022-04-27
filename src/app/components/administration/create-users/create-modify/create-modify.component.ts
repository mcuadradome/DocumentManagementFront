import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-modify',
  templateUrl: './create-modify.component.html',
  styleUrls: ['./create-modify.component.css']
})
export class CreateModifyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
