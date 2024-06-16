var anim = gsap.timeline()

anim.from("nav", {
    y: -300,
    opacity: 0,
    duration: 1
})

anim.from("#container h1", {
    y: 100,
    opacity: 0,
    duration: 0.9
}, 'a')
anim.from(".lft p", {
    y: 50,
    opacity: 0,
    duration: 0.5
}, 'a')
anim.from("#card4", {
    x: 100,
    y: 60,
    rotate: "15deg",
    opacity: 0,
    duration: 0.8
})
anim.from("#card3", {
    x: -100,
    y: 60,
    rotate: "-25deg",
    opacity: 0,
    duration: 0.8
})
anim.from("#card2", {
    x: 100,
    y: 60,
    rotate: "30deg",
    opacity: 0,
    duration: 0.8
})
anim.from("#card1", {
    x: -100,
    y: 60,
    rotate: "-35deg",
    opacity: 0,
    duration: 0.8
})


document.querySelector("#card1").addEventListener("click",()=>{
    anim.to("#card1", {
        x: 100,
        y: -160,
        rotate: "-80deg",
        opacity: 0,
        duration: 0.8
    })
})
document.querySelector("#card2").addEventListener("click",()=>{
    anim.to("#card2", {
        x: -100,
        y: -160,
        rotate: "70deg",
        opacity: 0,
        duration: 0.8
    })
})
document.querySelector("#card3").addEventListener("click",()=>{
    anim.to("#card3", {
        x: 100,
        y: -160,
        rotate: "-90deg",
        opacity: 0,
        duration: 0.8
    })
})
document.querySelector("#card4").addEventListener("click",()=>{
    anim.to("#card4", {
        x: -100,
        y: -160,
        rotate: "60deg",
        opacity: 0,
        duration: 0.8
    })
})