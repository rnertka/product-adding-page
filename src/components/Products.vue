<template>
<div v-if="productList.length > 0">
    <br><br>
  <h3 class="text-center">List of Added Products</h3>
  <hr>
  <div class="row product-container">
    <app-product v-for= "product in productList" :key="product">
      <template v-slot:product>
        <div class="col-md-2 card">
          <img
            class="card-img-top"
            :src="product.selectedImage"
            :alt="product.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <small> <strong>Products : </strong> {{product.count}} </small>
            <br />
            <small> <strong>Price : </strong> {{product.price}} $ </small>
            <br />
            <small> <strong>Total : </strong> {{product.totalPrice}} $ </small>
          </div>
        </div>
      </template>
    </app-product>
  </div>
</div>
</template>

<script>
import Product from "./Product";
export default {
  components: {
    appProduct: Product,
  },
  data(){
      return {
          productList : [],
      };
  },
  mounted(){
    this.Bus.on('productAdded', (product) => {
      if(this.productList.length <10){
        this.productList.push(product);
      this.Bus.emit("progressBarUpdated", this.productList.length)
      } else {
        alert("You can't add products more than 10!");
      }
    });
  },
};
</script>