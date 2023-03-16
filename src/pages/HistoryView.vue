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
            <section class="flex flex-col">
                <article class="w-full flex items-center justify-center bg-gradient lg:p-10">
                    <div class="container mx-auto w-full flex flex-col items-center justify-center gap-y-8">
                        <h1 class="text-white lg:font-bold xl:text-3xl">Transaction History</h1>
                        
                        <div class="relative w-full overflow-x-auto sm:rounded-lg border border-gray-500">
                            <table class="w-full text-sm text-left">
                                <thead class="bg-table-head text-xs capitalize">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-base lg:text-lg xl:text-xl">
                                            Transaction
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-base text-center lg:text-lg xl:text-xl">
                                            Time
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-base text-center lg:text-lg xl:text-xl">
                                            Credits
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-base text-center lg:text-lg xl:text-xl">
                                            Wallet
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-base text-center lg:text-lg xl:text-xl">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <th scope="row" class="px-6 pt-5 font-medium whitespace-nowrap text-base xl:text-lg">
                                            Withdraw
                                        </th>
                                        <td class="px-6 pt-5 text-base text-center xl:text-lg">
                                            01:00am
                                        </td>
                                        <td class="px-6 pt-5 text-base text-center xl:text-lg">
                                            100.00
                                        </td>
                                        <td class="px-6 pt-5 text-base text-center xl:text-lg">
                                            G-cash
                                        </td>
                                        <td class="px-6 pt-5 text-base text-center xl:text-lg">
                                            02-19-22
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <th scope="row" class="px-6 py-0.5 font-medium whitespace-nowrap text-base xl:text-lg">
                                            Withdraw
                                        </th>
                                        <td class="px-6 py-0.5 text-base text-center xl:text-lg">
                                            01:00am
                                        </td>
                                        <td class="px-6 py-0.5 text-base text-center xl:text-lg">
                                            100.00
                                        </td>
                                        <td class="px-6 py-0.5 text-base text-center xl:text-lg">
                                            G-cash
                                        </td>
                                        <td class="px-6 py-0.5 text-base text-center xl:text-lg">
                                            02-19-22
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="w-full flex items-center justify-end px-10">
                            <span class="text-white flex items-center gap-x-4">
                                <p class="text-base">Pages</p>
                                <div class="flex items-center gap-x-3">
                                    <i class="fa-solid fa-chevron-left"></i>
                                    <span class="flex items-center gap-x-4">
                                        <p>1</p>
                                        <p>...</p>
                                    </span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </span>
                        </div>
                    </div>
                </article>

            </section>

        </div>

    </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RechargeModal from './component/RechargeModal.vue'
import { ref } from "vue";
import SideBar from "./component/SideBar.vue";

const isOpen = ref(false);
const modalRecharge = ref(null);

const toggleRecharge = () => {
    modalRecharge.value = !modalRecharge.value;
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

.bg-table-head{
    background: #525355;
    color: #BEBEBF;
}

tbody {
    color: #BEBEBF;
}
</style>