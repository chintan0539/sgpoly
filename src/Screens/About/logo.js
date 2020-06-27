import React from 'react';
import Main from '../../ReusableComponents/Main';

function aboutLogo(){
    return(
        <Main isSlideShow={true}>
            <div>
            <br/>
            <br/>
                <div className="card mb-3 " style={{borderRadius: 10}} >
                    <div className="row ">
                        <div className="col-lg-3">
                            <br/>
                            <img src={"http://www.sgipolytechnic.in/pics/Logo1.png"} className="card-img" alt="..." />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body">
                                <h5 className="card-title">About our Logo</h5>
                                <p className="card-text">Sanjay Ghodawat Polytechnic has a remarkable logo with a shield like shape bearing five stars and the symbol of the Sun. The logo has an aura of excellence and richness in its presentation. The shield stands for the defense of great moral force that Nature contains in it. The five stars that are on the top of the logo stand for five great values of commitment, excellence, innovation, dynamism and morality. In the middle the acronym SGP stands for the name of the Institution. The symbol of the Sun portrays the supremacy of the institution in educational field as the sun in our planetary system. The red color expresses the commitment that the institution has towards the society in providing the best education for the betterment of the society. In the logo, the white background suggests the spiritual strength on which the institution stands.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

            </div>
        
        
        
        
        </Main>
    )
}


export default aboutLogo;