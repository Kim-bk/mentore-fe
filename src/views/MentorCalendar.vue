<template>
  <header-bar></header-bar>

  <FullCalendar
    v-bind:options="options"
    style="top: 110px; left: 25%; position: fixed; width: 50vw; height: 20vh"
  ></FullCalendar>
 

  <ModalsContainer />
</template>

<script setup>
import { reactive, ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import useEvents from "@/composables/useEvent.js";
import { ModalsContainer, useModal } from "vue-final-modal";
import ModalAddApointment from "@/components/ModalAddApointment.vue";
import {
  createAppointment,
  getMentorAppointments,
  deleteAppointment,
} from "@/services/AppointmentService";
import { useRoute } from 'vue-router';

const id = ref(10);
let title = ref("");
let detail = ref("");
let duration = ref(0);
let dateStart = ref("");
let timeStart = ref("");
let linkGoogleMeet = ref("");
let cal = null;

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

// Call API to get apointment list
const route = useRoute();
const res = getMentorAppointments(route.params.id)
  .then((res) => {
    console.log(res);

    res.data.forEach((element) => {
      appointmentEvents.value.push({
        id: element.id,
        title: element.timeStart + ': ' + element.title,
        detail: element.detail,
        start: element.dateStart,
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

let appointmentEvents = ref([
]);

const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,listDay",
  },
  editable: true,
  selectable: true,
  weekends: true,
  select: (arg) => {
    // Open modal to add apointment
    open();

    id.value = id.value + 1;
    cal = arg.view.calendar;
    dateStart = arg.startStr;
  },
  validRange: {
    start: formattedDate,
  },
  eventDidMount: function (info) {
    var tooltip = new Tooltip(info.el, {
      placement: "top",
      trigger: "hover",
      container: "body",
      html: true,
      title: `
                <div style="">
                    ${info.event.title}
                    <br>
                    ${info.event.extendedProps.detail}
                </div>
            `,
    });
  },
});

options.events = appointmentEvents;

const { open, close, patchOptions } = useModal({
  component: ModalAddApointment,
  attrs: {
    title: "Hello World!",
    onAddApointment(payload) {
      console.log(payload);
      title.value = payload.title;
      detail.value = payload.detail;
      duration.value = payload.duration;
      timeStart.value = payload.timeStart;
      linkGoogleMeet.value = payload.linkGoogleMeet;

      // Call API add the apointment
      const data = {
        id: id.value.toString(),
        title: payload.title,
        detail: payload.detail,
        dateStart: dateStart,
        timeStart: timeStart.value.toString(),
        duration: payload.duration,
        mentorId: route.params.id,
        linkGoogleMeet: payload.linkGoogleMeet,
      };

      console.log("add");
      const res = createAppointment(data)
        .then((res) => {
          console.log(res);
          window.alert("Tạo lịch hẹn với mentor thành công. Hãy đợi mentor xác nhận!")
        })
        .catch((err) => {
          console.log(err);
        });

      cal.unselect();
    //   cal.addEvent({
    //     id: data.id,
    //     title: `${timeStart.value}: ${data.title}`,
    //     start: data.dateStart,
    //     detail: data.detail,
    //     end: data.end,
    //     allDay: true,
    //   });
      close();
    },
    onCancel() {
      close();
    },
  },
});

import HeaderBar from "@/components/HeaderBar.vue";
import axios from "axios";
import { Tooltip } from "bootstrap";
// import { Tooltip } from '../assets/css/bootstrap.css'
components: {
  HeaderBar: HeaderBar;
}
</script>

<style scoped>
.tooltip-wrap {
  max-width: 200px; /* Adjust the maximum width as needed */
  word-wrap: break-word;
}

.tooltip {
  background-color: #fff !important;
  color: #000 !important;
}



</style>
