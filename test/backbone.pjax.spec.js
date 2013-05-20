var helpers = require("./helpers"),
    assert = helpers.assert,
    listen = helpers.listen,
    browser = new helpers.Browser();

describe("Backbone.PJAX", function(){
  var pjaxStart = pjaxSuccess = pjaxError = 0;

  before(listen);
  before(function (done){
    browser.visit("/", function (error){
      browser.window.router.on("pjax:start", function(){pjaxStart++});
      browser.window.router.on("pjax:success", function(){pjaxSuccess++});
      browser.window.router.on("pjax:error", function(){pjaxError++});
      done(error);
    });
  });

  describe("basic", function(){
    before(function (done){
      browser.clickLink("#test");
      browser.wait(function(){
        return pjaxSuccess === 1;
      }, done);
    });

    it("should have triggered the pjax:start event", function(){
      assert.strictEqual(pjaxStart, 1);
    });

    it("should have triggered the pjax:success event", function(){
      assert.strictEqual(pjaxSuccess, 1);
    });

    it("should not have triggered the pjax:error event", function(){
      assert.strictEqual(pjaxError, 0);
    });

    it("should be on /test", function(){
      assert.equal(browser.location.pathname, "/test");
    });

    it("should have added the pjax fetched HTML to the container", function(){
      assert.equal(browser.text("#container p"), "This is a test!");
    });
  });
});