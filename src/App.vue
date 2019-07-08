<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
body {
  margin: 0px 15px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  p, h1, h2, h3, h4 {
    margin: 0px;
  }
  input {
    outline: none;
  }
  div, a, span, input, textarea {
    position: relative;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}

.container {
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
  padding: 50px 0px;
}

.todo {
  &__navigation {
    border: none;
    padding: 10px;
    margin: 0px 15px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    &__block {
      margin-top: 5px;
    }
    &:first-child {
      margin-left: 0px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
  &__length {
    margin-bottom: 15px;
    display: inline-block;
    text-align: right;
    width: 100%;
    font-size: 14px;
  }
  &__button {
    outline: none;
    padding: 0px;
    margin-bottom: 15px;
    margin-right: 15px;
    background: transparent;
    border: 0;
    font-size: 16px;
    cursor: pointer;
    &:last-child {
      margin-right: 0px;
    }
  }
  &__delete {
    color: #ff0000;
  }
  &__back {
    color: blue;
  }
  &__save {
    color: green;
  }
  .checkbox {
    z-index: 5;
    position: absolute;
    height: 100%;
    &--single {
      right: 0;
      top: 0;
      .checkbox__content {
        &:before {
          right: 0;
          left: unset;
        }
        &:after {
          right: 5px;
          left: unset;
        }
      }
    }
    input {
      position: absolute;
      display: none;
    }
    &__content {
      position: absolute;
      height: 100%;
      cursor: pointer;
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        border: 2px #dfdfdf solid;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - (20px / 2));
        left: 10px;
      }
      &:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background: lightgreen;
        border-radius: 50%;
        top: calc(50% - (10px / 2));
        left: 15px;
        opacity: 0;
        transition: opacity .3s ease-in-out;
      }
    }
    input:checked + .checkbox__content:after {
      opacity: 1;
    }
  }
  &__text {
    font-size: 16px;
    margin-bottom: 10px;
    position: relative;
  }
  &__input {
    width: 100%;
    padding: 15px 10px;
    border-radius: 5px;
    border: 1px #dfdfdf solid;
    &--single {
      margin-bottom: 15px;
    }
    &::placeholder {
      opacity: 0.5;
    }
    font: {
      size: 16px;
    }
  }
  &__items {
    margin: {
      top: 15px;
    }
  }
  &__item {
    &__link {
      vertical-align: top;
      padding: 15px 40px 15px 40px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      position: relative;
      display: inline-block;
      margin-top: -1px;
      border: 1px #dfdfdf solid;
      &.completed {
        text-decoration: line-through;
      }
      &:first-child {
        margin-top: 0px;
      }
    }
    &:hover {
      .remove {
        opacity: 1;
      }
    }
    &:first-child {
      border: {
        top-right-radius: 5px;
        top-left-radius: 5px;
      }
    }
    &:last-child {
      border: {
        bottom-right-radius: 5px;
        bottom-left-radius: 5px;
      }
    }
    .remove {
      position: absolute;
      top: calc(50% - (18px / 2));
      right: 20px;
      opacity: 0;
      cursor: pointer;
      transition: opacity .3s ease-in-out;
    }
  }
}

</style>
