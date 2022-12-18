
//set initial count


let count = 0;

//select value and buttons


const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');


// forEach executes the function once for each element in the array


//currentTarget интересно использовать при подключении одного и того же обработчика событий к нескольким элементам.

//Это свойство, доступное Element.classListтолько для чтения, которое возвращает текущую DOMTokenListколлекцию classатрибутов элемента. Затем это можно использовать для управления списком классов.


//contains()Метод Nodeинтерфейса возвращает логическое значение, указывающее, является ли узел потомком данного узла, то есть самого узла, одного из его прямых дочерних элементов (childNodes), одного из прямых дочерних элементов дочерних элементов и так далее.
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green"
        }

        if (count < 0) {
            value.style.color = 'red'
        }
        if (count === 0) {
            value.style.color = 'black'
        }
        value.textContent = count;
    });
});
