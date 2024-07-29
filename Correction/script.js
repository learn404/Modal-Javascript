function Modal (){

    const modal = document.getElementById('myModal');
    const btn = document.getElementById('openModalBtn');
    const close = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    })

}

Modal();