
document.addEventListener("DOMContentLoaded", function () {
    class capElements {
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "aTC";
            
            this.handlerClick = this.handlerClick.bind(this)
        }
        handlerClick(){
            console.log(this)
            this.navList.classList.toggle(this.activeClass)
        }
        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handlerClick)
    
        }
    
        init(){
            if (this.mobileMenu){
                this.addClickEvent();
            }
            
            return this;
        }
    
    }
    
    const mobileNavBar = new capElements(
        ".mobileMenu",
        ".navList",
        ".navList li"
    );
    
    mobileNavBar.init();
// comentarios com : + ctrl
})
