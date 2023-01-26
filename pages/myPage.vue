<template>
  <div class="bg-gray-900 text-white flex justify-center text-lg">
    <h1>Hello from My Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis
      labore pariatur expedita doloribus sed aliquid molestias error aspernatur
      dolor rerum, saepe ullam illum itaque, temporibus quibusdam est ipsa vero?
      okok
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
