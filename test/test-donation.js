const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");
const Donation= require("../models/donation");

chai.use(chaiHttp);

// DUMMY DONATION DATA USED FOR TESTING  EDIT, UPDATE, DELETE ROUTES
let dummyDonation = {
    "donorName": "Mark Zuck",
    "amount": 500,
    "date": "12/03/2018",
    "messageToCharity": "Yeah"
};


describe('Donations', () => {
  after(() => {
    Donation.deleteMany({donorName: "Mark Zuck"}).exec( (error, donations) => {
        //donations.remove();
    });
  });


  // TESTING ROUTE : NEW DONATION
  it('should display new form on /donations/new GET', (done) => {
      chai.request(server)
          .get('/donations/new')
          .end( (error, response) => {
              response.should.have.status(200);
              response.should.be.html;
              done();
          });
  });

  // TESTING ROUTE : CREATE DONATION
  it('should return the created donation obejct on /donations POST', (done) => {
      chai.request(server)
        .post(`/donations`)
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.html;
          done();
        });
  });

  // TESTING ROUTE : SHOW DONATION
  it('should dispaly the clicked donation on /donations/:id GET', (done) => {
    let donation = new Donation(dummyDonation);
    donation.save((error, data) => {
      chai.request(server)
        .get(`/donations/${data._id}`)
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.html;
          done();
        });
    });
  });

  // TESTING ROUTE : EDIT DONATION
  it('should give the user the ability to edit a donation /donations/:id GET', (done) => {
      let donation = new Donation(dummyDonation);
      donation.save( (error, data) => {
          chai.request(server)
              .get(`/donations/${data._id}/edit`)
              .end( (error, response) => {
                  response.should.have.status(200);
                  response.should.be.html;
                  done();
              });
      });
  });

  // TEST ROUTE : UPDATE DONATION
  it('should update the edited donation /donations/:id PUT', (done) => {
      let donation = new Donation(dummyDonation);
      donation.save( (error, data) => {
          chai.request(server)
              .put(`/donations/${data._id}?_method=PUT`)
              .send({"donorName": "Updating Donor Name"})
              .end( (error, response) => {
                  response.should.have.status(200);
                  response.should.be.html;
                  done();
              });
      });
  });

  // TEST ROUTE : DELETE DONATION
  it('should delete the selected donation /donations/:id DELETE', (done) => {
      let donation = new Donation(dummyDonation);
      donation.save( (error, data) => {
          chai.request(server)
              .delete(`/donations/${data._id}?_method=DELTE`)
              .end( (error, response) => {
                  response.should.have.status(200);
                  response.should.be.html;
                  done();
              });
      });
  });

});
