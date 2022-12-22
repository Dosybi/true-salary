const SingleInput = ({
  title,
  description,
  amount,
  isDaily,
  isMonthly,
  isYearly,
  handleInputChange,
}) => {
  return (
    <div
      className={`mb-6 rounded-xl p-4 ${
        title === 'Зарплата на руки' ? 'bg-blue-50' : 'bg-gray-100'
      }`}
    >
      <div className="mb-1 text-xl font-bold">{title}</div>
      <div className="mb-2">{description}</div>
      <div className="relative mb-2 flex w-2/3">
        <input
          type="number"
          inputMode="numeric"
          className="mt-1 h-10 w-full appearance-none rounded-md border-gray-800 px-2 shadow-sm"
          placeholder={amount}
          onChange={(e) => handleInputChange(title, e.target.value)}
        />
        <div className="absolute right-6 py-3">
          {isDaily ? '₸/день' : isMonthly ? '₸/мес' : isYearly ? '₸/год' : ''}
        </div>
      </div>
    </div>
  )
}

export default SingleInput
