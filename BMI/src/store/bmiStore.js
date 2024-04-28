import { defineStore } from 'pinia';

export const useBmiStore = defineStore('bmiStore', () => {
  const weight = ref(0);
  const height = ref(0);

  const bmi = computed(() => {
    if (height.value === 0) {
      return 0; // Avoid division by zero
    }
    return weight.value / (height.value * height.value);
  });

  function updateBmi(newWeight, newHeight) {
    weight.value = newWeight;
    height.value = newHeight;
  }

  return {
    weight,
    height,
    bmi,
    updateBmi, // Optional function for updating both weight and height
  };
});
