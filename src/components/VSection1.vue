<script setup>
import { ref } from 'vue';
import VSection2 from './VSection2.vue';

function ScrollTo() {
    const myObjectElement = document.getElementById('targetRef');
    myObjectElement.scrollIntoView({ behavior: 'smooth' });
};


</script>

<template>
    <div class="container-fluid first-section">
        <div id="header1" class="container">
            <div class="row">
                <div class="first-section__content col-6">
                    <ul class="first-section__list">
                        <img src="/public/coffe_been.png" class="img-fluid">
                        <p class="first-section__list-text">ДВЕ ЧАШКИ</p>
                        <img src="/public/coffe_been.png" class="img-fluid">
                    </ul>
                    <div class="section__center-wrapper">
                        <img src="/public/Line Separator.png" class="img-fluid">
                    </div>
                    <p class="first-section__text">Отведайте изысканный авторский кофе в уютной атмосфере нашего кафе.</p>
                    <div class="section__center-wrapper">
                        <button class="first-section__button" @click="ScrollTo">НАЧАТЬ <br> ЗНАКОМСТВО</button>
                    </div>
                </div>
                <div class="first-section__center-wrapper col-6">
                    <img class="img-fluid" src="/public/Logo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>