import Image from "next/image"

import {
  HeroWrapper,
  Img,
  ImgOverlay,
  Line,
  Title,
  Top,
} from "@components/hero/hero.styles"
import Logo from "@components/logo"





const Hero = () => {
  return (
    <HeroWrapper>
      <Top>
        <div data-menu-item>
          <Logo />
        </div>
        <span data-menu-item>about</span>
        <span data-menu-item>contact</span>
      </Top>

      <Title>
        <span data-title-first>Ultra</span>
        <Line data-hero-line></Line>
        <span data-title-last>agency</span>
      </Title>

      <Img>
        <ImgOverlay data-image-overlay></ImgOverlay>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </Img>
    </HeroWrapper>
  )
}

export default Hero
