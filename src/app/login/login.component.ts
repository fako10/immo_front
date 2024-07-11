import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {Subject} from "rxjs";
import {TokenStorageService} from "../_services/tokenstorage.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  userDetails = {
    email: ''
  };

  private modalService = inject(NgbModal);
  isLoggedIn = false;
  isPasswdChangeSucceed = false;
  isPasswdChangeFail = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isLocked = false;

  email = '';
  showError: boolean = false;
  userEmail = '';

  closeResult = '';

  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      console.log("cond");
      e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      return confirmationMessage;              // Gecko, WebKit, Chrome <34
    });

  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  submitForm(form: any): void {

    this.authService.generatePwd(this.userDetails).subscribe(
      data => {
        console.log(data);
        this.isPasswdChangeSucceed = true;
        //this.router.navigateByUrl(`emailvalidation/${username}`)
      },
      err => {
        this.isPasswdChangeFail = true;
        console.log(err.error.message);
        this.errorMessage = err.error.message;
      }
    );
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.isLocked = data.locked;
        if (this.isLocked) {
          console.log(data);
          this.authService.savePassword(password);
          this.router.navigateByUrl(`emailvalidation/${username}`)
        } else {
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          const certification =  window.sessionStorage.getItem('current_certification');
          if(certification != null) {
            const id = window.sessionStorage.getItem('idcertification');
            window.sessionStorage.removeItem('current_certification');
            window.sessionStorage.removeItem('idcertification');
            this.router.navigateByUrl(`checkout/${id}`);
          } else {
            window.sessionStorage.removeItem('current_certification');
            window.sessionStorage.removeItem('idcertification');
            this.reloadPage();
          }

        }

      },
      err => {
        this.errorMessage = 'login or password incorrect';
        this.isLoginFailed = true;

      }
    );
  }

}
