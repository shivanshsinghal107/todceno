// function todceno(options) {
//     let images = document.querySelectorAll('.tod-ceno');

//     if(options.shadow === 'hard')
//         options.shadow = '0px'
//     else
//         options.shadow = '10px'
    
//     images.forEach(image => {
//         image.style.boxShadow = `7px 7px ${options.shadow} 1px rgba(0,0,0,0.12)`;

//         if(options.padding) {
//             options.padding = '2em';
//         }
//     })
// }

class todceno {
    constructor(shadow, padding) {
        this.shadow = shadow;
        this.padding = padding;

        console.log(shadow, padding);
    }

    giveShadow() {
        let images = document.querySelectorAll('.tod-ceno');
        console.log(images.length)
        
        images.forEach(image => {
            image.style.boxShadow = `7px 7px ${this.shadow} 1px rgba(0,0,0,0.12)`;
        })
    }
}

module.exports.todceno = todceno;