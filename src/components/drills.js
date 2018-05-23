
// Dewey Decimal Classification (DDC), or Dewey Decimal System, 
// is a proprietary library classification system first published in the United States by 
// Melvil Dewey in 1876.[1] It has been revised
//  and expanded through 23 major editions


// The fastest way would be going through with binary search with less iterations 

// by finding the cagtgoary of those books \
// using recursive to loop through
// and find our results




class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }

  insert(key, value) {
      if (this.key == null) {
          this.key = key;
          this.value = value;
      }
      else if (key < this.key) {
          if (this.left == null) {
              this.left = new BinarySearchTree(key, value, this);
          }
          else {
              this.left.insert(key, value);
          }
      }
      else {
          if (this.right == null) {
              this.right = new BinarySearchTree(key, value, this);
          }
          else {
              this.right.insert(key, value);
          }
      }
  }

  count(key, count = 0) {
      if (this.key === key) {                
          return count;
      }
      else if (key < this.key && this.left) {
          count++
          return this.left.count(key, count)
      } else if (key > this.key && this.right) {
          count++
          return this.right.count(key, count);
      }
  }

  find(key) {
      if (this.key == key) {
          return this.value;
      }
      else if (key < this.key && this.left) {
          return this.left.find(key);
      }
      else if (key > this.key && this.right) {
          return this.right.find(key);
      }
      else {
          throw new Error('Key Error');
      }
  }

  findNode(key) {
      if (this.key == key) {
          return this;
      }
      else if (key < this.key && this.left) {
          return this.left.findNode(key);
      }
      else if (key > this.key && this.right) {
          return this.right.findNode(key);
      }
      else {
          throw new Error('Key Error');
      }
  }

  remove(key) {
      if (this.key == key) {
          if (this.left && this.right) {
              const successor = this.right._findMin();
              this.key = successor.key;
              this.value = successor.value;
              successor.remove(successor.key);
          }
          else if (this.left) {
              this._replaceWith(this.left);
          }
          else if (this.right) {
              this._replaceWith(this.right);
          }
          else {
              this._replaceWith(null);
          }
      }
      else if (key < this.key && this.left) {
          this.left.remove(key);
      }
      else if (key > this.key && this.right) {
          this.right.remove(key);
      }
      else {
          throw new Error('Key Error');
      }
  }

  _replaceWith(node) {
      if (this.parent) {
          if (this == this.parent.left) {
              this.parent.left = node;
          }
          else if (this == this.parent.right) {
              this.parent.right = node;
          }

          if (node) {
              node.parent = this.parent;
          }
      }
      else {
          if (node) {
              this.key = node.key;
              this.value = node.value;
              this.left = node.left;
              this.right = node.right;
          }
          else {
              this.key = null;
              this.value = null;
              this.left = null;
              this.right = null;
          }
      }
  }

  _findMin() {
      if (!this.left) {
          return this;
      }
      return this.left._findMin();
  }

  preOrderTraversal(node = this) {
      console.log(node.key)

      if (node.left) {
          this.preOrderTraversal(node.left)
      }
      if (node.right) {
          this.preOrderTraversal(node.right)
      }
  }

  inOrderTraversal(node = this) {

      if (node.left) {
          this.inOrderTraversal(node.left)
      }
      console.log(node.key)
      if (node.right) {
          this.inOrderTraversal(node.right)
      }
  }

  postOrderTraversal(node = this) {

      if (node.left) {
          this.postOrderTraversal(node.left)
      }
      if (node.right) {
          this.postOrderTraversal(node.right)
      }
      console.log(node.key)        
  }
  
}
 let tree = new BinarySearchTree();

 // tree.preOrderTraversal()
// tree.inOrderTraversal()
// tree.postOrderTraversal()
let arr = [128, 97, 121, 123, 98, 97, 105]
function largestNum(arr) {
    largestNumber = [0]
     for(var i = 0; i < arr.length; i++) {
         if(arr[i]  > largestNumber[i]) {         
            largestNumber[i] = arr[i]
          }
      }
       return largestNumber;
   }
  largestNum(arr);