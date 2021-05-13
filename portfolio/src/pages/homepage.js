


function Homepage() {
    return (
        <>

            <header id="masthead" className="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
                <nav id="primary-navigation" className="site-navigation">
                    <div className="container">
                        <div className="navbar-header page-scroll">

                            <button type="button" className="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <a href="#hero" className="site-logo"><img src="assets/img/logo.png" alt="logo" /></a>

                        </div>

                        <div className="main-menu" id="portfolio-perfect-collapse">

                            <ul className="nav navbar-nav navbar-right">

                                <li className="page-scroll"><a href="#hero">Home</a></li>
                                <li className="page-scroll"><a href="#about">About</a></li>
                                <li className="page-scroll"><a href="#service">Education</a></li>
                                <li className="page-scroll"><a href="#portfolio">Portfolio</a></li>
                                <li className="page-scroll"><a href="#contact">Contact</a></li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </header>
           

            <div id="hero" className="hero">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h1>Trae McNabb</h1>
                            <div className="page-scroll">
                                <p className="job-title">Full Stack Developer</p>
                                <a href="#contact" className="btn btn-fill ">Hire me</a>
                                <div className="clearfix visible-xxs"></div>
                                <a href="#portfolio" className="btn btn-border">Learn more about me!</a>
                            </div>
                        </div>

                        <div className="col-md-6 text-right">
                            <img src="/assets/img/portfolio.jpg" className="w-100" alt="alex-vidal" />
                        </div>

                    </div>
                </div>
            </div>

            <main id="main" className="site-main">

                <section id="about" className="site-section section-about text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <h2>About</h2>
                                <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                                <p>My name is Trae McNabb. I am 28 years old, and I have been married to the love of my life Chelsie Mcnabb for the past 9 years. We have two beautiful kids together, our son named Jet, and our daughter named Nova. For the past 5 years, I have been a manager for the largest Apple Retailer in Northern America. I am now focusing all my time on being a full stack developer and being the best husband and father I can!</p>
                                <a href="./assets/img/Resume.pdf" className="btn btn-fill" target="_blank" download>Download my resume</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section section-skills">
                    <div className="container">
                        <div className="text-center">
                            <h3>My Skills</h3>
                            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="skill">
                                    <h4>Html/css</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h4>JavaScript</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="65"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill">
                                    <h4>Jquery</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h4>Managment Skills</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="95"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill">
                                    <h4>People Skills</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h4>Grasping Knowledge</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" data-transitiongoal="95"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div id="service" className="service">
                    <div className="container">
                        <div className="row">


                            <h1 className="text-center">Trae Mcnabb Portfolio</h1>
                            <div className="card text-center">
                                <div className="card-header">
                                    <h2 className="text-primary">Educational Background</h2>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Desert Hills High School</h3>
                                    <p className="card-text">I graduated Desert Hills High school in the year 2010 with a 3.5 GPA. I lettered all four
                                    years in
              football with my main position being Linebacker and Running back. </p>
                                    <a href="https://dhthunder.org/" target="_blank" className="btn btn-primary">DHHS Website</a>
                                    <img src="https://dhthunder.org/wp-content/uploads/sites/34/2014/01/Thunder_BigT_Shield-150x150.jpg"
                                        width="100px" height="100px" alt="DHHS" className="img-thumbnail" />
                                </div>
                                <div className="card-footer text-muted">
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Dixie State College</h4>
                                    <p className="card-text">I was able to achieve a certificate in medical coding in the year 2013 .</p>
                                    <a href="https://dixie.edu/" target="_blank" className="btn btn-primary">Dixie State Website</a>
                                    <img src="https://dixie.edu/wp-content/uploads/2019/08/1920x1080-1024x576.jpg" width="150px" height="150px"
                                        alt="Dixie State" className="img-thumbnail" />
                                </div>
                                <div className="card-footer text-muted">
                                    <h2 className="text-primary">Employment History</h2>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">SimplyMac</h4>
                                    <p className="card-text">I was with SimplyMac for over 5 years. I was the lead Apple Specialist for the first
                                    couple years. Then I lead the B2B program while running a location in Grand Junction, Colorado. Then I was
                                    able to move back home and manage the St. George location. In 2019 I was recognized as the top store manager
              and had the oppurtunity to take a trip to my wife in CanCun Mexico! </p>
                                    <a href="https://simplymac.com" target="_blank" className="btn btn-primary">SimplyMac</a>
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/1525/0840/files/SM_logo-primary_CMYK-Charcoal_500x_e6d238ae-8790-4300-ab94-24f744f39207_500x.png?v=1591983874"
                                        width="150px" height="150px" alt="SimplyMac" className="img-thumbnail" />
                                    <div className="card-footer text-muted">
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">AllConnect</h4>
                                        <p className="card-text">I was at Allconnect for 5 years as well. I really enjoyed the fast pace environment of
                                        doing phone sales. I also had the Honors of 10 "Top Tens" and also received multiple "Diamond Club"
                winners and an amazing trip to Washington DC .</p>
                                        <a href="https://www.allconnect.com/" target="_blank" className="btn btn-primary">Allconnect</a>
                                        <img
                                            src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/v1429740011/dbr8umysdcnnr0fxrzpr.jpg"
                                            width="150px" height="150px" alt="Allconnect" className="img-thumbnail" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <section id="portfolio" className="site-section section-portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h3>My recent Works</h3>
                            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/bingeterest.png" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>Bingeterest</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/workday.png" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>Work Day Scheduler</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/password.png" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>Password Generator</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/burger.jpg" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>Devour burger!</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/weather.png" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>Weather Dashboard</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/started.png" className="img-res" alt="" />
                                    <div className="portfolio-item-info">
                                        <h4>First Portfolio</h4>
                                        <a href="#" data-toggle="modal" data-target="#portfolioItem6"><span className="glyphicon glyphicon-eye-open"></span></a>
                                        <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section section-counters text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <p className="counter start" data-to="1" data-speed="2000">0</p>
                                <h4>Years Experience</h4>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <p className="counter start" data-to="32" data-speed="2000">32</p>
                                <h4>Projects Delivered</h4>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                                <h4>Seconds on this site!<br />What are you waiting for?</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="site-section section-form text-center">
                    <div className="container">

                        <h3>Contact</h3>
                        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" name="name" className="form-control mt-x-0" placeholder="Name" required />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="col-sm-12">
                                    <textarea name="message" id="mesaage" className="form-control" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <button href="#" className="btn btn-border" type="submit">Hire Me <span className="glyphicon glyphicon-send"></span></button>
                            <br />
                            <br />
                            <a href="https://www.linkedin.com/in/trae-mcnabb-627a061ba/"><i className="fab fa-linkedin "></i></a> <a href="https://github.com/trae1357"><i className="fab fa-github"></i></a>




                        </form>
                    </div>
                </section>

            </main>







            <footer id="colophon" className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <a className="icon facebook-bg" href="#"><i className="icon-facebook"></i></a>
                            <a className="icon twitter-bg" href="#"><i className="icon-twitter"></i></a>
                            <a className="icon gplus-bg" href="#"><i className="icon-linkedin"></i></a>
                            <a className="icon linkedin-bg" href="#"><i className="icon-gplus"></i></a>
                        </div>
                        <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3"><p className="copyright">2017. All Rights Reserved</p></div>
                        <div className="col-sm-4 col-xs-3">
                            <div className="text-right page-scroll">
                                <a className="icon icon-up-bg" href="#hero"><i className="icon-up"></i></a>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <div id="portfolioItem1" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/bingeterest.png" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Bingeterest</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://landonross.github.io/Bingeterest/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolioItem2" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/weather.png" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Work Day Scheduler</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://trae1357.github.io/calender/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolioItem3" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/password.png" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Password Generator</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://trae1357.github.io/passwordgen/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>





            <div id="portfolioItem4" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/burger.jpg" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Devour Burger</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://trae1357.github.io/quiz/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolioItem5" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/weather.png" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Weather Dashboard</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://trae1357.github.io/weather/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolioItem6" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
                            <img className="img-res" src="assets/img/started.png" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Original Portfolio</h4>
                        </div>
                        <div className="modal-footer">
                            <a href="https://trae1357.github.io/portfolio1/" className="btn btn-fill">Visit Page</a>
                        </div>
                    </div>
                </div>



            </div>




        </>





    )
}

export default Homepage