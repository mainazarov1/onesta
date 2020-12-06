import React from 'react';
import st from './form.module.css';


const Form = () => {

    return (
        <section className={st.feedback_section}>
            <h2>Feedback</h2>
            <form>
                <div className={st.left_container}>
                    <input placeholder="Your name" />
                    <input placeholder="Your email" />
                </div>
                <div className={st.right_container}>
                    <input placeholder="Your message" />
                    <button>sent</button>
                </div>
            </form>
        </section>
    )
}

export default Form;