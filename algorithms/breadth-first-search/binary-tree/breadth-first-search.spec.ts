import { BinaryTreeNode } from "../../../data-structures/binary-tree";
import { breadthFirstSearchBinaryTree } from "./breadth-first-search";

describe("Depth-first Search > Binary Tree > Pre-order Traversal", () => {
  describe("when the argument is valid", () => {
    let consoleSpy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]],
      any
    >;
    let tree: BinaryTreeNode;

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
    });

    afterAll(() => {
      consoleSpy.mockRestore();
    });

    it("runs the algorithm", () => {
      breadthFirstSearchBinaryTree(tree);

      expect(consoleSpy.mock.calls).toEqual([
        ["Getting from queue and processing node: 1."],
        ["Enqueuing left child of node: 1."],
        ["Enqueuing right child of node: 1."],
        ["Getting from queue and processing node: 2."],
        ["Enqueuing left child of node: 2."],
        ["Enqueuing right child of node: 2."],
        ["Getting from queue and processing node: 3."],
        ["Getting from queue and processing node: 4."],
        ["Getting from queue and processing node: 5."],
      ]);
    });
  });
});
