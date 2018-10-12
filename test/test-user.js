const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Charity = require('../models/charity');
const User = require('../models/user');

chai.use(chaiHttp);

// DUMMY CHARITY DATA USED FOR TESTING  EDIT, UPDATE, DELETE ROUTES
let dummyCharity = {
    "name": "The Royal Foundation of Sussex",
    "description": "Charity event held by the Royal family of UK",
    "amountDonated": 120,
    "date": "12/03/2018"
};

let dummyUser = {
  "firstName": "Medi",
  "lastName": "Assumani",
  "organization": "Medi Boss Inc.",
  "emailAddress": "mediboss@gmail.com",
  "charityId": ""
};

describe('Charities', () => {
  after(() => {
      User.deleteMany({firstName: "Medi"}).exec( (error, users) => {
          //users.remove();
      });
  });

    // TESTING ROUTE : NEW USER
    it('should display new form on /charities/:charityId/users/new GET', (done) => {
      let charity = new Charity(dummyCharity);
        charity.save((error, data) => {
          chai.request(server)
              .get(`/charities/${data._id}/users/new`)
              .end( (error, response) => {
                  response.should.have.status(200);
                  response.should.be.html;
                  done();
              });
        })
    });

    // TESTING ROUTE : CREATE USER
    it('should return the created charity object /charities POST', (done) => {
        chai.request(server)
            .post('/charities')
            .end( (error, response) => {
                response.should.have.status(200);
                response.should.be.html;
                done();
            });
    });

    // TESTING ROUTE : SHOW USER
    it('should display the clicked /charities/:charityId/users/:id GET', (done) => {
        let charity = new Charity(dummyCharity);
        let user = new User(dummyUser);
        charity.save( (error, charityData) => {
          user.charityId = charityData._id;
          user.save( (error, userData) => {
            chai.request(server)
                .get(`/charities/${user.charityId}/users/${userData._id}`)
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
          })
        });
    });



    // TEST ROUTE : DELETE USER
    it('should delete the selected charity /charities/:charityId/users:id DELETE', (done) => {
        let charity = new Charity(dummyCharity);
        let user = new User(dummyUser);
        charity.save( (error, charityData) => {
          user.charityId = charityData._id;
          user.save( (error, userData) => {
            chai.request(server)
                .delete(`/charities/${user.charityId}/users/${userData._id}`)
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
          })
        });
    });

 });
