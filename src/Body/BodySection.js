
import './BodySection.css'
import PostSections from './Post/PostSections'

import TabContainer from 'react-bootstrap/TabContainer'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { RiHome2Line } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiBookmarkSimple } from "react-icons/pi";

function BodySection() {
    return (
      <div className="BodySection" >
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item  className="flex-item">
                  <RiHome2Line size={30} color="white"/>
                  <Nav.Link eventKey="first"  className= "flex-link" >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item  className="flex-item">
                  <RiNotification2Line size={28} color="white"/>
                  <Nav.Link eventKey="second"  className= 'flex-link'>Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item  className="flex-item">
                  <AiFillMessage size={30} color="white"/>
                  <Nav.Link eventKey="third" className= 'flex-link'>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item  className="flex-item">
                  <PiBookmarkSimple size={30}color="white"/>
                  <Nav.Link eventKey="fourth" className= 'flex-link'>Bookmarks</Nav.Link>
                </Nav.Item>
                <Nav.Item  className="flex-item">
                  <GoPerson size={30}color="white"/>
                  <Nav.Link eventKey="fifth" className= 'flex-link'>Profile</Nav.Link>
                </Nav.Item>
            </Nav>
          </Col>
          <Col sm={6}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PostSections/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        </TabContainer>

      </div>
    );
  }
  
  export default BodySection;