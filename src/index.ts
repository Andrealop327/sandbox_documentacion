import { start } from "repl";

import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from "./swagger.conf";

import App from "./Route";

// crear un objeto de la clase app

const app = new App()
app.start()