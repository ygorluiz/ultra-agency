"use client"

import { useLayoutEffect, useRef, useState } from "react"

import gsap from "gsap"

import Hero from "@components/hero"
import Loader from "@components/loader"

import { useEffectOnce } from "@hooks/useEffectOnce"
import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicEffect"

type Timeline = gsap.core.Timeline
let callCount = 0

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false)
  const [tl, setTl] = useState<Timeline>()

  useEffectOnce(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        onComplete: () => self.add(() => setLoaderFinished(true)), // <-- this is the key
      })
      setTl(tl)
    })
    return () => ctx.revert()
  })
  return <main>{loaderFinished ? <Hero /> : <Loader timeline={tl} />}</main>
}
