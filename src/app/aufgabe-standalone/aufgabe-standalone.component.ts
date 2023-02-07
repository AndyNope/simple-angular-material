import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-aufgabe-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aufgabe-standalone.component.html',
  styleUrls: ['./aufgabe-standalone.component.scss']
})
export class AufgabeStandaloneComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogThree, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialog-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog/dialog-three.component.html',
})
export class DialogThree {
  constructor(
    public dialogRef: MatDialogRef<DialogThree>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
