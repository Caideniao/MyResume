let shots = document.querySelectorAll('.shot')
function shotEnlarge() {
    for (let i of shots) {
        i.addEventListener('click',enlarge)
    }
    let s = document.querySelector('.cancelPop')
    s.addEventListener('click',cancel)
    
}
function enlarge(e) {
    let imageURL = e.target.src
    let d = document.querySelector('.enlarge')
    let img = document.querySelector('.largeShot')
    d.classList.add('pop-image')
    img.src = imageURL
} 
function cancel(e) {
    let d = document.querySelector('.enlarge')
    d.classList.remove('pop-image')
    
}
shotEnlarge()