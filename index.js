window.addEventListener("load", () => {
    createShuffleAndSort('sort');

    let sortButtonElement = document.getElementById('sortButton');
    sortButtonElement.addEventListener("click", () => {createShuffleAndSort('sort')});

    let shuffleButtonElement = document.getElementById('shuffleButton');
    shuffleButtonElement.addEventListener("click", () => {createShuffleAndSort('shuffle')});
});

Array.prototype.shuffle = function() {
    var numberArrayLength = this.length, i, temp;

    if ( numberArrayLength === 0 ) {
      return this;
    }

    while ( --numberArrayLength ) {
       i = Math.floor( Math.random() * ( numberArrayLength + 1 ) );
       temp = this[numberArrayLength];
       this[numberArrayLength] = this[i];
       this[i] = temp;
    }
    return this;
}

const createShuffleAndSort = (type) => {
    let numberArray = [1,2,3,4,5,6,7,8,9];

    if (type === 'shuffle') {
        numberArray.shuffle();
    }

    let currentNumber = numberArray.map(ele => {
        return `<div class='card${ele}'><div>${ele}</div></div>`
    });

    let finalCardNumber = currentNumber.join(' ');

    let cardContainerElement = document.getElementById('cardContainer');
    cardContainerElement.innerHTML = finalCardNumber;
}
