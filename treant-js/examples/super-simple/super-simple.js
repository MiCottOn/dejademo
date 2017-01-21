
var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple"
	},
	
	nodeStructure: {
		text: { name: "Parent node" },
		children: [
			{
				text: { name: "First child" }
			},
			{
				text: { name: "Second child" }
			}
		]
	}
};

// // // // // // // // // // // // // // // // // // // // // // // // 

var config = {
	container: "#OrganiseChart-simple"
};

var parent_node = {
	text: { name: "Parent node" }
};

var first_child = {
	parent: parent_node,
	text: { name: "First child" }
};

var second_child = {
	parent: parent_node,
	text: { name: "Second child" }
};

var simple_chart_config = [{"container":"#tree-simple"},{text:{"name":"app"}},{"text":{"name":"demoHeader"}, parent:{"text":{"name":"app"}}},{"parent":{"text":{"name":"app"}},"text":{"name":"demo-new-post"}},{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},{"parent":{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},"text":{"name":"demo-post"}},{"parent":{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},"text":{"name":"demo-post"}},{"parent":{"parent":{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},"text":{"name":"demo-post"}},"text":{"name":"demo-comment-list"}},{"parent":{"parent":{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},"text":{"name":"demo-post"}},"text":{"name":"demo-new-comment"}},{"parent":{"parent":{"parent":{"parent":{"text":{"name":"app"}},"text":{"name":"demo-post-list"}},"text":{"name":"demo-post"}},"text":{"name":"demo-comment-list"}},"text":{"name":"demo-comment"}}]
