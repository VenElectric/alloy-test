<script setup lang="ts">
import { ref, computed } from "vue";
import StatesList from "./StatesList.vue";
import { CustomerData } from "./types";
import { serverRequest } from "../Utils/serverRequests";
import states from "../static/states"

const customerInfo = ref({
  name_first: "",
  name_last: "",
  phone_number: "",
  email_address: "",
  address_line_1: "",
  address_line_2: "",
  address_city: "",
  address_state: "",
  address_postal_code: "",
  address_country_code: "",
  birth_date: "",
  document_ssn: "",
});

const classesasdf = computed(() => {});

const zipCodeValidation = ref(false);
const ssnValidation = ref(false);
const validationClasses = ref({
  zipCode: false,
  ssn: false,
});

const errorMessages = ref([] as string[]);

function numberCheck(value: string) {
  if (Number(value)) {
    return true;
  } else {
    return false;
  }
}

function formValidation() {
  if (customerInfo.value.address_postal_code.length != 5) {
    zipCodeValidation.value = true;
  }
  if (!numberCheck(customerInfo.value.address_postal_code)) {
    zipCodeValidation.value = true;
  }
  if (customerInfo.value.document_ssn.length != 9) {
    ssnValidation.value = true;
  }
  if (!numberCheck(customerInfo.value.document_ssn)) {
    ssnValidation.value = true;
  }
}

function submitForm() {
  formValidation();
  if (zipCodeValidation.value == true || ssnValidation.value == true) return;
  if (customerInfo.value != null) {
    const serverResponse = serverRequest(customerInfo.value as CustomerData);
    console.log(serverResponse);
  }
}
</script>
<template>
  <div class="container">
    <div class="form-layout">
      <form @submit.prevent="submitForm">
        <h2>Verification Form</h2>
        <h3>Step 1: Personal Identification</h3>
        <div class="cage">
          <div class="field">
            <small>First Name</small>
            <input
              type="text"
              v-model="customerInfo.name_first"
              placeholder="John"
              required
            />
          </div>
          <div class="field">
            <small>Last Name</small>
            <input
              type="text"
              v-model="customerInfo.name_last"
              placeholder="Doe"
              required
            />
          </div>
          <div class="field">
            <small>SSN</small>
            <input
              type="text"
              v-model="customerInfo.document_ssn"
              placeholder="9 Digits"
              required
            />
            <small v-if="validationClasses.ssn" class="validation-error"
              >SSN should be 9 digits</small
            >
          </div>
          <div class="field">
            <small>Date of Birth</small>
            <input type="date" v-model="customerInfo.birth_date" required />
          </div>
          <div class="field">
            <small>E-mail</small>
            <input
              type="email"
              v-model="customerInfo.email_address"
              placeholder="big_bird@sesame.com"
              required
            />
          </div>
          <div class="field">
            <small>Phone Number</small>
            <input
              type="tel"
              pattern="[0-9]{11,14}"
              v-model="customerInfo.phone_number"
              placeholder="14158675309"
              required
            />
          </div>
        </div>

        <h3>Step 2: Address Information</h3>
        <div class="cage">
          <div class="field">
            <small>Address Line 1</small>
            <input
              type="text"
              v-model="customerInfo.address_line_1"
              placeholder="123 Sesame Street"
              required
            />
          </div>
          <div class="field">
            <small>Address Line 2</small>
            <input
              type="text"
              v-model="customerInfo.address_line_2"
              placeholder="Apt G"
            />
          </div>
          <div class="field">
            <small>City</small>
            <input
              type="text"
              v-model="customerInfo.address_city"
              placeholder="Muppetville"
              required
            />
          </div>
          <div class="field">
            <small>State</small>
            <select v-model="customerInfo.address_state">
              <option v-for="state in states" :value="state.abbreviation">
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="field">
            <small>ZIP Code</small>
            <input
              type="text"
              v-model="customerInfo.address_postal_code"
              placeholder="86753"
              required
            />
            <small v-if="validationClasses.zipCode" class="validation-error"
              >ZIP Code should be 5 digits</small
            >
          </div>
          <div class="field">
            <small>Country</small>
            <select v-model="customerInfo.address_country_code">
              <option value="US">United States</option>
            </select>
          </div>
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
  background: rgb(119, 171, 88);
  background: linear-gradient(
    180deg,
    rgba(119, 171, 88, 1) 0%,
    rgba(167, 165, 165, 1) 96%
  );
  border-radius: 0.8em;
}
.cage {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  width: 10em;
}
.validation-error {
  margin: 0;
  margin-top: 0.5em;
  color: rgb(255, 0, 0);
  font-size: 0.7em;
  font-weight: bold;
}
</style>
