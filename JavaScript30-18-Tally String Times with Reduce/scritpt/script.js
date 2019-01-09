 const videoList = Array.from(document.querySelectorAll('[data-time]'));

 let seconds = videoList.map(node => node.dataset.time)
                .map(timeCode => 
                    {
                        const [mins, secs] = timeCode.split(":").map(parseFloat);
                        return (mins * 60) +secs ;
                                   
                    }
                    ).reduce(
                        (totalTime, seconds) => totalTime+seconds
                    );
let secondLeft = seconds;
const hours = Math.floor(secondLeft / 3600);
 secondLeft = secondLeft % 3600;

const minutes = Math.floor(secondLeft/60);
secondLeft = secondLeft % 60;

const totalTime = document.querySelector(".total");

totalTime.innerHTML = "Total time " + hours + ":" + minutes + ":" + secondLeft;
 


                