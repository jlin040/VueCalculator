import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data() {
        return {
            inputValue: "",
            screenValue: "",
            history: "",
            lastUpdated: "",

            revertBG: "false",
            isUse: "no",
            coolQuestion: "true",
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
            try {
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
                {
                    char: ")(",
                    replacement: " * "
                }

            ]
            for (let c of chars) {
                this.inputValue = this.inputValue.replaceAll(c["char"], c["replacement"])
            }
            for (let i = 0; i < this.inputValue.length; i++) {
                let prev = this.inputValue[i - 1]
                if (this.inputValue[i] === "0") {
                    if ( (isNaN(prev) && prev != "." ) || i == 0 || prev == " ") {
                        this.inputValue = this.inputValue.substring(0, i) + this.inputValue.substring(i + 1)
                        i--
                    }
                }
            }
            this.lastUpdated = this.inputValue
            this.inputValue = eval(this.inputValue)
            this.screenValue = this.inputValue
            
            } catch (e) {
                this.inputValue = "error, please clear and reenter expression"
            }
        }
    },

    computed: {
        isCool() {
          if(this.coolQuestion){
            return 'you are cool'
          }
          else {
            return 'not cool'
          }
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

    