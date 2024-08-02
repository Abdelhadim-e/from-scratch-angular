class PhoneNumberDirective {
    constructor(public element: HTMLElement){}

        Init() {
            this.element.style.borderColor= "red";
        }
}

const element = document.querySelector<HTMLElement>('#mobile-number');

if(element) {
    const directive = new PhoneNumberDirective(element);
    directive.Init();
}
