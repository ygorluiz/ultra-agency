import { styled } from "@ui/jsx"





export const HeroWrapper = styled("section", {
  base: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
})

export const Top = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginInline: "4rem",
    marginTop: "3.2rem",
  },
})

export const Title = styled("h1", {
  base: {
    position: "absolute",
    top: "50%",
    left: "4rem",
    width: "calc(100% - 8rem)",
    transform: "translateY(-50%)",
    marginBottom: "8rem",
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    gap: "3.2rem",
    fontSize: "16rem",
  },
})

export const Line = styled("span", {
  base: {
    display: "inline-block",
    height: "0.4rem",
    width: "100%",
    backgroundColor: "black",
    transform: "scaleX(1)",
    transformOrigin: "center center",
  },
})

export const Img = styled("div", {
  base: {
    overflow: "hidden",
    position: "absolute",
    bottom: "0vh",
    height: "37vh",
    left: 0,
    width: "100%",
    transformOrigin: "top center",
  },
})

export const ImgOverlay = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
    zIndex: 3,
    backgroundColor: "black",
    transform: "scaleY(0.31)",
    transformOrigin: "bottom center",
  },
})
