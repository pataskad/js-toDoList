import _ from 'lodash'
import './styles.css'
import { displayRender, clearOldItems } from './modules/displayRender'
import { ToDoItem, myToDoItems } from './modules/createToDo'
import { deleteItem } from './modules/toDoManager'
 
window.addEventListener('load', function() {
    // KEEP SOLID PRINCIPLES IN MIND! REFACTOR WHERE NEEDED, START ROUGH AND REFINE
    // window event listener used to ensure content is loaded properly
        
    // testing item object
    let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 2)
    myToDoItems.push(test)
    let test2 = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 3)
    myToDoItems.push(test2)

    // loop for testing high volume tasks
/*     for (let i = 0; i < 10; i++) {
        let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 2)
        myToDoItems.push(test)
    } */

    // renders basic layout, nav, header, and formatting.
    displayRender()

    // event listener logic to manage certain events, REVIEW PLACEMENT OF LOGIC!
    document.addEventListener('click', function(e) {
        if (e.target.matches('.toDo-deleteBtn')) {
            deleteItem(e)
        }
    })
})