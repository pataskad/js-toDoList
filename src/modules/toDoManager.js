import '../styles.css' 
import { myToDoItems } from './createToDo'
import { toDoItemRender, clearOldItems } from './displayRender'

/* this module will contain functions to manage toDo items,
starting with the logic/function to delete and refresh toDo item array */

function deleteItem(e) {
    clearOldItems()
    const itemIndex = e.target.dataset.attribute
    myToDoItems.splice(itemIndex, 1)
    toDoItemRender()
}

export { deleteItem };