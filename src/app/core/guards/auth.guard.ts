import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {AccountService} from "../../authentication/service/account.service";
import {LoginService} from "../../authentication/service/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private accountService: AccountService,
        private loginService: LoginService,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.accountService.identity().pipe(
            map(account => {
                const authorities = account != null ? account.authorities : undefined;
                const isAdmin = this.isAdmin(authorities);

                if (account) {
                    if (isAdmin && authorities && this.accountService.hasAnyAuthority(authorities)) {
                        return true;
                    }

                    if (isDevMode()) {
                        console.error('User has not any of required authorities: ' + authorities);
                    }
                    this.loginService.logout();
                    this.router.navigate(['/authentication/login'])
                        .then(() => {
                            window.location.reload();
                        });
                    return false;
                }
                this.loginService.logout();
                this.router.navigate(['authentication/login']).then(() => {
                    window.location.reload();
                });
                return false;
            })
        );
    }

    isAdmin(authorities: string[] | undefined): boolean {
        let isAdmin = false;
        if (authorities && authorities !== []) {
            authorities.forEach(element => {
                isAdmin = element === "ROLE_ADMIN";
            });
        }

        return isAdmin;
    }


}
