<template>
  <nav role="navigation">
    <div id="menuToggle">
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <input type="checkbox"/>
      <ul id="menu">
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Info</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
 export default {
  name: "Navbar"
 }
</script>

<style scoped lang="scss">
  nav {
    background-color: #f8f9fa;
    max-width: 1080px;
    margin: 0 auto;
    #menuToggle {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      input {
        position: absolute;
        height: 32px;
        width: 32px;
        opacity: 0;
        z-index: 1;
      }
      input:checked ~ #menu {
        max-height: 240px;
      }
      #hamburger {
        visibility: hidden;
        position: relative;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin: 0.75rem 0.5rem;
        span {
          display: block;
          height: 4px;
          width: 33px;
          background-color: #cdcdcd;
          margin: 0.1rem 0;
          border-radius: 2px;
        }
        @media screen and (max-width: 768px) {
          display: flex;
        }
      }
      #menu {
        display: flex;
        align-items: center;
        padding: 0;
        overflow: hidden;
        transition: max-height .2s ease-out;
        li {
          list-style: none;
        }
        a {
          margin: 0 1rem;
          color: #6e6e6f;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: #1d1d1e;
          }
        }
        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          max-height: 0;
          a {
            padding: 1rem 0;
          }
        }
      }
    }
  }
</style>