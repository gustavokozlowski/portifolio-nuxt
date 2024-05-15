<template>
  <div :class="$style.home_container">
    <span>
      <h1 :class="$style.home_title">Quem é Gustavo Kozlowski?</h1>
      <p>Gustavo Kozlowski é um desenvolvedor front-end que conta com mais de dois anos de experiência, familiarizado com
        as principais tecnologias do mercado.
        Atuando em apps e projetos para a web, pretendo agregar valor ao seu produto através do meu knowhow atrelado a
        minha versatilidade.
      </p>
    </span>
    <div :class="$style.home_content">
      <section :class="$style.content_tecnologies">
        <h2>Tecnologias</h2>
        <div :class="$style.tecnologies_lists">
          <span :class="$style.list">
            <label>Front-end</label>
            <ul id="front-end">
              <li>
                <img src="../assets/images/front/file-type-reactts.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-angular.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-light-next.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-vue.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-nuxt.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-html.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-css.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-styled.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-sass.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/file-type-tailwind.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/bootstrap-plain-wordmark.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/front/less-plain-wordmark.svg" alt="">
              </li>
              <li>
                <img src="../assets/images/tools/redux-original.svg" alt="" />
              </li>
              <li>
                <img :id="$style.material_icon" src="../assets/images/front/material-ui.svg" alt="">
              </li>
            </ul>
          </span>
          <span :class="$style.list">
            <label for="back-end">Back-end</label>
            <ul id="back-end">
              <li> <img src="../assets/images/back/node-js.svg" alt=""></li>
              <li> <img src="../assets/images/back/file-type-mongo.svg" alt=""></li>
              <li> <img src="../assets/images/back/file-type-pgsql.svg" alt=""></li>
              <li> <img src="../assets/images/back/file-type-firebase.svg" alt=""></li>
            </ul>
          </span>
          <span :class="$style.list">
            <label for="mobile">Mobile</label>
            <ul>
              <li>
                <img src="../assets/images/front/file-type-reactjs.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/mobile/file-type-flutter.svg" alt="" />
              </li>
            </ul>
          </span>
          <span :class="$style.list">
            <label for="tools">Tools</label>
            <ul>
              <li>
                <img src="../assets/images/tools/mark-github.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-git.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/figma.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-jest.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-light-expo.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/docker-original-wordmark.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-npm.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-editorconfig.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-storybook.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/file-type-yarn.svg" alt="" />
              </li>
              <li>
                <img src="../assets/images/tools/gulp-plain.svg" alt="" />
              </li>
            </ul>
          </span>
          <span :class="$style.list">
            <label for="languages">Linguagens</label>
            <ul>
              <li>
                <img src="../assets/images/languages/file-type-js-official.svg" alt=""/>
              </li>
              <li>
                <img src="../assets/images/languages/file-type-typescript-official.svg" alt=""/>
              </li>
              <li>
                <img src="../assets/images/languages/file-type-dartlang.svg" alt=""/>
              </li>
              <li>
                <img src="../assets/images/languages/file-type-jar.svg" alt=""/>
              </li>
            </ul>
          </span>
        </div>
      </section>

      <section class="content_feedbacks">

      </section>
      <section class="content_contacts">

      </section>
    </div>
  </div>
</template>

<script >
import '../../assets/css/globals.css'



</script>

<style module>
.home_container {
  background: var(--main-bg-color);
  padding-top: 4rem;
  height: 500vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--primary-color);
  gap: 2rem;

}

.home_container span {
  display: flex;
  /* background-color: burlywood; */
  width: 40vw;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--secondary-color);
    font-weight: 700;
  }
}

.home_title {
  font-size: 1.5rem;
}

.home_content {
  /* background-color: #ddd; */
  padding-top: 1rem;
  margin: 0;

  width: 80vw;
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  color: var(--secondary-color);
  flex-wrap: wrap;
}

.home_content h2{
  color: var(--primary-color);
}

.content_tecnologies {
  /* background-color: azure; */
  align-items: center;
  display: flex;
  flex-direction: column;
  /* background-color: var(--secondary-color); */
  border-radius: 10px;
  padding: 0.5rem;
}

.tecnologies_lists {
  /* background-color: beige; */
  gap: 0.5rem;
  display: flex;
  width: 40vw;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
}

.tecnologies_lists .list {
  display: flex;
  align-items: start;
  width: 40vw;

}

.list ul {
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  gap:0.5rem;
}

li img {
  width: 4vw;
  height: 7dvh;
  background-color: #ddd;
  border-radius: 5px;
  padding: 0.5rem;
}

</style>
