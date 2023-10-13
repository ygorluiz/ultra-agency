import { css } from "@ui/css"
import { Center, styled } from "@ui/jsx"

export default async function NotFound() {
  return (
    <Center height={"100%"} width={"100%"} flexDirection={"column"}>
      <Center flexDirection={"column"}>
        <h3
          className={css({
            fontSize: "24px",
          })}
        >
          Oops! Page not found !
        </h3>
        <h1
          className={css({
            fontSize: "252px",
            fontWeight: 900,
            letterSpacing: "-40px",
          })}
        >
          <styled.span textShadow={"-8px 0 0 background"}>4</styled.span>
          <styled.span textShadow={"-8px 0 0 background"}>0</styled.span>
          <styled.span textShadow={"-8px 0 0 background"}>4</styled.span>
        </h1>
      </Center>

      <h2>
        Você não quebrou a internet, mas não conseguimos encontrar o que você
        está procurando.
      </h2>
    </Center>
  )
}
