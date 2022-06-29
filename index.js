function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);

    function clickAlert() {
  alert('Hee hee, that tickles!');
}

}
addingEventListener();
