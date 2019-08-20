// This was a dummy express server with 


const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Johnny', lastName: 'Doe'},
        {id: 2, firstName: 'Jane', lastName: 'Smith'},
        {id: 3, firstName: 'Jim', lastName: 'Broseph'}
    ];
    
    res.json(customers);

});

app.get('/api/users', (req, res) => {
const users = [
    {id: 1, firstName: 'Red', lastName: 'Skelton'},
    {id: 2, firstName: 'Rip', lastName: 'Torn'},
    {id: 3, firstName: 'Curtis', lastName: 'Mayfield'}
];
res.json(users);
});

const port = 5000;
app.listen(port, () => console.log(`Server on port ${port}`));

