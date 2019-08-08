import express from 'express';
import bodyParser from 'body-parser';
import classRoutes from './server/routes/classRouter';
const app = express();
app.use(bodyParser.json());
app.use('/api', classRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8001;

app.get('*', (req, res) => res.status(200).send({
    message: "Entrance"
}));

app.listen(port, () => {
    console.log("Entrance done, We are running at port " + port);
});


export default app;