import { MutableRefObject } from "react"

import { gsap } from "gsap"

export const introAnimation = (target: MutableRefObject<null>) => {
  const tl = gsap.timeline()
  tl.to(target.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  })
  return tl
}

export const collapseWords = (target: MutableRefObject<null>) => {
  const tl = gsap.timeline()
  tl.to(target.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  })

  return tl
}

export const progressAnimation = (
  target: MutableRefObject<null>,
  targetNumber: MutableRefObject<null>
) => {
  const tl = gsap.timeline()

  tl.to(target.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      targetNumber.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      targetNumber.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(targetNumber.current, {
      y: 24,
      autoAlpha: 0,
    })
  return tl
}
