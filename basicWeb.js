const dataH = ['nba'], 
dataI = ['nba'], 
run = true, 
$_GET = [];
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
if(run){
	let violation = 0, 
	H = location.href.toLowerCase(), 
	I = document.body.outerHTML.toLowerCase();
	dataH.forEach(keyWord => {
		if(H.search(keyWord) > -1){
			violation++;
		}
	});
	dataI.forEach(keyWord => {
		if(I.search(keyWord) > -1){
			violation++;
		}
	});
	if(violation > 0){
		document.body.remove();
		let body = dc('body'), 
		mask = dc('div'), 
		box = dc('div'), 
		title = dc('h1');

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

		box.appendChild(title);
		box.appendChild(dc('hr'));
		mask.appendChild(box);
		body.appendChild(mask);
		document.querySelector('html').appendChild(body);
	}
}
function dc(...e){
	return(document.createElement(...e));
}
