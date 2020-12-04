<template>
    <div>
        <div :class="$style.red">abc</div>
        <!-- <div class="xyz">xyz</div> -->
        <div>{{childCount}}</div>
        <button @click="foo">按钮</button>
        <div>{{dataCount}}</div>
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            require: true
        }
    },
    data() {
        return {
            dataCount: this.count
        }
    },
    computed: {
        childCount: {
            get() {
                return this.count
            },
            set(value) {
                this.$emit('update:count', value)
            }
        }
    },
    created() {
        console.log(this.$style)
    },
    methods: {
        foo() {
            console.log(this.count)
            this.childCount++
            console.log(this.count)
            setTimeout(() => {
                console.log(this.count)
            }, 2000);
        }
    }
}
</script>

<style module>
.red {
    color: red;
}
</style>

<style>
.xyz {
    color: red;
}
</style>