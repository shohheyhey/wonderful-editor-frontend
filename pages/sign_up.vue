<template>
  <div>
    <form id="contact">
      <div :class="$style.sign_up_container">
        <div class="head">
          <h2>ユーザー登録</h2>
        </div>
        <input type="text" name="name" placeholder="アカウントネーム" /><br />
        <input type="email" name="email" placeholder="メールアドレス" /><br />
        <input type="password" name="password" placeholder="パスワード" /><br />
        <button id="submit" :class="$style.sign_up_button" type="submit">
          登録
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" module>
.sign_up_container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #fafafa;
}

h2 {
  text-align: center;
  padding: 18px 0 18px 0;
  font-size: 1.4em;
}
input {
  margin-bottom: 10px;
}

input:first-of-type {
  margin-top: 35px;
}
input {
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: 'Source Sans Pro', arial, sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color: #fafafa;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
.sign_up_button {
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #3185df;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 30%;
  color: #fff;
}
button:hover,
.button:hover {
  background: #19a08c;
}

/* media queries */
@media (max-width: 700px) {
  label.error {
    width: 90%;
  }
  input,
  textarea {
    width: 90%;
  }
  button {
    width: 90%;
  }
  body {
    padding-top: 10px;
  }
}
.message {
  font-family: 'Source Sans Pro', arial, sans-serif;
  font-size: 1.1em;
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #2abca7;
  width: 80%;
  margin: auto;
  color: #fafafa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>
