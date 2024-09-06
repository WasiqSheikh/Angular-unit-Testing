import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/resources';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) {}

  getAllComments(): Observable<any> {
    return this.http.get(`${API_URL}/comments`).pipe(catchError(this.handleError));
  }
  getCommentById(id:number){
    return this.http.get(`${API_URL}/comments/${id}`)
  }
  postComment(payload:{id:number,text:string}){
    return this.http.post(`${API_URL}/comments`,payload)
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    //window.alert("alert: " + errorMessage);
    return throwError(() => new Error(errorMessage))
    //throwError(errorMessage);
  }
}