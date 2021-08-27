const fibonacci = (n => {
    if(n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2)
    } else{
        return 1
    }
})

// kelas node
class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

// bikin baru kelas binarysearchtree

class binarySearchTree {
    constructor()
    {
        this.root = null
    }
    // masukan(data) dulu
    masukan(data){

        let nodeBaru = new Node(data)

        if(this.root === null)
            this.root === nodeBaru
        else

        this.masukanNode(this.root, nodeBaru)
    }

    //masukin node yang berisi data

    masukanNode(node, nodeBaru){
        //kalo misalnya si data nilai nya kurang dari si node <<<<<<<<<<<<<<<<<<<
        // maka masukan data ke kiri node
        if(nodeBaru.data < node)
        {

            //kalo si data di left = null maka masukan nodenya ==================
            if(node.left === null)
                node.left = nodeBaru
            else
                //jika si left nya ini ga null maka ulangi lagi sampai null itu ketemu !!!!!!!!!!
                this.masukanNode(node.left, nodeBaru)
        }
            //kalo si data lebih dari node >>>>>>>>>>>>>>>>
            //masukan data ke kanannya node

        else {
            //kali di kanannya null maka masukan nodeBarunya

            if(node.right === null)
                node.right = nodeBaru
            else

                this.masukanNode(node.right, nodeBaru)
        }
    }
 



    getRootNode(){
    return this.root;
    }


}




