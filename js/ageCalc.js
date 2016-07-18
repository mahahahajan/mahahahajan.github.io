Site = (function(){
  var dob = new Date("8 April 2000 04:00:00");
  var internDate = new Date("8 April 2015 00:00:00");

  setInterval(function(){
    var now = new Date();
    var duration = now - dob;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(3).toString().split('.');
    $age.text(majorMinor[0] + "." + majorMinor[1]);
  }, 100);

  $(document).ready(function(){


    $age = $('#age');

    if(new Date() < internDate){
      $('#starting').text(", starting on April 8");
      $('#internstatus').text("will be");
    }else{
      $('#internstatus').text("am");
    }


  });
}());
