import React from 'react'

const HomeDonationSection = () => {
	return (
     <section>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 bdr_shd bdr">
              <h3 className="mt-0 line-bottom">Make a Donation<span className="font-weight-300"> Now!</span></h3>

              <form id="paypal_donate_form_onetime_recurring">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-20">
                      <label><strong>Payment Type</strong></label> <br/>
                      <label className="radio-inline">
                        <input type="radio" checked="" value="one_time" name="payment_type" /> 
                        One Time
                      </label>
                      <label className="radio-inline">
                        <input type="radio" value="recurring" name="payment_type" /> 
                        Recurring
                      </label>
                     
                    </div>
                  </div>

                  <div className="col-sm-12" id="donation_type_choice">
                    <div className="form-group mb-20">
                      <label><strong>Donation Type</strong></label>
                      <div className="radio mt-5">
                        <label className="radio-inline">
                          <input type="radio" value="D" name="t3" checked="" />
                          Daily</label>
                        <label className="radio-inline">
                          <input type="radio" value="W" name="t3"/>
                          Weekly</label>
                        <label className="radio-inline">
                          <input type="radio" value="M" name="t3"/>
                          Monthly</label>
                        <label className="radio-inline">
                          <input type="radio" value="Y" name="t3"/>
                          Yearly</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group mb-20">
                      <label><strong>I Want to Donate for</strong></label>
                      <select className="form-control">
                        <option value="Educate Children">Educate Children</option>
                        <option value="Child Camps">Child Camps</option>
                        <option value="Clean Water for Life">Clean Water for Life</option>
                        <option value="Campaign for Child Poverty">Campaign for Child Poverty</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group mb-20">
                      <label><strong>Currency</strong></label>
                      <select className="form-control">
                        <option value="">Select Currency</option>
                        <option value="USD">USD - U.S. Dollars</option>
                        <option value="AUD">AUD - Australian Dollars</option>
                        <option value="BRL">BRL - Brazilian Reais</option>
                        <option value="GBP">GBP - British Pounds</option>
                        <option value="HKD">HKD - Hong Kong Dollars</option>
                        <option value="HUF">HUF - Hungarian Forints</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="ILS">ILS - Israeli New Shekels</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="MYR">MYR - Malaysian Ringgit</option>
                        <option value="MXN">MXN - Mexican Pesos</option>
                        <option value="TWD">TWD - New Taiwan Dollars</option>
                        <option value="NZD">NZD - New Zealand Dollars</option>
                        <option value="NOK">NOK - Norwegian Kroner</option>
                        <option value="PHP">PHP - Philippine Pesos</option>
                        <option value="PLN">PLN - Polish Zlotys</option>
                        <option value="RUB">RUB - Russian Rubles</option>
                        <option value="SGD">SGD - Singapore Dollars</option>
                        <option value="SEK">SEK - Swedish Kronor</option>
                        <option value="CHF">CHF - Swiss Francs</option>
                        <option value="THB">THB - Thai Baht</option>
                        <option value="TRY">TRY - Turkish Liras</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group mb-20">
                      <label><strong>How much do you want to donate?</strong></label>
                      <select className="form-control">
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="200">200</option>
                          <option value="500">500</option>
                          <option value="other">Other Amount</option>
                      </select>
                      <div id="custom_other_amount">
                        <label><strong>Custom Amount:</strong></label>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-flat btn-dark btn-theme-colored mt-10 pl-30 pr-30" data-loading-text="Please wait...">Donate Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <h3 className="mt-0 line-bottom">Our Polls</h3>
              <div className="testimonial style1 owl-carousel-1col owl-nav-top">
                <div className="item">
                  <div className="comment bg-theme-colored">
                    <p>Lorem ipsum dolor sit ametconse ctetur adipisicing elitvolup tatem error sit qui dolorem facilis.</p>
                  </div>
                  <div className="content mt-20">
                    <h6 className="title text-right pad_ryt">Cast your vote now ?</h6>
                    <div className="patient-details text-right pull-right mr-20 mt-10">
                       <a className="btn btn-theme-colored btn-sm" href="#">Yes</a>
                    </div>
                  </div>
                  <div className="content mt-20">
                    <div className="patient-details text-right pull-right mr-20 mt-10">
                       <a className="btn btn-theme-colored btn-sm" href="#">No</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default HomeDonationSection