This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

My users will be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JavaScript

### What I learned

I must say I learnt a lot in this project especially working with eventListeners. The codes below were a thing of joy for me after i got them working. I enjoyed the logic application for the tip-calculator. Also, google was my friend through out the entire process especially hiding the arrows within the textfield in css.

see below:

```html
<input
  type="number"
  name="number"
  class="bills bills--2"
  placeholder="0"
  oninput="checkLength(2,this)"
  onblur="invalid(this)"
  onfocus="valid(this)"
/>
```

```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

```js
if (billValue > 0 && persons > 0 && persons <= 20 && e.target.value > 0) {
  const tipAmount = (billValue / persons) * Number(e.target.value / 100);
  tipValue.textContent = `$${tipAmount.toFixed(2)}`;
  const totalAmount = billValue / persons + tipAmount;
  totalValue.textContent = `$${totalAmount.toFixed(2)}`;
} else {
  totalValue.textContent = tipValue.textContent = "$0.00";
}
```

### Continued development

Still getting pretty confident writing frontend code. I must say I'm impressed with my progress so far. More focus will be on DOM manipulation.

## Author

- Frontend Mentor - [@Kl3va](https://www.frontendmentor.io/profile/Kl3va)
- Twitter - [@_Kl3va_](https://www.twitter.com/_Kl3va_)

## Acknowledgments

I would like to give a shout out to Jonas Schmedtmann. His udemy courses have been very helpful in my journey to become a professional FrontEnd Developer and also to the entire team at frontendmentor... Much love.
