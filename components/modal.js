import { useRouter } from 'next/router';

const Modal = ({handleIndex,index}) => {
  const router = useRouter();
	const { Modal } = router.query;
  
  let closeButton = null

  const submitModal = () => {
    closeButton.click()
      router.push('/')
  }

  const nominateMovie = (index)=>{
    handleIndex(index)
  }

  const handleClose =()=>{
    router.push('/nominee')
  }


  return (
    <div>
      <button 
      onClick={()=>nominateMovie(index)}
      type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Nominate
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Movie Nominated</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Your movie have been added to Nominee
            </div>
            <div className="modal-footer">
              <button 
              onClick={handleClose}
              ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">See Nominee</button>
              <button onClick={submitModal} type="button" className="btn btn-primary">Stay in Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
