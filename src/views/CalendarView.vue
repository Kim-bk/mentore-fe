<template>
    <header-bar></header-bar>

    <FullCalendar v-bind:options="options" style="top:110px; left: 25%; position: fixed;
    width: 50vw; height: 20vh"></FullCalendar> 

    <ModalsContainer />
</template>

<script setup>
import {reactive, ref} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import useEvents from '@/composables/useEvent.js'
import { ModalsContainer, useModal  } from 'vue-final-modal'
import ModalAddApointment from '@/components/ModalAddApointment.vue'

const id = ref(10)
let title = ref('')
let detail = ref('')
let duration = ref(0)
let startTime = ref('')
let cal = null;

// Call API to get apointment list
let apointmentEvents = ref([
    {
        id: '1',
        userId: '1',
        title: 'All Day Event',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        start: '2023-06-20',
        duration: '1',
    },
    {
        id: '2',
        userId: '1',
        title: 'All Day Event 2',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        start: '2023-06-23',
        duration: '1',
    }
])

const {getEvents, createEvent, updateEvent, deleteEvent} = useEvents()

const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar:{
        left:'prev,next today',
        center:'title',
        right:'dayGridMonth,dayGridWeek,listDay'
    },
    editable:true,
    selectable:true,
    weekends:true,
    select:(arg) =>{
        // Open modal to add apointment
        open()
        id.value = id.value + 1
        cal = arg.view.calendar
        startTime = arg.startStr
        
    }, 
    eventClick: (arg) => {
        if (arg.event){
            arg.event.remove()
        }
    },
    eventAdd:(arg) =>{
        // createEvent({
        //     id: arg.id,
        //     title: arg.title,
        //     start: arg.start,
        //     end: arg.end,
        //     allDay: arg.allDay
        // })
    },
    eventChange:(arg) =>{
        // updateEvent({
        //     id: arg.event.id,
        //     title: arg.event.title,
        //     start: arg.event.start,
        //     end: arg.event.end,
        //     allDay: arg.event.allDay
        // })
    },
    eventRemove:(arg) =>{
        //deleteEvent(arg.event.id)
    },
});

options.events = apointmentEvents

const { open, close } = useModal({
    component: ModalAddApointment,
    attrs: {
      title: 'Hello World!',
      onAddApointment(payload) {
        console.log(payload)
        title.value = payload.title
        detail.value = payload.detail
        duration.value = payload.duration

        // Call API add the apointment
        const data = {
            id: id.value.toString(),
            userId: '1',
            title: payload.title,
            detail: payload.detail,
            start: startTime,
            duration: payload.duration,
        }

        cal.unselect()
        cal.addEvent({
            id: data.id,
            title: data.title,
            start: data.start,
            end: data.end,
            allDay: true
        })
        close()
      },
    },
})

import HeaderBar from '@/components/HeaderBar.vue'
components :{
		HeaderBar: HeaderBar
	};
</script>
