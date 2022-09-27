export default class BST {
    head: BinaryNode<number>

    constructor(tree: BinaryNode<number>) {
        this.head = tree
        this.set_links_to_parent(this.head, null)
    }

    toString(): string {
        let depth = 0;
        let acc: string[] = []
        this.make_tree_arr(this.head, depth, acc, 'H')
        return acc.join('\n')
    }

    print(): void {
        console.log(this.toString())
    }

    validate(): boolean {
        if (this.head.parent !== null) return false

        const traverse = (node: BinaryNode<number> | null): boolean => {
            if (node === null) {
                return true
            }
            // Check
            if (node.parent) {
                const is_left = node.parent.left === node
                const is_right = node.parent.right === node
                if (!((is_left && !is_right) || (!is_left && is_right))) {
                    return false
                }
            } else if (node !== this.head) {
                return false
            }

            return traverse(node.left) && traverse(node.right)
        }
        return traverse(this.head)
    }

    compare(bst: BST): boolean {
        function compare_two_trees(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
            // Structurally the same
            if (a === null && b === null) {
                return true
            }

            // Structurally not the same
            if (a === null || b === null) {
                return false
            }

            if (a.value !== b.value) {
                return false
            }

            return compare_two_trees(a.left, b.left) && compare_two_trees(a.right, b.right)
        }

        return compare_two_trees(this.head, bst.head)
    }

    find(value: number): BinaryNode<number> | null {
        function find_value(node: BinaryNode<number> | null, value: number): BinaryNode<number> | null {
            if (!node) {
                return null
            }

            if (node.value == value) {
                return node
            }
            else if (value < node.value) {
                return find_value(node.left, value)
            }

            return find_value(node.right, value)
        }

        return find_value(this.head, value)
    }

    insert(value: number) {
        const insert_value = (node: BinaryNode<number>, value: number): void => {
            if (value <= node.value) {
                if (!node.left) {
                    node.left = this.create_node(value)
                }
                else {
                    insert_value(node.left, value)
                }
            }
            else if (node.value < value) {
                if (!node.right) {
                    node.right = this.create_node(value)
                }
                else {
                    insert_value(node.right, value)
                }
            }
        }
        return insert_value(this.head, value)
    }

    delete(node: BinaryNode<number> | null): boolean {
        if (!node) {
            return false
        }
        // 1. No children
        if (node.left === null && node.right === null) {
            // remove it
            node.parent = null
            // WARGING: possible bug becouse parent points to node
            return true
        }

        // 2. Has children
        if (node.left && node.right) {
            this.delete_node_with_children(node)
            return true
        }

        // 3. One child
        this.delete_node_with_one_child(node)
        return true

    }

    private create_node(value: number): BinaryNode<number> {
        return {
            value: value,
            parent: null,
            left: null,
            right: null
        }
    }

    private replace_parent_link(node: BinaryNode<number>, new_node: BinaryNode<number> | null): boolean {
        if (!node.parent) {
            return false
        }
        if (node.parent?.left === node) {
            node.parent.left = new_node
            return true
        }
        else if (node.parent?.right === node) {
            node.parent.right = new_node
            return true
        }
        return false
    }

    private delete_node_with_children(node: BinaryNode<number>): void {
        // go left one node, then to the right till the end
        let end_node = node!.left
        while (end_node!.right) {
            end_node = end_node!.right
        }

        // Change links
        // Set child of parent of end_node
        if (end_node!.parent) {
            if (!end_node!.left) {
                this.replace_parent_link(end_node!, null)
            } else {
                // Set parent's link to child
                this.replace_parent_link(end_node!, end_node!.left)
                // Set child's link to parent
                end_node!.left.parent = end_node!.parent
            }
        }

        // Set end_node
        end_node!.left = node.left
        end_node!.right = node.right
        end_node!.parent = node.parent

        // Set parent of node
        this.replace_parent_link(node, end_node)
        // Set children of node
        node.left!.parent = end_node
        node.right!.parent = end_node

        // Delete node
        this.destroy_node_links(node)
    }

    private delete_node_with_one_child(node: BinaryNode<number>) {
        if (node.left && !node.right) {
            this.replace_parent_link(node, node.left)
            node.left.parent = node.parent
            this.destroy_node_links(node)
        }
        else if (!node.left && node.right) {
            this.replace_parent_link(node, node.right)
            node.right.parent = node.parent
            this.destroy_node_links(node)
        }
    }

    private destroy_node_links(node: BinaryNode<number>) {
        node.left = node.right = node.parent = null
    }

    private set_links_to_parent(node: BinaryNode<number>, parent: BinaryNode<number> | null): void {
        node.parent = parent

        if (node.left) {
            this.set_links_to_parent(node.left, node)
        }

        if (node.right) {
            this.set_links_to_parent(node.right, node)
        }
    }

    private make_tree_arr(node: BinaryNode<number>, depth: number, acc: string[], side: string): void {
        acc.push('|  '.repeat(depth) + `|-- ${node.value} ${side}`)

        if (node.left) {
            this.make_tree_arr(node.left, depth + 1, acc, 'L')
        }

        if (node.right) {
            this.make_tree_arr(node.right, depth + 1, acc, 'R')
        }
    }
}

