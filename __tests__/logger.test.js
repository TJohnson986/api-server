'use strict'

const logger = require('../src/middleware/logger.js');

describe('testing logger function', () => {
  test('logger logs methods and paths, calls next', () => {
    let requestObject = {
      method: 'test',
      path: 'test',
    };
    let responseObject = {};
    let nextFunction = jest.fn();

    logger(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
  });
});