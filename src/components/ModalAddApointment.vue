<script>
import { VueFinalModal } from 'vue-final-modal';
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    default: undefined
  },
});

const emit = defineEmits(['confirm']);

export default {
  data(){
    return {
      errorM:''
    };
  },
  components: {
    VueFinalModal
  },
  methods: {
    handleClick() {
        const payload = {
            title: this.title,
            detail: this.detail,
            duration: this.duration,
            timeStart: this.timeStart,
            linkGoogleMeet: this.linkGoogleMeet,
        }
        const allPropertiesAreNullOrUndefined = Object.values(payload).every(value => value === undefined);
       if (payload.title === undefined || payload.linkGoogleMeet === undefined || payload.detail === undefined || payload.duration === undefined
       || payload.timeStart === undefined)
       {
          this.errorM = "Vui lòng nhập đầy đủ thông tin!"
          console.log(this.errorM);
       }
       else
       {
        this.$emit('addApointment', payload);
       }
      
    },
    cancel() {
      this.$emit('cancel');
    }
  },
};


</script>

<template>
    <VueFinalModal
      class="confirm-modal"
      content-class="confirm-modal-content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
    >
        <h3>Tạo lịch hẹn</h3>
        <p style="font-weight:bold; color:red; font-size:18px;"> {{this.errorM}} </p>
        <!-- <slot></slot> -->
        <form>
            <div class="form-group">
                <label for="title">Tên</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" v-model="title">
            </div>
            <div class="form-group">
                <label for="detail">Chi tiết</label>
                <textarea class="form-control" name="detail" id="" cols="30" rows="10" v-model="detail"></textarea>
            </div>

            <div class="form-group">
                <label for="timeStart">Thời gian</label>
                <input type="time" class="form-control" id="timeStart" aria-describedby="emailHelp" v-model="timeStart">
            </div>

            <div class="form-group">
                <label for="timeStart">Link Google Meet</label>
                <input type="text" class="form-control" id="linkGoogleMeet" aria-describedby="emailHelp" v-model="linkGoogleMeet">
            </div>
            <!-- <div class="form-group">
                <label for="duration">Duration</label>
                <select class="form-control" name="duration" v-model="duration">
                    <option class="my-1" value="5">5 minutes</option>
                    <option class="my-1" value="10">10 minutes</option>
                    <option class="my-1" value="15">15 minutes</option>
                    <option class="my-1" value="30">30 minutes</option>
                    <option class="my-1" value="45">45 minutes</option>
                    <option class="my-1" value="60">1 hour</option>
                    <option class="my-1" value="75">1.5 hour</option>
                    <option class="my-1" value="90">2 hour</option>
                </select>
            </div> -->
        </form>
        <div class="d-flex justify-content-end">
          <button class="btn btn-secondary px-4 py-2 ml-0" @click="cancel">Cancel</button>
          <button class="btn btn-primary px-4 py-2 ml-3" @click="handleClick">Add</button>
        </div>
    </VueFinalModal>
  </template>
  
<style>
.confirm-modal {
    display: flex;
    justify-content: end;
    align-items: center;

}
.confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    height: 100%;
    width: 400px;
}
.confirm-modal-content > * + * {
    margin: 0.5rem 0;
}
.confirm-modal-content h1 {
    font-size: 1.375rem;
}
.confirm-modal-content button {
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 0.5rem;
}
.dark .confirm-modal-content {
    background: #000;
}
</style>
  