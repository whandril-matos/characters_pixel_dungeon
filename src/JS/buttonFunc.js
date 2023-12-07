
document.addEventListener("DOMContentLoaded", function () {
    class capElements {
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";
        }
        addClickEvent(){
            this.mobileMenu.addEventListener("click", () => console.log("foi"))
    
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
