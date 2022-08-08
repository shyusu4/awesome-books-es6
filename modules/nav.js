// buttons
const navList1 = document.getElementById('list');
const navList2 = document.getElementById('add-new');
const navList3 = document.getElementById('contact');

// sections
const sectionOne = document.getElementById('all-book');
const sectionTwo = document.getElementById('add-new-book');
const sectionThree = document.getElementById('contact-form');

export default class Nav {
  static navList1(){
    navList1.addEventListener('click', (e) => {
      e.preventDefault();
      sectionOne.classList.remove('hide');
      sectionTwo.classList.add('hide');
      sectionThree.classList.add('hide');
    });}
  
  static navList2(){
    navList2.addEventListener('click', (e) => {
      e.preventDefault();
      sectionOne.classList.add('hide');
      sectionTwo.classList.remove('hide');
      sectionThree.classList.add('hide');
    });}
  
  static navList3(){
    navList3.addEventListener('click', (e) => {
      e.preventDefault();
      sectionOne.classList.add('hide');
      sectionTwo.classList.add('hide');
      sectionThree.classList.remove('hide');
    });}
}