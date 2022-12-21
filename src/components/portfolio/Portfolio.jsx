import "./portfolio.scss"

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">React.js Applications</li>
      </ul>
      <div className="container">
        <div className="item">
        <img src="assets/IMG_3116.PNG" alt="" />
          <h3>
            Todo List
          </h3>
        </div>
        <div className="item">
        <img src="assets/IMG_3116.PNG" alt="" />
          <h3>
            Todo List
          </h3>
        </div>
        <div className="item">
        <img src="assets/IMG_3116.PNG" alt="" />
          <h3>
            Todo List
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio