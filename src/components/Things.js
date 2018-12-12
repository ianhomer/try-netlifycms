import React from 'react'
import PropTypes from 'prop-types'

const Things = ({ data }) => (
  <div className="columns">
    {data.map(thing => (
      <div key={thing.name} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {thing.name}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${thing.value}
          </h2>
          <p className="has-text-weight-semibold">{thing.description}</p>
          <ul>
            {thing.lines.map(line => (
              <li key={line} className="is-size-5">
                {line}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Things.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      lines: PropTypes.array,
    })
  ),
}

export default Things
