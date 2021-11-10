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
	}
}