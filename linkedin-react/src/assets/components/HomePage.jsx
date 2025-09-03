import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const HomePage = () => {
  return (
    <Container fluid className="bg-light min-vh-100">
      <Row className="justify-content-center py-4">
        {/* Left Sidebar */}
        <Col xs={12} md={3} lg={3} xl={2} className="mb-4">
          <div className="sticky-top" style={{ top: '20px' }}>
            <LeftSidebar />
          </div>
        </Col>

        {/* Main Content Area - Empty for now as requested */}
        <Col xs={12} md={6} lg={6} xl={8} className="mb-4">
          <div className="bg-white rounded shadow-sm p-4 min-vh-100">
            <h4 className="text-center text-muted py-5">
              Area principale - Feed e contenuti
            </h4>
            <p className="text-center text-muted">
              Questa è l'area dove verrà implementato il feed principale di LinkedIn
            </p>
          </div>
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={3} lg={3} xl={2} className="mb-4">
          <div className="sticky-top" style={{ top: '20px' }}>
            <RightSidebar />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
