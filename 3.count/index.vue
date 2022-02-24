<template lang="">
    <div>
        {{count}}
        <button @click="click">click</button>
    </div>
</template>

<script lang="ts"  setup>
import { Subject } from "rxjs"
import { ref } from 'vue'
// 计数器
let count = ref(0);

const click = () => {
    let dataS = new Subject()
    dataS.subscribe((v) => {
        count.value++
        console.log('被订阅的消息👇')
        console.log(`第${count}点击，现在的值为${v}`)
    })
    dataS.next(new Date())
}
</script>