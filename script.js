let digitalElement = document.querySelector('.digital');
let hElement = document.querySelector('.p_h');
let mElement = document.querySelector('.p_m');
let sElement = document.querySelector('.p_s');


const updateClock = ()=>{
	let moment = new Date();
	let hour = moment.getHours();
	let minutes = moment.getMinutes();
	let seconds = moment.getSeconds();

	digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;


	let hDeg = ((360 / 12) * hour) - 90;
	let mDeg = ((360 / 60) * minutes) - 90;
	let sDeg = ((360 / 60) * seconds) - 90;

	hElement.style.transform = `rotate(${hDeg}deg)`;
	mElement.style.transform = `rotate(${mDeg}deg)`;
	sElement.style.transform = `rotate(${sDeg}deg)`;
}

const fixZero = (time)=> {
	return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();