const audio1 = document.getElementsByClassName('audio_p1');
const play_pause_btns = document.getElementsByClassName('play_btn');
const images = document.getElementById('images');
const musicList = document.getElementById('music_list');
const volumeLine = document.getElementById('volume_line');
volumeLine.style.marginTop = '0px';
const vh = document.getElementsByClassName('volume_container')[0];
var openlist=false;
var counter = 0;
var int;
var min;
var sec;
var mint;
var seco;
var v = 0;
var m_name = ["https://c.saavncdn.com/522/Kyon-Ki-It-s-Fate-Hindi-2005-20180104170214-500x500.jpg","https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg","https://c.saavncdn.com/975/Gangster-Hindi-2006-20221214104259-500x500.jpg","https://pagalfree.com/images/128Aa%20Dil%20Se%20Dil%20Mila%20Le%20-%20Naqaab%20128%20Kbps.jpg","https://c.saavncdn.com/056/Bhool-Bhulaiyaa-Hindi-2007-20221122005742-500x500.jpg"];
	images.style.background = 'url('+m_name[counter]+')';
	images.style.backgroundSize = 'cover';
const rangeInput = document.getElementById('range');
rangeInput.min = audio1[counter].currentTime;
const currentTimer = document.getElementById('currnt_time');
const totalTimer = document.getElementById('total_time');
var vol = audio1[counter].volume;


function play1()
{
	audio1[counter].play();
	play_pause_btns[0].style.display="none";
	play_pause_btns[1].style.display="block";
	images.style.background = 'url('+m_name[counter]+')';
	images.style.backgroundSize = 'cover';
	int = setInterval(function()
	{
		min = parseInt(audio1[counter].currentTime / 60);
		sec = parseInt(audio1[counter].currentTime % 60);
		mint = parseInt(audio1[counter].duration / 60);
    seco = parseInt(audio1[counter].duration % 60);
		sec = parseInt(sec);
		min = parseInt(min);
		sec=sec+1;
		if (sec == 60 || sec == 0) {
			min=min+1;		}
		if (sec<10) {
			sec='0'+sec;
		}
		if (min<10 || min == 0) {
			min='0'+min;
		}
		currentTimer.innerHTML = min+':'+sec;
		totalTimer.innerHTML = '0'+mint+':'+seco;
		rangeInput.value = audio1[counter].currentTime;
		rangeInput.max = audio1[counter].duration;
	if (audio1[counter].currentTime==audio1[counter].duration) 
	{
		next();
	}
	},500);
}
function pause1() 
{
	audio1[counter].pause();
	play_pause_btns[0].style.display="block";
	play_pause_btns[1].style.display="none";
	clearInterval(int);
}
function next()
{
	pause1();
	if (counter<audio1.length) 
	{
		counter++;
	}
	if (counter==audio1.length) {
		counter=0;
	}
	replay();
	play1();
}

function pre()
{
	pause1();
	if (counter>0) 
	{
		counter--;
	play1();
	}
	replay();
}

function volup()
{
	vh.style.opacity="1";
	if (vol<1) 
	{
		vol = vol + 0.1;
	}
	if (v>0) {
		v=v-10;
	volumeLine.style.marginTop = v+'px';
	}
	audio1[counter].volume = vol;
setTimeout(function () {
	vh.style.opacity="0";
},3000);
}

function voldow() 
{
	vh.style.opacity="1";
	if (vol>0) 
	{
		vol = vol - 0.1;
	}
	if (v<100) {
		v=v+10;
	volumeLine.style.marginTop = v+'px';
	}
	audio1[counter].volume = vol;
setTimeout(function () {
	vh.style.opacity="0";
},3000);
}

function replay()
{
	audio1[counter].currentTime = 0;
	rangeInput.value=0;
	currentTimer.innerHTML = '00:00';
	totalTimer.innerHTML = '0'+mint+':'+seco;
}

function list_music()
{
	if (openlist==false) 
	{
		musicList.style.display="block";
		images.style.display = "none";
		openlist = true;
	}
	else
	{
		musicList.style.display="none";
		images.style.display = "block";
		openlist=false;
	}
}

function songValue()
{
	audio1[counter].currentTime = rangeInput.value;
}

function songChange() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=0;
	images.style.display = "block";
	play1();
}

function songChange1() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=1;
	images.style.display = "block";
	play1();
}

function songChange2() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=2;
	images.style.display = "block";
	play1();
}

function songChange3() {
	audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=3;
	images.style.display = "block";
	play1();
}

function songChange4()
{
  audio1[counter].pause();
	replay();
	musicList.style.display="none";
	counter=4;
	images.style.display = "block";
	play1();
}