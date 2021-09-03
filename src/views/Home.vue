<template>
  <div class="home">
    <a id="top" />
    <div class="home_content">
      <header class="home_header">
        <h5 class="home_header_subtitle">
          新商品・サービス創出型
          <br class="pc-hide" />デジタルトランスフォーメーションの
        </h5>
        <h1 class="home_header_title">
          概念実証・プロトタイプ <br class="pc-hide" />開発サービス
        </h1>
        <div class="home_header_subtitle">
          DX Poc / MVP Prototype Development Service
        </div>
        <p class="home_header_intro">
          お客様のデジタルトランスフォーメーション：DX<br
            class="pc-hide"
          />実現に向けて、エンタープライズ・アジャイルチームによるMVPを速やかに創出し、PoCを繰り返すことでお客様のDX事業成功支援を実現します。
        </p>
        <div class="home_header_btn_container">
          <v-btn
            :to="{ name: 'home', hash: '#work' }"
            rounded
            depressed
            x-large
            color="accent"
            class="home_header_btn"
          >
          </v-btn>
        </div>
      </header>
      <section id="parallaxContainer">
        <!-- 
            class: translate / params: speed
            class: fade / params: fadeIn, fadeInTransition, fadeOut, fadeOutTransition
            class: slide / params: slideIn, slideInTransition, slideOut, slideOutTransition
            class: dynStyle / params: styleAt, dynStyle
          -->
        <section
          class="seminar"
          scrollLength="2500"
          scrollLengthMobile="1500"
        ></section>
      </section>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "Home",
};
</script>
<style lang="scss">
.home {
  &_header {
    background-repeat: no-repeat;
    max-width: 100vw;
    &_intro {
      margin-bottom: 0;
      font-weight: 700;
    }
    &_subtitle {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      text-align: center;
      color: $secondaryColor;
    }
    &_btn {
      &_container {
        display: flex;
        justify-content: center;
      }
    }
  }
}
@media (min-width: 768px) {
  .home {
    &_header {
      padding-top: 5rem;
      height: 62.5vw;
      &_title {
        margin: 0 0 1.484375vw;
      }
      &_subTitle {
        font-size: 1.875vw;
      }
      &_intro {
        padding: 3rem;
        text-align: center;
      }
      &_btn {
        &_icon {
          font-size: 1.015625vw;
          margin-left: 0.859375vw;
        }
      }
    }
  }
}
</style>
