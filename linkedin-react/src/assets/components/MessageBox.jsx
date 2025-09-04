import { Card, Button, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "../css/MediaQueries.css"

const MessageBox = () => {

  const profileData = useSelector((state) => state.profile.data);

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      right: '10px',
      width: '300px',
      zIndex: '1000'
    }}
    className='message-box'>
      {profileData && 
      <Card className='rounded-bottom-0'>
        <Card.Header className="d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center ">
            <Image
              src={profileData.image}
              alt="Avatar" 
              className="rounded-circle me-2" 
              style={{ width: '30px', height: '30px' }} 
            />
            <h5 className="mb-0">Messaggistica</h5>
          </div>
          <div>
            <Button variant="link" className="p-0 me-2 text-decoration-none text-dark">
              <i className="bi bi-three-dots"></i>
            </Button>
            <Button variant="link" className="p-0 me-2 text-decoration-none text-dark">
              <i className="bi bi-box-arrow-up-right"></i>
            </Button>
            <Button variant="link" className="p-0 text-decoration-none text-dark">
              <i className="bi bi-chevron-up"></i>
            </Button>
          </div>
        </Card.Header>
      </Card>
      }
    </div>
      
  );
};

export default MessageBox;