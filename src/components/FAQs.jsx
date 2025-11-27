import faqsData from "./data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <div className="p-5 mt-5 w-full sm:w-[600px] mx-auto bg-white rounded-lg">
        <h1 className="text-3xl text-shadow-2xs text-shadow-red-500 font-bold text-center mb-5"> FAQs </h1>
      {faqsData.map((faq) => <FAQ key={faq.id} {...faq} /> )}
    </div>
  )
}

export default FAQs
