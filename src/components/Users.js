export default {
  name: 'users',
  data()
  {
    return {
      newUser: {},
      users:
      [
        {
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          contacted: false
        },
        {
          name: 'Steve Smith',
          email: 'ssmith@gmail.com',
          contacted: false
        },
        {
          name: 'Tom White',
          email: 'twhite@gmail.com',
          contacted: false
        }
      ]
    }
  },
  methods: {
    addUser: function (e)
    {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function (user)
    {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function ()
  {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response)
    {
      for (let idx = 0; idx < response.data.length; ++idx)
      {
        this.users.push({
          name: response.data[idx].name,
          email: response.data[idx].email,
          contacted: false
        });
      };
    });
  }
}