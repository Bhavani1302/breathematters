import React from "react";
import logo from '../Assets/Breathe matters Logo.png';
import BookNow from '../Assets/BookNow.png';
import capnotrainer from '../Assets/Capnotrainer.png';
import Rectangle31 from '../Assets/Rectangle 31.png';
import Rectangle32 from '../Assets/Rectangle 32.png';
import group from '../Assets/Group.png';
import Transform from '../Assets/Transform.png';
import Breathe from '../Assets/Breathe.png';
import BreatheMore from '../Assets/Breathemore.png';
import Ellipse from '../Assets/Ellipse.png';
import knosis from '../Assets/KNOSIS.png';
import cruz from '../Assets/Dr Cruz.png';
import airway from '../Assets/Airway 1.png';
import conspire from '../Assets/conspire logo.png';
import discover from '../Assets/discover.png';
import frame144 from '../Assets/Frame 144.png';
import frame151 from '../Assets/Frame 151.png';
import capno from '../Assets/Capno.png';
import frame154 from '../Assets/Frame 154.png';
import frame153 from '../Assets/Frame 153.png';
import frame152 from '../Assets/Frame 152.png';
import group11110 from '../Assets/Group 11110.png';
import frame617 from '../Assets/Frame 617.png';
import frame162 from '../Assets/Frame 162.png';
import frame164 from '../Assets/Frame 164.png';
import whoIsTheCapoTrainer from '../Assets/who.png';
import group11111 from '../Assets/Group 11111.png';
import group11114 from '../Assets/Group 11114.png';
import group11112 from '../Assets/Group 11112.png';
import group11121 from '../Assets/Group 11121.png';
import group11113 from '../Assets/Group 11113.png';
import realSuccessStory from '../Assets/Real Success Stories.png';
import frame174 from '../Assets/Frame 174.png';
import frame173 from '../Assets/Frame 173.png';
import rectangle35 from '../Assets/Rectangle 35.png';
import frame184 from '../Assets/Frame 184.png';
import frame195 from '../Assets/Frame 195.png';
import frame188 from '../Assets/Frame 188.png';
import frame191 from '../Assets/Frame 191.png';
import faq from '../Assets/FAQs.png';
import frame193 from '../Assets/Frame 193.png';

const LandingPage = () => { 
    const rootStyle = {
        overflowX: 'hidden',
        maxWidth: '1440px',
        margin:'0 auto' 
    };
    const containerStyle = {
        maxWidth: '1440px', 
        height: '637px',
        position: 'relative',  
        overflow: 'hidden', 
        margin:'0px auto',
    };

    const headerStyle = {
        maxWidth: "1248px",
        height: "68px",
        position: "absolute",
        top: '10px',
        left: '96px',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const logoStyle = {
        maxWidth: '260px',
        height: '58px',
        top: '10px',
        left: '5px',
    };

    const bookNowButtonStyle = {
        minWidth: "121px",
        minHeight: "43px",
        position: "absolute",
        top: "22px",
        left: "1112px",
        borderRadius: "8px",
        padding: "12px 19px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    };

    const capnoTrainerStyle = {
        maxWidth: "580px",
        height: "427.88px",
        position: 'absolute',
        top: "182px",
        left: "930px",
    };

    const Rectangle31Style = {
        maxWidth: '1440px',
        height: '152px',
        position: 'relative',
        top: '485px',
    };

    const Rectangle32Style = {
        maxWidth: '1440px',
        height: '19px',
    };

    const Rectangle29Style = {
        maxWidth: '1440px',
        height: '89px',
        top: '438px',
        position: 'absolute',
        background: '#6BB5B5',
        opacity:'40%'
    };

    const groupStyle = {
        maxWidth: '204.3px',
        height: '44.3px',
        top: '180px',
        left: '518px',
        opacity: '80%',
        position: 'absolute',
    };

    const grprect29Style = {
        width: '1440px',
        height: '604px',
        background: 'linear-gradient(180deg, #6BB5B5 0%, #008080 136.34%)',
        position: 'absolute',
        top: '0px',
        backdropFilter: 'blur(73px)'
    };
    
    const TransformStyle = {
        maxWidth: '1088px',
        height: '122px',
        top: '100px',
        left: '96px',
        position: 'absolute', 
        fontFamily: 'Spectral SC',  
        fontWeight: 700,           
        fontSize: '40px',         
        lineHeight: '100%',       
        letterSpacing: '0%',
    };    
     
    const BreathStyle = {
        maxWidth: '479px',
        height: '49px',
        top: '278px',
        left: '96px',
        position: 'absolute',
        fontFamily: 'Nunito',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '100%',
        letterSpacing: '0%'
    };
    
    const BreatheMoreStyle = {
        maxWidth: '670px',
        height: '88px',
        top: '337px',
        left: '96px',
        fontFamily: 'Nunito',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '0%',
        position: 'absolute',
    };
    
    const EllipseStyle={
        maxWidth:'427px',
        height:'427px',
        top:'-126px',
        left:'1097px',
        position:'absolute'
    }

    const knosisStyle = {
        maxWidth: '187.8567657470703px',
        height: '58.70523452758789px',
        top: '697.32px',
        left: '151px',
        position: 'absolute',
    };

    const cruzStyle = {
        maxWidth: '126.44204711914062px',
        height: '126.44204711914062px',
        top: '663px',
        left: '488.31px',
        position: 'absolute', 
    };

    const airWayStyle = {
        maxWidth: '197.79148864746094px',
        height: '93.02521514892578px',
        top: '680.16px',
        left: '758.79px',
        position: 'absolute',
    };
    
    const conspireStyle = {
        maxWidth: '248.36830139160156px',
        height: '81.28417205810547px',
        top: '685.58px',
        left: '1040.1px',
        position: 'absolute',
    };

    const container2Style = {
        maxWidth: '1177px',
        height: '541px',
        top: '896px',
        left: '131px',
        position: 'absolute',  
        margin:'opx auto'
    };

    const discoverStyle = {
        maxWidth: '960px',
        height: '61px',
        left: '109px',
        position: 'absolute', 
    };

    const frame144Style={
        maxWidth:'1177px',
        height:'458px',
        top:'83px',
        left:'20px',
        position:'absolute'
        
    }
    
    const frame161Style={
        maxWidth:'1245px',
        height:'340px',
        top:'1617px',
        left :'99px',
        position :'absolute'
    }

    const frame151Style={
        width:'534px',
        height:'245px',
        position:'absolute',
        left:'20px'
    }

    const capnoStyle = {
        maxWidth: '375px', 
        height: '327px', 
        top: '13px', 
        left: '481px', 
        position: 'absolute', 
    };

    const frame154Style = {
        minWidth: '501px', 
        height: '42px',  
        top: '167px', 
        left: '730px', 
        borderRadius: '8px', 
        padding: '10px', 
        gap: '6px', 
        position: 'absolute' 
    };
    
    const frame153Style = {
        minWidth: '497px', 
        height: '42px',  
        top: '103px', 
        left: '730px', 
        borderRadius: '8px', 
        padding: '10px', 
        gap: '6px', 
        position: 'absolute' 
    };

    const frame152Style = {
        minWidth: '428px', 
        height: '42px',  
        top: '39px', 
        left: '730px', 
        borderRadius: '8px', 
        padding: '10px', 
        gap: '6px', 
        position: 'absolute' 
    };
    
    const group11110Style = {
        maxWidth: '295.15px', 
        height: '84px', 
        top: '227px',
        left: '901px',
        opacity: '58%',
        position: 'absolute' 
    };

    const frame617Style = {
        maxWidth: '1440px',
        height: '749px',
        top: '2136px',
        position: 'absolute' ,
        left:'50px',
        margin:'0px auto'
    };

    const frame162Style = {
        maxWidth: '1440px',
        height: '608px',
        top: '2885px',
        left:'50px',
        position: 'absolute',
    };

    const frame164Style = {
        maxWidth: '1435px',
    height: '745px',
    top: '3673px',
    left: '102px',
    position: 'absolute' 
    };

    const container3Style = {
        maxWidth: '1248px',
        height: '829px',
        top: '4298px',
        left: '96px',
        position: 'absolute'
    };
    
    const capotrainerStyle = {
        maxWidth: '857px',
        height: '31px',
        left: '245px',
        position: 'absolute'
    };
    
    const group11111Style = {
        maxWidth: '400px',
        height: '348px',
        top: '116px',
        position: 'absolute',
        left:'0px' 
    };
    
    const group11114Style = {
        maxWidth: '400px',
        height: '348px',
        top: '116px',
        left: '424px',
        position: 'absolute', 
    };
    
    const group11112Style = {
        width: '400px',
        height: '348px',
        top: '116px',
        left: '848px',
        position: 'absolute', 
    };
    
    const group11121Style = {
        width: '612px',
        height: '335px',
        top: '494px',
        position: 'absolute',
        left:'0px'
    };
    
    const group11113Style = {
        width: '612px',
        height: '335px',
        top: '494px',
        left: '636px',
        position: 'absolute',
    };
    
    const frame175Style = {
        width: '1440px',
        height: '395px',
        top: '5307px',
        position: 'absolute',
    };
    
    const realSuccessStoryStyle = {
        width: '455px',
        height: '31px',
        top: '33px',
        left: '492px',
        position: 'absolute', 
    };

    const frame174Style = {
        width: '568px',
        height: '205px',
        top: '139px',
        left: '745px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid', 
        position: 'absolute',
    };
    
    const frame173Style = {
        width: '568px',
        height: '205px',
        top: '139px',
        left: '116px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid', 
        position: 'absolute',
    };
    
    const Rectangle35Style = {
        width: '1440px',
        height: '92px',
        top: '141px',
        position: 'absolute', 
        left:'40px'
    };
    
    const frame184Style = {
        width: '1165px',
        height: '300px',
        top: '5818px',
        left: '137px',
        position: 'absolute', 
    };
    
    const frame195Style = {
        width: '1245px',
        height: '517px',
        top: '6330px',
        left: '97px',
        position: 'absolute', 
    };

    const Frame188style = {
        width: '1440px',
        height: '548px',
        top: '7006px',
        position: 'absolute', 
        left:'40px'
    };
    
    const frame192Style = {
        width: '1023px',
        height: '309px',
        top: '7777px',
        left: '208px',
        position: 'absolute', 
    };
    
    const frame191Style = {
        width: '1023px',  
        height: '199px',  
        top: '110px',     
        gap: '20px',      
        position: 'absolute', 
        left:'40px'
    };

    const faqStyle = {
        width: '104px',   
        height: '31px',   
        left: '460px',    
        position: 'absolute',
    };
    
    const frame193Style = {
        width: '1248px',   
        height: '371px',    
        top: '8260px',      
        left: '96px',       
        borderRadius: '10px', 
        position: 'absolute', 
    };
    
    return (
        <div style={rootStyle}>
            <div style={containerStyle}>
                <div>
                    <div style={grprect29Style}></div> 
                </div>
                <div>
                    <img src={Rectangle32} alt="rectangle32" style={Rectangle32Style} />
                </div>
                <div>
                    <img src={Ellipse} alt="ellipse" style={EllipseStyle}/>
                </div>
                <div>
                    <img src={Transform} alt="Transform" style={TransformStyle}/>
                </div>
                <div>
                    <img src={Breathe} alt="breathe" style={BreathStyle}/>
                </div>
                <div>
                    <img src={BreatheMore} alt="BreatheMore" style={BreatheMoreStyle} />
                </div>
                <div style={headerStyle}>
                    <img src={logo} alt="logo" style={logoStyle} />
                    <img src={BookNow} alt="booknow" style={bookNowButtonStyle} />
                </div>
                <div style={Rectangle29Style}></div>
                <div>
                    <img src={Rectangle31} alt="rectangle" style={Rectangle31Style} />
                </div>
                <div>
                    <img src={capnotrainer} alt="container" style={capnoTrainerStyle} />
                </div>
                <div>
                    <img src={group} alt="grp" style={groupStyle} />
                </div>
                
            </div>
            <div>
                <div>
                    <img src={knosis} alt="knosis" style={knosisStyle}/>
                </div>
                <div>
                    <img src={cruz} alt="cruz" style={cruzStyle}/>
                </div>
                <div>
                    <img src={airway} alt="airway" style={airWayStyle} />
                </div>
                <div>
                    <img src={conspire} alt="conspire" style={conspireStyle} />
                </div>
            </div>
            <div style={container2Style}>
                <div>
                    <img src={discover} alt="discover" style={discoverStyle} />
                </div>
                <div>
                    <img src={frame144} alt="frame144" style={frame144Style} />
                </div>
            </div>
            <div style={frame161Style}>
                <div>
                    <img src={frame151} alt="frame151" style={frame151Style} />
                </div>
                <div>
                    <img src={capno} alt="capno" style={capnoStyle} />
                </div>
                <div>
                    <img src={frame154} alt="frame154" style={frame154Style} />
                </div>
                <div>
                    <img src={frame153} alt="frame153" style={frame153Style} />
                </div>
                <div>
                    <img src={frame152} alt="frame152" style={frame152Style} />
                </div>
                <div>
                    <img src={group11110} alt="grp11110" style={group11110Style} />
                </div>
            </div>
            <div>
                <img src={frame617} alt="frame617" style={frame617Style}/>
            </div>
            <div>
                <img src={frame162} alt="frame162" style={frame162Style}/>
            </div>
            <div>
                <img src={frame164} alt="frame164" style={frame164Style}/>
            </div>
            <div style={container3Style}>
                <div>
                    <img src={whoIsTheCapoTrainer} alt="trainer" style={capotrainerStyle} />
                </div>
                <div>
                    <img src={group11111} alt="grp11111" style={group11111Style} />
                </div>
                <div>
                    <img src={group11114} alt="grp11114" style={group11114Style} />
                </div>
                <div>
                    <img src={group11112} alt="grp11112" style={group11112Style} />
                </div>
                <div>
                    <img src={group11121} alt="grp11121" style={group11121Style} />
                </div>
                <div>
                    <img src={group11113} alt="grp11113" style={group11113Style} />
                </div>
            </div>
            <div style={frame175Style}>
                <div>
                    <img src={realSuccessStory} alt="" style={realSuccessStoryStyle} />
                </div>
                <div>
                    <img src={rectangle35} alt="" style={Rectangle35Style}/>
                </div>
                <div>
                    <img src={frame174} alt="" style={frame174Style} />
                </div>
                <div>
                    <img src={frame173} alt="" style={frame173Style} />
                </div>
            </div>
            <div>
                <img src={frame184} alt="" style={frame184Style} />
            </div>
            <div>
                <img src={frame195} alt="" style={frame195Style} />
            </div>
            <div>
                <img src={frame188} alt="" style={Frame188style} />
            </div>
            <div style={frame192Style}>
                <div>
                    <img src={faq} alt="" style={faqStyle} />
                </div>
                <div>
                    <img src={frame191} alt="" style={frame191Style} />
                </div>
            </div>
            <div>
                <img src={frame193} alt="" style={frame193Style}/>
            </div>
        </div>
    );
}

export default LandingPage;
