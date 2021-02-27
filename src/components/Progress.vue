<template>
    <div class="progress" v-if="currentItem > 0">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{currentItem}}/10
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      currentItem : 0,
      progress : 0,
    };
  },
    mounted(){
      this.Bus.on("progressBarUpdated", (productCount) => {
          this.currentItem = productCount;
          this.progress = this.currentItem * 10;
      });
    },
}
</script>