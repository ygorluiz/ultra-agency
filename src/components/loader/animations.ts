import { gsap } from "gsap"

export const introAnimation = (wordGroupRef: { current: gsap.TweenTarget }) => {
  const tl = gsap.timeline()
  tl.to(wordGroupRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  })
  return tl
}

export const collapseWords = (wordGroupRef: { current: gsap.TweenTarget }) => {
  const tl = gsap.timeline()
  tl.to(wordGroupRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  })

  return tl
}

export const progressAnimation = (
  progressRef: { current: gsap.TweenTarget },
  progressNumberRef: { current: gsap.TweenTarget }
) => {
  const tl = gsap.timeline()

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    })
  return tl
}
