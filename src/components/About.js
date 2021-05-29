import React, {useState} from 'react';

const styles = {
  container: {
      'backgroundColor': '#1F1F1F',
  },
  content: {
      'backgroundColor': '#1F1F1F',
      'box-shadow': '0px 0px 25px #753f77',
      'fontSize': '1rem',
      'text-transform': 'uppercase',
      'text-align': 'center',
      'vertical-align':'middle',
  },
};


const About = () =>{

    const [text,setText] = useState(()=>{
        return ("text 1")
    })

    function text1() {
        setText('text 1')
    }

    function text2() {
        setText('text 2')
    }

    function text3() {
        setText('text 3')
    }

    function text4() {
        setText('text 4')
    }


        return (
          <div class="md:flex justify-between py-20 px-20" style={styles.container} >
            <div class="md:w-1/3 py-0 px-16 mb-20 sm:mb-0">
                <button onClick={text1} className="button border ribbon-outset">About</button>
                <button onClick={text2} className="button border ribbon-outset">Leaderboard</button>
                <button onClick={text3} className="button border ribbon-outset">Events</button>
                <button onClick={text4} className="button border ribbon-outset">Faq</button>
            </div>
            
            <div class="md:w-2/3 m-5 px-5 py-5 text-white tracking-wider" style={styles.content}>
                <p class="text">
                    {text}
                </p>
            </div>
        </div>
        )
      }
export default About