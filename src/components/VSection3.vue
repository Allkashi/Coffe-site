<script setup>
const projects = [
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Андрей',
        }
    },
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Николай',
        }
    },
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Петр',
        }
    },
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Марина',
        }
    },
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Карина',
        }
    },
    {
        img: {
            src: '/public/Photo.png',
        },

        name: {
            title: 'Жанна',
        }
    }
]

var menuContainer = document.getElementById('menuContainer');
var isDragging = false;
var startX = 0;
var scrollLeft = 0;

function handleMouseDown(e)  
{
  isDragging = true;
  startX = e.pageX - menuContainer.offsetLeft;
  scrollLeft = menuContainer.scrollLeft;
  menuContainer.style.cursor = 'grabbing';
};

function handleMouseMove(e)  {
  if (!isDragging) return;
  
  e.preventDefault();
  
  var x = e.pageX - menuContainer.offsetLeft;
  var scroll = x - startX;
  menuContainer.scrollLeft = scrollLeft - scroll;
};

function handleMouseUp(e)  {
  isDragging = false;
  menuContainer.style.cursor = 'grab';
};

</script>

<template>
    <div id="section3" class="container">
        <div class="section__head">
            <img src="/public/Line_head.png" class="img-fluid">
            <p class="second-section__head-text">ОТЗЫВЫ</p>
            <img src="/public/Line_head.png" class="img-fluid">
        </div>

        <div ref="menuContainer" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="third-section">

            <div class="third-section_feedback col-3" v-for="(item, index) in projects" :key="index">
                <div class="third-section_feedback-img">
                    <img :src="item.img.src" class="img-fluid"> 
                </div>
                <p class="third-section_feedback-name">{{item.name.title}}</p>
                <p class="third-section_feedback-text">Кофейня очень понравилась. Чисто и вкусно, точно посещу еще раз.</p>
                <div class="third-section_feedback-img">
                    <img src="/public/Beans_line.png" class="img-fluid">
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>