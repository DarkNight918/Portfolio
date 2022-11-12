import React from 'react';
import './Blogs.css'
import img from '../img/portfolio/portfolio-1.jpg'
import img1 from '../img/portfolio/portfolio-3.jpg'
import img2 from '../img/portfolio/portfolio-8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const Blogs = () => {
  const blogs1 = [
    {
        title: 'Video Games',
        catagories: 'Games',
        description: 'Video gaming is an extremely popular leisure-time activity with more than two billion users worldwide (Newzoo, 2017).',
        imageUrl: img,
        postName: 'Morgan Desh',
        time: '10 min'
    },
    {
      title: 'Old Camers',
      catagories: 'Camera',
      description: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convalli a pellentesq.',
      imageUrl: img1,
      postName: 'Morgan Desh',
        time: '10 min'
        
    },
    {
      title: 'AI Table',
      catagories: 'AI Project',
      description: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convalli a pellentesq.',
      imageUrl: img2,
      postName: 'Morgan Desh',
        time: '10 min'
        

    }
]
  return (
    <section id="blogs" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h2 className="title-a">
                Blog
              </h2>
              <div className="line-mf mt-5"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs1.map(blog2 =>
              <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
            <div className="card-align card card-blog">
              <div className="card-img">
                <a href="blog-single.html"><img src={blog2.imageUrl} alt="" className="img-fluid"/></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                  <FontAwesomeIcon icon={faPinterest} />
                    <h6 className="category">{blog2.catagories}</h6>
                  </div>
                </div>
                <h1 className="card-title"><a href="blog-single.html">{blog2.title}</a></h1>
                <p className="card-description">
                  {blog2.description}
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  
                    <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle"/>
                    <span className="author">{blog2.postName}</span>
                  
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {blog2.time}
                </div>
              </div>
            </div>
          </div>
              )
          }
        </div>
      </div>
    </section>
  );
};

export default Blogs;