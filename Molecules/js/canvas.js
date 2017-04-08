    var addNodeMode = false;
    var addEdgeMode = false;
    var prevSelectedNodeId = null;
	var moleculeName = "N"

    network.on("click", function(params) {
        var selectedNodeId = params["nodes"][0];
        var selectedEdgesIds = params["edges"];

        if (addNodeMode)
            addNode(params["pointer"]["canvas"]["x"], params["pointer"]["canvas"]["y"]);

        if (selectedNodeId == null)
            prevSelectedNodeId = null;

        if (addEdgeMode && prevSelectedNodeId != null && !alreadyHasRelation(prevSelectedNodeId, selectedNodeId))
            addEdge(prevSelectedNodeId, selectedNodeId);

        prevSelectedNodeId = selectedNodeId;
    });

    function addNode(x, y) {
        var newNodeId = 1;
        if (nodes.length > 0)
            var newNodeId = nodes.getIds()[nodes.length - 1] + 1;

        nodes.add({ id: newNodeId, label: moleculeName, x: x, y: y });
    }

    function addEdge(from, to) {
        edges.add({ from: from, to: to});
    }


    function alreadyHasRelation(from, to) {
        relations = edges.get({ fields: ['from', 'to'] });
        for (var i = 0; i < relations.length; i++) {
            if (relations[i]["from"] == from && relations[i]["to"] == to)
                return true;
        }
        return false;
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        addNodeMode = (evt.which || evt.keyCode) == 16;
        addEdgeMode = (evt.which || evt.keyCode) == 17;

        if ((evt.which || evt.keyCode) == 46) {
            var selectedNodeId = network.getSelectedNodes()[0];
            network.deleteSelected();
        }
		if ((evt.which || evt.keyCode) == 79) {
           moleculeName = "O"
        }
		 if ((evt.which || evt.keyCode) == 67) {
            moleculeName = "C"
        }
		if ((evt.which || evt.keyCode) == 82) {
            moleculeName = "N"
        }
    };

    document.onkeyup = function(evt) {
        evt = evt || window.event;
        addNodeMode = false;
        addEdgeMode = false;
    };