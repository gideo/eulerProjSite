(function() {
  
  var createWorker = function() {
    
    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log(`Task 1 + ${workCount}`);
    };

    var task2 = function() {
      workCount += 2;
      console.log(`Task 2 + ${workCount}`);
    };

    return {
      job1: task1,
      job2: task2
    };
  };
  
  var worker = new createWorker();
  worker.job1();
  worker.job2();
}());