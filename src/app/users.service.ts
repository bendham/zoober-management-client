import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoModel } from 'src/shared/video.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = `https://api.zoobermedia.com`;
  // private baseURL = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/getall`);
  }

  makeVideo(videoData: VideoModel): Observable<any> {
    return this.http.post(`${this.baseURL}/makevideo`, videoData);
  }

  makeThumbnail(videoData: VideoModel): Observable<any> {
    return this.http.post(`${this.baseURL}/makethumbnail`, videoData);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/update`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
