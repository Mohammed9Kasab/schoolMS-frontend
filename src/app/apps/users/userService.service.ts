import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './user-data';
import {Observable} from "rxjs";
import {ApplicationConfigService} from "../../config/application-config.service";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UserService {

    public users: User[] = users;

  private resourceUrl = this.applicationConfigService.getEndpointFor('admin/users');
  constructor(private applicationConfigService: ApplicationConfigService, private httpClient: HttpClient) {}

  public getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.resourceUrl);
  }
}
