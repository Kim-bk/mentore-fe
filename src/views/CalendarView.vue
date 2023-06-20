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
import { v4 as uuidv4 } from 'uuid'

const id = ref(10)
let title = ref('')
let detail = ref('')
let duration = ref(0)
let dateStart = ref('')
let timeStart = ref('')
let cal = null;

// Call API to get apointment list
const res = axios.get('http://localhost:3000/apointments')
.then((res) => {
    console.log(res)

    res.data.forEach(element => {
        apointmentEvents.value.push({
            id: element.id,
            userId: element.userId,
            title: element.title,
            detail: element.detail,
            start: element.dateStart,
            duration: element.duration,
        })
    });
})
.catch((err) => {
    console.log(err)
})
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
        dateStart = arg.startStr
        
    }, 
    eventClick: (arg) => {
        if (arg.event){
            if (confirm(`Are you sure you want to delete the apointment '${arg.event.title}'`)) {
                arg.event.remove()

                // Call API remove the apointment
                const res = axios.delete(`http://localhost:3000/apointments/${arg.event.id}`)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
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

const { open, close, patchOptions } = useModal({
    component: ModalAddApointment,
    attrs: {
      title: 'Hello World!',
      onAddApointment(payload) {
        console.log(payload)
        title.value = payload.title
        detail.value = payload.detail
        duration.value = payload.duration
        timeStart.value = payload.timeStart

        // Call API add the apointment
        const data = {
            id: id.value.toString(),
            userId: '1',
            title: payload.title,
            detail: payload.detail,
            dateStart: dateStart,
            timeStart: timeStart,
            duration: payload.duration,
        }

        const res = axios.post('http://localhost:3000/apointments', data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

        cal.unselect()
        cal.addEvent({
            id: data.id,
            title: `${timeStart.value}: ${data.title}`,
            start: data.dateStart,
            end: data.end,
            allDay: true
        })
        close()
      },
    },
})


import HeaderBar from '@/components/HeaderBar.vue'
import axios from 'axios'
components :{
		HeaderBar: HeaderBar
	};
</script>
