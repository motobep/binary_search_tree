export function get_tree(): BinaryNode<number> {
    const tree: BinaryNode<number> = {
        value: 20,
        parent: null,
        right: {
            value: 50,
            parent: null,
            right: {
                value: 100,
                parent: null,
                right: null,
                left: null,
            },
            left: {
                value: 30,
                parent: null,
                right: {
                    value: 45,
                    parent: null,
                    right: null,
                    left: null,
                },
                left: {
                    value: 29,
                    parent: null,
                    right: null,
                    left: null,
                }
            },
        },
        left: {
            value: 10,
            parent: null,
            right: {
                value: 15,
                parent: null,
                right: null,
                left: null,
            },
            left: {
                value: 5,
                parent: null,
                right: {
                    value: 7,
                    parent: null,
                    right: null,
                    left: null,
                },
                left: null,
            }
        }
    };
    return tree
}

export const tree = get_tree()

export function get_tree_2(): BinaryNode<number> {
    const tree2: BinaryNode<number> = {
        value: 20,
        parent: null,
        right: {
            value: 50,
            parent: null,
            right: null,
            left: {
                value: 30,
                parent: null,
                right: {
                    value: 45,
                    parent: null,
                    right: {
                        value: 49,
                        parent: null,
                        left: null,
                        right: null,
                    },
                    left: null,
                },
                left: {
                    value: 29,
                    parent: null,
                    right: null,
                    left: {
                        value: 21,
                        parent: null,
                        right: null,
                        left: null,
                    },
                }
            },
        },
        left: {
            value: 10,
            parent: null,
            right: {
                value: 15,
                parent: null,
                right: null,
                left: null,
            },
            left: {
                value: 5,
                parent: null,
                right: {
                    value: 7,
                    parent: null,
                    right: null,
                    left: null,
                },
                left: null,
            }
        }
    }
    return tree2
}

export const tree2 = get_tree_2()

