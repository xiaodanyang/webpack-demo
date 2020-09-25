<template>
    <div id="app">
        <div class="red">{{text}}</div>
        <div>apiCount: {{apiCount}}</div>
        <div>parentCount: {{parentCount}}</div>
        
        <component-a :count.sync="parentCount"></component-a>
    </div>
</template>

<script>
import componentA from '@/components/component-a.vue'

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