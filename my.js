function openpopup() {
	document.getElementById('burger').classList.toggle("active");
}
function openpopup_mobile() {
	document.getElementById('burger_mobile').classList.toggle("active");
	document.getElementById('menu_mobile').classList.toggle("visible");
}
let select = function () {

	let selectHeader = document.querySelectorAll('.select_header');
	let selectItem = document.querySelectorAll('.select_item');

	selectHeader.forEach(item=>{item.addEventListener('click', selectToggle)});

	selectItem.forEach(item=>{item.addEventListener('click', selectChoose)});

	function selectToggle () {this.parentElement.classList.toggle('is_active');document.getElementById('select_icon').classList.toggle('rotated');}

	function selectChoose () {
		let text = this.innerText,
		select = this.closest('.select'),
		currentText = this.closest('.select').querySelector('.select_current');
		currentText.innerText = text;
		select.classList.remove('is_active');
		document.getElementById('select_icon').classList.remove('rotated');

	}
}
select();
	function openclose_mob() {
		document.getElementById('mobile_list').classList.toggle('closed');
	}
	function openclose() {
		document.getElementById('equipment_container').classList.toggle('closed');
	}
	function openclose2() {
		document.getElementById('brand_container').classList.toggle('closed');
	}
	function openclose3() {
		document.getElementById('sections_amount_container').classList.toggle('closed');
	}
	function openclose4() {
		document.getElementById('space_between_container').classList.toggle('closed');
	}
	function openclose5() {
		document.getElementById('area_container').classList.toggle('closed');
	}
	function openclose6() {
		document.getElementById('color_container').classList.toggle('closed');
	}

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);
	
	function outputUpdate(vol){
		var output = document.querySelector('#volume1');
		output.value = vol;
		output.style.left = ((vol - 3000) / (35000 - 3000)) * 80 * 2.94 + 'px';
	}
	function outputUpdate2(vol){
		var output = document.querySelector('#volume2');
		output.value = vol;
		output.style.left = ((vol - 5000) / (35000 - 3000)) * 80 * 2.94 + 'px';
	}

	function reset() {
		document.getElementById("form_filters").reset();
	}
	
	let checkboxes = document.querySelectorAll('.filter_item');

	checkboxes.forEach(item=>{item.addEventListener('change', setBold)});

	function setBold () {
		this.classList.toggle('bold');
	}

	function openSEO() {
		document.getElementById('block3').style.height = "1500" + 'px';
	}
	function openFilters() {
		document.getElementById('form_filters').style.left = "50%";
	}

	window.onload = () => {
		let input = document.querySelector('#input');
		input.oninput = function() {
			let value = this.value.trim();

			let list = document.querySelectorAll('.products_list li');

				if (value != '') {
					list.forEach(elem=>{
						if (elem.innerText.search(value) == -1) {
							elem.classList.add('hide');
						}
					})
				} else {
				list.forEach(elem=>{
					elem.classList.remove('hide');
				})
			}
		} 
	}
	function openSearch () {
		document.getElementById('search_mob').classList.add('tosearch')
		document.getElementById('burger_search').classList.add('active');
	}
	function close_search () {
		document.getElementById('search_mob').classList.remove('tosearch')
		document.getElementById('burger_search').classList.remove('active');
	}