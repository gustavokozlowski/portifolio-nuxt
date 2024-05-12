<template>
  <header :class="$style.header_container">
    <span>
      <logo />
      <h1>ShorlowWorld's</h1>
    </span>
    <nav :class="$style.header_content">
      <ul :class="$style.nav_list">
        <li>home</li>
        <li>projetos</li>
        <li>experiências</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import '../../assets/css/globals.css'


</script>
<style module >
.header_container {
  display: flex;
  background: var(--main-bg-color);
  height: 10vh;
  align-items: center;
  border-bottom: 1px solid var(--primary-color);
  /* box-shadow: 0.2px 2px 0px 0px #ddd; */
}

.header_container span {
  display: flex;
  /* background-color: rgb(46, 32, 15); */
  align-items: center;
  height: 100%;
  width: 40vw;
  justify-content: center;

  h1 {
    color: var(--secondary-color);
    font-size: 1.4rem;

  }
}

.header_content {
  display: flex;
  justify-content: right;
  /* background-color: rgb(228, 216, 202); */
  width: 60vw;
  height: 100%;
}

.nav_list {
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  /* background-color: blueviolet; */
  width: 30vw;
  gap: 1rem;

  >li {
    transition: color 300ms linear;
    font-size: 1rem;
    color: var(--secondary-color);

    &:hover {
      cursor: pointer;
      color: var(--primary-color)
    }
  }
}
</style>
