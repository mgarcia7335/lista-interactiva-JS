

document.querySelector('.btn-agregar').addEventListener('click', function() {
    const inputText = document.querySelector('.input-text').value;

    if (inputText.trim() !== '') {
        const ul = document.querySelector('.lista');
        const li = document.createElement('li');
        li.innerText = inputText;

        const btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(btnEliminar);
        ul.appendChild(li);

        // Limpiar el campo de entrada después de agregar el elemento
        document.querySelector('.input-text').value = '';
    }
});




