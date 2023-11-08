import PropTypes from 'prop-types'
import Button from './Button'

function Header({text}) {
    let onClick = (e) => {
        console.log(e)
      }
  return (
    <div className='header'>
        <h1>{text}</h1>
        <Button onClick={onClick} color='green' text='Click Me!' />
    </div>
  )
}

Header.defaultProps = {
    text: 'Hello'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header