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
      this.lists.push({ name: this.newListName, items: [] });
      this.newListName = '';
    },
    selectList(list) {
      this.selectedList = list;
    },
    addItemToList() {
      this.selectedList.items.push(this.newItemName);
      this.newItemName = '';
    },
  },
});