import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

//
// Form Controls
//

import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';


// import { MatNativeDateModule } from '@angular/material/';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

//
// Navigation
//
const modules: any[] = [

  LayoutModule,  MatAutocompleteModule,
  // MatCheckboxModule,  MatDatepickerModule,
  MatFormFieldModule,  MatInputModule,
  // MatRadioModule,  MatSelectModule,
  // MatSliderModule,  MatSlideToggleModule,
  MatButtonModule,  MatToolbarModule,
  MatIconModule,  MatBadgeModule,
  // MatCardModule, MatDividerModule,
//   MatNativeDateModule,
  // MatMomentDateModule,

];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})

export class MaterialModule {}