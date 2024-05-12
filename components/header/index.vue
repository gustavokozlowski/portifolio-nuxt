<template>
  <header :class="$style.header_container">
    <nav :class="$style.header_content">
      <h1>ShorlowWorld's</h1>
      <ul :class="$style.nav_list" >
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
.header_container{
  display: flex;
    background-color: var(--main-bg-color);
  

}

.header_content{
  display: flex;
  justify-content: space-around;
  background-color: bisque;
  width: 100%;
}

.nav_list{
  list-style: none;
  justify-content: space-around;
  align-items: center;
  gap: 2px;
  display: flex;
  background-color: blueviolet;
  width: 30%;

  > li {

    &:hover{
      cursor: pointer;
    }
  }
}

</style>
