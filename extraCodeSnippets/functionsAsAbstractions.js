// Functions as abstractions
var work = function() {
  alert("working hard!");
};

var doWork = function(f) {
  alert("working starts");
  try {
    f();
  }
  catch (ex) {
    console.log(ex);
  }
  alert("working stopped");
};

doWork(work);