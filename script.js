var app = new Vue({
  el: '#app',
  data: {
    lists: [],
    newListName: '',
    selectedList: {},
    newItemName: '',
  },
  methods: {
    createList() {
      if (this.newListName.trim().length > 0) {
        this.lists.push({ name: this.newListName, items: [] });
        this.newListName = '';
      }
    },
    toggleSelectedList(list) {
      if (list === this.selectedList) {
        this.selectedList = {};
      } else {
        this.selectedList = list;
      }
    },
    addItemToList() {
      this.selectedList.items.push(this.newItemName);
      this.newItemName = '';
    },
  },
});