interface jQuery{
    [index:number]:any
}

class jQuery{
    length: number;
    constructor(selector: any){
        let elements = Array.from(document.querySelectorAll(selector));
        let length = elements?elements.length:0;
        for(let i=0;i<length;i++){
            this[i]=elements[i];
        }
        this.length = length;
    }
    html(html: any){
        if(html){
           this[0].innerHTML=html;
        }else{
          return this[0].innerHTML;
        }
    }
}
interface Window{
    $:any
}
window.$ = function(selector: any){
    return new jQuery(selector);
 }


 /// createElement