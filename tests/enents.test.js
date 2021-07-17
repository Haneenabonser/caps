'use strict';
const uuid = require('uuid').v4;
const faker = require('faker');
const events = require('../events');
let store = process.env.STORE;

require('../logger');
require('../driver');
require('../vendor');

describe('Tests', () => {
    let order = {
        orderID: uuid(),
        store: store,
        customer: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    it('pickup test',() => {
        jest.useFakeTimers();
        jest.spyOn(global.console,'log');

        events.emit('pickup',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
    it('delivered test',() => {
        jest.useFakeTimers();
        jest.spyOn(global.console,'log');

        events.emit('delivered',order)
        expect(console.log).toHaveBeenCalled();
    })
    it('in-transit test',() => {
        jest.useFakeTimers();
        jest.spyOn(global.console,'log');

        events.emit('in-transit',order)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
});