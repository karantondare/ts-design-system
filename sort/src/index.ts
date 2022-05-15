import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

//array
const numbersCollection = new NumbersCollection([55, 3, -5, 10]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);

//string
const charactersCollection = new CharactersCollection("Karan");
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

//linkedlist
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(35);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
