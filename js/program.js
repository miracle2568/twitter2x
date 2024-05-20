export class ProgramClass {
    constructor() {
        
    }

    run(target) {
        for(const element of target.querySelectorAll('a[href*="twitter.com"]:not([data-checked="true"])')){
            element.href = element.href.replace("twitter.com", "x.com");
            element.dataset.checked = "true";
        }
    }
}
