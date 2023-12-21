import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Task} from "../models/task";
import {first, Observable} from "rxjs";
import {EnvironmentService} from "./environment.service";

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.environmentService.getBasePath()}/v1/task`).pipe(first())
  }

   createTask(task: Task) {
     return this.http.post(`${this.environmentService.getBasePath()}/v1/task`, task).pipe(first())
   }

   updateTask(task: Task) {
     return this.http.put(`${this.environmentService.getBasePath()}/v1/task`, task).pipe(first())
   }

  deleteTask(taskId: String) {
     return this.http.delete(`${this.environmentService.getBasePath()}/v1/task/${taskId}`).pipe(first())
   }
}
