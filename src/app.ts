import express from 'express'
import morgan from 'morgan'
import cors from 'cors';

import casoRoutes from './routes/casoRoutes';
import seguimientoRoutes from './routes/seguimientoRoutes';
import colectivoRoutes from './routes/colectivoRoutes';
import colectivo from './models/colectivo';


//inialización 
const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//routes
app.use('/caso', casoRoutes);
app.use('/seguimiento', seguimientoRoutes);

app.use('/colectivos', colectivoRoutes);

export default app;

