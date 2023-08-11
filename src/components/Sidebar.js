import React, { Component } from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Welcome', anchor: 'intro' },
        { content: 'Professional', anchor: 'one' },
        { content: 'Community', anchor: 'two' }
      ],
      links: [
        { content: 'Blog', to: '/blog' },
      ]
    };
  }

  render() {
    const { tabs, links } = this.state;
    console.log({ links })
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                return (
                  <li key={tab.anchor}>
                    <Scroll type="id" element={tab.anchor}>
                      <a href={`#${tab.anchor}`}>{tab.content}</a>
                    </Scroll>
                  </li>
                );
              })}
              {links.map((link, i) => {
              return (
                <li key={`link-${link.content}`}>
                  <Link to={link.to}>{link.content}</Link>
                </li>
              );
            })}
            </Scrollspy>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
