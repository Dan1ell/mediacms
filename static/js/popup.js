/*Add click events for Pop-up*/
var modal = null;
var closeBtn = null;
var openBtn = null;
var body = document.getElementsByTagName("BODY")[0];

checkElement('.bg-modal').then((element1) => {
    modal = element1
    checkElement('.close-modal').then((element2) => {
        closeBtn = element2
        closeBtn.addEventListener('click', () => {
        modal.style.display ='none'
        body.style.overflow = 'visible' 
        })
    })		
    checkElement('.newsBtn').then((element3) => {
        openBtn = element3	
        openBtn.addEventListener('click', () => {
        modal.style.display ='flex'
        body.style.overflow = 'hidden' 
        })					
    })
})	