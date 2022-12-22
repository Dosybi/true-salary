const content = {
  title: 'Сколько вы тратите пока зарабатываете',
  text: [
    'Работа стоит денег и съедает часть зарплаты.',
    'Калькулятор считает, сколько вы получаете на самом деле с учётом расходов, связанных с работой.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="first-of-type:mb-2" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default Description
