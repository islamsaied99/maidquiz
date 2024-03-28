import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HttpClientModule , CommonModule ],
  providers:[ServiceService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ID:any;
  user:any;
  userData:any;
  userSupport:any;
  userUrl:any;
  constructor(myActivated:ActivatedRoute , private service:ServiceService , private router:Router ){}
  
  searchforuser(){
  
    if (this.ID!=0){
      this.router.navigate(['/user', this.ID]);
    }
   



  }

}
