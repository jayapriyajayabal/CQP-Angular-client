// material.module.ts

import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule,  MatFormFieldModule, MatInputModule  } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule
  ],
  exports: [
    MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule,
  ]
})

export class MaterialModule {}