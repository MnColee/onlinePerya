<template>
    <Transition name="modal-outer">
        <div v-show="modalGameInstruction">
            <Transition name="modal-inner">
                <section v-if="modalGameInstruction" class="fixed inset-0 z-50 px-2 lg:p-10">
                    <article class="container mx-auto relative w-full flex flex-col items-center justify-center h-full rounded-2xl">
                        <div class="game-instruction h-auto w-full rounded-2xl relative sm:w-1/3 lg:py-2">
                            <form action="" class="w-full p-4 flex flex-col gap-y-5 lg:px-7 lg:pt-0 lg:pb-4">
                                <div class="w-full pt-4">
                                    <span class="w-full flex items-center justify-between border-b-4 border-gray-400">
                                        <p class="text-lg font-bold mb-2 text-white lg:text-xl xl:text-2xl">Game Name</p>
                                    </span>
                                </div>

                                <p class="text-white font-bold text-base lg:text-lg">Game Instructions</p>
                                <p class="text-white text-sm xl:text-base">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                                <div class="w-1/2 flex flex-col mx-auto gap-y-5">
                                    <FormButton type="submit" formBtnText="Next" />
                                </div>
                            </form>
                        </div>
                    </article>
                </section>
            </Transition>
        </div>
    </Transition>

</template>

<script setup>
import FormButton from '../../components/FormButton.vue';
defineEmits(['close-modal'])
defineProps({
    modalGameInstruction: {
        type: Boolean,
        default: false,
    }
})
</script>

<style scoped>
section {
    background: #2C2D30;
    backdrop-filter: blur(250px);
}

article{
    background-color: #525355;
}

.game-instruction{
    background: linear-gradient(128.59deg, #525355 1.68%, #37383A 119.93%);
}
</style>