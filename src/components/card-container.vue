<script setup lang="ts">

    const props = defineProps<{status: string}>();

    const colorSets = {
        pending: "bg-yellow-400/70",
        progress: "bg-violet-400/70",
        completed: "bg-green-400/70",
        cancelled: "bg-red-400/70"
    }

    const bgColor = colorSets[props.status as keyof typeof colorSets];
</script>

<template>
    <div :class="`${bgColor} flex-1 rounded-lg p-3 shadow-sm`">
        <h1 class="font-bold text-lg mb-3">{{status == "progress" ? 'In' : ''}} {{status}} Tasks</h1>
        <div>
        </div>
    </div>
</template>