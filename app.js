import express from "express";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerOptions from './swagger/swaggerDef';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)));

let isDisableKeepAlive = false;
app.use( (req, res, next) => {
  if (isDisableKeepAlive) {
    res.set('Connection', 'close');
  }
  next();
});

app.use((req, res) => {
    res.status(404).send("Sorry Not Found");
    console.log("404 ERROR");
});
app.use( (error, req, res, next) => {
    console.log(error);
});
app.listen(3000, ()=>{
    console.log("App started on port 3000");
});

process.on('SIGINT', () => {
    isDisableKeepAlive = true;
    app.close( () => {
    console.log('server closed');
    process.exit(0);
  })
});