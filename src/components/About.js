import React, {Component} from 'react';
import $ from 'jquery';

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
  },
};


class About extends Component{
  
    componentDidMount(){
        $(document).ready(function() {
            $('.text').hide();
        $('#text-1').show();
      });

      $('#btn-1').click(function(){
        $('.text').hide();
        $('#text-1').show();
        $('#btn-1').toggleClass("clicked");
    });
    
    $('#btn-2').click(function(){
        $('.text').hide();
        $('#text-2').show();
        $('#btn-2').toggleClass("clicked");
    });

    $('#btn-3').click(function(){
      $('.text').hide();
      $('#text-3').show();
  });
  
  $('#btn-4').click(function(){
      $('.text').hide();
      $('#text-4').show();
  });
    }

    render() {
        return (
          <div class="md:flex justify-between py-20 px-20" style={styles.container} >
            <div class="md:w-1/3 py-0 px-16 mb-20 sm:mb-0">
                <button class="block" id="btn-1" className="button border ribbon-outset">About</button>
                <button class="block" id="btn-2" className="button border ribbon-outset">Leaderboard</button>
                <button class="block" id="btn-3" className="button border ribbon-outset">Events</button>
                <button class="block" id="btn-4" className="button border ribbon-outset">Faq</button>
            </div>
            <div class="md:w-2/3 m-5 px-5 py-5 text-white tracking-wider" style={styles.content}>
            <p class="text" id="text-1">
            Hack Club is a community which encourages beginners to start coding by supporting and enabling our members to participate in Hackthons and organize workshops, through which, our members will be walked through building interesting projects. :octopus: 
At Hack Club, we aim to help other programmers learn and collaborate on various projects. :pigeon: 
Ps: Happy Hacking!
    </p>
    <p class="text" id="text-2">
        Leaderboard
    </p>
    <p class="text" id="text-3">
        Event
    </p>
    <p class="text" id="text-4">
        Faq
    </p>
            </div>
        </div>
        );
      }
    }
export default About;
