import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<any>(this.apiUrl + "/" + id);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + "/" + task.id, task, { headers: headers });
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, { headers: headers });
  }
}
