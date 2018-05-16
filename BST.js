'use strict';

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var node = {
    value : val, 
    left : null, 
    right : null,
    key: 'byah'
  };
  var currentNode;
  if (!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
      } else if (val > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('futile value!')
        break;
      }
    }    
  }
};

BinarySearchTree.prototype.preOrderTraversal = function (root) {
  console.log(root.key, root.value)
  if (root.left) {
    this.preOrderTraversal(root.left);
  } 
  if (root.right) {
    this.preOrderTraversal(root.right);
  }
};

BinarySearchTree.prototype.inOrderTraversal = function(root){
  if (root.left) {
    this.inOrderTraversal(root.left);
  } 
  console.log(root.key, root.value)
  if (root.right) {
    this.inOrderTraversal(root.right);
  }
}

BinarySearchTree.prototype.postOrderTraversal = function(root){
  if(root.left){
    this.postOrderTraversal(root.left)  
  }
  if(root.right){
    this.postOrderTraversal(root.right) 
  }
  console.log(root.key, root.value)
}

BinarySearchTree.prototype.searchTree = function(searchVal, root){
  var searchedValue = searchVal
  if(searchedValue === root.value){
    console.log('-----------------------search--------------------------')
    console.log(root.key, root.value)
    //break;
  }else if(root.left){
    this.searchTree(searchedValue, root.left) 
  }else if (root.right){
    this.searchTree(searchedValue, root.right)  
  } 
}

var BST = new BinarySearchTree();

BST.insertNode(23);
BST.insertNode(25);
BST.insertNode(20);
BST.insertNode(15);
BST.insertNode(24);
BST.insertNode(12);
BST.insertNode(10);
BST.searchTree(15, BST.root)

console.log('------------------in order traversal-----------------------')

BST.inOrderTraversal(BST.root)

console.log('------------------preorder traversal-------------------------')

BST.preOrderTraversal(BST.root)

console.log('------------------postorder traversal-------------------------')

BST.postOrderTraversal(BST.root)

