// GET A LIST OF ITEMS TO WATCH
const myListOfItems = document.querySelectorAll('article')
console.log(myListOfItems)

// CONFIGURE THE OBSERVER
let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px 0px 0px',
    //0 is barely showing, 1 is fully showing
    threshold: .1
  }

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            highlight(singleItem.target)
        }
    })
}, observerOptions)

// FUNCTION TO ADD A CLASS
function highlight(cmi) {
	document.querySelector('.active').classList.remove('active');
	let theid = cmi.getAttribute('id');
	let newActiveLink = document.querySelector(`[href="#${theid}"]`)
	newActiveLink.parentElement.classList.add('active');
}

// CALL THE OBSERVER ON PAGE LOAD
myListOfItems.forEach(item => {
    myObserver.observe(item)
});