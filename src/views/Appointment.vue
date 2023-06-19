<template>
  <div>
    <FullCalendar :plugins="calendarPlugins" :initialView="initialView" :events="calendarEvents" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      calendarEvents: [
        // Add your events here
      ]
    }
  }
}
</script>
