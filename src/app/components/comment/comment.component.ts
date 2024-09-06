import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentsService } from '../../services/comments.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
  providers: [CommentsService]
})

export class CommentComponent implements OnInit{
  allComments:Comment[] = []
  text="";
  constructor(private commentsService:CommentsService){}

  ngOnInit(): void {
   this.loadComments()
  }

  handleChange(e:Event){
    this.text = (e.target as HTMLInputElement).value;
  }

  handleSubmit(){
    if(!this.text){
      alert("Please add a comment")
      return
    }
    this.commentsService.postComment({
      id: Date.now(),
      text:this.text
    }).subscribe((result:any)=>{
      this.allComments.push(result)
      this.text=""
    })
  }
  
  loadComments(){
    this.commentsService.getAllComments().subscribe((data: any)=>{
      this.allComments = data
    })
  }
}
