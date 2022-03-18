

let mixedMessages_obj = {

    _horoscopes: ["Aries  Mar 21 ~ Apr 19", "Taurus  Apr 20 ~ May 20", "Gemini  May 21 ~ Jun 20", "Cancer  Jun 21 ~ Jul 22", "Leo  Jul 23 ~ Aug 22", "Virgo  Aug 23 ~ Sep 22", "Libra  Sep 23 ~ Oct 22", "Scorpius  Oct 23 ~ Nov 21", "Sagittarius  Nov 22 ~ Dec 21", "Capricornus  Dec 22 ~ Jan 19", "Aquarius Jan 20 ~ Feb 18", "Pisces  Feb 19 ~ Mar 20"] ,
    
    _forcast: [ "A dazzling Venus/Jupiter aspect will brighten up your afternoon, although the moon may perhaps make you a little tolerant of those who don't quite meet your standards throughout the day. Go easy on them, because it won't last and besides, you may need or want their backing later in the week!", 

    "It will be a typical work day. Some fairly picky influences could have you feeling a little listless and in need of a lift. That lift will happen; it just not going to happen today. What is likely to happen is an excess or surge in your workload. Get it done and out of the way, because after tomorrow things will improve!", 
    
    "There is the potential for some positive developments in romance. However, there are a couple of planets that are likely to make this a less than simple process. The main blips you may need to work out could revolve around minor commitment issues or even a careless promise!", 
    
    "It may be a work-day, but you'll feel lively enough, thanks to Jupiter. Work/career matters will be undemanding, as long as you're not too impatient for some recognition from the right quarters. It will come. In the meantime an unexpected communication bodes well for romance!",
    
    "A sprightly Venus/Jupiter aspect will go a long way to perking up a flagging situation or relationship. A friend's suggestion should be considered, and the evening should not be wasted fretting about any lingering work hassles. Besides, an invitation out may even have romantic connotations!", 
    
    "It's a positive end to the working week, if you're of a mind to work independently. The fact that there may not be tons of support may actually be a very positive absence, since a breakthrough on the work/career front will be down to your hard work or innovative thinking!", 
    
    "It may be a work-related day, but you'll be raring to go, as today's planets channel yesterday's exuberance into something a disciplined and upbeat approach. You're likely to steam ahead regardless and while this approach will see a positive outcome in practical matters, a personal matter may require far more sensitivity!", 
    
    "A balanced array of aspects will ease any implicit pressure you may have been feeling over a material/practical issue and will offer the kind of subtle support that stays in the background. This is exactly what you'll need to enable satisfactory progress without losing face!", 
    
    "Certain lunar influences indicate a bit of a taxing day. It could feel as though everything requires too much effort for very little. Visible results and people's appreciation may seem lacking. You might even wonder what the point of all your hard work is, but keep going; change is on the way!", 
    
    "A Saturn/moon aspect suggests that you may get a little bogged down by minor blips or interruptions, and you're not so likely to be in the frame of mind that enables you to sweep these things aside or deal with them efficiently. Something specific may be the root cause of this ~ the planets suggest that it's related to cash!", 
    
    "It's potentially one of the least romantic days of the week, given the stodgy vibe. However, later in the day it is more than possible that something ~ whether a low-key exchange or confession ~ will lodge in the back of your mind. Taking a ‘wait-and-see' approach is perhaps the best one!", 
    
    "For you it may seem like a rather dull end to a challenging week. However, after tomorrow things will start to change. You may be right at the point of either giving up on something related to a vocation or turning down an offer. This fatigue will pass. Meanwhile don't reject anything automatically!"  ] ,

    _lucky_numbers: [ [5, 14, 22, 28, 32, 46], [3, 17, 24, 29, 33, 41], [7, 15, 21, 23, 32, 48], [ 5, 14, 26, 31, 37, 45], [6, 11, 20, 34, 40, 47], [5, 13, 26, 32, 38, 49], [9, 14, 21, 30, 36, 43], [7, 13, 20, 27, 32, 45], [ 5, 14, 27, 33, 38, 41], [ 2, 11, 21, 23, 36, 42], [7, 13, 25, 34, 38, 43], [ 3, 16, 24, 29, 37, 45] ] ,

    _motivational_qoutes: [ " “ The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty. ”  - Winston Churchill",
     " “ It's not whether you get knocked down, it's whether you get up. ” - Vince Lombardi",
     " “ We may encounter many defeats but we must not be defeated. ” - Maya Angelou", 
     " “ The only limit to our realization of tomorrow will be our doubts of today. ” - Franklin D. Roosevelt ", 
     "  “ The world breaks everyone, and afterward, some are strong at the broken places. ” - Ernest Hemingway ", 
     " “ A truly strong person does not need the approval of others any more than a lion needs the approval of sheep. ” - Vernon Howard ", 
     " “ Tough times never last, but tough people do. ” - Robert H. Schuller ", 
     " “ Winning doesn't always mean being first. Winning means you're doing better than you've ever done before. ” - Bonnie Blair ", 
     " “ There are always new, grander challenges to confront, and a true winner will embrace each one. ” - Mia Hamm ", 
     " “ Winning isn't everything, but wanting it is. ” - Arnold Palmer ", 
     " “ The bamboo that bends is stronger than the oak that resists. ” - Japanese Proverb ", 
     "  “ Resilience is not what happens to you. It's how you react to, respond to, and recover from what happens to you. ” - Jeffrey Gitomer " ] ,

    get horoscopes () {
        return this._horoscopes
    } ,

    get forcast () {
        return this._forcast
    } ,

    get lucky_numbers () {
        return this._lucky_numbers
    } ,

    get motivational_qoutes () {
        return this._motivational_qoutes
    } ,

    random_num_genrator () {
        /* this generates random numbers 0-11 since all arrays have 12 element */

        let random_num = Math.floor(Math.random() * 12)

        return random_num

        //console.log(random_num)
    },

    random_selection () {
        /* this keeps the random number selected from changing when invoked so that each array will have the same random number from  random_num_genrator function  */

        const fixed_num = this.random_num_genrator()
        //console.log(fixed_num)

        /* this gets the index value from the array of the keys in the object */

        let horoscope_selected = mixedMessages_obj.horoscopes[fixed_num]

        let forcast_selected = mixedMessages_obj.forcast[fixed_num]

        let lucky_numbers_selected = mixedMessages_obj.lucky_numbers[fixed_num]
        let lucky_numbers_selected_formated = lucky_numbers_selected.join(', ')
        
        let motivational_qoutes = mixedMessages_obj.motivational_qoutes[fixed_num]

        /* this is an empty array to receive the above values*/
        let msg = []

        return msg = [horoscope_selected , forcast_selected , lucky_numbers_selected_formated , motivational_qoutes] 
  

        //console.log(horoscope_selected)
        //console.log(forcast_selected)
        //console.log(lucky_numbers_selected_formated)
        //console.log(motivational_qoutes)
        
    },

    mixed_msg () {

        /* this variable receives the array from the above function */
        let returned_msg = this.random_selection ()

        //console.log(returned_msg[0])
        //console.log(returned_msg[1])
        //console.log(returned_msg[2])

        console.log(' ')
        console.log(`THESE ARE YOUR HOROSCOPES, FORCAST, LUCKY NUMBERS AND MOTIVATIONAL QOUTES FOR THIS MONTH`)
        console.log(' ')
        console.log('==================================================================================')
        console.log(' ')
    

        console.log(`Zodiac Selected: ( ${returned_msg[0]} ) Zodiac`)
        console.log(' ')
        console.log('==========================================================================')
        console.log(' ')

        console.log(`Forcast: ${returned_msg[1]}`)
        console.log(' ')
        console.log('==================================================================================')
        console.log(' ')

        console.log(`Lucky Numbers: (${returned_msg[2]}) `)
        console.log(' ')
        console.log('==================================================================================')
        console.log(' ')

        console.log(`Motivational Quote: ${returned_msg[3]}`)
    }


}

//mixedMessages_obj.random_num_genrator()

//mixedMessages_obj.random_selection()

mixedMessages_obj.mixed_msg()