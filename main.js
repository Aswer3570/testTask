// Показ Pop up окон
function popup(data){
	// Показываем Pop up окно
	document.getElementById('main_rates').style.display = 'flex';

	// Узнаём что именно выбрал пользователь и формируем Pop up
	if(data.id === 'mobile'){
		$('#blockMobile').clone(true).appendTo('#content');
	} 
	else if(data.id === 'desktop'){
		$('#blockDesktop').clone(true).appendTo('#content');
	} 
	else if(data.id === 'tv'){
		$('#blockTv').clone(true).appendTo('#content');
	} 
	else if(data.id === 'close' || data.id === 'main_rates'){
		// Закрываем Pop up окно и сбрасываем содержимое Pop up
		document.getElementById('main_rates').style.display = 'none';
		$('#content').empty();
	}
}