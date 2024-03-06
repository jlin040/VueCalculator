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
                    char: "π",
                    replacement: "* Math.PI"
                },
                {
                    char: "* Math.PI",
                    replacement: " Math.PI"
                },
                {
                    char: "÷",
                    replacement: "/"
                },
                {
                    char: "mod",
                    replacement: "%"
                },
                {
                    char: "%",
                    replacement: "* 0.01"
                },
                //last
                {
                    char: ")(",
                    replacement: " * "
                }
            ]
            for (let c of chars) {
                if (c["char"] == ")(") this.inputValue = this.inputValue.replaceAll(" ", "")
                console.log(c)
                console.log("before", this.inputValue)
                this.inputValue = this.inputValue.replaceAll(c["char"], c["replacement"])
                console.log("after", this.inputValue)
            }
            this.inputValue = eval(this.inputValue)
        }
    },

})

const vm = app.mount('#app')
window.app = vm
        