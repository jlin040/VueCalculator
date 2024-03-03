import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import buttonsArray from "./buttons.json" assert { type: "json" };

const app = createApp({
    data() {
        return {
            inputValue: "",
            buttons: buttonsArray
        };
    },
    methods: {
        handleInput(method) {
            // let fn = window[method]
            // fn();
            console.log(this.buttons)
            console.log(method)
            console.log(typeof method)
        },
        clear() {
            this.inputValue = ""
        },
        delete() {
            this.inputValue = this.inputvalue.slice(0, -1)
        },
        add(value) {
            this.inputValue += value
        }
    },

})

const vm = app.mount('#app')
window.app = vm
        