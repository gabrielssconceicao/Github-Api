import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoadStore = defineStore('load', () => {
  const loading = ref(false);
  function setLoading() {
    loading.value = true;
  }
  function setNotLoading() {
    loading.value = false;
  }
  return { loading, setLoading, setNotLoading };
});
