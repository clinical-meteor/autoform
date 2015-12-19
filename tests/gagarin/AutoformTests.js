
describe('clinical:autoform', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('Autoform should exist on the client', function () {
    return client.execute(function () {
      expect(AutoForm).to.exist;
    });
  });

  it('Autoform should NOT exist on the server', function () {
    return server.execute(function () {
      expect(typeof AutoForm).to.equal("undefined");
    });
  });

  // it("Autoform can return the value of specific input.", function () {
  //   return client.execute(function () {
  //     Autoform.getInputValue();
  //     expect(false).to.be.true;
  //   });
  // });
  // it("Autoform can return all the values from the form.", function () {
  //   return client.execute(function () {
  //     Autoform.getInputValue();
  //     expect(false).to.be.true;
  //   });
  // });



  // it('Autoform.getInputValue()', function () {
  //   return client.execute(function () {
  //     expect(AutoForm).to.exist;
  //   });
  // });
  // it('Autoform.getFormValues()', function () {
  //   return client.execute(function () {
  //     expect(AutoForm).to.exist;
  //   });
  // });


});
