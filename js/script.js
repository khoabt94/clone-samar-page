// ///////////////////////////////////////////////////////////////////////
// Select element

const toTopBtn = document.querySelector('.to-top')
const main = document.querySelector('.main')
const togglePlan = document.querySelector('.plan__toggle')
const toggleTabs = document.querySelector('.plan__toggle-tabs')
const togglePlanNum = [...document.querySelectorAll('.plan__price-num')]
const togglePlanText = [...document.querySelectorAll('.plan__price-text')]
const planMonth = ['$49','$99','$149']
const planYear = ['$449','$1099','$1249']
const toggleAsideBtn = document.querySelector('.aside__open')
const aside = document.querySelector('.aside')
const nav = document.querySelector('.nav__over')
const section = [...document.querySelectorAll('section')]


// ///////////////////////////////////////////////////////////////////////
// Function

// ////////////////////////////////////////////////////
// Begin <Back to top>

// Observer to active btn
const activeBtn = (entries, observe) => {
    const [entry] = entries
    
    if (!entry.isIntersecting) toTopBtn.classList.remove('to-top-visible')
    else toTopBtn.classList.add('to-top-visible')
}

const optionObsBack = {
    root: null,
    threshold: 0.07,
}

const toTopObs = new IntersectionObserver(activeBtn, optionObsBack)
toTopObs.observe(main)


// Click to top
toTopBtn.addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})

// Reduce opacity when scroll
// window.addEventListener('scroll', () => {
//     toTopBtn.style.opacity = 0.5
// })

// End <Back to top>
// ////////////////////////////////////////////////////

// ////////////////////////////////////////////////////
// Begin <Toggle Price>

togglePlan.addEventListener('click', (e) => {
    // DOM Elegation & Traversing
    const target = e.target.closest('.plan__toggle-item')
    if (!target) return

    // Toggle tabs
    // Remove class active
    document.querySelector('.plan__toggle-item--active').classList.remove('plan__toggle-item--active')
    
    // Edit info
    if (target.classList.contains('month')) {
        // Switch tabs
        toggleTabs.style.left = '4px'

        // Add class active
        target.classList.add('plan__toggle-item--active')

        // Update info num
        togglePlanNum.forEach((num, i) => num.textContent = planMonth[i])

        // Update info text
        togglePlanText.forEach(num => num.textContent = '/Month')
    }
    else {
        // Switch tabs
        toggleTabs.style.left = '117px'

        // Add class active
        target.classList.add('plan__toggle-item--active')

        // Update info num
        togglePlanNum.forEach((num, i) => num.textContent = planYear[i])

        // Update info text
        togglePlanText.forEach(num => num.textContent = '/Year')
    }

})

// End <Toggle Price>
// ////////////////////////////////////////////////////

// ////////////////////////////////////////////////////
// Begin <Toggle Aside>

toggleAsideBtn.addEventListener('click', function() {
    aside.classList.toggle('aside-active')
    toggleAsideBtn.classList.toggle('aside__open-active')
})

// End <Toggle Aside>
// ////////////////////////////////////////////////////


// ////////////////////////////////////////////////////
// Begin <Lazy loading>

// Observer to active lazy loading
const activeLoading = (entries, observer) => {
    const [entry] = entries
    
    if (!entry.isIntersecting) return 
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}

const optionObsLazy = {
    root: null,
    threshold: 0.25,
}

const loadingObs = new IntersectionObserver(activeLoading, optionObsLazy)
section.forEach(section => {
    loadingObs.observe(section)
    section.classList.add('section--hidden')
})

// End <Lazy loading>
// ////////////////////////////////////////////////////

// ////////////////////////////////////////////////////
// Begin <Sticky header>

// Observer to active lazy loading
const activeSticky = (entries) => {
    const [entry] = entries
    
    console.log(entry);
    if (!entry.isIntersecting) nav.classList.remove('nav__sticky')
    else nav.classList.add('nav__sticky')
}

const optionObsSticky = {
    root: null,
    threshold: 0.03,
    // rootMargin: '-10px',
}

const stickyObs = new IntersectionObserver(activeSticky, optionObsSticky)
stickyObs.observe(main)

// End <Sticky header>
// ////////////////////////////////////////////////////

