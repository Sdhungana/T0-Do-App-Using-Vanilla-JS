const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
let inputValue = document.querySelector('.input')


class itemClass {
	constructor(name) {
		this.createItem(name);
	}

	createItem(name) {


		let itemBox = document.createElement('div');
		itemBox.classList.add('itemBox');
		let item = document.createElement('input');
		item.type = "text";
		item.disabled = true;
		item.value = name
		item.classList.add('item');


		let edit = document.createElement('button');
		edit.innerHTML = 'Edit';
		edit.classList.add('edit');
		edit.addEventListener('click', _ => this.edit(item, name));

		let remove = document.createElement('button');
		remove.innerHTML = 'Remove';
		remove.classList.add('remove');
		remove.addEventListener('click', _ => this.remove(itemBox, name));

		container.appendChild(itemBox);
		itemBox.appendChild(item);
		itemBox.appendChild(edit);
		itemBox.appendChild(remove);
	}

	edit(item, name) {
		const editElem = item.nextElementSibling;
		if (item.disabled == true) {
			item.disabled = !item.disabled;
			editElem.innerHTML = 'Update';
			editElem.classList.remove('edit');
			editElem.classList.add('update');

		}
		else {
			item.disabled = !item.disabled;
			editElem.innerHTML = 'Edit';
			editElem.classList.remove('update');
			editElem.classList.add('edit');

		}
	}
	remove(itemBox, name) {
		itemBox.parentNode.removeChild(itemBox);
	}
}

btn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if (e.which == 13) {
		check();
	}
});
function check() {
	if (inputValue.value != "") {
		new itemClass(inputValue.value);
		inputValue.value = ""

	}
}



