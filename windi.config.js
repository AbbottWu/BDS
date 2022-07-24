module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        //  'hero-pattern': "url('/img/hero-pattern.svg')",
        'texture': "url('/assets/2.jpg')",
      }
    }
  },
  plugins: [
    require('@windicss/plugin-icons'),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],  
}
