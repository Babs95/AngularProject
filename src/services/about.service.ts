import { Injectable } from '@angular/core';

@Injectable()
export class AboutService{
/**
   * Objet info
   */
  info ={
    name:"Babs",
    email:"Babsco95@gmail.com",
    tel:771440291
  }
  /**
   * Tableau
   */
  Tab_Comments=[
    {date:new Date(),message:"ABDBZD"},
    {date:new Date(),message:"Nice job"}
  ];

    addComment2(c){
        c.date = new Date();
        this.Tab_Comments.push(c);
    }

    getAllComments(){
        return this.Tab_Comments;
    }

    getInfo(){
        return this.info;
    }
}