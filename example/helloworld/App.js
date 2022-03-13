import {
    h
} from "../../lib/guide-mini-vue.esm.js";
window.self = null;
export const App = {
    // .vue
    // <template></template>

    // render

    render() {
        // ui逻辑
        window.self = this;
        return h("div", {
                id: 'root',
                class: ['red', 'hear']
            },
            // setupState
            // this.$el ->get root element
            // string
            "hi," + this.msg
            // "hi, mini-vue"
            // array
            // [h("p", {
            //     class: 'red'
            // }, "h1"), h("p", {
            //     class: "blue"
            // }, 'mini-vue')]
        )
    },
    setup() {
        // composition api
        return {
            msg: "mini-vue-1"
        }
    }
}