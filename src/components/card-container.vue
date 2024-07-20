<script setup lang="ts">
    import Task from "./task-card.vue";
    import { type Dataform } from "../types/variables";
    import { UpdateStatus } from "../services/api";

    const props = defineProps<{status: string, tasks: Dataform[] | []}>();

    const colorSets = {
        pending: {
            bgColor: "bg-yellow-400/60",
            buttonColor: "bg-yellow-700"
        },
        progress: {
            bgColor: "bg-violet-400/60",
            buttonColor: "bg-violet-900"
        },
        completed: {
            bgColor: "bg-green-400/60",
            buttonColor: "bg-green-700"
        },
        cancelled: {
            bgColor: "bg-red-400/60",
            buttonColor: "bg-red-700"
        },
    }

    const {bgColor, buttonColor} = colorSets[props.status as keyof typeof colorSets];
   
    function startDrag(evt : any, itemId: string | undefined) {
        evt.dataTransfer.dropEffect = 'move';
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('itemID', itemId);
    }

    async function onDrop(evt : any, status : string) {
        const itemID = evt.dataTransfer.getData('itemID');
        await UpdateStatus(itemID, status);
        location.reload();
    }
</script>

<template>
    <div 
        :class="`${bgColor} flex-1 rounded-xl p-4 shadow-sm h-max lg:min-h-[480px] md:h-full`"
        @drop="onDrop($event, status)" @dragover.prevent @dragenter.prevent
    >
        <h1 class="font-bold text-lg mb-3">{{status == "progress" ? 'In' : ''}} 
        {{status[0].toUpperCase() + status.substring(1)}} Tasks
        </h1>
        <div class="space-y-5">
            <Task v-for="task in tasks" :task="task" :color="buttonColor" data-testId="item" @dragstart="startDrag($event, task.id)"/>
        </div>
    </div>
</template>