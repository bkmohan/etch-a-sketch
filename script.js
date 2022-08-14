
const canvas = document.querySelector('.canvas')
const slider = document.querySelector('#myRange')
const sliderValue = document.querySelector('.sliderValue');
const clearBtn = document.querySelector('#clearBtn');
const colorBtn = document.querySelector('#clrBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const defaultColor = 'white'
const colorPicker = document.querySelector('#colorPicker');
let mode = 'color';


let nGrid = slider.value;
let rgb = ''


function updateCanvas(){
    let width = (canvas.clientWidth / nGrid );   // 2 added for considering border of 1px thick
    
    while (canvas.firstChild) {
        canvas.firstChild.remove()
    }

    for(let i = 0; i < nGrid*nGrid; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = width + 'px'; 
        pixel.style.height = width + 'px'; 
        pixel.style.backgroundColor = defaultColor;
        pixel.addEventListener('mouseover', () => {
            if(mode == 'color'){
                pixel.style.backgroundColor = colorPicker.value;
            }
            else{
                pixel.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        })

        canvas.appendChild(pixel);
}
}


slider.addEventListener('mouseup', (e)=>{
    nGrid = e.target.value
    sliderValue.textContent = nGrid + ' x ' + nGrid;
    updateCanvas()
})

clearBtn.addEventListener('click', ()=>{
    document.querySelectorAll('.pixel').forEach(ele => {
        ele.style.backgroundColor = defaultColor;
    })

})

colorBtn.addEventListener('click', ()=>{
    mode='color';
    colorBtn.style.backgroundColor = '#2C3333'
    colorBtn.style.color = 'white'

    rainbowBtn.style.backgroundColor = ''
    rainbowBtn.style.color = ''
})

rainbowBtn.addEventListener('click', ()=>{
    mode='rgb';
    rainbowBtn.style.backgroundColor = '#2C3333'
    rainbowBtn.style.color = 'white'

    colorBtn.style.backgroundColor = ''
    colorBtn.style.color = ''
})

updateCanvas();
colorBtn.click()
