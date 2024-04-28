<template>
  <div>
    <input v-model="weight" type="number" placeholder="Enter weight in kg" />
    <input v-model="height" type="number" placeholder="Enter height in meters" />
    <p>BMI: {{ bmi }}</p>
    <p v-if="bmi >= 25">You might be overweight or obese. Consider consulting a healthcare professional.</p>
    <p v-else-if="bmi < 18.5">You might be underweight. Consider consulting a healthcare professional.</p>
  </div>
</template>

<script>
import { useBmiStore } from '../store/bmiStore'; // Import the store

export default {
  setup() {
    const store = useBmiStore();

    return {
      weight: store.weight,
      height: store.height,
      bmi: store.bmi,
    };
  },
};
</script>
