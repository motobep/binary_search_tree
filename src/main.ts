import BST from './BST'
import { get_tree } from './trees'


const bst = new BST(get_tree())
bst.print()

bst.insert(255)
bst.insert(42)
bst.print()

const node_to_del = bst.head.right
console.log('node to delete', node_to_del)

bst.delete(node_to_del)
console.log(`Tree after deletition\n ${bst}`)

