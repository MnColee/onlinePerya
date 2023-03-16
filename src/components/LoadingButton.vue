<template>
    <button class="btn-loading flex items-center justify-center gap-x-3 rounded-2xl text-base py-3 px-6 font-bold lg:text-lg xl:text-xl">
        <i class="fa-solid fa-spinner btn-load-text"></i>
        <p class="btn-load-text">{{ loadmoreText }}</p>
    </button>
</template>

<script>
export default {
    props: {
        loadmoreText: {
            type: String,
            default: ()=> 'Label',
        },
    },
}
</script>

<style scoped>
.btn-loading {
    border:  1px solid #525355;
    
}

.btn-loading:hover {
    background: linear-gradient(128.59deg, #525355 1.68%, #37383A 119.93%);
}

.btn-load-text {
    background: linear-gradient(148.85deg, #525355 -0.06%, #9A9A9C 94.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    --text-fill-color: transparent;
}
</style>
