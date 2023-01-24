import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  task = '';
  toDoItem : any=['Task 1','Task 2','Task 3','Task 4','Task 5','Task 6','Task 7','Task 8','Task 9','Task 10','Task 11','Task 12','Task 13','Task 14','Task 15','Task 16','Task 17','Task 18','Task 19','Task 20','Task 21','Task 22','Task 23'];

  addToList(){
    if(this.task !== ''){
      this.toDoItem.unshift(this.task);
      this.task = '';
    }
  }

  removeFromList({item}: { item: any }) {
    let index = this.toDoItem.indexOf(item);
    this.toDoItem.splice(index, 1)
  }

  editListItem( {item}: { item: any } ){
    this.task = item;
    let index = this.toDoItem.indexOf(item);
    this.toDoItem.splice(index, 1);
  }
  onEnter(){
    if(this.task !== ''){
      this.toDoItem.unshift(this.task);
      this.task = '';
    }
  }

}
