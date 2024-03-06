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
                }






            ]
            for (let c of chars) {
                this.inputValue = this.inputValue.replaceAll(c["char"], c["replacement"])
                this.lastUpdated = this.inputValue
            }
            this.inputValue = eval(this.inputValue)
            this.screenValue = this.inputValue
            
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

    