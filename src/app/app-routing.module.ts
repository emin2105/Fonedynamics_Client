import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsTableComponent } from './components/sms-table/sms-table.component';
import { SmsComponent } from './components/sms/sms.component';

const routes: Routes = [
  { path: 'sms/:id', component: SmsComponent },
  { path: '', component: SmsTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

