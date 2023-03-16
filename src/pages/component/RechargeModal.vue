<template>
    <Transition name="modal-outer">
        <div v-show="modalRecharge">
            <Transition name="modal-inner">
                <section v-if="modalRecharge" class="fixed inset-0 bg-neutral-500 bg-opacity-70 z-50 px-2 lg:px-0">
                    <article class="container mx-auto relative w-full flex flex-col items-center justify-center h-full">
                        <div class="recharge-card h-auto w-full rounded-2xl relative sm:w-1/3">
                            <span class="absolute top-0 right-0 w-full flex justify-end">
                                <svg @click="$emit('close-modal')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-8 h-8 text-gray-300 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <form action="" class="w-full p-4 flex flex-col gap-y-5 lg:px-7 lg:pt-0 lg:pb-4">
                                <div class="w-full pt-4">
                                    <span class="w-full flex items-center justify-between border-b-4 border-gray-400">
                                        <p class="text-lg font-bold mb-2 text-white lg:text-xl xl:text-2xl">Recharge Credit</p>
                                    </span>
                                </div>

                                <!--first-->
                                <div v-if="currentStep === 1" class="flex flex-col gap-y-5">
                                    <div class="w-full flex flex-col gap-y-5">
                                        <div class="w-full py-2 px-3 rounded-md bg-input">
                                            <input type="text" name="" id="" class="w-full text-base border-none outline-none ring-0 bg-transparent text-white" placeholder="Credit Amount">
                                        </div>
                                    </div>

                                    <div class="w-full grid gap-3 grid-cols-3 lg:grid-cols-4">
                                        <AmountButton amountText="100" />
                                        <AmountButton amountText="200" />
                                        <AmountButton amountText="300" />
                                        <AmountButton amountText="400" />
                                        <AmountButton amountText="500" />
                                        <AmountButton amountText="600" />
                                        <AmountButton amountText="700" />
                                        <AmountButton amountText="800" />
                                        <AmountButton amountText="900" />
                                        <AmountButton amountText="1000" />
                                        <AmountButton amountText="2000" />
                                        <AmountButton amountText="3000" />
                                    </div>

                                    <div class="w-full flex flex-col gap-y-5">
                                        <FormButton type="submit" formBtnText="Proceed"  @click="nextStep" />
                                    </div>
                                </div>

                                <!--second-->
                                <div v-if="currentStep === 2">
                                    <div class="w-full flex flex-col gap-y-4">
                                        <FormInput v-model="firstName" type="text" placeholder="First Name" autofocus required/>
                                        <FormInput v-model="lastName" type="text" placeholder="Last Name" required/>
                                        <FormInput v-model="email" type="email" placeholder="Email" required/>
                                        <FormInput v-model="phone" type="text" placeholder="Phone" required/>
                                        <select class="w-full p-2 rounded-md border border-gray-300 bg-transparent text-gray-400 outline-none ring-0">
                                            <option value="" class="w-full text-base border-none outline-none ring-0 bg-transparent text-white lg:px-10">E - Wallet</option>
                                        </select>
                                    </div>
                                    <div class="w-full flex items-center gap-x-4 mt-4">
                                        <button @click="previousStep" class="hover:bg-opacity-80 text-black rounded-md py-1 px-8 bg-gray-300 font-semibold">Back</button>
                                        <FormButton type="submit" formBtnText="Add Credits" />
                                    </div>
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
import AmountButton from '../../components/AmountButton.vue'
import FormInput from '../../components/FormInput.vue';
import { ref } from "vue"

defineEmits (['close-modal'])

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");

defineProps ({
    modalRecharge: {
        type: Boolean,
        default: false,
    }
})
</script>

<script>
export default {
    data() {
        return {
        currentStep: 1
        }
    },
    methods: {
        nextStep() {
        this.currentStep++
    },
        previousStep() {
        this.currentStep--
    }
    }
}
</script>

<style scoped>
.recharge-card {
    background: linear-gradient(128.59deg, #525355 1.68%, #37383A 119.93%);
}

.bg-input {
    background: #525355;
    border: 1px solid #A6A7A8;
}
.text-secondary {
    color: #E0E421;
}
</style>