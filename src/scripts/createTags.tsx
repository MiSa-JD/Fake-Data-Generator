interface tagProps {
  contents: Array<string>
  className?: string
}
function renderTag({ contents, className }: tagProps) {
  return contents.map((tag, index) => (
    <button key={`${tag}-${index}`} className={className}>
      #{tag}
    </button>
  ))
}

export default renderTag
