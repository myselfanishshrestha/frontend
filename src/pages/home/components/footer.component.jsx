const HomeFooter =() => {
    return<>
     <nav className="navbar bg-body-tertiary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <a className="navbar-brand" href="#">
                  <img
                    className="img footer-logo img-fluid"
                    src="https://broadwayinfosys.com/uploads/logo/1667276403.new_broadway_logo.svg"
                  />
                </a>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quibusdam? Eveniet corporis aut blanditiis odit reprehenderit
                  corrupti inventore provident quidem obcaecati. Ea suscipit ab
                  ipsam cumque deleniti voluptatibus recusandae ex?
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>Quick Actions</h4>
                <hr />
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action">
                    About Us
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Privacy policy
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Terms and Conidition
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Register
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Login
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>Conntect With us</h4>
                <hr />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0299327309535!2d85.3422330742178!3d27.685469726458336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1691547287286!5m2!1sen!2snp"
                  width="350"
                  height="250"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </nav>
    </>
}
export default HomeFooter;