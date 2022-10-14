import '../css/style.css'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const pinnedImageWrappers = document.querySelectorAll('.js-wrap');

// funcao Array wrapper
if (pinnedImageWrappers) {
  pinnedImageWrappers.forEach((wrapper) => {
    const inner = wrapper.querySelector('.js-inner');
    // const logoSmall = document.querySelectorAll('.logoSmall');
    // const passeio = document.querySelector('.passeio');
    // const parqueNautico = document.querySelector('.parqueNautico');
    // const parqueTangua = document.querySelector('.parqueTangua');
    // const federal = document.querySelector('.federal');
    // const escola = document.querySelector('.escola');
    // const carrosselPasseio = document.querySelector('.carrosselPasseio');
    // const memorialParanista = document.querySelector('.memorialParanista');
    // const musica = document.querySelector('.musica');
    // const palacioAvenida = document.querySelector('.palacioAvenida');
    
    
    const botanico = document.querySelector('.botanico');
    const tangua = document.querySelector('.tangua');
    const logo = document.querySelector('.logo');
    const floor = document.querySelector('.floor');
    const araucaria = document.querySelector('.araucaria');
    const arbustos = document.querySelector('.arbustos');
    const cloud = document.querySelector('.cloud');
    const cloudAnimation = document.querySelector('.cloud-animation');
    const scene2 = document.querySelector('.scene2');
    const arvoreNatal = document.querySelector('.arvoreNatal');
    const scene3 = document.querySelector('.scene3');
    
    let duration = 1,
      sections = gsap.utils.toArray(".scene"),
      // sectionIncrement = duration / (sections.length - 1),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // start: "top top",
          end: () => `+=${inner.offsetWidth}`
        }
      });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: duration,
      ease: "none"
    });

    gsap.to(araucaria, {
      x: -380,
      position: 'fixed',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        // trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })


    gsap.to(arbustos, {
      x: -200,
      position: 'fixed',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        // trigger: wrapper,
        pin: '.allContent',
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    })

    gsap.to(botanico, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(tangua, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(logo, {
      position: 'absolute',
      start: 'bottom'
    });

    gsap.to(floor, {
      position: 'fixed',
      start: 'bottom',
      end: 'bottom'
    });

    gsap.to(cloud, {
      position: 'fixed',
      start: 'top',
    });

    gsap.to(cloudAnimation, {
      position: 'fixed',
      start: 'top',
    });

    gsap.to(scene2, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(arvoreNatal, {
      position: 'absolute',
      start: 'top',
    });

    gsap.to(scene3, {
      position: 'absolute',
      start: 'top',
    });

    // gsap.to(logoSmall, {
    //   position: 'absolute',
    //   start: 'bottom'
    // });

    // gsap.to(passeio, {
    //   position: 'absolute',
    // });

    // gsap.to(parqueNautico, {
    //   position: 'absolute',
    // });

    // gsap.to(parqueTangua, {
    //   position: 'absolute',
    // });

    // gsap.to(federal, {
    //   position: 'absolute',
    // });

    // gsap.to(escola, {
    //   position: 'absolute',
    // });

    // gsap.to(carrosselPasseio, {
    //   position: 'absolute',
    // });

    // gsap.to(memorialParanista, {
    //   position: 'absolute',
    // });

    // gsap.to(musica, {
    //   position: 'absolute',
    // });

    // gsap.to(palacioAvenida, {
    //   position: 'absolute',
    // });

  });
}