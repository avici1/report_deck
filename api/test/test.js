import chai from 'chai';
import chatHttp from 'chai-http'
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;
describe('Testing endpoints', () => {
    it('should add a class ', (done) => {
        const class_ = {
            "classYear": "2019",
            "classId": "4",
            "classMasterTeacher": "Paul",
            "classSection": "MPG",
            "classLevel": "S4"
        };
        chai.request(app)
            .post('/api/class')
            .set('Accept', 'application/json')
            .send(class_)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.data).to.include({
                    classId: class_.classId,
                    classYear: class_.classYear,
                    classMasterTeacher: class_.classMasterTeacher,
                    classSection: class_.classSection,
                    classLevel: class_.classLevel
                });
                done();

            });
    });
    it('should get all classes', (done) => {
        chai.request(app)
            .get('/api/class')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('classYear');
                res.body.data[0].should.have.property('classId');
                res.body.data[0].should.have.property('classSection');
                res.body.data[0].should.have.property('classLevel');
                res.body.data[0].should.have.property('classMasterTeacher');
                done();
            });
    });
    it('Should get one class', (done) => {
        const id = 1;
        chai.request(app)
            .get(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('classYear');
                res.body.data.should.have.property('classId');
                res.body.data.should.have.property('classSection');
                res.body.data.should.have.property('classLevel');
                res.body.data.should.have.property('classMasterTeacher');
                done();
            });
    });
    it('should not get get a class with invalid search parameter', (done) => {
        const id = "hgh";
        chai.request(app)
            .get(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                    .eql('Please provide a valid parameter for search');
                done();
            });
    });

    it('should not add a class with incorrect info', (done) => {
        const class_ = {
            "classYear": "2019",
            "classMasterTeacher": "Paul",
            "classSection": "MPG",
            "classLevel": "S4"
        };
        chai.request(app)
            .post('/api/class')
            .set('Accept', 'application/json')
            .send(class_)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property('message')
                    .eql('Please send accurate info')
                done();

            });
    });
    it('should not update a class with invalid search parameter', (done) => {
        const id = "48y";
        const class_ = {
            "classYear": "2019",
            "classId": "45",
            "classMasterTeacher": "Paul",
            "classSection": "MPG",
            "classLevel": "S4"
        };
        chai.request(app)
            .put(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .send(class_)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                    .eql('Please provide a valid parameter')
            });
        done();
    });
    it('should not update a class with invalid empty body', (done) => {
        const id = 48;
        const class_ = {

        };
        chai.request(app)
            .put(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .send(class_)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                    .eql('sent empty fields')
            });
        done();
    });
    it('should  update a class with Accurate search parameter', (done) => {
        const id = 1;
        const class_ = {
            "classYear": "2019",
            "classId": "35",
            "classMasterTeacher": "Paul",
            "classSection": "MPG",
            "classLevel": "S6"
        };
        chai.request(app)
            .put(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .send(class_)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.should.have.property('message')
                    .eql('Classes updated successfully');
                expect(res.body.data.classYear).to.equal(class_.classYear);
                expect(res.body.data.classId).to.equal(class_.classId);
                expect(res.body.data.classMasterTeacher).to.equal(class_.classMasterTeacher);
                expect(res.body.data.classSection).to.equal(class_.classSection);
                expect(res.body.data.classLevel).to.equal(class_.classLevel);
            });
        done();
    });
    it('should delete a class', (done) => {
        const id = 1;
        chai.request(app)
            .delete(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.should.have.property('message')
                    .eql(`Class with Id ${id} deleted successfully`);

            });
        done();
    });
    it('should not delete a class with invalid search', (done) => {
        const id = 'dhdh';
        chai.request(app)
            .delete(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                    .eql(`Please provide a valid parameter`);

            });
        done();
    });
    it('should not delete a class with non existing', (done) => {
        const id = 7;
        chai.request(app)
            .delete(`/api/class/${id}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                    .eql(`Class with Id ${id} not found`);

            });
        done();
    });
    it('should add a staff', (done) => {
        const newStaff = {
            "staffId": "44-ange",
            "staffNames": "Angelique uwimana",
            "staffTitle": "Computer science teacher"
        }
        chai.request(app)
            .post('/api/staff')
            .send(newStaff)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data).to.include({
                    "staffId": newStaff.staffId,
                    "staffNames": newStaff.staffNames,
                    "staffTitle": newStaff.staffTitle
                });
            });
        done();
    });
    it('should not  add a staff with incomplete information', (done) => {
        const newStaff = {
            "staffId": "444-st"
        }
        chai.request(app)
            .post('/api/staff')
            .send(newStaff)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property("message")
                    .eql("Please send complete information");

            });
        done();
    });
    it('should update a staff', (done) => {
        const id = 1;
        const updatedStaff = {
            "staffId": "3434",
            "staffNames": "Alain Christian",
            "staffTitle": "CS Teacher"
        }
        chai.request(app)
            .put(`/api/staff/${id}`)
            .send(updatedStaff)
            .set('Accept', 'application/json')   
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.include({
                    "staffId": updatedStaff.staffId,
                    "staffNames": updatedStaff.staffNames,
                    "staffTitle": updatedStaff.staffTitle
                });
            });
        done();
    });
    it('should not update a staff with empty body', (done) => {
        const id = '34';
        const updatedStaff_ = {

        };
        chai.request(app)
            .put(`/api/staff/${id}`)
            .set('Accept', 'application/json')
            .send(updatedStaff_)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property("message")
                    .eql("You sent empty body");
            });
        done();
    });
    it('should get all staff', (done) => {
        chai.request(app)
            .get('/api/staff/')
            .set('Accept','application/json')
            .end((err,res) => {
                expect(res.status).to.equal(200)
                res.body.should.have.property('message')
                        .eql('Staff found successfully');
                res.body.data[0].should.have.property('staffId');
                res.body.data[0].should.have.property('staffNames');
                res.body.data[0].should.have.property('staffTitle');   
                done(); 
            });
           
    });
    it('should delete a staff', (done) =>{
        const id = '1';
        chai.request(app)
            .delete(`/api/staff/${id}`)
            .set('Accept','application/json')
            .end((err,res) => {
                expect(res.status).to.equal(200)
                res.body.should.have.property('message')
                               .eql(`Staff with Id ${id} deleted succefully`)
            });
    });
    it('should not delete a staff with invalid search parameter', (done) => {
        const id  = '';

        chai.request(app)
            .delete(`/api/staff/${id}`)
            .set('Accept','application/json')
            .end((err,res) => {
                expect(res.status).to.equal(404)
                res.body.should.have.property('message')
                                    .eql(`Staff with Id ${id} not found`)
            });
    });

})

//Tests written with chai and mocha packages;
//each endpoint has atleast 3 states some not every state was tested atleat 2 at each endpoint 