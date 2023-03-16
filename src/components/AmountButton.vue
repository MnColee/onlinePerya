<template>
    <button class="amount-btn active:bg-sky-400 rounded-full py-0.5 text-base text-white font-semibold border border-sky-400 lg:text-lg">{{ amountText }}</button>
</template>

<script>
export default {
    props: {
        amountText: {
            type: String,
            default: () => 'Label'
        },
    },
}
</script>

<style scoped>
    .amount-btn:hover {
        background-color: #34BAD8;
    }
</style>
