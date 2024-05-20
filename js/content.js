import { ProgramClass } from "./program.js";

function main(){
    let target = document.body;
    let config = { childList: true, subtree: true };

    let program = new ProgramClass();

    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            program.run(mutation.target);
        });
    });

    observer.observe(target, config);
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){
        main();
    });
}else{
    main();
}
