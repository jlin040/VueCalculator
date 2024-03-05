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
        }
    },

})

const vm = app.mount('#app')
window.app = vm
        