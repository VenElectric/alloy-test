<script setup lang="ts">
import { ref } from "vue";

const customerInfo = ref({
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  stateCode: "",
  zipCode: "",
  countryAbbr: "",
  ssn: 0,
  email: "",
  date: null,
});

function ssnValidate(ssn: Number) {
  const ssnStr = ssn.toString();
  return ssnStr.length == 9;
}

function stateValidate(state: String) {
  return state.length == 2;
}

function submitForm() {
  switch (true){

  }
}
</script>
<template>
  <div class="container">
    <div class="form-layout">
      <form @submit.prevent="submitForm">
        <h2>Verification Form</h2>
        <div class="name-cage">
          <h3>Step 1: Personal Identification</h3>
          <input type="text" v-model="customerInfo.firstName" placeholder="First Name" required/>
          <input type="text" v-model="customerInfo.lastName" placeholder="Last Name" required/>
          <input type="text" v-model="customerInfo.ssn" placeholder="SSN" required/>
          <input type="date" v-model="customerInfo.date" required/>
          <input type="email" v-model="customerInfo.email" placeholder="E-mail Address" required/>
        </div>
        <div class="cage">
          <h3>Step 2: Address Information</h3>
          <input type="text" v-model="customerInfo.address1" placeholder="123 Sesame Street" required/>
          <input type="text" v-model="customerInfo.address2" placeholder="Apt G" />
          <input type="text" v-model="customerInfo.city" placeholder="Muppetville" required/>
          <input type="text" v-model="customerInfo.stateCode" placeholder="CA" required/>
          <input type="text" v-model="customerInfo.zipCode" placeholder="86753" required/>
          <input type="text" v-model="customerInfo.countryAbbr" placeholder="Country" required/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.form-layout {
  display: flex;
  align-self: center;
  width: 30%;
  padding: 2em;
  background: rgb(96, 96, 185);
  background: radial-gradient(
    circle,
    rgba(96, 96, 185, 1) 0%,
    rgba(131, 172, 214, 1) 71%,
    rgba(132, 180, 230, 1) 100%
  );
  border-radius: 0.8em;
}
.name-cage {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
input {
  margin: 1em;
  padding: 0.1em;
  border-radius: 0.3em;
}
button {
  margin-top: 2em;
}
</style>
