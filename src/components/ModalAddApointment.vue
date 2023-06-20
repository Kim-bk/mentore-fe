<script>
import { VueFinalModal } from 'vue-final-modal';
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    default: undefined
  },
  startTime: {
    type: String,
    default: undefined
  },
});

const emit = defineEmits(['confirm']);

export default {
  components: {
    VueFinalModal
  },
  data() {},
  methods: {
    handleClick() {
        const payload = {
            title: this.title,
            detail: this.detail,
            duration: this.duration
        }
      this.$emit('addApointment', payload);
    }
  }
};


</script>

<template>
    <VueFinalModal
      class="confirm-modal"
      content-class="confirm-modal-content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
    >
        <h1>Add Apointments</h1>
        <!-- <slot></slot> -->
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" v-model="title">
            </div>
            <div class="form-group">
                <label for="detail">Detail</label>
                <textarea class="form-control" name="detail" id="" cols="30" rows="10" v-model="detail"></textarea>
            </div>

            <div class="form-group">
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
            </div>
        </form>
        <button class="btn btn-primary px-4 py-2" @click="handleClick">Add</button>
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
  