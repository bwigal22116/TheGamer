const particleImages = [
  '/blooks/raccoon.png',
  '/blooks/turtle.png',
  '/blooks/goldfish.png',
  '/blooks/cow.png',
  '/blooks/chicken.png',
  '/blooks/pig.png',
  '/blooks/horse.png',
  '/blooks/sheep.png',
  '/blooks/cat.png',
  '/blooks/dog.png',
  '/blooks/hedgehog.png',
  '/blooks/owl.png',
];

const particleOpts = {
  particles: {
    number: {
      value: 12,
      density: { enable: true, value_area: 700 },
    },
    shape: {
      type: 'images',
      images: particleImages.map((image) => {
        return {
          src: image,
          height: 115,
          width: 100,
        };
      }),
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.6,
        sync: false,
      },
    },
    size: {
      value: 60,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  fullScreen: false,
};

tsParticles.load('particleContainer', particleOpts).catch((error) => {
  console.error(error);
});

const particles = tsParticles.domItem(0);
particles.play();
