import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './style.scss';

class KCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    const { items } = this.props;
    return (
      <Carousel
        className={style.container}
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {items.map((e, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={e.src}
              alt={e.alt}
            />
            {e.caption && <Carousel.Caption>
              <h3>{e.caption.title || ''}</h3>
              <p>{e.caption.desc || ''}</p>
            </Carousel.Caption>}
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default KCarousel;