import PropTypes from 'prop-types'
import Button from './Button'

function Header({text, show, setShow}) {
    let onClick = (e) => {
        setShow(!show)
      }
  return (
    <div className='header'>
        <h1>{text}</h1>
        <Button onClick={onClick} color='green' text='Add' />
    </div>
  )
}

Header.defaultProps = {
    text: 'Task Tracker'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header