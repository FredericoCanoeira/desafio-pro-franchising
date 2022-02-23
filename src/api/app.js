/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { clientRoutes, loginRoutes, ingredientRoutes, recipeRoutes } from '../routes/index.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORTA = process.env.PORT;

app.use('/clients', clientRoutes);
app.use('/login', loginRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/recipes', recipeRoutes);

app.listen(PORTA, () => console.log(`Aplicação rodando na porta ${PORTA}!`));
