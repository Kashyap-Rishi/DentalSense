import './dentalcare.css'

const DentalCare = () => {
  return (
    <div className="dc_main">
         <div className="dc_sub_head">WHAT WE DO</div>
            <div className="dc_main_head"><h1>Dental Care for Everyone </h1></div>
            <div className="dc_sub_main">
                <div className="dc_col">
                    <div className="col_head">01.</div>
                    <div className="low_col">
                    <div className="col_desc"><h6>Dental Implants</h6></div>
                    <div className="col_para"><p>Hello how are you</p></div>
                    </div>
                </div>

                <div className="dc_col2">
                    <div className="col_head">02.</div>
                    <div className="low_col">
                    <div className="col_desc"><h6>Dental Hygiene</h6></div>
                    <div className="col_para"><p>Hello how are you</p></div>
                    </div>
                </div>
                <div className="dc_col">
                    <div className="col_head">03.</div>
                    <div className="low_col">
                    <div className="col_desc"><h6>Family Dentistry</h6></div>
                    <div className="col_para"><p>Hello how are you</p></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DentalCare