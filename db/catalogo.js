class grupo {
        constructor(){
            this.datos=new Array();
            
        }
        agregar(nuevo){
            this.datos.push(nuevo);
        }
        
        buscar(datos){
            let encontrado=null;
            console.log(this.datos)
            for(let i=0;i<this.datos.length;i++){
                if (datos==this.datos[i].datos)
                    return this.datos[i];
            }
            return null;
        }
        listar(){
           return JSON.stringify(this.datos);
        }
        eliminar(id){
            //let encontrado=null;
            //  console.log(this.datos)
            for(let i=0;i<this.datos.length;i++){
                if (id==this.datos[i].id)
                    return this.datos[i];
            }
            return null;
        }
        
    }
module.exports=new grupo()