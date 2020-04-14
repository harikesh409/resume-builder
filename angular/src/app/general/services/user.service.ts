import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { User } from "src/app/models/User";
import { UtilityService } from "src/app/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient, private _util: UtilityService) {}
  registerURL = environment.apiBase + "user/register";

  /**
   * Function to handle errors occured during http call
   * @param operation name
   * @param result result
   * @returns observable of type T
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(`Error in ${operation}`);
      console.error(error); // log to console instead
      this._util.notify("Error on server", "OK");

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  registerUser(user: User): Observable<User> {
    return this._http
      .post<User>(this.registerURL, user)
      .pipe(catchError(this.handleError<User>("registerUser", {})));
  }
}
