const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.newRoot = null;
  }

  root() {
    return this.newRoot;
  }

  add(data) {
    this.newRoot = addNode(this.newRoot, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }


  has(data) {
    return searchNode(this.newRoot, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data)
      }
    }
  }


  find(data) {
    return findData(this.newRoot, data);

    function findData(node, data) {
      if (node === null) {
        return null;
      } else if (data > node.data) {
        return findData(node.right, data);
      } else if (data < node.data) {
        return findData(node.left, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.newRoot = removeData(this.newRoot, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        } 
        
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;
        node.left = removeData(node.left, maxFromLeft.data);
        return node;
      }
    }
  }


  min() {
    if(!this.newRoot) {
      return;
    }
    let nodeMin = this.newRoot;
    while (nodeMin.left) {
      nodeMin = nodeMin.left;
    }
    return nodeMin.data;
  }

  max() {
    if(!this.newRoot) {
      return;
    }
    let nodeMax = this.newRoot;
    while (nodeMax.right) {
      nodeMax = nodeMax.right;
    }
    return nodeMax.data;
  }
}

module.exports = {
  BinarySearchTree
};