import React from 'react'

const Body = (props) => (
  <div className="row">
    {
      [1,2,3,4,5,6,7].map(item =>
        (
          <div class="col-6">{item} !!</div>
        )
      )
    }
  </div>
)

export default Body
