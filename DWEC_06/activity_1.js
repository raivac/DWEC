
function Punto(cX,cY){

    this.x = cX;
    this.y = cY;

    if(isNaN(cX)){
        x = 0;
    }

    if(isNaN(cY)){
        y = 0;
    }

    this.mostrar=()=>`(${this.x},${this.y})`

    this.change=(x2,y2)=>{
        this.x = x2;
        this.y = y2;
    }

    this.copy = () => {
        return new Punto(this.x,this.y);
    }

    this.equals = (n) => {
        return (this.x==n.x && this.y==n.y);
    }
}


let a = new Punto(3,5);
let b = a.copy()

console.log(a.mostrar())

a.change(8,9);
console.log(a.mostrar());


console.log(b.mostrar());