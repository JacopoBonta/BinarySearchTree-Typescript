/**
 * Tree Interface
 */
import NonEmptyBST from "./NonEmptyBST"
export default interface Tree<D> {
    /**
     * Is the tree empty?
     */
    isEmpty() :boolean;
    /**
     * Return the size of the Tree
     */
    cardinality() :number;
    /**
     * Is the element present in the tree?
     * @param e {any} The element to search
     */
    member(e :D) :boolean;
    add(e :D) :NonEmptyBST<D>;
}