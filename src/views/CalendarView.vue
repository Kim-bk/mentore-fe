<template>
  <header-bar></header-bar>
  <table
    class="appointment-list"
    style="left: 55px; padding-left: 50px; width: 30%"
  >
    <thead>
      <tr>
        <th>Ngày</th>
        <th>Thời gian</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="appt in appointmentEvents" :key="appt.id">
        <td>{{ appt.start }}</td>
        <td>{{ appt.timeStart }}</td>
        <td><a :href="appt.linkGoogleMeet">Link tham gia</a></td>
        <td><a :href ="'https://kim-bk.github.io/mentore-fe/appointment/'+appt.id" style="color:green">Cập nhật</a></td>
        <!-- <td><router-link to="/appointment/" + appt.id>Cập nhật</router-link></td> -->
      </tr>
      <!-- Add more rows for additional appointments -->
    </tbody>
  </table>
  <FullCalendar
    v-bind:options="options"
    style="top: 110px; left: 34%; position: fixed; width: 60vw; height: 20vh"
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
  getUserAppointments,
  deleteAppointment,
} from "@/services/AppointmentService";
import { useRoute } from "vue-router";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

// Call API to get apointment list
const route = useRoute();
const res = getUserAppointments()
  .then((res) => {
    console.log(res);

    res.data.forEach((element) => {
      appointmentEvents.value.push({
        id: element.id,
        title: element.timeStart + ": " + element.title,
        detail: element.detail,
        start: element.dateStart,
        linkGoogleMeet: element.linkGoogleMeet,
        timeStart: element.timeStart,
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

let appointmentEvents = ref([]);

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

  eventClick: (arg) => {
    if (arg.event) {
      if (
        confirm(
          `Are you sure you want to delete the apointment '${arg.event.title}'`
        )
      ) {
        // arg.tooltip.dispose()
        arg.event.remove();

        // Call API remove the apointment
        const res = deleteAppointment(arg.event.id)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        // Hide the tooltip
        const tooltipEl = document.querySelector(".tooltip");
        if (tooltipEl) {
          tooltipEl.style.display = "none";
        }
      }
    }
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
                      <br>
                      ${info.event.linkGoogleMeet}
                  </div>
              `,
    });
  },
});

options.events = appointmentEvents;

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
.appointment-list {
  position: fixed;
  top: 150px;
  left: 25%;
  width: 50vw;
  max-height: 300px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
