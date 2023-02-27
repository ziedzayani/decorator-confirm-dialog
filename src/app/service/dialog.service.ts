import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  matDialog = inject(MatDialog);

  private static instance : DialogService | null= null;
  constructor() { 
    DialogService.instance = this;
  }
  public static getInstance(){
    return DialogService.instance;
  }


  openDialog<T>(data : any,component: ComponentType<T>) : Observable<boolean>{

    return this.matDialog.open(component,{
      data : data,
      disableClose: true,
    }).afterClosed();

  }
}
