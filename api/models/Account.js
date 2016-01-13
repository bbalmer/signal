/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: { 
      accountNumber: {
          type: 'string',
          size: 32,
          required: false
      },
      
      name: {
          type: 'string',
          size: 32,
          required: true
      },
      
      username: {
          type: 'string',
          size: 16,
          required: true
      },
      
      
      password: {
          type: 'string',
          size: 16,
          required: false
      },
      
      url: {
          type: 'string',
          size: 155,
          required: false
      }
  }
};

