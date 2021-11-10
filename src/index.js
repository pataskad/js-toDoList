import _ from 'lodash'
import './styles.css'
import { displayRender } from './modules/displayRender.js'
import { ToDoItem, myToDoItems } from './modules/createToDo.js'
 

window.onload = function() {
    // KEEP SOLID PRINCIPLES IN MIND! REFACTOR WHERE NEEDED, START ROUGH AND REFINE


    // place array containing todo's in main or module??
/*     let myToDoItems = [
        {
          title: "Placeholder Title",
          description: "Placeholder Description",
          dueDate: "5:00pm November 19th, 2021", // use date fns package for modifying/setting date?
          priority: "Low", // priority possibilities (Low, Med, High)  
        },
    ] */

    // renders basic layout, nav, header, and formatting.
    displayRender() 

    let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", "Low")
    myToDoItems.push(test)
    console.log(myToDoItems)

    // house everything in window.onload??
}