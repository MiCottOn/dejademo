let root_instance, root_tree, root_node, root_array = []; 

function findRoot() {
  document.body.childNodes.forEach((node) => {
    const instance = node.__vue__;
    if (instance) {
      root_instance = instance.$children[0];
    }
  })
}
findRoot();

root_instance.$children.forEach((child) => {
  console.log(child);
})