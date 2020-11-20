showCards(cardList)

let rowOne = []
let rowTwo = []
let rowThree = []


const split = cadsToSplit => {
    rowOne = []
    rowTwo = []
    rowThree = []
    for (let index = 0; index < cadsToSplit.length; index++) {
        if (index % 3 == 0 || index == 0) {

            rowOne.push(cadsToSplit[index])
        } else if (index % 3 == 1 || index == 1) {
            rowTwo.push(cadsToSplit[index])
        } else {
            rowThree.push(cadsToSplit[index])
        }

    }
}

const shuffleCards = clickedRow => {
    let scrambled = [];
    if (clickedRow == "firstRow") {
        rowTwo.forEach(element => { scrambled.push(element) });
        rowOne.forEach(element => { scrambled.push(element) });
        rowThree.forEach(element => { scrambled.push(element) });
    } else if (clickedRow == "secondRow") {
        rowOne.forEach(element => { scrambled.push(element) });
        rowTwo.forEach(element => { scrambled.push(element) });
        rowThree.forEach(element => { scrambled.push(element) });
    } else {
        rowOne.forEach(element => { scrambled.push(element) });
        rowThree.forEach(element => { scrambled.push(element) });
        rowTwo.forEach(element => { scrambled.push(element) });

    }
    return (scrambled);
}

let render = function (element, row) {
    let newReturn = element.outerHTML;
    for (let index = 0; index < 7; index++) {
        newReturn += `<img src="${row[index].image}">`
    }
    return newReturn;
}

let renderRows = function (idOne, idTwo, idThree) {
    $(idOne).innerHTML = `${render($(idOne), rowOne)}`;
    $(idTwo).innerHTML = `${render($(idTwo), rowTwo)}`;
    $(idThree).innerHTML = `${render($(idThree), rowThree)}`;
}


function showCards(cards) {
    let showCards = $("#initialCards");
    for (let index = 0; index < cards.length; index++) {
        showCards.innerHTML += `<img class="initialCardsHover" src="${cards[index].image}"></a>`
    }

};

const first = () => {
    split(cardList)
    renderRows('#firstRow', '#secondRow', '#thirdRow')
    $("#beggin").className = "disable"
    $("#stepOne").className = ""
}

const nextStep = (row, step) => {

    cardList = shuffleCards(row);
    split(cardList)
    if (step == "firstStep") stepOne()
    if (step == "secondStep") stepTwo()
    if (step == "thirdStep") stepFinally();
}

const stepOne = () => {
    renderRows('#firstRowScd', '#secondRowScd', '#thirdRowScd')
    $("#stepOne").className = "disable"
    $("#stepTwo").className = ""
}

const stepTwo = () => {
    renderRows('#firstRowThrd', '#secondRowThrd', '#thirdRowThrd');
    $("#stepTwo").className = "disable"
    $("#stepThree").className = ""
}

const stepThree = () => {
    $("#stepTwo").className = "disable"
    $("#stepThree").className = ""
}

const stepFinally = () => {
    $('#result').innerHTML = `<img src="${cardList[10].image}"></img>`
    $("#stepThree").className = "disable"
    $("#endStep").className = ""
}
