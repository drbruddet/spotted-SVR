import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './models/Spot/schema';

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/spotted');

app.use('/graphql', graphqlHTTP ({ graphiql: true, schema }));

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
