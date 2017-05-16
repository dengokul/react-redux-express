import React from 'react'

const slider1layer1 = {
	zIndex: 5, whiteSpace: "nowrap", fontSize: 40, lineHeight: 40
}
const slider1layer2 = {
	zIndex: 6, whiteSpace: "nowrap", color: "rgba(255, 255, 255, 0.50)"
}
const slider1layer3 = {
	zIndex: 7, minWidth: 380, maxWidth: 380, whiteSpace: "normal", fontSize: 15, lineHeight: 25
}
const slider1layer4 = {
	zIndex: 8, whiteSpace: "nowrap",textTransform:"left",borderColor:"rgba(255, 255, 255, 0.25)",outline:"none",boxShadow:"none",boxSizing:"borderBox",cursor:"pointer"
}
const slider1layer4Sub = {
	fontSize: ".8rem", verticalAlign: "middle"
}
const slider2Layer1 = {
	zIndex: 5, whiteSpace: "nowrap", fontSize: "40px", lineHeight: "40px"
}
const slider2Layer2 = {
	zIndex: 6, whiteSpace: "nowrap", color: "rgba(255, 255, 255, 0.50)"
}
const slider2Layer3 = {
	zIndex: 7, minWidth: "380px", maxWidth: "380px", whiteSpace: "normal", fontSize: "15px", lineHeight: "25px"
}
const slider2Layer4 = {
	zIndex: 8, whiteSpace: "nowrap",textTransform:"left",borderColor:"rgba(255, 255, 255, 0.25)",outline:"none",boxShadow:"none",boxSizing:"border-box",cursor:"pointer"
}
const slider2Layer4Sub = {
	fontSize: ".8rem", verticalAlign: "middle"
}

const HeaderHomeSection = () => {
	return (
	<section id="home">
		<div className="container-fluid p-0">
			<div className="rev_slider_wrapper">
				<div className="rev_slider" data-version="5.0">
					<ul>
						<li data-index="rs-1" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="/assets/images/bg/bg4.jpg" data-rotate="0" data-saveperformance="off" data-title="Wow Factor" data-description="">
                
                <img src="/assets/images/bg/bg4.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-bgparallax="10" data-no-retina />
                

                <div className="tp-caption NotGeneric-Title tp-resizeme text-uppercase"
                  id="rs-1-layer-1"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['50','50','50','50']"
                  data-y="['top','top','top','top']" 
                  data-voffset="['150','150','170','168']" 
                  data-fontsize="['72','72','64','48']"
                  data-lineheight="['100','90','60','60']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.03"                  
                  style={slider1layer1}>Happy Donate
                </div>

                <div className="tp-caption NotGeneric-SubTitle tp-resizeme text-uppercase"
                  id="rs-1-layer-2"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['55','55','55','55']"
                  data-y="['top','top','top','top']" 
                  data-voffset="['160','160','160','160']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.03"                  
                  style={slider1layer2}>help the children
                </div>

                <div className="tp-caption Photography-Textblock tp-resizeme"
                  id="rs-1-layer-3"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['55','55','55','55']"
                  data-y="['top','top','top','top']"
                  data-voffset="['250','250','250','250']"
                  data-width="380"
                  data-height="150"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none" 
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.01"                  
                  style={slider1layer3}>The best and most beautiful things in the world cannot be seen or even touched  they must be felt with the heart.
                </div>

                <div className="tp-caption BigBold-Button rev-btn text-uppercase" 
                  id="rs-1-layer-4"
                  data-x="['left']" 
                  data-hoffset="['50']" 
                  data-y="['top']" 
                  data-voffset="['350']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="1000"
                  data-splitin="none" 
                  data-splitout="none"
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  data-responsive="on"
                  style={slider1layer4}>Donate Now <i style={slider1layer4Sub} className="fa fa-arrow-circle-right text-white ml-5"></i>
               </div>
              </li>

              <li data-index="rs-2" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="/assets/images/bg/bg2.jpg" data-rotate="0" data-saveperformance="off" data-title="Wow Factor" data-description="">
                <img src="/assets/images/bg/bg2.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-bgparallax="10" data-no-retina />

                <div className="tp-caption NotGeneric-Title tp-resizeme text-uppercase"
                  id="rs-2-layer-1"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['50','50','50','50']"
                  data-y="['top','top','top','top']" 
                  data-voffset="['150','150','170','168']" 
                  data-fontsize="['72','72','64','48']"
                  data-lineheight="['100','90','60','60']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.03"                  
                  style={slider2Layer1}>Poor Animals
                </div>

                <div className="tp-caption NotGeneric-SubTitle tp-resizeme text-uppercase"
                  id="rs-2-layer-2"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['55','55','55','55']"
                  data-y="['top','top','top','top']" 
                  data-voffset="['160','160','160','160']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="opacity:0;s:1000;e:Power2.easeIn;s:1000;e:Power2.easeIn;"
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.03"                  
                  style={slider2Layer2}>Rising helping hand For
                </div>

                <div className="tp-caption Photography-Textblock tp-resizeme"
                  id="rs-2-layer-3"
                  data-x="['left','left','left','left']" 
                  data-hoffset="['55','55','55','55']"
                  data-y="['top','top','top','top']"
                  data-voffset="['250','250','250','250']"
                  data-width="380"
                  data-height="150"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="chars"
                  data-splitout="none" 
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-elementdelay="0.01"                  
                  style={slider2Layer3}>The best and most beautiful things in the world cannot be seen or even touched  they must be felt with the heart.
                </div>

                <div className="tp-caption BigBold-Button rev-btn text-uppercase" 
                  id="rs-2-layer-4"
                  data-x="['left']" 
                  data-hoffset="['50']" 
                  data-y="['top']" 
                  data-voffset="['350']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="x:-50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-transform_out="x:50px;opacity:0;s:500;e:Power1.easeInOut;" 
                  data-start="500"
                  data-splitin="none" 
                  data-splitout="none"
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  data-responsive="on"
                  style={slider2Layer4}>Donate Now <i style={slider2Layer4Sub} className="fa fa-arrow-circle-right text-white ml-5"></i>
               </div>
              </li>

					</ul>
				</div>
			</div>
		</div>
    </section>

	)
}

export default HeaderHomeSection;