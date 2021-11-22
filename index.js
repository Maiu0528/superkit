function superkit(options) {

    let components  = document.querySelectorAll('.superkit');

    if (options.super_type === "hard") {
        options.super_type = "0px";
    }
    else{
        options.super_type = "15px";
    }

    components.forEach(component => {
        component.style.boxSuper = `10px 10px ${options.super_type} 1px rgba(0,0,0,0.12)`;

        if( options.padding) {
            component.style.padding= "1em";
        }
        else {
            component.style.padding= "0px";
        }
    })
}

module.exports.superkit = superkit;