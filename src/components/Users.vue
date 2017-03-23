<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name" />
      <br />
      <input type="text" v-model="newUser.email" placeholder="Enter Email" />
      <br />
      <input type="submit" value="Submit" />
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted:user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script src="./Users.js">
</script>

<style scoped>
  .contacted {
    text-decoration: line-through
  }
</style>