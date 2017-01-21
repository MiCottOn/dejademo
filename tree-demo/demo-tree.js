
    var chart_config = {
        chart: {
            container: "#collapsable-example",
            rootOrientation: "WEST",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: {name:"App"},
            children: [
                {
                    text: {name: "Header"}
                },
                {
                    text: {name:"NewPostForm"}
                },
                {
                    text: {name:"PostList"},
                    collapsed: true,
                    children: [
                        {
                            text: {name:"Post"},
                            collapsed: true,
                            children: [
                                {
                                    text: {name: "CommentList"},
                                    collapsed: true,
                                    children: [
                                        {
                                        text: {name: "Comment"}
                                        },
                                        {
                                        text: {name: "Comment"}
                                        }
                                    ]
                                },
                                {
                                    text: {name: "CommentForm"}
                                }
                            ]
                        },
                        {
                            text: {name:"Post"},
                            collapsed: true,
                            children: [
                                {
                                    text: {name: "CommentList"},
                                    collapsed: true,
                                    children: [
                                        {
                                        text: {name: "Comment"}
                                        }
                                    ]
                                },
                                {
                                    text: {name: "CommentForm"}
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/