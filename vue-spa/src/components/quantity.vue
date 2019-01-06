<template>
    <div class="quantity">
        <div @click="decrement">
            -
        </div>
        <div class="count">{{countData}}</div>
        <div @click="increment">
            +
        </div>
    </div>
</template>

<script>
export default {
	props: {
		count: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			countData: this.count,
		};
	},
	methods: {
		decrement() {
			this.countData -= 1;
		},
		increment() {
			this.countData += 1;
		}
	}
};
</script>

<style lang="scss">
.quantity {
	display: inline-flex;

  .count {
  	border-top: solid 1px #ccc;
  	border-bottom: solid 1px #ccc;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	width: 44px;
  }

  > div {
   border: solid 1px #ccc;
   cursor: pointer;
   padding: 0px 12px;
   min-width: 20px;
   width: auto;
   text-align: center;
   position: relative;
 }
}
</style>
