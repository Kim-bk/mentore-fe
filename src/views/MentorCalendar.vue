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
import {createAppointment, getMentorAppointments} from '../services/AppointmentService';

const id = ref(10)
let title = ref('')
let detail = ref('')
let duration = ref(0)
let dateStart = ref('')
let timeStart = ref('')
let cal = null


// Call API to get apointment list
const res = getMentorAppointments()
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
        cal = arg.view.calendar
        dateStart = arg.startStr
    }, 
});

options.events = apointmentEvents

const { open, close, patchOptions } = useModal({
    component: ModalAddApointment,
    attrs: {
      title: 'Hello World!',
      onAddApointment(payload) {
        console.log("show data to add: ")
        console.log(payload)
        title.value = payload.title
        detail.value = payload.detail
        duration.value = payload.duration
        timeStart.value = payload.timeStart

        // Call API add the apointment
        const data = {
            title: payload.title,
            detail: payload.detail,
            dateStart: dateStart,
            timeStart: timeStart,
            mentorId: mentorId,
        }

        const res = createAppointment(data)
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