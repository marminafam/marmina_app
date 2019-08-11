import { GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { Injectable } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class MarminaAuthService {
  constructor(private authService: AuthService) {}

  login(): Observable<any> {
    const user: SocialUser | null = this.getUserSession();
    if (user) {
      return of(user);
    }

    return from(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)).pipe(
      map(user => {
        this.saveUserSession(user);
        return user;
      })
    );
  }

  logout(): Observable<any> {
    return from(this.authService.signOut())
      .pipe(map(() => this.removeUserSession()))
  }

  isLoggedIn(): Observable<any> {
    const user: SocialUser = this.getUserSession();
    const isAuthenticated = user ? true: false;
    return of({ isAuthenticated, user });
  }

  getUserSession(): SocialUser | null {
    const user: SocialUser = JSON.parse(localStorage.getItem("user")) || null;
    return user;
  }

  getUserEmail(): string {
    const session: SocialUser = this.getUserSession();
    return session ? session.email: null;
  }

  saveUserSession(user: SocialUser): void {
    if (!user) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUserSession(): void {
    localStorage.removeItem("user");
  }

}
