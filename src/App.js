import React, { Suspense } from "react"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Greetings from "./components/Greetings"
import Loading from "./components/Loading"
import Navigation from "./components/Navigation"
import Text from "./components/Text"
import LocaleContext from "./LocaleContext"

function App() {

  return (
    <LocaleContext>
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Container>
          <Greetings />
          <Text />
        </Container>
      </Suspense>
    </LocaleContext>
  )
}

export default App
