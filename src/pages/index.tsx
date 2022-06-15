import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Homepage from '../components/Home/index'

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name="Home" />
      <Homepage />
      <style global>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          :root {
              --brand-color: #1fb2a7;
              --dark-color: #0b0e16;
              --mid-color: #a4a5a8;
              --light-color: #ffffff;
          }
        `}
      </style>
    </>
  )
}
