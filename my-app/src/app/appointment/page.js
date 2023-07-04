"use client";
import { useForm, ValidationError } from '@formspree/react';
import styles from "./appointment.module.css"
import Image from 'next/image'

export default function Appointment() {
    
        const [state, handleSubmit] = useForm("mvojpeep");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }
    return(
        <div>
            <div className={styles.AppointmentParent}>
                <div className={styles.headandcardcollection}>
                    <div className={styles.apphead}><h1>Make an Appointment</h1></div>
                    <div className={styles.appsubhead} >Let us know your problem, make an appointment and receive the best advice from specialists in the field.</div>
                    <div className={styles.appcard}>
                        <div className={styles.accleftphoto} ><Image src="/images/dental.png" width={429} height={530} style={{borderRadius:"10px"}}></Image></div>
                        <div className={styles.accform}>
                            <div className={styles.appformhead}>Book <p style={{display:"inline",color:"#00BDE0"}}>Appointment</p>
                            </div>

                            <form className={styles.appform} onSubmit={handleSubmit} action="https://formspree.io/f/mvojpeep" method='POST'>
                                <div className={styles.appgroupoftwo}>
                                <div className={styles.appinnernameele}>
                                <div ><label for="name">Full Name</label></div>
                                <input type="text" id="name" placeholder="eg. John Doe" name='name'></input>
                                </div>
                                <div className={styles.appinnerphonele}>
                                <div><label for="phone">Your Phone</label></div>
                                <input type="text" id="phone" placeholder="Phone" name='phone'></input>
                                </div>
                               
                                </div>
                                <div className={styles.appgroupoftwo}>
                                <div>
                                <div><label for="email">Your Email</label></div>
                                <input type="email" id="email" placeholder="john@gmail.com" name='email'></input>
                                </div>
                                <div>
                                <div><label for="date">Select Date</label></div>
                                <input type="text" id="date" placeholder="dd/mm/yy" name='date'></input>
                                </div>
                                
                                </div>

                                <button className={styles.appbut} type="submit" disabled={state.submitting}>GET APPOINTMENT</button>
                                <div className={styles.appsmalltext}><p style={{display:"inline",color:"red",fontSize:"15px"}}>* </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

