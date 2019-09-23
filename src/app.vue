<template>
    <div id="example">
        <div>{{text}}</div>
        <mavon-editor v-model="value"></mavon-editor>
    </div>
</template>

<script>
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    components: {
        'mavon-editor': mavonEditor.mavonEditor
    },
    data() {
        return {
            text: 'abc',
            value: ''
        }
    }
}
</script>

<style>
#example {
    color: #666;
}

</style>