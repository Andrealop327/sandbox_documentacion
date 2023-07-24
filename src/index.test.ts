//!. importar las bibliotecas para poder realizar 

import request from 'supertest'
import App from './Router';

// crear las reglas de pruebas- agrupaciones con palabra reservada
describe('GET /', () => {
    let app: App
  
    beforeAll(() => {
      app = new App();
      app.start();
    });
  
    afterAll(
        ()=>{
            app.close
        }
    )
  
    test('should return a greeting', async () => {
      const res = await request(app.app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual('Bienvenido a typescript');
    });
  });