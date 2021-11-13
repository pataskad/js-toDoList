import _ from 'lodash'
import '../styles.css' 
import { myToDoItems } from './createToDo.js'

// DOM logic for rending to display
 
function displayRender() {
    /* separate functions used to for creating each section of the page before nesting 
    functions within displayRender to be exported to index.js. (Creating bite sized bits of code) */

    headerRender()
    asideRender()
    toDoItemRender()
}
// helper functions
function headerRender() {
    const header = document.createElement('div')
    header.classList.add('page-header')

    const h1 = document.createElement('h1')
    h1.textContent = 'My ToDo Items'

    const addItem = document.createElement('button')
    addItem.textContent = '+'
    addItem.classList.add('add-item')

    header.appendChild(h1)
    header.appendChild(addItem)
    document.body.appendChild(header)
}
function asideRender() {
    const asideNav = document.createElement('aside')
    asideNav.classList.add('aside-nav')

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-div')
    const tasks = document.createElement('strong')
    tasks.classList.add('task-header')
    tasks.textContent = 'Tasks'
    taskDiv.appendChild(tasks)

    const allProjects = document.createElement('p')
    allProjects.textContent = 'All Projects'
    allProjects.style.fontSize = 'x-large'

    const highPriority = document.createElement('p')
    highPriority.textContent = 'High Priority'
    highPriority.style.color = 'rgba(250, 54, 54, 0.822)'

    const mediumPriority = document.createElement('p')
    mediumPriority.textContent = 'Medium Priority'
    mediumPriority.style.color = 'rgba(143, 117, 21)'

    const lowPriority = document.createElement('p')
    lowPriority.textContent = 'Low Priority'
    lowPriority.style.color = 'rgba( 52, 137, 52)'

    const signature = document.createElement('small')
    signature.classList.add('signature')
    signature.textContent = 'Made By: Dallas Pataska'

    asideNav.appendChild(taskDiv)
    asideNav.appendChild(allProjects)
    asideNav.appendChild(highPriority)
    asideNav.appendChild(mediumPriority)
    asideNav.appendChild(lowPriority)
    asideNav.appendChild(signature)
    document.body.appendChild(asideNav)
}
function toDoItemRender() {
    myToDoItems.sort(function(a, b) {
        // sort function places highest priority toDo items first
        return b.priority - a.priority
    })
    const toDoWrapper = document.createElement('div')
    toDoWrapper.classList.add('toDo-wrapper')
    for (let i = 0; i < myToDoItems.length; i++) {
        const toDoDiv = document.createElement('div')
        toDoDiv.classList.add('toDo-div')
        if (myToDoItems[i].priority == 1) {
            toDoDiv.style.backgroundColor = 'rgba(34, 138, 34, 0.342)'
        }
        if (myToDoItems[i].priority == 2) {
            toDoDiv.style.backgroundColor = 'rgba(143, 117, 21, .342)'
        }
        if (myToDoItems[i].priority == 3) {
            toDoDiv.style.backgroundColor = 'rgba(204, 54, 54, 0.342)'
        }
        const title = document.createElement('p')
        title.classList.add('toDo-title')
        title.innerHTML = `${myToDoItems[i].title}`
        const toDoDeleteBtn = document.createElement('span')
        toDoDeleteBtn.innerHTML = '&times;'
        toDoDeleteBtn.classList.add('toDo-deleteBtn')
        const description = document.createElement('p')
        description.innerHTML = `${myToDoItems[i].description}` 

        toDoDiv.appendChild(title)
        toDoDiv.appendChild(toDoDeleteBtn)
        toDoDiv.appendChild(description)
        toDoWrapper.appendChild(toDoDiv)
        document.body.appendChild(toDoWrapper)
    }
}

export { displayRender }