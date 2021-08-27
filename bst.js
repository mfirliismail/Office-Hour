const treeify = require('treeify')

class BST {
    constructor(){
        this.root = null
    }
    masukan(data){
        const nodeBaru = new Node(data) // bikin nodeBaru

        if(this.root === null){ // kalo this.root nya gaada maka
            this.root = nodeBaru // isi root dengan nodeBaru yang tadi di inputkan
            return this // mengembalikan seluruh isi
        }
        
        let current = this.root

        function masukanNode(){ // buat function untuk melakukan rekursif dan masukan data ke kanan atau kiri
            if(data < current.data){ // if node yang baru < currentnya maka

                if(current.left === null){ // kalo current.left nya itu gaada data atau == null
                    current.left = nodeBaru // masukan nodeBaru tersebut ke current.left
                    return this
                }

                current = current.left // kalo current leftnya ga null atau ada data di samping kirinya maka currentnya pindah ke current.leftnya
                masukanNode()
            } else if(data > current.data){

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

// tree.root = new Node(20)
tree.masukan(20)
tree.masukan(10)
tree.masukan(25)
tree.masukan(5)
tree.masukan(2)
tree.masukan(30)
tree.masukan(15)
tree.masukan(11)
console.log(treeify.asTree(tree, true))