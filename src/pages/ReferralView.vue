<template>
    <main class="w-full flex bg-home-user">

        <!--SIDEBAR--->
        <div :class="isOpen ? 'w-96 lg:w-80 xl:w-96 bg-sidebar flex flex-col p-3 duration-300 shadow border-r-4 border-gray-200' : 'w-0 p-0 border-none -translate-x-8 duration-300'">
            <SideBar />
        </div>


        <!----MAIN--->
        <div class="w-full">
            <header class="bg-neutral w-full p-2 lg:px-6 lg:py-1">
                <nav class="w-full flex items-center justify-between text-base">
                    <span class="flex items-center gap-x-4">
                        <img @click="isOpen = !isOpen" src="/img/Vector.png" alt="menu_icon" class="cursor-pointer h-7 sm:h-7">
                        <RouterLink :to="{ name: 'home' }"><img src="/img/Online Perya Logo.png" alt="logo" class="h-10 sm:h-14"></RouterLink>
                    </span>

                    <ul class="flex items-center gap-x-3 lg:gap-x-8">
                        <li class="flex items-center gap-x-2">
                            <img src="/img/chinese-coin.png" alt="coins" class="h-7 sm:h-6">
                            <p class="text-base text-white">1.00</p>
                        </li>
                        <li>
                            <button @click="toggleRecharge" class="btn-recharge hover:bg-yellow-100 bg-opacity-5 rounded-md text-base px-2 py-1 font-bold flex items-center gap-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-teal-600 lg:w-5 lg:h-5">
                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                    <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                                </svg>
                                Recharge
                            </button>
                        </li>
                    </ul>
                </nav>
                <RechargeModal :modalRecharge="modalRecharge" @close-modal="toggleRecharge"></RechargeModal>
            </header>

            <!--MAIN CONTENT--->
            <section class="w-full flex flex-col">
                <article class="w-full flex items-center justify-center bg-gradient lg:py-10">
                    <div class="container mx-auto w-full flex flex-col items-center justify-center gap-y-8">
                        <h1 class="font-bold text-xl text-white lg:text-2xl xl:text-3xl ">Referrals/Invite</h1>

                        <div class="bg-referral w-full flex flex-col gap-x-8 gap-y-6 rounded-xl py-5 px-6 sm:w-7/12">
                            <p class="text-white font-semibold text-base lg:text-lg">Invite Friends and earn Credits</p>

                            <span class="w-full flex flex-col gap-y-2">
                                <p class="text-white font-medium">Share referral link</p>
                                <div class="w-full border border-gray-500 rounded-xl flex items-center justify-between overflow-hidden">
                                    <input type="text" name="" id="" class="w-full text-base border-none outline-none ring-0 py-2 px-4 bg-transparent text-white" placeholder="https://www.onlineperya.com/s2/19a9e1f8c5">
                                    <button @click="toggleReferral" class="btn-recharge h-full px-10 py-1.5">
                                        <i class="fa-solid fa-link text-teal-700 text-base lg:text-xl"></i>
                                    </button>
                                </div>
                            </span>

                            <span class="w-full flex flex-col gap-y-2">
                                <p class="text-white font-medium">Referral code</p>
                                <div class="w-full border border-gray-500 rounded-xl flex items-center justify-between overflow-hidden">
                                    <input type="text" name="" id="" class="w-full text-base border-none outline-none ring-0 py-2 px-4 bg-transparent text-white" placeholder="1Sr23Zse831sdSe8Sdw21jdcS934s">
                                </div>
                            </span>

                        </div>

                        <div class="bg-referral-progress w-full flex flex-col rounded-xl gap-y-1 py-5 px-6 sm:w-7/12">
                            <p class="text-white font-semibold text-base lg:text-xl xl:text-2xl">Online Perya</p>
                            <small class="flex items-center gap-x-2 text-white text-base">Max Number of Invite player <strong>Number</strong></small>
                            
                            <div class="bg-bar w-full rounded-full lg:mt-14">
                                <div class="bg-progress-bar text-xs font-medium text-blue-100 text-center py-1.5 px-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
                            </div>
                        </div>

                        <div class="w-full sm:w-7/12">
                            <p class="text-white text-base lg:text-lg">For every successful referral, you will earn budfox credits, which can be redeemed for Y rewards. You can track your points and referrals in your account referrals and invite.</p>
                        </div>

                        <div class="w-full grid grid-cols-1 gap-x-4 md:grid-cols-3 sm:w-7/12">
                            <div class="referral-box rounded-lg flex flex-col items-center justify-center gap-y-2 px-2 py-4">
                                <p class="text-white font-bold text-lg lg:text-2xl xl:text-3xl">10</p>
                                <i class="bg-icons text-teal-600 fa-solid fa-user-plus text-2xl lg:text-3xl xl:text-4xl"></i>
                                <p class="text-white text-base font-semibold lg:text-lg">Referrals</p>
                            </div>
                            <div class="referral-box rounded-lg flex flex-col items-center justify-center gap-y-2 px-2 py-4">
                                <p class="text-white font-bold text-lg lg:text-2xl xl:text-3xl">10</p>
                                <i class="bg-icons text-teal-600 fa-solid fa-user-plus text-2xl lg:text-3xl xl:text-4xl"></i>
                                <p class="text-white text-base font-semibold lg:text-lg">Remain Referrals</p>
                            </div>
                            <div class="referral-box rounded-lg flex flex-col items-center justify-center gap-y-2 px-2 py-4">
                                <p class="text-white font-bold text-lg lg:text-2xl xl:text-3xl">10</p>
                                <i class="bg-icons text-teal-600 fa-solid fa-user-plus text-2xl lg:text-3xl xl:text-4xl"></i>
                                <p class="text-white text-base font-semibold lg:text-lg">Earn Credits</p>
                            </div>
                        </div>

                        <div class="bg-refer flex flex-col gap-y-5 w-full rounded-xl p-4 sm:w-7/12">
                            <p class="text-base font-bold lg:text-xl xl:text-2xl">How to Refer</p>
                            <p class="text-refer text-base lg:text-lg">To refer a friend, simply log in to your account and go to the Referral section. From there, you can share your unique referral link via email, social media, or any other platform. Your friends can then sign up using your link, and you will receive your referral points once they meet the eligibility criteria.</p>
                        </div>

                    </div>
                </article>
            </section>

        </div>

        <ReferralForm :modalReferralForm="modalReferralForm" @close-modal="toggleReferral"></ReferralForm>
    </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import ReferralForm from "../components/ReferralForm.vue"
import { ref } from "vue";
import SideBar from "./component/SideBar.vue"

const isOpen = ref(false);
const modalReferralForm = ref(null);

const toggleReferral = () => {
    modalReferralForm.value = !modalReferralForm.value;
}
</script>

<style scoped>
.bg-neutral {
    background-color: #37383A;
}
.btn-recharge {
    background: linear-gradient(89.26deg, #E0E421 -0.21%, #EDEF7E 100.21%);
    color: #207184;
}

.bg-home-user {
    background-color: #2C2D30;
}

.bg-referral {
    background: #434447;
}

.bg-referral-progress{
    background: linear-gradient(287.87deg, #E636D4 -3.94%, #F0A2F1 112.57%);
}

.bg-bar {
    background: linear-gradient(89.91deg, #FFFFFF 1.2%, rgba(255, 255, 255, 0.5) 119.38%);
}

.bg-progress-bar {
    background: linear-gradient(89.67deg, #53E23B 0%, rgba(184, 243, 175, 0.5) 184.15%);
    color: white;
}

.referral-box {
    background: linear-gradient(180deg, rgba(137, 139, 20, 0) 0%, #9DA017 100%);
}

.bg-refer {
    background: linear-gradient(128.59deg, #525355 1.68%, #37383A 119.93%);
    color: #EDEF7E;
}

.text-refer {
    color: #F2F4A4;
}
</style>