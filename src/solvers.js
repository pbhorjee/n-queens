
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/
*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});

  for (var x = 0; x < solution.rows().length; x++){
    for (var y = 0; y < solution.rows().length; y++){
      if (solution.rows()[x][y] === 0) {
        solution.togglePiece(x,y);
        if (solution.hasAnyRooksConflicts()) {
         solution.togglePiece(x,y);
        } 
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(row) {
    // if all rows exhuasted 
    if (row === n) {
      solutionCount++;

      return;
    }

    //iterate over possible columns in for all decisions
    for (var i = 0; i < n; i++) {
      //place a piece
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        //recurse into remaining problem
        findSolution(row + 1);
      } 
      
      //unplace a piece
      board.togglePiece(row, i);
    };
  }

  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});

  for (var x = 0; x < solution.rows().length; x++){
    for (var y = 0; y < solution.rows().length; y++){
      if (solution.rows()[x][y] === 0) {
        solution.togglePiece(x,y);
        if (solution.hasAnyQueensConflicts()) {
         solution.togglePiece(x,y);
        } 
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
    var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(row) {
    // if all rows exhuasted 
    if (row === n) {
      solutionCount++;

      return;
    }

    //iterate over possible columns in for all decisions
    for (var i = 0; i < n; i++) {
      //place a piece
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        //recurse into remaining problem
        findSolution(row + 1);
      } 
      
      //unplace a piece
      board.togglePiece(row, i);
    };
  }

  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  
  return solutionCount;
};
