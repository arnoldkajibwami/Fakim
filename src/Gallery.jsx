import React, { useState, useEffect } from 'react';
import './gallery.css'
import './gallery2.css'
import LoaderPage from './Loader';
import Image1 from './images/2.jpg'
import Image2 from './images/10.jpg'
import Image3 from './images/8.jpg'
import Image4 from './images/6.jpg'
// import Image5 from './images/7.jpg'
import Image6 from './fakimimage/c1.jpg'
import Image7 from './fakimimage/c2.jpg'
import Image8 from './fakimimage/c3.jpg'
import Image9 from './fakimimage/c4.jpg'
import Image10 from './fakimimage/c5.jpg'
import Image11 from './fakimimage/c6.jpg'
import Image12 from './fakimimage/c7.jpg'
import Image13 from './fakimimage/c25.jpg'
import Image14 from './fakimimage/c26.jpg'
import Image15 from './fakimimage/c10.jpg'
import Image16 from './fakimimage/c15.jpg'
import Image17 from './fakimimage/c12.jpg'
import Image18 from './fakimimage/c17.jpg'
import Image19 from './fakimimage/c14.jpg'
import Image20 from './fakimimage/p1.jpg'
import Image21 from './fakimimage/p2.jpg'
import Image22 from './fakimimage/p3.jpg'
import Image23 from './fakimimage/p4.jpg'
import Image24 from './fakimimage/p5.jpg'
import Image25 from './fakimimage/p9.jpg'
import Image26 from './fakimimage/p8.jpg'
import video3 from './fakimimage/v1.mp4'
import video2 from './fakimimage/v2.mp4'
import video1 from './fakimimage/v3.mp4'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
    
        // { src: Image5, alt: 'Image 5', description: 'camion', filter: "engin" },
        { src: Image6, alt: 'Image 6', description: 'camion', filter: "engin" },
        { src: Image7, alt: 'Image 7', description: 'camion', filter: "engin" },
        { src: Image8, alt: 'Image 8', description: 'camion', filter: "engin" },
        { src: Image9, alt: 'Image 9', description: 'camion', filter: "engin" },
        { src: Image10, alt: 'Image 10', description: 'camion', filter: "engin" },
        { src: Image11, alt: 'Image 11', description: 'camion', filter: "engin" },
        { src: Image12, alt: 'Image 12', description: 'camion', filter: "engin" },
        { src: Image13, alt: 'Image 13', description: 'camion', filter: "engin" },
        { src: Image14, alt: 'Image 14', description: 'camion', filter: "engin" },
        { src: Image15, alt: 'Image 15', description: 'camion', filter: "engin" },
        { src: Image16, alt: 'Image 16', description: 'camion', filter: "engin" },
        { src: Image17, alt: 'Image 17', description: 'camion', filter: "engin" },
        { src: Image18, alt: 'Image 18', description: 'camion', filter: "engin" },
        { src: Image19, alt: 'Image 19', description: 'camion', filter: "engin" },
        { src: Image20, alt: 'Image 20', description: 'Piece detaché', filter: "engin" },
        { src: Image21, alt: 'Image 21', description: 'Piece detaché', filter: "engin" },
        { src: Image22, alt: 'Image 22', description: 'Piece detaché', filter: "engin" },
        { src: Image23, alt: 'Image 23', description: 'Piece detaché', filter: "engin" },
        { src: Image24, alt: 'Image 24', description: 'Piece detaché', filter: "engin" },
        { src: Image25, alt: 'Image 25', description: 'Piece detaché', filter: "engin" },
        { src: Image26, alt: 'Image 26', description: 'Piece detaché', filter: "engin" },
         { src: Image1, alt: 'Image 1', description: '', filter: "projet" },
        { src: Image2, alt: 'Image 2', description: '', filter: "projet" },
        { src: Image3, alt: 'Image 3', description: '', filter: "projet" },
        { src: Image4, alt: 'Image 4', description: '', filter: "projet" },
        { src: video1, alt: 'Video 1', description: 'Camion', type: 'video', filter: "video" },
        { src: video2, alt: 'Video 2', description: 'Camion', type: 'video', filter: "video" },
        { src: video3, alt: 'Video 3', description: 'Camion', type: 'video', filter: "video" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const filteredImages = images.filter((image) => image.filter === activeFilter || activeFilter === 'all');

    return (
        <>
            <LoaderPage />
            <div style={{ height: "40vh" }} className="text-center contactbg contactusbg gallerybg bg-light mb-4">
                <h1 id="blogcontact">Gallery</h1>
                <div className="d-flex justify-content-center " id="blogcontacts">
                    <h6 style={{ color: "#dedcdc" }}><Link style={{ color: "white" }} to='/'>Accueil</Link></h6>
                    <h6 style={{ marginLeft: "10px", marginRight: "10px" }}> / </h6>
                    <h6>Gallery</h6>
                </div>
            </div>
            <div className='container'>
                <div className="responsive-container-block optionsContainer">
                    <p
                        className={`text-blk list ${activeFilter === 'all' ? 'active' : ''}`}
                        data-filter="all"
                        onClick={() => handleFilterClick('all')}
                    >
                        Tous
                    </p>
                    <p
                        className={`text-blk list ${activeFilter === 'video' ? 'active' : ''}`}
                        data-filter="video"
                        onClick={() => handleFilterClick('video')}
                    >
                        Video
                    </p>
                    <p
                        className={`text-blk list ${activeFilter === 'projet' ? 'active' : ''}`}
                        data-filter="projet"
                        onClick={() => handleFilterClick('projet')}
                    >
                        Projet
                    </p>
                    <p
                        className={`text-blk list ${activeFilter === 'engin' ? 'active' : ''}`}
                        data-filter="engin"
                        onClick={() => handleFilterClick('engin')}
                    >
                        Engins
                    </p>

                    {/* Add remaining filter options here */}
                </div>

                <div className="image-list">
                    {filteredImages.map((image, index) => (
                        <>

                            <li key={image.src} onClick={() => { setCurrentImageIndex(index); setIsModalOpen(true); }}>
                                {image.type === 'video' ? (
                                    <video src={image.src} controls alt={image.alt} />
                                ) : (
                                    <img className={`${image.filter}`} src={image.src} alt={image.alt} />
                                )}
                            </li>
                        </>
                    ))}
                </div>

                {isModalOpen && (
                    <div className='modelAll'>
                        <div className="modal">
                            <div className='d-flex '>
                                <button id='nextprev' onClick={handlePrev}><FaArrowLeft /></button>

                                <div className='galleryDisplay'>
                                    <button className='Buttonclose mb-1 buttongalleryclose' onClick={() => setIsModalOpen(false)} style={{ height: "40px" }}>
                                        <span className="X"></span>
                                        <span className="Y"></span>
                                        <div className="closebutton">Fermé</div>
                                    </button>
                                    <img src={filteredImages[currentImageIndex].src} alt={filteredImages[currentImageIndex].alt} />
                                </div>
                                <button id='nextprev' onClick={handleNext}><FaArrowRight /> </button>
                            </div>

                            <div className="image-description">{filteredImages[currentImageIndex].description}</div>
                        </div>
                    </div>
                )}

            </div>
        </>

    );
}

export default Gallery;
