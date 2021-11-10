import _ from 'lodash'
import './styles.css'
import { displayRender } from './modules/displayRender.js'
import { ToDoItem, myToDoItems } from './modules/createToDo.js'
 

window.onload = function() {
    // KEEP SOLID PRINCIPLES IN MIND! REFACTOR WHERE NEEDED, START ROUGH AND REFINE


    // place array containing todo's in main or module??

    // renders basic layout, nav, header, and formatting.
    displayRender() 

    // testing item object
    let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", "Low")
    myToDoItems.push(test)
    console.log(myToDoItems)

    // renderToDos() loops through todo items array, later will be filtered via aside nav options

    // house everything in window.onload??
}