<template>
    <div id="app">
        <div>{{text}}</div>
        <component-a :count="parentCount"></component-a>
    </div>
</template>

<script>
import componentA from '@/components/component-a.vue'
console.log(componentA)

export default {
    components: {
        componentA
    },
    data() {
        return {
            text: 'root element',
        }
    },
    computed: {
        parentCount() {
            return 1
        }
    },
    
}
</script>

<style>

</style>