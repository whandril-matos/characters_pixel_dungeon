
document.addEventListener("DOMContentLoaded", function () {
    class capElements {
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "aTC";
            
            this.handlerClick = this.handlerClick.bind(this)
        }
        animateLinks(){
            this.navLinks.forEach((link, index) => {
                console.log();
                link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`);
            });
        }
        handlerClick(){
            this.navList.classList.toggle(this.activeClass)
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks()
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
