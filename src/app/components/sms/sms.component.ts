import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SMSModel } from 'src/app/models/sms.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  id: string | null = "";
  model: SMSModel | null | any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
      console.log("id " + this.id);
      this.loadSMS();
    })
  }

  loadSMS() {
    this.http.get<any[]>(`http://localhost:7126/api/sms/${this.id}`).subscribe(response => {
      this.model = response;
      console.log(this.model)
    });
  }

  returnToTable() {
    this.router.navigateByUrl('');
  }

}
