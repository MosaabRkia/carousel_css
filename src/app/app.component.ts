import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
    updateLeft:any = "ready";
    sort:number[] = [0,1,2];
    hidden:number = 0;

   arr : IDiv[] = [
    {
      id:1,name:"test1",description:"lorem porem bla bla bla 1lorem porem bla bla bla 1lorem porem bla bla bla 1lorem porem bla bla bla 1"
    },
    {
      id:2,name:"test2",description:"lorem porem bla bla bla 2"
    },
    {
      id:3,name:"test3",description:"lorem porem bla bla bla 3"
    },
    {
      id:4,name:"test4",description:"lorem porem bla bla bla 3"
    },
    {
      id:5,name:"test5",description:"lorem porem bla bla bla 3"
    },
    {
      id:6,name:"test6",description:"lorem porem bla bla bla 3"
    },
    {
      id:7,name:"test7",description:"lorem porem bla bla bla 3"
    },
    {
      id:8,name:"test8",description:"lorem porem bla bla bla 3"
    },
    {
      id:9,name:"test9",description:"lorem porem bla bla bla 3"
    },
    {
      id:10,name:"test10",description:"lorem porem bla bla bla 3"
    },
  ];


   moveBetweenThreeInArrayLoop(leftOrRight:string){
     var temp = [this.sort[0],this.sort[1],this.sort[2]]; // clone the array without generic
     let newarr =[0];
         //! -----------------------------LEFT---------------------------------- 
    if(leftOrRight === "Left")
    {
      this.updateLeft = true;

      
      newarr[1] = temp[0];
      newarr[2] = temp[1];

     if(temp[0] === this.arr.length-1 ) newarr[0] = temp[0]-1;// x y arr.len -> y 
     else if(temp[0] === 0 ) newarr[0] = this.arr.length-1; // x y 0 ->  x-1 x y}
     else newarr[0] = temp[0]-1; // x y 0 =>  y 0 1       

     this.hidden = newarr[0];
    }
        //! -----------------------------RIGHT---------------------------------- 
    else if(leftOrRight === "Right")
    {    
      this.updateLeft = false;   
      
      newarr[0] =temp[1];
      newarr[1] = temp[2];
      
      if(temp[2] === this.arr.length-1 ) newarr[2] = 0;// x y arr.len -> y 
      else if(temp[2] === 0 ) newarr[2] = 1; // x y 0 ->  y 0 1
      else newarr[2] = temp[2]+1; // x y 0 =>  y 0 1  

      this.hidden = newarr[2];                 
  } 


  setTimeout(() => {
    this.updateLeft ='ready';
    this.sort = newarr;
}, 2900);
}

 

}


export interface IDiv{
  id:number,
  name:string,
  description:string
}


