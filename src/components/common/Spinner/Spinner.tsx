import { Spinner as RBSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <RBSpinner animation="border" role="status" className="text-center" >
        <span className="visually-hidden">Loading...</span>
      </RBSpinner>
    </div>
  )
}

export default Spinner