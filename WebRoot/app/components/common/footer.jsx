import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container clearfix">
                    <div className="footer-link">
                        <h3 className="footer-link-title">用户帮助</h3>
                        <a className="footer-link-item" href="javascript:void(0)">常见问题</a>
                    </div>
                    <div className="footer-link">
                        <h3 className="footer-link-title">商务合作</h3>
                        <a className="footer-link-item" href="javascript:void(0)">我要开店</a>
                        <a className="footer-link-item" href="javascript:void(0)">加盟指南</a>
                    </div>
                    <div className="footer-link">
                        <h3 className="footer-link-title">关于我们</h3>
                        <a className="footer-link-item" href="javascript:void(0)">介绍</a>
                        <a className="footer-link-item" href="javascript:void(0)">加入我们</a>
                        <a className="footer-link-item" href="javascript:void(0)">联系我们</a>
                        <a className="footer-link-item" href="javascript:void(0)">平台规则</a>
                    </div>
                </div>
            </footer>
            );
    }
}

export default Footer;