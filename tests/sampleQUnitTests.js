test('simple test passes', function() { 
    ok(true, 'This test should always pass');  
});

test('simple test fails', function() { 
    ok(false, 'This test should always fail');  
});

test('this test passes only in FireFox', function() {
  var isFirefox = (navigator.userAgent.indexOf("Firefox")!=-1);
  ok(isFirefox, 'this browser is FireFox');
});