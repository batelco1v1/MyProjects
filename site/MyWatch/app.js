const time = document.querySelector('.time');

setInterval(() => {
    const date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();

    if(hour > 12){
        hour = hour - 12;
    }
    if(hour.toString().length < 2){
        hour = `o${hour}`;
    }
    if(min.toString().length < 2){
        min = `o${min}`;
    }

    time.innerHTML = `${hour} \n :${min}`
})