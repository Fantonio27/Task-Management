<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { type Dataform } from '../types/variables';
    import { PostData, SearchData, UpdateData} from '../services/api';
    import { X } from 'lucide-vue-next';
    
    const props = defineProps<{id: string | null}>();

    const dataform = ref<Dataform>({
        task_name: "",
        description: "",
        status: "",
        due_date: "",
    })
    
    onMounted(async()=>{
        if(props.id) dataform.value = await SearchData(props.id)
    })

    function submit(){
        if(props.id){
            UpdateData(props.id, dataform.value)
        }else{
            PostData(dataform.value); 
        }
        location.replace('/')
    }

    function DateToday () {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${year}-${month <= 9 ? "0"+ month : month}-${day}`
    }

</script>

<template>
    <div class="bg-slate-200/80 backdrop-blur-sm p-14 rounded-xl shadow-md w-[450px]">
        <a href="/">
            <X class="absolute top-3 right-3 cursor-pointer" color="#323036" :size="28"/>
        </a>

        <form action="" class="grid text-sm text-slate-700" @submit.prevent="submit()">
            <h1 class="font-bold uppercase text-2xl text-center">{{id? "Edit Task": "Create Task"}}</h1>

            <label for="task_name" class="mt-3 mb-1">Task Name</label>
            <input type="text" data-testId="task_name" class="rounded-md p-2" v-model="dataform.task_name" maxlength="50" minlength="2" required>

            <label for="description" class="mt-3 mb-1">Description</label>
            <textarea type="text" data-testId="description" class="rounded-md p-2" rows="4" v-model="dataform.description" maxlength="255" minlength="2" required></textarea>

            <label for="status" class="mt-3 mb-1">Status</label>
            <select class="rounded-md p-2" data-testId="status" v-model="dataform.status" required>
                <option disabled value="">Please select one</option>
                <option value="pending">Pending</option>
                <option value="progress">Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>   
            </select>

            <label for="date" class="mt-3 mb-1">Due Date</label>
            <input type="date" data-testId="date" class="rounded-md p-2" :min="DateToday()" v-model="dataform.due_date" required>

            <button class="mt-5 bg-green-600/90 hover:bg-green-700 duration-150 text-white p-2 rounded-full">{{id? "Update": "Create"}}</button>
        </form>
    </div>
</template>