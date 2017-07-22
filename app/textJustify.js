'use strict'
var jsgraphs = require('js-graph-algorithms');





function textJustify(text, pageWidth) {
    let words = text.split(" ");
    let weightedGraph = new jsgraphs.WeightedDiGraph(words.length);
    //fulfill graph
    let rowString = '';
    let rows = 0;
    let nextRow = rows+1;


    for (var i in words) {
        let word = words[i];

        if (rowString.length + word.length + 1 <= pageWidth) {
            rowString += word + ' ';
            weightedGraph.addEdge(new jsgraphs.Edge(rows, nextRow, Math.pow((pageWidth - rowString.length), 3)));


        }
        else {
            if (Math.pow((pageWidth - rowString.length), 3) == 64) console.log(rowString)
            weightedGraph.addEdge(new jsgraphs.Edge(rows, rows + 1, Math.pow((pageWidth - rowString.length), 3)));
            rows++;
            rowString = '';
        }
        nextRow+=1;
    }
    var dijkstra = new jsgraphs.Dijkstra(weightedGraph, 0);
    // collect correct uglienesses
    var path = dijkstra.pathTo(rows);
    console.log(path)
    var correctUglinesses = [];
    for (var i = 0; i < path.length; ++i) {
        var e = path[i];
        correctUglinesses.push(e.weight);
    }


//build correct text

    var correctUgliness = correctUglinesses.shift();
    console.log(correctUglinesses)
    console.log('start')
    rowString = '';

    for (var j in words) {
        let word = words[j];
        if (rowString.length + word.length + 1 <= pageWidth) {
            rowString += word + ' ';
            console.log(Math.pow((pageWidth - rowString.length), 3))
            if (Math.pow((pageWidth - rowString.length), 3) == correctUgliness) {
                console.log(rowString);
                rowString = '';
                correctUgliness = correctUglinesses.shift();
                console.log(correctUglinesses)
                console.log('each')
            }
        }
    }
}

module.exports = textJustify;