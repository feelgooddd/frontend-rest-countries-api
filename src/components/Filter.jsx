import './filter.css'

const Filter = ({ setRegion }) => {
  return (
    <section className='filter-area bg-component'>
      <select onChange={(e) => setRegion(e.target.value)}>
        <option value="" disabled>Filter by Region</option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  )
}

export default Filter