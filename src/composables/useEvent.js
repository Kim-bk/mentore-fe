import {ref, onMounted} from 'vue'
//import {fetchEvent, storeEvent, mutateEvent, destroyEvent} from '../services/AppointmentService.js'

export default function useEvents(){
    const getEvents = ref([])

    // const setEvents = async () => {
    //     getEvents.value = await fetchEvent()
    // }

    // const createEvent = (event) => {
    //     storeEvent(event)
    // }

    // const updateEvent = (event, id) =>{
    //     mutateEvent(event, id)
    // }

    // const deleteEvent = (id) => {
    //     destroyEvent(id)
    // }

    // onMounted(setEvents)

    return {
        getEvents,
        // setEvents,
        // createEvent,
        // deleteEvent,
        // updateEvent,
    }
}

