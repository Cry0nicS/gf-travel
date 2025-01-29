<script setup lang="ts">
import {useFavicon} from "@vueuse/core";

useFavicon("/favicon.ico");
</script>
<template>
    <Html lang="en" />

    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
