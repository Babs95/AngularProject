import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  /**
   * Objet info
   */
  infos:{name:string,email:string,tel:number};
  /**
   * Tableau 
   */
  Tab_Comments=[];
  /**
   * Objet commentaire
   */
  comment ={date:null,message:''};
  newComment = false;


  constructor(private aboutService:AboutService) { 
    this.infos=this.aboutService.getInfo();//Pour recuperer les infos à partir du service
    this.Tab_Comments=this.aboutService.getAllComments();//Pour recuperer tous les commentaires à partir du service
  }

  ngOnInit() {
  }
  /**
   * Cette fonction permet d'ajouter un commentaire dans le tableau
   * à l'aide du Two way binding
   */
  addComment(){
    if(this.comment.message!=''){
      this.comment.date = new Date();
      this.Tab_Comments.push({
        date:this.comment.date,
        message:this.comment.message
      });
      this.comment.message = '';//pour initialiser après chaque ajout
    }
  }
    /**
   * Cette fonction permet d'ajouter un commentaire qu'on lui passe en paramètre dans le tableau
   * à l'aide du Two way binding
   * Ici on ajoute dans le tableau à l'aide de la fonction déclarer au niveau du service this.aboutService.addComment2(c);
   */
  addComment2(c){
      this.aboutService.addComment2(c);
      this.comment.message = '';//pour initialiser après chaque ajout
      //this.Tab_Comments=this.aboutService.getAllComments();//Pour recharger la liste après ajout
  }
}
