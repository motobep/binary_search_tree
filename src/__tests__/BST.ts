import BST from '@code/BST'
import { get_tree, get_tree_2 } from '@code/trees'


test('bst', () => {
    const bst = new BST(get_tree())
    const bst2 = new BST(get_tree_2())

    const is_valid = bst.validate()
    expect(is_valid).toEqual(true)

    const is_valid2 = bst2.validate()
    expect(is_valid2).toEqual(true)

    const val1 = bst.compare(bst)
    expect(val1).toEqual(true)

    const val2 = bst.compare(bst2)
    expect(val2).toEqual(false)

    let found = bst.find(5)
    expect(found).not.toEqual(null)

    found = bst.find(4)
    expect(found).toEqual(null)

    found = bst.find(255)
    expect(found).toEqual(null)

    bst.insert(255)
    found = bst.find(255)
    expect(found).not.toEqual(null)

    bst.delete(bst.head.left)
    bst.delete(bst.head.right)

    const is_valid_after_insert_delete = bst.validate()
    expect(is_valid_after_insert_delete).toEqual(true)
    // console.debug(bst.toString())
})


test('bst validation', () => {
    const bst = new BST(get_tree())
    // console.debug(bst.toString())

    let is_valid = bst.validate()
    expect(is_valid).toEqual(true)

    bst.head.parent = { value: 1, parent: null, right: null, left: null }
    let is_valid_head = bst.validate()
    expect(is_valid_head).toEqual(false)

    bst.head.parent = null
    is_valid_head = bst.validate()
    expect(is_valid_head).toEqual(true)

    bst.head.left!.left = bst.head.left!.right
    is_valid = bst.validate()
    expect(is_valid).toEqual(false)

    const bst_2 = new BST(get_tree())
    bst_2.head.right!.right!.parent = null
    let is_valid_2 = bst_2.validate()
    expect(is_valid_2).toEqual(false)
})

