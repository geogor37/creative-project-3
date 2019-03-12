var app = new Vue({
  el: '#app',
  data: {
    lists: [],
    newListName: '',
  },
  methods: {
    createList() {
      this.lists.push({ name: this.newListName, items: [] });
      this.newListName = '';
    },
  },
});