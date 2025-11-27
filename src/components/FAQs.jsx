import faqsData from "./data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <div className="p-4">
      {faqsData.map((faq) => <FAQ key={faq.id} {...faq} /> )}
    </div>
  )
}

export default FAQs
