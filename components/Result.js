import Chart from './Chart'

const Result = ({ totalExpenses, totalBalance, income }) => {
  const expenses = String(totalExpenses)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')
  const balance = String(totalBalance)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')
  const percent = Math.round((totalExpenses / income) * 100)

  return (
    totalExpenses != 0 && (
      <div className="sticky bottom-0 -mx-4 mt-2 bg-cyan-900 px-8 py-4 text-white transition-all md:mx-0 md:rounded-t">
        <div className="flex">
          <div>
            <span className="text-2xl font-bold">{expenses} ₸/мес</span> или 
            {percent}% от зарплаты вы тратите на работу
          </div>
          <div className="-my-4 -mr-8 bg-green-500 py-4 px-8">
            <span className="text-2xl font-bold">{balance} ₸/мес</span> остаётся
          </div>
        </div>
      </div>
    )
  )
}

export default Result
