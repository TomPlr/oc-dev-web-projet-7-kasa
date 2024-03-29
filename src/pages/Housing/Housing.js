import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Slideshow from '../../components/Slideshow/Slideshow';
import housing from '../../data/housing.json';
import NotFound from '../NotFound/NotFound';
import './Housing.scss';

const Housing = () => {
  const { id } = useParams();
  const dataHousing = housing.find((element) => element.id === id);
  const ownerName = dataHousing?.host.name.split(' ', 2);

  if (!dataHousing) {
    return <NotFound />;
  }

  return (
    <div className='housing-container'>
      <div>
        <Slideshow gallery={dataHousing.pictures} />
      </div>

      <div className='housing-information-container'>
        <div className='housing-details-left-part'>
          <h2 className='housing-title'>{dataHousing.title}</h2>
          <p className='housing-location'>{dataHousing.location}</p>
          <div className='housing-tags'>
            {dataHousing.tags.map((tag) => (
              <div className='tag' key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='housing-details-right-part'>
          <div className='owner'>
            <div className='owner-full-name'>
              <p className='owner-name'>{ownerName[0]}</p>
              <p className='owner-name'>{ownerName[1]}</p>
            </div>
            <img
              src={dataHousing.host.picture}
              alt=''
              className='owner-picture'
            />
          </div>
          <Rating rate={dataHousing.rating} />
        </div>
      </div>

      <div className='housing-collapse-container'>
        <Collapse
          title='Description'
          description={dataHousing.description}
          opened={true}
        />
        <Collapse
          title='Équipements'
          description={dataHousing.equipments}
          opened={true}
        />
      </div>
    </div>
  );
};

export default Housing;
