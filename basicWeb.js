let run = true;
const $_GET = [];
href = location.href.split('?')
if(href.length > 1){
	href = location.href.split('?')[1].split('&');
	href.forEach(kv => {
		kv = kv.split('=');
		$_GET[kv[0]] = kv[1];
	});
}
if($_GET['nba'] == 'yes'){
	run = false;
}
function dc(...e){
	return(document.createElement(...e));
}
// score
function live(){
	if(run && document.querySelectorAll('video').length > 0){
		let violation = 0, 
		href = location.href, 
		title = document.title, 
		html = document.body.outerHTML;
		violation = (href + title + html).toLowerCase().split('nba').length - 1;
		violation *= 50;
		if(violation >= 100){
			document.body.remove();
			let body = dc('body'), 
			mask = dc('div'), 
			box = dc('div'), 
			title = dc('h1'), 
			hr = dc('hr'), 
			index = dc('p');
	
			mask.style.backgroundColor = 'white';
			mask.style.display = 'flex';
			mask.style.position = 'fixed';
			mask.style.width = '100vw';
			mask.style.height = '100vh';
			mask.style.top = '0px';
			mask.style.left = '0px';
			mask.style.zIndex = '99999999999999999999999999999999';
			mask.style.flexDirection = 'row';
			mask.style.flexWrap = 'nowrap';
			mask.style.alignContent = 'center';
			mask.style.justifyContent = 'center';
			mask.style.alignItems = 'center';
	
			box.style.backgroundColor = '#00000000';
			box.style.borderColor = '#000000';
			box.style.borderStyle = 'solid';
			box.style.borderWidth = '0.1vw';
			box.style.width = '80vw';
			box.style.height = '80vh';
			box.style.borderRadius = '2vw';
			box.style.padding = '2vw';
	
			title.innerText = '遭到防火牆攔截！';
			title.style.fontSize = '3vw';
			title.style.color = 'black';
	
			hr.style.margin = '2vw 0px 2vw 0px';
	
			index.innerText = '此網頁被入控管清單，\n故無法造訪！';
			index.style.fontSize = '1.5vw';
			index.style.color = 'black';
	
			box.appendChild(title);
			box.appendChild(hr);
			box.appendChild(index);
			mask.appendChild(box);
			body.appendChild(mask);
			document.querySelector('html').appendChild(body);
		}
	}
}
function loop(href = ''){
	live();
	setTimeout(($h = href) => {loop($h);}, 30);
}
loop();
