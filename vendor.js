'use strict';

const events = require('./events.js');
require('dotenv').config();
const faker = require('faker');
const uuid = require('uuid').v4;

setInterval(function () {
    let payload = {
        store: process.env.STORE,
        orderID: uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    events.emit('pickup', payload)
}, 5000);


events.on('delivered', deliveredHandler);
function deliveredHandler(payload) {
    console.log('thank you');
};