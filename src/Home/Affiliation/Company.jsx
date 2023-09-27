function Company({company}) {
  return (
    <li>
      <img src={company.url} alt={company.name} />
    </li>
  )
}

export default Company
