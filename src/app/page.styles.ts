import { css } from "@ui/css"

export const main = css({
  height: "80vh",
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
})

export const gallery = css({
  width: "70%",
  "& p": {
    fontWeight: "bold",
    fontSize: "2vw",
  },
})
