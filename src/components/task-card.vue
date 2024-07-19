<script setup lang="ts">
    import {Pen, Trash2} from "lucide-vue-next";

    defineProps<{color: string}>()
</script>

<template>
    <div class="relative backdrop-blur-sm bg-white/80 p-5 rounded-xl shadow-sm text-violet-950/80 font-medium">
        <div class="flex gap-1 absolute right-0 -top-4">
            <div :class="`${color} rounded-full p-2 w-max cursor-pointer`">
                <Pen :size="20" color="white"/>
            </div>
            <div class="bg-red-500 rounded-full p-2 w-max cursor-pointer">
                <Trash2 :size="20" color="white"/>
            </div>
 
        </div>
        <h1 class="font-bold">Prepare presentation slides</h1>
        <p class="my-3 text-xs leading-5">Create slides for the project presentation. include key points and visuals</p>
        <p class="text-xs text-right">Due Date: <b>31/05/2024</b></p>
    </div>
</template>