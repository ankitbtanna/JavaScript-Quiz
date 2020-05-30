let user = {
  name: 'Bob',
  getName: () => {
    console.log(this.name);
  },
  getNameNew: function() {
    console.log(this.name);
  }
};

user.getName();
user.getNameNew();
