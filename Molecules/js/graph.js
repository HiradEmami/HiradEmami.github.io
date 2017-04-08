var container = document.getElementById('graphCanvas');

var nodes = new vis.DataSet([
    { id: 1, label: 'O' },
    { id: 2, label: 'C' },
    { id: 3, label: 'H' },
    { id: 4, label: 'H' },
    { id: 5, label: 'H' },
    { id: 6, label: 'H' }
]);

var edges = new vis.DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 }
]);

var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    nodes: {
        borderWidth: 0,
        shape: 'circle',
        labelHighlightBold: false,
        widthConstraint: {
            minimum: 25,
            maximum: 25
        },
        font: {
            strokeWidth: 1,
            color: '#ffffff',
            strokeColor: '#ffffff'
        },
        color: {
            background: "#"+((1<<24)*Math.random()|0).toString(16),
            highlight: "#"+((1<<24)*Math.random()|0).toString(16),
        }
    },
    edges: {
        color: '#032a3b',
        arrowStrikethrough: false,
        width: 3,
        selectionWidth: 1,
        labelHighlightBold: false,
        font: {
            strokeWidth: 0,
            align: 'top',
            color: 'rgba(255, 255, 255, .9)'
        }
    },
    physics: {
        minVelocity: 0.08,
    }
};

var network = new vis.Network(container, data, options);