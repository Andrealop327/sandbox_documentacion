import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from "./swagger.conf";
import express,{Application, Request, Response} from 'express'


/**
 * clase principal de la Api define las rutas de Api
 * 
 * 
 * @author   Luz Andrea López
 * @description Introducción a la docuemtasción de la Api
 * 
 */
class App{

    //atributos
   public app:any
   private server:any
/**
 * 
 *  Express es la biblioteca para definir api en el ecosistema de node,js
 */
    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.app.use(
         "/api-docs",
         swaggerUi.serve,
         swaggerUi.setup(swaggerSpec)
        )
        this.routes()
    }
 private routes():void{
    this.app.get(
      "/",
      (req:Request, res:Response )=>{res.send("Bienvenido a typescript")

      }
    )
    
 }
 public start():void{
    this.server= this.app.listen(3000,
        ()=>{console.log("El servidor está escuchando en el puerto 3000")}
    )
 }
 public close():void{
    
    this.server,this.close()
 }
}

export default App