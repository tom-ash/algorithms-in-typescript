import { BinaryTreeNode } from "../../../../data-structures/binary-tree";
import { depthFirstSearchBinaryTreePreOrderTraversal } from "./pre-order-traversal";

describe('Depth-first Search > Binary Tree > Pre-order Traversal', () => {
  describe('when the argument is valid', () => {
    let consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]], any>
    let tree: BinaryTreeNode

    beforeAll(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

      tree = new BinaryTreeNode(
        1,
        new BinaryTreeNode(
          2,
          new BinaryTreeNode(4, null, null),
          new BinaryTreeNode(5, null, null),
        ),
        new BinaryTreeNode(3, null, null),
      );

      //      1
      //     / \
      //    2   3
      //   / \
      //  4   5
    })

    afterAll(() => {
      consoleSpy.mockRestore();
    })

    it('runs the algorithm', () => {
      depthFirstSearchBinaryTreePreOrderTraversal(tree)

      expect(consoleSpy.mock.calls).toEqual([
        ["Processing node: 1."],
        ["Traversing left from node: 1."],
        ["Processing node: 2."],
        ["Traversing left from node: 2."],
        ["Processing node: 4."],
        ["Traversing right from node: 2."],
        ["Processing node: 5."],
        ["Traversing right from node: 1."],
        ["Processing node: 3."],
      ]);
    })
  })
})
