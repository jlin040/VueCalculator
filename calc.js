import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data() {
        return {
            inputValue: "",
            screenValue: "",
            history: "",
            lastUpdated: "",
        };
    },
    methods: {
        clear() {
            this.inputValue = ""
        },
        undo() {
            if (this.inputValue == "") return
            // this.inputValue = this.inputValue.slice(0, -1)
            this.inputValue = this.history
        },
        add(value) {
            this.inputValue += value
        },
        calculate() {
            console.log(this.inputValue)
            let chars = [
                {
                    char: "×",
                    replacement: "*"
                },

                {
                    char: "√(",
                    replacement: "Math.sqrt("
                },

                {
                    char: "²",
                    replacement: "** 2" 
                },
                {
                    char: "π",
                    replacement: "* Math.PI"
                },
                {
                    char: " * Math.PI",
                    replacement: " Math.PI"
                },
                {
                    char: "÷",
                    replacement: "/"
                },
                {
                    char: "%",
                    replacement: "* 0.01"
                },
                {
                    char: "mod",
                    replacement: "%"
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

    watch: {
        lastUpdated(value, oldValue) {
            this.history = value
        },
    },

})

const vm = app.mount('#app')
window.app = vm