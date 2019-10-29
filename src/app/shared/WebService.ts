import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Song} from '../models/Song';

@Injectable({
  providedIn: 'root'
})

export class WebService {
  private readonly configUrl = "https://localhost:5001/api/song";

  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get<Song[]>(this.configUrl);
  }

  public remove(id: string) {
    return this.http.delete(`${this.configUrl}/${id}`);
  }

  public create(song: Song) {
    return this.http.post(this.configUrl, song);
  }
}
