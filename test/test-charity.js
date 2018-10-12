const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Charity = require('../models/charity');

chai.use(chaiHttp);

// DUMMY CHARITY DATA USED FOR TESTING  EDIT, UPDATE, DELETE ROUTES
let dummyCharity = {
    "name": "The Royal Foundation of Sussex",
    "description": "Charity event held by the Royal family of UK",
    "amountDonated": 120,
    "date": "12/03/2018"
};

describe('Charities', () => {
  after(() => {
      Charity.deleteMany({name: "The Royal Foundation of Sussex"}).exec( (error, charities) => {
          //charities.remove();
      });
  });

    // TESTING ROUTE : INDEX CHARITIES
    it('should index ALL charities on /charities GET', (done) => {
        chai.request(server)
            .get('/')
            .end( (error, response) => {
                response.should.have.status(200);
                response.should.be.html;
                done();
            });
    });

    // TESTING ROUTE : NEW CHARITY
    it('should display new form on /charities/new GET', (done) => {
        chai.request(server)
            .get('/charities/new')
            .end( (error, response) => {
                response.should.have.status(200);
                response.should.be.html;
                done();
            });
    });

    // TESTING ROUTE : CREATE CHARITY
    it('should return the created charity object /charities POST', (done) => {
        chai.request(server)
            .post('/charities')
            .end( (error, response) => {
                response.should.have.status(200);
                response.should.be.html;
                done();
            });
    });

    // TESTING ROUTE : SHOW CHARITY
    it('should display teh clicked /charities/:id GET', (done) => {
        let charity = new Charity(dummyCharity);
        charity.save( (error, data) => {
            chai.request(server)
                .get(`/charities/${data._id}`)
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
        });
    });

    // TESTING ROUTE : EDIT CHARITY
    it('should give the user the ability to edit a charity /charities/:id GET', (done) => {
        let charity = new Charity(dummyCharity);
        charity.save( (error, data) => {
            chai.request(server)
                .get(`/charities/${data._id}/edit`)
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
        });
    });

    // TEST ROUTE : UPDATE CHARITY
    it('should update the edited charity /charities/:id PUT', (done) => {
        let charity = new Charity(dummyCharity);
        charity.save( (error, data) => {
            chai.request(server)
                .put(`/charities/${data._id}?_method=PUT`)
                .send({"name": "updating charity name"})
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
        });
    });

    // TEST ROUTE : DELETE CHARITY
    it('should delete the selected charity /charities/:id DELETE', (done) => {
        let charity = new Charity(dummyCharity);
        charity.save( (error, data) => {
            chai.request(server)
                .delete(`/charities/${data._id}?_method=DELTE`)
                .end( (error, response) => {
                    response.should.have.status(200);
                    response.should.be.html;
                    done();
                });
        });
    });

});
