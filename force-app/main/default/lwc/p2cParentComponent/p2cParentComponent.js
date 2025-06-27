import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carousalData = [
        {
            src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg" ,
            header : "First Card" ,
            description : "First card description."
    },
    {
        src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg" ,
            header : "Second Card" ,
            description : "Second card description."
    },
    {
        src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg" ,
            header : "Third Card" ,
            description : "Third card description."
    }
]
    percentage = 10;
    changeHandler(event) {
        this.percentage = event.target.value;
    }

    handleClick(){
        // reference.methodname - Make sure method is exposed in child component
        this.template.querySelector('c-p2c-slider-component').resetHandler();
    }
}