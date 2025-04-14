const ProjectPage = ({ data }) => {
  return (
    <div className="ProjectPage">
      <div className="ProjectPage__section">
        <img src={data.mainImage} alt="Главное изображение" className="ProjectPage__image" />
        <div className="PP__overlay-text">{data.title}</div>
      </div>

      <div className="ProjectPage__description">
        <div className="PP__d-column">
          {data.gridInfo.map((item, index) => (
            <div className='PP__d-grid-column' key={index}>
              <h4 className='PP__d-grid-title'>{item.label}</h4>  
              <p className='PP__d-grid-paragraph'>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="PP__d-column-text">
          {data.description.map((paragraph, index) => (
            <p className='PP__d-column-text-paragraph' key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="PP__image-grid">
        {data.images.map((imgSrc, index) => (
          <div className="PP__grid-item" key={index}>
            <img className='PP__image-grid-img' src={imgSrc} alt={`Изображение ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
