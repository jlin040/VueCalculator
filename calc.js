import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data() {
        return {
            inputValue: "",
        };
    },
    methods: {
        clear() {
            this.inputValue = ""
        },
        undo() {
            if (this.inputValue == "") return
            this.inputValue = this.inputValue.slice(0, -1)
        },
        add(value) {
            this.inputValue += value
        },
        calculate() {
            console.log(this.inputValue)
            let chars = [
                {
                    char: "&times;",
                    replacement: "*"
                }
            ]
            for (let c in chars) {
                this.inputValue = this.inputValue.replaceAll(c["char"], c["replacement"])
            }
            this.inputValue = eval(this.inputValue)
        }
    },

})

const vm = app.mount('#app')
window.app = vm
        