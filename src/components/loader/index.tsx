"use client"

import React, { useEffect, useRef } from "react"

import { gsap } from "gsap"

import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicEffect"

import { collapseWords, introAnimation, progressAnimation } from "./animations"
import { words } from "./data"
import {
  LoaderStyled,
  Overlay,
  Progress,
  ProgressNumber,
  ProgressWrapper,
  Word,
  Words,
  Wrapper,
} from "./loader.styles"

type Timeline = gsap.core.Timeline

const Loader = ({ timeline }: { timeline?: Timeline }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const progressNumberRef = useRef(null)
  const wordGroupRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1")
  }, [timeline])
  return (
    <Wrapper>
      <ProgressWrapper>
        <Progress ref={progressRef} />
        <ProgressNumber ref={progressNumberRef}>0</ProgressNumber>
      </ProgressWrapper>
      <LoaderStyled ref={loaderRef}>
        <Words>
          <Overlay></Overlay>
          <div ref={wordGroupRef}>
            {words.map((word, index) => {
              return <Word key={index}>{word}</Word>
            })}
          </div>
        </Words>
      </LoaderStyled>
    </Wrapper>
  )
}

export default Loader
