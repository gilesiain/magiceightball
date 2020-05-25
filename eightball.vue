<template>
  <div class="eightball">
    <img class="eight-ball" v-bind:src="require('@/assets/8ball.png')" v-on:click="generate_message()" />
    <img
      class="message"
      v-if="search_found"
      v-bind:src="require('@/assets/' + search_list[search_found])"
    />
    <img class="message" v-else v-bind:src="require('@/assets/3.png')" />
  </div>
</template>

<script>
export default {
  name: "eightball",
  data() {
    return {
      search_found: "",
      search_list: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png"
      ]
    };
  },
  methods: {
    generate_message() {
      this.search_found = Math.floor(Math.random() * this.search_list.length);
    }
  },
  computed: {
    search() {
      return this.search_list[this.search_found] || null;
    }
  }
};
</script>

<style>
.eight-ball {
  padding-top:50px;
  width: 400px;
  position: relative;
}

.eight-ball:active {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.message {
  width: 150px;
  position: absolute;
  top: 33.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.eight-ball:active + .message{
  opacity: 0;
  transition: opacity 0.2s; 
}

</style>