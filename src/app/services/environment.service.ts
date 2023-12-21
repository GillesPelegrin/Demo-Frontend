import {Injectable} from "@angular/core";

import {environment} from '../../environment/environment';

@Injectable({providedIn: 'root'})
export class EnvironmentService {

  getBasePath(): String {
    return environment.basePath;
  }
}
