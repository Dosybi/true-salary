import { useState } from 'react'

import SingleInput from './SingleInput'

const categories = [
  {
    title: 'Зарплата на руки',
    description:
      'За вычетом налогов и других отчислений. Если оклад нестабильный, укажите среднемесячный.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Еда 🍱',
    description:
      'Посчитайте, сколько в день вы тратите на перекусы и обеды на работе, будь то еда из местного кафе или контейнеры из дома.',
    isDaily: true,
    amount: '0',
  },
  {
    title: 'Транспорт 🚌',
    description:
      'Такси или общественный транспорт на работу и домой. Если добираетесь на своей машине, укажите стоимость топлива.',
    isDaily: true,
    amount: '0',
  },
  {
    title: 'Образование 🎓',
    description:
      'Сколько стоят курсы, тренинги, мастер-классы и книги, которые работодатель вам не оплачивает.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Одежда и макияж 👔',
    description:
      'Деловые костюмы, сменная обувь, спецодежда или любая другая одежда, которая нужна вам для работы.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Жильё 🏡',
    description:
      'Если вы сняли жильё рядом с работой и теперь платите за аренду больше чем прежде, укажите разницу в цене.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Инструменты 🛠',
    description:
      'Подписки на сервисы для работы, специальные приложения или ПО, которое вы покупаете за свой счёт.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Дети 👶',
    description:
      'Возможно, пока вы на работе, за ребёнком присматривает няня или воспитатель в детском саду. Сколько это стоит?',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Подарки коллегам 🍻',
    description:
      'Обычно на подарки коллегам и корпоративы скидывается весь офис — посчитайте сколько денег на это уходит. А ещё вы, возможно, накрываете стол на свой день рождения.',
    isYearly: true,
    amount: '0',
  },
  {
    title: 'Терапия 🤦‍♂️',
    description:
      'Запишите расходы на психотерапевта, если основной предмет разговоров с ним — начальник, коллеги и выгорание.',
    isMonthly: true,
    amount: '0',
  },
  {
    title: 'Дополнительно 💵',
    description: 'Вспомните, какие ещё расходы вы несёте из-за работы.',
    isMonthly: true,
    amount: '0',
  },
]

const Inputs = ({ getResult }) => {
  const [data, setData] = useState(categories)

  const handleInputChange = (title, amount) => {
    const newData = data.map((item) =>
      item.title === title ? { ...item, amount: amount } : item
    )
    setData(newData)
    const newResult = {
      totalExpenses: Math.round(
        newData
          .filter((_, i) => i != 0)
          .map((item) => {
            let total = 0
            if (item.isDaily) {
              total += item.amount * 22
            } else if (item.isWeekly) {
              total += item.amount * 4.5
            } else if (item.isYearly) {
              total += item.amount / 12
            } else total += item.amount
            return total
          })
          .reduce((acc, cur) => +acc + +cur)
      ),
      totalBalance: Math.round(
        newData[0].amount -
          newData
            .filter((_, i) => i != 0)
            .map((item) => {
              let total = 0
              if (item.isDaily) {
                total += item.amount * 22
              } else if (item.isWeekly) {
                total += item.amount * 4.5
              } else if (item.isYearly) {
                total += item.amount / 12
              } else total += item.amount
              return total
            })
            .reduce((acc, cur) => +acc + +cur)
      ),
    }
    getResult(newResult, newData[0].amount)
  }

  return (
    <>
      {data.map((category) => {
        return (
          <SingleInput
            {...category}
            handleInputChange={handleInputChange}
            key={category.title}
          />
        )
      })}
    </>
  )
}

export default Inputs
