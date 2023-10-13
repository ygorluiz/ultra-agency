import { styled } from "@ui/jsx"

export const Wrapper = styled("div", {
  base: {
    position: "fixed",
    height: "100%",
    width: "100%",
    inset: 0,
    overflow: "hidden",
  },
})

export const ProgressWrapper = styled("div", {
  base: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "5vh",
    width: "100%",
    zIndex: 3,
  },
})
export const Progress = styled("div", {
  base: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    transform: "scaleX(0)",
    transformOrigin: "left center",
  },
})
export const ProgressNumber = styled("div", {
  base: {
    position: "absolute",
    left: "-5vw",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 4,
    whiteSpace: "nowrap",
    color: "white",
    fontSize: "3.2rem",
  },
})
export const LoaderStyled = styled("div", {
  base: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    overflow: "hidden",
    zIndex: 2,
  },
})

export const Words = styled("div", {
  base: {
    position: "relative",
    overflow: "hidden",
    height: "52.8rem",
  },
})

export const Overlay = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
    height: "100%",
    zIndex: 2,
    background: `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9) 47%,
      transparent,
      transparent 47%,
      transparent,
      transparent 55%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 0.9)
    )`,
  },
})

export const Word = styled("span", {
  base: {
    display: "block",
    fontSize: "3.2rem",
  },
})
