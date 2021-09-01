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
      <section class="main">
        <div class="main_grid">
          <div class="main_grid_child"></div>
        </div>
        <div class="main_seminar main_bg">
          <div class="main_seminar_message">
            <p>住宅購入に関するセミナーをみてみよう</p>
          </div>
          <p class="main_subMessage">
            住宅購入に関して、事前に知っておきたいことや、<br />気になることはありませんか？<br />まずは知識を身に付けるために<br />セミナー講座を見てみましょう。
          </p>
        </div>
        <div class="main_seminar main_bg">
          <div class="main_seminar_message">
            <p>チャットで気軽に質問</p>
          </div>
          <p class="main_subMessage">
            質問したいと思っても電話だとためらってしまう・・<br />そんなときにチャットなら気軽に質問できます。
          </p>
        </div>
        <div class="main_video main_bg">
          <div class="main_video_message">
            <p>具体的なお金の話を直接聞いてみたい</p>
          </div>
          <p class="main_subMessage">
            具体的な提案を受けたい、質問したいことがたくさんある、そんな時は1on1のビデオ会議を活用しましょう。
          </p>
        </div>
        <div class="main_simulation main_bg">
          <div class="main_simulation_message">
            <p></p>
          </div>
          <p class="main_subMessage">
            ビデオ会議しながらその場でプラン出力や、<br />各カテゴリでの絞り込みが可能です。
          </p>
        </div>
        <div class="main_story">
          <div class="main_story_01 rellax" data-rellax-speed="-5">
            <div class="main_story_01_img">
              <img src="@/assets/img/conference_1280.jpg" alt="" />
            </div>
            <p class="main_story_message">
              豊富なテーマ満載のセミナーから<br />住宅購入に関するセミナーをピックアップ。
            </p>
          </div>
        </div>
        <div class="main_story_02">
          <div class="main_story_02_img">
            <img src="@/assets/img/dog_1280.jpg" alt="" />
          </div>
          <p class="main_story_message">
            「人生の三大資金準備 -住宅資金準備-」<br />資料を見ながらわかりやすく解説してくれます。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
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
.main {
  position: relative;
  &_grid {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    &_child {
      height: 100%;
      margin-top: 12rem;
      border-right: 1px solid #fff;
      width: 50%;
    }
  }
  &_bg {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  &_seminar {
    background-image: url("assets/img/girl_1920.jpg");
    &_message {
      padding-top: 5rem;
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
