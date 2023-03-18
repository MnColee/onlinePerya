<template>
    <div class="h-full flex flex-col gap-y-3 w-full overflow-hidden">

        <div class="bg-sideCard relative rounded-md w-full lg:px-3 xl:px-4 py-2 flex items-end justify-center lg:h-48 xl:h-56">
            <div class="absolute top-2 w-full flex items-center justify-center">
                <div class="rounded-2xl overflow-hidden shadow-lg lg:h-28 lg:w-32 xl:h-36 xl:w-40">
                    <img src="/img/Rectangle 57.png" alt="profile_img" class="w-full h-full">
                </div>
            </div>
            <div class="bg-innerCard w-full h-40 rounded-md p-2 flex flex-col items-center justify-end lg:h-24">
                <p class="text-base font-medium">FirstName LastName</p>
                <p class="text-base font-medium">Contact No.</p>
            </div>
        </div>

        <div class="bg-sideCard relative rounded-md w-full h-auto lg:px-3 xl:px-4 py-2 flex flex-col">
            <span class="flex items-center gap-x-2">
                <img src="/img/Game Console.png" alt="" class="h-6 lg:h-7">
                <p class="font-semibold text-white lg:text-base xl:text-lg">Games</p>
            </span>
            <div class="w-full flex flex-col gap-y-3 py-1.5">
                <RouterLink :to="{ name: 'TableGameView' }" class="hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl h-20 overflow-hidden relative flex items-center justify-center">
                    <img src="/img/coinv2.png" alt="" class="w-full h-full">
                    <p class="sidebar-title absolute z-20 text-center font-bold lg:text-2xl">Table Games</p>
                </RouterLink>
                <RouterLink :to="{ name: 'CardGameView' }" class="hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl h-20 overflow-hidden relative flex items-center justify-center">
                    <img src="/img/Card.png" alt="" class="w-full h-full">
                    <p class="sidebar-title absolute z-20 text-center font-bold lg:text-2xl">Card Games</p>
                </RouterLink>
            </div>
        </div>

        <div class="bg-sideCard rounded-md w-full h-auto py-3 flex flex-col gap-y-2 lg:px-3 xl:px-4">
            <span class="flex items-center gap-x-2">
                <img src="/img/Wallet.png" alt="" class="h-6 lg:h-7">
                <p class="font-semibold text-white lg:text-base xl:text-lg">Wallet</p>
            </span>
            <div class="w-full grid grid-cols-3 gap-x-1.5">
                <RouterLink :to="{ name: 'BuyCreditsView'}" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center gap-y-1.5 py-2">
                    <div class="flex items-center justify-center">
                        <img src="/img/Credits.png" alt="" class="h-8">
                    </div>
                    <small class="text-xs font-bold">Buy Credits</small>
                </RouterLink>
                <RouterLink :to="{ name: 'WithdrawView'}" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center gap-y-1.5 py-2">
                    <div class="flex items-center justify-center">
                        <img src="/img/Credits.png" alt="" class="h-8">
                    </div>
                    <small class="text-xs font-bold">Withdraw</small>
                </RouterLink>
                <RouterLink :to="{ name: 'HistoryView'}" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer rounded-md flex flex-col items-center justify-center gap-y-1.5 py-2">
                    <div class="flex items-center justify-center">
                        <img src="/img/Credits.png" alt="" class="h-8">
                    </div>
                    <small class="text-xs font-bold">History</small>
                </RouterLink>
            </div>
        </div>

        <div class="bg-sideCard relative rounded-md w-full h-auto py-2 flex flex-col lg:px-3 xl:px-4 ">
            <span class="flex items-center gap-x-2">
                <img src="/img/Account.png" alt="" class="h-6 lg:h-7">
                <p class="font-semibold text-white lg:text-base xl:text-lg">Account</p>
            </span>
            <div class="w-full flex flex-col gap-y-3 py-1.5">
                <RouterLink :to="{ name: 'SettingsView' }" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl py-2 overflow-hidden relative flex items-center justify-center">
                    <span class="flex items-center gap-x-2">
                        <img src="/img/Settings.png" alt="" class="h-4 lg:h-5">
                        <p class="text-center font-bold text-black text-xs lg:text-sm">Setting</p>
                    </span>
                </RouterLink>
                <RouterLink :to="{ name: 'ChangePassView' }" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl py-2 overflow-hidden relative flex items-center justify-center">
                    <span class="flex items-center gap-x-2">
                        <img src="/img/changepass.png" alt="" class="h-4 lg:h-5">
                        <p class="text-center font-bold text-black text-xs lg:text-sm">Change Password</p>
                    </span>
                </RouterLink>
                <RouterLink :to="{ name: 'ReferralView' }" class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl py-2 overflow-hidden relative flex items-center justify-center">
                    <span class="flex items-center gap-x-2">
                        <img src="/img/Invite.png" alt="" class="h-4 lg:h-5">
                        <p class="text-center font-bold text-black text-xs lg:text-sm">Referrals / Invite</p>
                    </span>
                </RouterLink>
                <div class="bg-walletCard hover:scale-110 transition-all duration-300 cursor-pointer w-full rounded-xl py-2 overflow-hidden relative flex items-center justify-center">
                    <span class="flex items-center gap-x-2">
                        <img src="/img/Logoutv2.png" alt="" class="h-4 lg:h-5">
                        <p class="text-center font-bold text-black text-xs lg:text-sm">Logout</p>
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.bg-sidebar {
    background-color: #37383A;
}
.bg-sideCard {
    background-color: #207184;
}

.bg-innerCard {
    background: radial-gradient(79.84% 402.73% at 50% 50%, #F2F4A4 0%, #E0E421 100%);
}

.fa-gamepad, .fa-wallet, .fa-user {
    color: #9DA017;
}

.bg-neutral {
    background-color: #37383A;
}

.btn-recharge {
    background: linear-gradient(89.26deg, #E0E421 -0.21%, #EDEF7E 100.21%);
    color: #207184;
}

.sidebar-title {
    color: #E0E421;
    text-shadow: 4px 3px 25px rgba(52, 186, 216, 1),10px 7px 22px rgba(52, 186, 216, 1),14px 7px 20px rgba(52, 186, 216, 1),4px 3px 12px rgba(52, 186, 216, 1),-5px 2px 10px rgba(52, 186, 216, 1);
}

.bg-walletCard {
    background: linear-gradient(89.26deg, #E0E421 -0.21%, #EDEF7E 100.21%);
    color: #747476;
}

small {
    font-size: 0.6rem;
}
</style>
