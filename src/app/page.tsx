"use client"

import { useLayoutEffect, useRef, useState } from "react"

import gsap from "gsap"

import Hero from "@components/hero"
import Loader from "@components/loader"

import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicEffect"

type Timeline = gsap.core.Timeline
let callCount = 0

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false)
  const [tl, setTl] = useState<Timeline>()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      })
      setTl(tl)
    })
    return () => ctx.revert()
  }, [])
  return <main>{loaderFinished ? <Hero /> : <Loader timeline={tl} />}</main>
}
