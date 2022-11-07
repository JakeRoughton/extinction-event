let crossOut = document.querySelector('#strike');
let invisible = document.querySelector('#invisible');
let row = document.querySelector('#row');
let burn = document.querySelectorAll('.feature button');


crossOut.addEventListener('click', function(event){
    console.log('PARENT clicked');

    let crossOut = event.target;
    crossOut.style.textDecoration = 'line-Through';
})

invisible.addEventListener('click', function(event){
    console.log('PARENT clicked');

    let invisible = event.target;
    console.log(invisible.innerText);
    invisible.style.opacity = '0';
    })

row.addEventListener('click', function(event){
    console.log('PARENT clicked')

    let row = event.target;
    row.style.width = '0px';
})

burn.addEventListener('click',function(){
    console.log('PARENT clicked')
    if(crossOut.style.textDecoration !== 'line-through'){
        (crossOut.style.textDecoration = 'line-through')
    }
    if(invisible.style.opacity !== '0'){
        
    }

    // let crossOut = event.target;
    // crossOut.style.opacity = '0';
    // let row = event.target;
    // row.style.width = '0px';
    // let invisible = event.target;
    // invisible.style.opacity = '0';
})