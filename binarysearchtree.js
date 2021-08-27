const treeify = require("treeify")

class BST {
    constructor(){
        this.root = null
    }

    masukan(data){
        let nodeBaru = new Node(data)

        if(this.root === null){
            this.root = nodeBaru
            return this
        }

        let current = this.root

        function masukanNode(){

            if(data < current.data){

                if(current.left === null){
                    current.left = nodeBaru
                    return this
                }

                current = current.left
                masukanNode()
            }else if(data > current.data){

                if(current.right === null){
                    current.right = nodeBaru
                    return this
                }

                current = current.right
                masukanNode()
            }

        }
        masukanNode()
    }
}

class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const tree = new BST()

// tree.root = new Node(10)

tree.masukan(50)
tree.masukan(20)
tree.masukan(30)
tree.masukan(60)
console.log(treeify.asTree(tree, true))