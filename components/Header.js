import React from 'react';
import styles from '../styles/components/Header.module.css';
import { Row, Col, Menu } from 'antd';
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined
  } from '@ant-design/icons';

const Header = () => {
    return(
    <div className={styles.header}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={12} md={10} lg={10} xl={10}>
                <span className={styles.logo}>{`Alex's Blog`}</span>
                <span className={styles.slogan}>There is no failure expect in no longer trying</span>
            </Col>
            <Col xs={0} sm={12} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined/>
                        Home
                    </Menu.Item>
                    <Menu.Item key="video">
                        <YoutubeOutlined />
                        Video
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />
                        life
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>        
    )

}

export default Header;