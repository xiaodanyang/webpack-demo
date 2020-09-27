<template>
    <div id="app">
        <div class="red">{{text}}</div>
        <div>apiCount: {{apiCount}}</div>
        <div>parentCount: {{parentCount}}</div>

        <div>222</div>
        
        <component-a :count.sync="parentCount"></component-a>
    </div>
</template>

<script>
import componentA from '@/components/component-a.vue'

import { foo } from './demo1'
console.log(foo)

import vue from 'vue/dist/vue'

import a,{b} from './demo2'
console.log(b)

export default {
    components: {
        componentA
    },
    data() {
        return {
            text: 'root element',
            // parentCount: 1,
            apiCount: 1
        }
    },
    computed: {
        //相当于直接使用apiCount
        parentCount: {
            get() {
                return this.apiCount
            },
            set(value) {
                this.apiCount = value
            }
        }
    },
    
}
</script>

<style module>
/* .red {
    color: green;
} */
:global(.red) {
    color: blue;
}
:global(.xyz) {
    color: blue;
}
/* :local(.red) {
    color: pink;
} */
</style>