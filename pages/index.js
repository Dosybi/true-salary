import Head from 'next/head'
import { useState } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'
import Chart from '../components/Chart'

export default function Home() {
  const [result, setResult] = useState({ totalExpenses: 0, totalBalance: 0 })
  const [total, setTotal] = useState()
  const getResult = (result, total) => {
    setResult(result)
    setTotal(total)
  }
  return (
    <>
      <Head>
        <title>Сколько вы тратите пока зарабатываете</title>
        <meta
          name="description"
          content="Сколько вы тратите пока зарабатываете"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white px-4 pt-4">
        <Description />
        <Inputs getResult={getResult} />
        <Chart data={result} />
        <Result
          totalExpenses={result.totalExpenses}
          totalBalance={result.totalBalance}
          income={total}
        />
      </main>
    </>
  )
}
