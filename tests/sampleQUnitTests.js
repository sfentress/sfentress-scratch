test('simple test passes', function() { 
    ok(true, 'This test should always pass');  
});

test('this test passes in everything but FireFox', function() {
  var isFirefox = (navigator.userAgent.indexOf("Firefox")!=-1);
  ok(!isFirefox, 'this browser is not FireFox');
});