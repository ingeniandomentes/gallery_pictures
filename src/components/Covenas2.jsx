import covenas2 from '../assets/img/covenas2.jpg'
import PropTypes from 'prop-types';

export const Covenas2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={covenas2} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Covenas2.propTypes = {
  className: PropTypes.string
};