<template>
  <div>
    <h1>BMI Calculator</h1>
    <BodyMassIndexForm />
    <p>Your BMI: {{ bmi }}</p>
  </div>
</template>

<script>
import BodyMassIndexForm from '../src/components/BodyMassIndexForm.vue';
// No need to import useBmiStore here
import 
export default {
  components: {
    BodyMassIndexForm
  },
  setup() {
    // Access the store directly in App.vue's setup
    const store = useBmiStore(); // Use the Pinia store function directly

    return {
      bmi: store.bmi, // Access bmi from the store
    };
  },
};
</script>
                                               



