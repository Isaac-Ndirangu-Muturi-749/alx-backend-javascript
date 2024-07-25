const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return the correct status and message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return the correct status and message for a valid id', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return a 404 status for an invalid id', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});

describe('Available payments', () => {
  it('should return the correct payment methods object', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          }
        });
        done();
      });
  });
});

describe('Login', () => {
  it('should return the correct welcome message', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
