
//creamos el objeto computer en el cual le pasaremos los datos de este.
function Computer(brand, model, ram, disk, screen){

    this.brand = brand;
    this.model = model;

    //si no le pasamos la ram el disco y la pantalla sacara los parametros predefinidos
    if(ram == undefined){
        this.ram = 4;
    }
    else{
        this.ram = ram;
    }

    if(disk == undefined){
        this.disk = 512;
    }
    else{
        this.disk = disk;
    }

    if(screen == undefined){
        this.screen = 17;
    }
    else{
        this.screen = screen;
    }

    //definimos como mostraremos las características por pantalla
    this.toString = () => (`Brand: ${this.brand} - Model: ${this.model} - Ram: ${this.ram}GB - Disk: ${this.disk}GB - Screen: ${this.screen} \"`);
}



//creamos el objeto laptop en el cual ademas de pasarle las caracteristicas del computer le pasaremos la autonomia de la bateria
function Laptop(brand, model, ram, disk, screen,autonomy){

    //si no le pasamos el disco y la pantalla establecera estos parametros predefinidos ya que no seran los mismos que computer
    if(disk == undefined){
        disk = 256;
    }
    if(screen == undefined){
        screen = 12;
    }

    //cogeremos de prototipo el computer al cual solo le tendremos que añadir  la autonomia de la bateria
    this.__proto__= new Computer(brand,model,ram,disk,screen);

    //predefinimos la autonomia por si no se pasa
    if(autonomy == undefined){
        this.autonomy = 4;
    }
    else{
        this.autonomy = autonomy;
    }
    //mostraremos por pantalla 
    this.toString = () => this.__proto__.toString() + ` -  Autonomy: ${this.autonomy} hours`;
}


/**********************************************************************************************/

//creamos un computer y una laptop y le pasamos la marca y el modelo.
let computer = new Computer("Asus", "JetForce");
let laptop = new Laptop("Acer", "3000xp");

//mostraremos por pantalla los datos.
document.write("Computer: "+computer.toString());
document.write("<br><br>Laptop: "+laptop.toString());