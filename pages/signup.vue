<!-- @format -->

<template>
  <div class="login-page">
    <div class="bg-blue-50 h-screen flex justify-center items-center">
      <div class="bg-white px-6 py-8 shadow-md rounded-md max-w-lg">
        <h1 class="mb-8 text-3xl text-center">Signup</h1>

        <form class="w-[400px]">
          <AtomsInput type="email" placeholder="Email" />
          <AtomsInput type="password" placeholder="Password" />
          <AtomsInput type="password" placeholder="Confirm Password" />
          <AtomsButton type="secondary" class="w-full"
            >Create Account</AtomsButton
          >
        </form>
        <p class="mt-3 text-sm">
          <span> Do have an account? </span>
          <NuxtLink class="text-blue-500" to="/login">Login</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
