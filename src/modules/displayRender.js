// creates the intial page layout and design

import '../styles.css' // verify path is working, typically outputs error in cli when not set correctly

function displayRender() {
    // create and render header bar, aside nav section, and main content formatting

    const header = document.createElement('div')
    header.classList.add('page-header')
    const h1 = document.createElement('h1')
    h1.textContent = 'My To Do Items'
    // add button to add a new to do item
    // other buttons, CRUD type operations?
    header.appendChild(h1)

    // aside navbar initialization
    const asideNav = document.createElement('aside')
    asideNav.classList.add('aside-nav')

    // aside navbar menu options
    const allProjects = document.createElement('p') // nav options will be clickable
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
    const signature = document.createElement('p')
    signature.classList.add('signature')
    signature.textContent = 'Made By: Dallas Pataska'
    asideNav.appendChild(allProjects)
    asideNav.appendChild(highPriority)
    asideNav.appendChild(mediumPriority)
    asideNav.appendChild(lowPriority)
    asideNav.appendChild(signature)

    document.body.appendChild(header) // ORDER MATTERS!
    document.body.appendChild(asideNav)
}

export { displayRender }