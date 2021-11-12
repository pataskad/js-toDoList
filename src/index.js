import _ from 'lodash'
import './styles.css'
import { displayRender } from './modules/displayRender.js'
import { ToDoItem, myToDoItems } from './modules/createToDo.js'
 

window.onload = function() {
    // KEEP SOLID PRINCIPLES IN MIND! REFACTOR WHERE NEEDED, START ROUGH AND REFINE

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

    // house everything in window.onload??
}