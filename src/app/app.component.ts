import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
      userprofileForm = new FormGroup({
        
          firstName : new FormControl('',[Validators.required,Validators.maxLength(10)]),
          lastName : new FormControl(''),
          age : new FormControl(''),
          email : new FormControl(''),
          address:new FormGroup ({
            street:new FormControl(''),
            city:new FormControl(''),
            postalcode:new FormControl(null,Validators.pattern('^[0-9]{5}$'))
           })

      });

      onSubmit(){
        console.log(this.userprofileForm.value);
      }
        

}
