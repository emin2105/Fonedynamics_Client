import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SMSModel } from 'src/app/models/sms.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms-table',
  templateUrl: './sms-table.component.html',
  styleUrls: ['./sms-table.component.css']
})
export class SmsTableComponent implements OnInit {

  smsList: SMSModel[] = [];
  columnsToDisplay = ['from', 'to', 'status', 'action'];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadSMSList();
  }

  loadSMSList() {
    this.http.get<any[]>("http://localhost:7126/api/sms/list").subscribe(response => this.smsList = response);
  }

  openSMS(id: string) {
    this.router.navigateByUrl(`/sms/${id}`);
  }

}
