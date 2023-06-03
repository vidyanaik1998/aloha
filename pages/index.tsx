import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import Banner from '@/components/Banner'
import axios from "axios"
import Highlights from '@/components/highlist'
import Catergories from '@/components/category'
import Footer from '@/components/footer'

const HIGHLIGHT_URL: string = 'https://web-dev.dev.kimo.ai/v1/highlights'
const CATEGORY_URL: string = 'https://web-dev.dev.kimo.ai/v1/categories'


export default function Home({
  highlights,categories
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [highlightsList, setHighlightsList] = React.useState(highlights)
  const [categorysList, setCategorysList] = React.useState(categories)
 
  return (
    <main className='container'>
      <Banner />
      <Highlights highlist={highlightsList} />
      <Catergories category={categorysList} />
      <Footer />
    </main>
  )
}

export async function getStaticProps() {
  const highlightsres = await fetch(HIGHLIGHT_URL)
  const highlights: object = await highlightsres.json()
  const categoriesres = await fetch(CATEGORY_URL)
  const categories: object = await categoriesres.json()

  return {
    props: {
      highlights,
      categories
    },
  }
}