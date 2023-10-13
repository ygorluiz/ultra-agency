"use client"

import { useLayoutEffect, useState } from "react"

import { gsap } from "gsap"

import Hero from "@components/hero"
import Loader from "@components/loader"

import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicEffect"

type Timeline = gsap.core.Timeline

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeLine] = useState<Timeline>()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      })
      setTimeLine(tl)
    })
    return () => ctx.revert()
  }, [])
  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  )
}
