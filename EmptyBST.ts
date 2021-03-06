import Tree from "./Tree"
import NonEmptyBST from "./NonEmptyBST"
/**
 * A class that reappresent an empty Binary Tree
 */
export default class EmptyBST<D> implements Tree<D> {
    constructor() {}

    isEmpty() :boolean {
        return true;
    }

    cardinality() :number {
        return 0;
    }

    search(elem :D) :boolean {
        return false;
    }

    insert(elem :D) :NonEmptyBST<D> {
        return new NonEmptyBST(elem);
    }

    inOrderTraverse(callback :Function) :void {
        return;
    }

    preOrderTraverse(callback :Function) :void {
        return;
    }
}