import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = ({ title, description, github, demo, img, stack }) => {
    return (
        <div>
            <Fade bottom duration={3000} distance={'1rem'}>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <img
                            className="project-img"
                            src={img}
                            alt="project-img"
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <h3 className="small-heading">{title}</h3>
                        <div className="p-card">
                            <p className="description">{description}</p>
                        </div>
                        <p className="stack">{stack}</p>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon
                                name="logo-github"
                                class="github2"
                            ></ion-icon>
                        </a>
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="arrow-redo" class="link"></ion-icon>
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Project;
