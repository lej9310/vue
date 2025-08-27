<template>
    <h4>Two-way Binding</h4>
    <div class="bg">
        <input type="text" v-model="inpText">
        <p>{{ inpText }}</p>
    </div>
    <hr>

    <h4>A Dynamic Checkbox</h4>
    <div class="bg">
        <form>
            <p>Important Item?
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>
        </form>
    </div>
    <hr>

    <h4>Shopping List With Important Items</h4>
    <div class="bg">
        <form @submit.prevent="addItem">
            <p>구매 목록:
                <input type="text" required placeholder="품목 이름..." v-model="itemName"></input>
            </p>
            <p>품목 갯수:
                <input type="number" placeholder="품목 갯수..." v-model="itemNumber"></input>
            </p>
            <p>중요도 :
                <label>
                    <input type="checkbox" v-model="itemImportant">
                    {{ itemImportant }}
                </label>
            </p>
        </form>
        <button type="submit" @click="addItem">품목 추가</button>        
        <hr>

        <p><strong>[ 쇼핑 목록 ]</strong></p>
        <ul>
            <li v-for="item in shoppingList" v-bind:class="{ impClass: item.important }">
                품목명:{{ item.name }},<br>
                갯수: {{ item.number }},<br></br>
                중요도: {{ item.important }}
            </li>
        </ul>
    </div>
    <hr>

    <h4>Mark Found Items in The Shopping List</h4>
    <div class="bg">
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';

const inpText = ref('Initial Text')
const important = ref(false)

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const shoppingList = ref([
    {
        name: 'Tomatoes',
        number: 5,
        important: false
    }
])

function addItem() {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value
    }
    shoppingList.value.push(item)
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}
</script>

<style scoped>
div {
    border: dashed greenyellow 1px;
    width: 90%;
    padding: 5px;
    margin: 10px auto;
    align-items: center;
}

.bg {
    min-height: 50px;
    display: inline-block;
    border: 3px double darkgoldenrod;
    background-color: lightgoldenrodyellow;
    font-weight: bold;
}

form {
    margin-left: 60px;
    text-align: left;
}

label {
    padding: 5px;
}

label:hover {
    cursor: pointer;
    background-color: lightgrey;
    border-radius: 5px;
}

button {
    display: block;
    margin: 20px auto;
    border: 1px solid black;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 5px;
}

li {
    border: 2px dotted gray;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(128, 128, 128, 0.486);
    text-align: left;
}

.impClass {
    border: 2px dotted darkred;
    background-color: rgba(253, 139, 139, 0.61);
    font-weight: bold;
}
</style>