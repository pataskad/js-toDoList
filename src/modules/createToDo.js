// contains logic to create a new to do item 
// add every level priority to 2d array, .filter (via lodash) to render correct display

let myToDoItems = [
    // use date fns package for modifying/setting date?
    // priority possibilities (Low, Med, High)
    {
      title: "Placeholder Title",
      description: "Placeholder Description",
      dueDate: "5:00pm November 19th, 2021", 
      priority: "Low",   
    },
]

class ToDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

export { ToDoItem, myToDoItems }