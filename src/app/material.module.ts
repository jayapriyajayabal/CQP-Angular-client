// material.module.ts

import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule} from '@angular/material/dialog';



import { MatPaginatorModule, 
	MatSortModule,  
	MatFormFieldModule, 
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule
        
	} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatNativeDateModule,
    MatInputModule,

  ],
  exports: [
    MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    
  ]
})

export class MaterialModule {}