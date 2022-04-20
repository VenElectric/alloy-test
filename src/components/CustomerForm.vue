<script setup lang="ts">
import { ref, computed } from "vue";
import StatesList from "./StatesList.vue";

const customerInfo = ref({
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  stateCode: "",
  zipCode: "",
  countryAbbr: "",
  ssn: "",
  email: "",
  birthDate: null,
});

const classesasdf = computed(() => {});

const validationClasses = ref({
  firstName: false,
  lastName: false,
  address1: false,
  address2: false,
  city: false,
  stateCode: false,
  zipCode: false,
  countryAbbr: false,
  ssn: false,
  email: false,
  birthDate: false,
});

const errorMessages = ref([] as string[]);

function numberCheck(value: string) {
  if (Number(value)) {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  errorMessages.value = [];
  switch (true) {
    case customerInfo.value.stateCode == null:
      validationClasses.value.stateCode = true;
      break;
    case customerInfo.value.zipCode.length != 5:
      validationClasses.value.zipCode = true;
      break;
    case numberCheck(customerInfo.value.zipCode):
      validationClasses.value.zipCode = true;
    case customerInfo.value.ssn.length != 9:
      validationClasses.value.ssn = true;
      break;
    case numberCheck(customerInfo.value.ssn):
      validationClasses.value.ssn = true;
      break;
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
          <div class="field">
            <input
              type="text"
              v-model="customerInfo.firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div class="field">
            <input
              type="text"
              v-model="customerInfo.lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="field">
            <input
              type="text"
              v-model="customerInfo.ssn"
              placeholder="SSN"
              required
            />
            <small v-if="validationClasses.ssn" class="validation-error"
              >SSN should be 9 digits</small
            >
          </div>
          <div class="field">
            <input type="date" v-model="customerInfo.birthDate" required />
          </div>
          <div class="field">
            <input
              type="email"
              v-model="customerInfo.email"
              placeholder="E-mail Address"
              required
            />
          </div>
        </div>
        <div class="cage">
          <h3>Step 2: Address Information</h3>
          <input
            type="text"
            v-model="customerInfo.address1"
            placeholder="123 Sesame Street"
            required
          />
          <input
            type="text"
            v-model="customerInfo.address2"
            placeholder="Apt G"
          />
          <input
            type="text"
            v-model="customerInfo.city"
            placeholder="Muppetville"
            required
          />
          <StatesList />
          <input
            type="text"
            v-model="customerInfo.zipCode"
            placeholder="86753"
            required
          />
          <select>
            <option value="US">United States</option>
          </select>
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
  border-radius: 0.3em;
}
button {
  margin-top: 2em;
}
.field {
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0.1em;
}
.validation-error {
  margin: 0;
  color: red;
  font-size: 0.6em;
}
</style>
