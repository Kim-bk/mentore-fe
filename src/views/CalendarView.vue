<template>
    <header-bar></header-bar>

    <FullCalendar v-bind:options="options" style="top:110px; left: 25%; position: fixed;
    width: 50vw; height: 20vh"></FullCalendar> 
</template>

<script setup>
import {reactive, ref} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import useEvents from '@/composables/useEvent.js'

const id = ref(10)

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
        id.value = id.value + 1
        const cal = arg.view.calendar
        cal.unselect()
        cal.addEvent({
            id: id.value.toString(),
            title: "New event" + id.value.toString(),
            start: arg.start,
            end: arg.end,
            allDay: true
        })
    },
    eventClick: (arg) => {
        if (arg.event){
            arg.event.remove()
        }
    },
    events:[],
    eventAdd:(arg) =>{
        // createEvent({
        //     id: arg.event.id,
        //     title: arg.event.title,
        //     start: arg.event.start,
        //     end: arg.event.end,
        //     allDay: arg.event.allDay
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

options.events = getEvents.value

import HeaderBar from '@/components/HeaderBar.vue';
components :{
		HeaderBar: HeaderBar
	};
</script>
