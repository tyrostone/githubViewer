// Functions to build modules

// Immediately invoked function expression (see bottom)
// No global variables!
(function() {


  var createWorker = function() {
    // Private implementation details
    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      alert("We are inside of task 1 " + workCount);
    };
    var task2 = function() {
      workCount += 1;
      alert("Task 2 " + workCount);
    };

    // Define public API
    // "Revealing module pattern"
    return {
      job1: task1,
      job2: task2
    };
  };

  var worker = createWorker();

  worker.job1();
  worker.job2();
}());