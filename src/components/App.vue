<template>
    <div class="app">
        <Header />
        <Navbar />
        <div class="pages-container">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script>
    import Header from '@components/Header';
    import Navbar from '@components/Navbar'
    import Footer from '@components/Footer';

    export default {
        components: {
            Header,
            Footer,
            Navbar
        }
    };
</script>
<style lang="scss" scoped>
    .app {
        position: relative;
        min-height: 100%;
    }

    .pages-container {
        max-width: 1080px;
        margin: 0 auto;
    }
</style>