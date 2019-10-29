import { Component, OnInit } from '@angular/core';
import {WebService} from '../shared/WebService';
import {Song} from '../models/Song';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  songList: Song[];
  songForm : FormGroup;

  constructor(private web: WebService) { }

  ngOnInit() {
    this.getData();
    this.songForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'artist': new FormControl(null, [Validators.required])
    });

  }

  onButtonClick(index: number) {
    this.web.remove(this.songList[index].id)
      .subscribe(
        (data)=> console.log(data),
        () => this.getData()
      );
  }

  getData() {
    this.web.get()
      .subscribe(result => this.songList = result)
  }

  onFormSubmit() {
    console.log(this.songForm.value);
    this.web.create(this.songForm.value)
      .subscribe(
        () => this.getData(),
        () => this.getData()
      )
  }
}
