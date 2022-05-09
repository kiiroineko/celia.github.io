// image monitor used only
const monitorPlaceholder = document.querySelector('.placeholder')
let numberOfImagesLoaded = 0

const updateMonitor = () => {
  numberOfImagesLoaded += 1
  monitorPlaceholder.innerHTML = numberOfImagesLoaded
}

// select all the images
const images = document.querySelectorAll('[data-src]')
// circumstances under which the callback will be invoked
const options = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
}

const loadImage = (img) => {
  const src = img.getAttribute('data-src')
  if (!src) return
  img.src = src
  // update monitor
  
  updateMonitor()
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    // load the image
    $("img").addClass("fade-in");
    
    loadImage(entry.target)
    
    
    // stop observing this element
    observer.unobserve(entry.target)
  })
}

// create an observer
let observer = new IntersectionObserver(callback, options)

// observe all the images
images.forEach(image => observer.observe(image))