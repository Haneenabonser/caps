'use strict';

const events = require('./events.js');

events.on('pickup', pickupHandler);
function pickupHandler(payload) {
    setTimeout(function () {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('in-transit', payload);
    }, 1000);

    setTimeout(function () {
        console.log('delivered');
        events.emit('delivered', payload);
    }, 3000);
};