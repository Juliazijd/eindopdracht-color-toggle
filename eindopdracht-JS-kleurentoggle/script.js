const bodyElement = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu');
const colorMenu = document.querySelector('#color-menu');
const menuIcon = document.querySelector('#menu-icon')
const colorIceblue = document.querySelector('#iceblue');
const colorSalmon = document.querySelector('#salmon');
const colorTeal = document.querySelector('#teal');
const colorKhaki = document.querySelector('#khaki');
const colorLilac = document.querySelector('#lilac');
const backgroundText = document.querySelector('#background-text');

const showColorMenu = () => {
    colorMenu.classList.toggle('colortoggle__color-menu--show');
}

const changeColorToIceblue = () => {
    const menu = colorIceblue.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-iceblue');
    backgroundText.classList.remove('background-text-salmon', 'background-text-teal', 'background-text-khaki');
    bodyElement.classList.add('iceblue', 'color');
    bodyElement.classList.remove('salmon', 'teal', 'khaki', 'blueviolet', 'lilac');
}

const changeColorToSalmon = () => {
    const menu = colorSalmon.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-salmon');
    backgroundText.classList.remove('background-text-iceblue', 'background-text-teal', 'background-text-khaki', 'background-text-lilac');
    bodyElement.classList.add('salmon', 'color');
    bodyElement.classList.remove('iceblue', 'teal', 'khaki', 'blueviolet', 'lilac');
}

const changeColorToTeal = () => {
    const menu = colorTeal.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-teal');
    backgroundText.classList.remove('background-text-salmon', 'background-text-iceblue', 'background-text-khaki', 'background-text-lilac');
    bodyElement.classList.add('teal', 'color');
    bodyElement.classList.remove('iceblue', 'salmon', 'khaki', 'blueviolet', 'lilac');
}

const changeColorToKhaki = () => {
    const menu = colorKhaki.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-khaki');
    backgroundText.classList.remove('background-text-salmon', 'background-text-iceblue', 'background-text-teal', 'background-text-lilac');
    bodyElement.classList.add('khaki', 'color');
    bodyElement.classList.remove('iceblue', 'salmon', 'teal', 'blueviolet', 'lilac');
}

const changeColorToLilac = () => {
    const menu = colorLilac.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-lilac');
    backgroundText.classList.remove('background-text-salmon', 'background-text-iceblue', 'background-text-teal', 'background-text-khaki');
    bodyElement.classList.add('lilac', 'color');
    bodyElement.classList.remove('iceblue', 'salmon', 'teal', 'khaki', 'blueviolet');
}

menuIcon.addEventListener('mouseover', showColorMenu);
menuIcon.addEventListener('click', showColorMenu);
colorIceblue.addEventListener('click', changeColorToIceblue);
colorSalmon.addEventListener('click', changeColorToSalmon);
colorTeal.addEventListener('click', changeColorToTeal);
colorKhaki.addEventListener('click', changeColorToKhaki);
colorLilac.addEventListener('click', changeColorToLilac);
