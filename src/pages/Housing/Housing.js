import React, { useEffect, useState } from 'react';
import Collapse from '../../components/Collapse/Collapse';
import housing from '../../data/housing.json';
import { useParams } from 'react-router-dom';

const Housing = () => {
  const { id } = useParams();

  const [selectedHousingIndex, setSelectedHousingIndex] = useState(null);

  useEffect(() => {
    const index = housing.findIndex((element) => element.id === id);
    setSelectedHousingIndex(index);
  }, [id]);

  return (
    <div className='housing-container'>
      <div className='housing-information-container'>
        <div className='housing-details-left-part'></div>
        <div className='housing-details-right-part'></div>
      </div>

      {selectedHousingIndex !== null ? (
        <div className='collapse-container'>
          <Collapse
            title='Description'
            description={housing[selectedHousingIndex].description}
            key={housing[selectedHousingIndex].id}
          />

          <Collapse
            title='Équipements'
            description={housing[selectedHousingIndex].equipments}
            key= {id + 0}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Housing;
