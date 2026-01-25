const letters = {
    1: {
        title: "9th Monstary: Knowing you more leads to loving you more",
        date: "November 11, 2025",
        content: `

           To my Dearest, Fiona, Happy 9th to us my love! 9 months in and I still love you the way I did since the 
           day we made it official. My love for you grows bigger as we go along with
           our relationship. We have had some hard times with ourselves, and I'm glad
           that I have you by my side even though we were at our lowest. Your patience 
           and understand is something that I will always admire about you, I know that
           it isn't easy for you. Falling in love with you was the easiest thing I've ever done,
           I got that from the Green Book movie by the way, amazing movie. Your love gives me the
           strength that I need to get through the day. I can't help myself but smile everytime
           you pop up in my thoughts, you truly make me happy, even in the bluest of my days. Just so
           you know that I am not going anywhere, I am always here for you, by your side, ready to 
           have this journey of life with you. I wouldn't have wished anyone else but to have you in my life.
           You have my heart at the palm of your hands. Thank you for the patience, the understanding, the care
           and the love that you have given me, I will always be grateful for it. 

           I see a person who is worth of love and risk. You being happy already makes me happy, me seeing
           you smile makes my heart melt. Your love is something that's inexplainable by words alone, you truly 
           make everyone around you happy. You are enough, you are worth, I hope this world becomes kinder to you
           because you deserve it all, the love, the patience, the understanding, also the makeup and clothes and the cats
           the world has to offer. 
           
           I love you so much baby, I am forever grateful for loving me even though I'm bipolar and weird sometimes.
           I love you always, all ways. Happy 9th to us again, my love! Yours truly, Ching 
        `
    },

    2: {
        title: "10th Monthsary: 10 months down, many more months with you",
        date: "December 11, 2025",
        content: `To my Fiona, Happy 10th monthsary to us!!!🥳🥳🥳 It truly has been an amazing 10 months with you
        and damn, only 2 months left until our 1st Anniversary. The journey of life that we are having right now is something that
        I look forward to everyday. Even if it's happy, sad, or full of sulking, I'm so happy that I am spending my life with you.
        No matter what happens, nothing will break our bond for each other. It feels like that we were meant to cross paths and spend
        our life together. I love you so much that I overthink and worry about so many things. Since I am making this letter the day after
        our monthsary, I love and care for you so much that I literally had to walk around the whole of Enchanted Kingdom because you took 
        too long for that singular ride, I even chatted in our gspace. Though it's okay, at least you had fun with dana, and I am happy because
        of that too. The way that the world just got so much lighter seeing you is crazy. If the thing that calms you down is katinko, then you 
        are my katinko HAHAHAHAHAHA, I am so grateful to have you in my life. Thank you, really, thank you for loving and caring for me, I
        appreciate every single thing you do for me and hopefully I will be able to pay it back in the future. I want to relieve December 11, because
        it was truly a day that I could never forget. Thank you for making that day super memorable that I still vividly remember what happened during that
        day.
        
        I love you so much, don't you always forget that. If you feel like you are alone and that no one is at your side, think of me please.
        I love you so much, my love. All ways and always. I hope to get old with you!!!`
    },

    3: {
        title: "Happy Sweet Sixteen",
        date: "December 15, 2025",
        content: `HAPPY 16TH BIRTHDAY, MY BABYYYY!!!! MY baby is getting old na HAHAHAHAHHAAH. But in all seriousness,
        I am glad that I am here by your side, with you, in this new chapter of your life. These past 10 months with you
        is full of memories that I will always cherish in my heart, and I can't wait to create more with you. On your special day,
        I hope you feel how loved and cared for you are, not just today, but every single day. You deserve happiness, love, and all 
        the good things in life. I will always be here, cheering for you and staying by your side. You make my life brighter in ways that
        it puts a smile on my face every single time. I am so grateful to be by your side. Happy birthday, my love. Thank you for you and for
        being you, and thank you for letting me love you. Happy Sweet Sixteen! 🥳🥳🎉🎉`
    },

    4: {
        title: "One Step Closer",
        date: "January 11, 2026",
        content: `To my dearest, Fiona, HAPPY 11TH MONTHSARYYY!!!🥳🥳🥳 I can't believe that we are one step closer to our anniversary, omg.
        I am so grateful to you, to have you, and about to enter a new chapter in life with you. It feels so surreal and natural at 
        the same time, crazy how time just like zoomed past us. You became my favority person, my safe place, my comfort, and my
        happiness. Every day that I spent with you has taught me what love truly feels like, patience, laughter, understanding,
        and choosing each other even on the hardest of days. Thank you for being you, your warmth, your gentleness, your smile, your eyes
        that instantly makes me lose it and go crazy, which makes me so happy and grateful to have you. We have grown so much as a couple in these
        past few months, and I couldn't be more grateful to experience life with you. You have made me feel worth it, made me feel that waking up the
        next day is worth it, and I wouldn't trade that with anything else in the world. As I write this letter for you, I am missing you so much. Hopefully,
        you know that I still carry your heart inside of my hands everyday, reminding myself that I am not alone, that I am loved, and that I am cared for. 
        Thank you for embracing the kind of person I am because I know that I may be too much sometimes, you are my katinko HAHAHAHAHAHAHAH new callsign ko nga
        sayo yun. Anyways, going back to the letter, I really love and miss you so much right now, I will literally cry if I don't get to see you on monday. I 
        can't wait to see you, because seeing you makes me feel so much lighter and it instantly makes me happy. Totoo pala yung sinasabi nila na you will meet someone
        na nakakabaliw and that is you. Nakakabaliw na hindi kita nakikita araw araw HAAHAAHAHHAHAHHAHA. Anyways, thank you for taking the time to read this letter, my love.
        I am so grateful, I would carry my heart out of my body to just show you how grateful I am to have you. You sheltered me from harm and kept me warm (please understand 
        this reference HAHAHAHAHAHA or search it on google). I love you so much, my baby. All ways and always.😘😘😘`

    },

    5: {
        title: "We're Finally Here",
        date: "February 11, 2026",
        content: 'To be continued on February 11, 2026', 
    },
};


const modal = document.getElementById('letterModal');
const closeButton = document.getElementById('closeModal');
const letterTitle = document.getElementById('letterTitle');
const letterDate = document.getElementById('letterDate');
const letterBody = document.getElementById('letterBody');

const letterCards = document.querySelectorAll('.letter-card');

letterCards.forEach(card => {
    card.addEventListener('click', () => {
        const letterNumber = card.getAttribute('data-letter');
        openLetter(letterNumber);
    });
});

function openLetter(letterNumber) {
    const letter = letters[letterNumber];
    
    if (letter) {
        letterTitle.textContent = letter.title;
        letterDate.textContent = letter.date;
        letterBody.innerHTML = letter.content;
        modal.style.display = 'flex';
        modal.classList.remove('closing');
        modal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden'; 
    }
}

closeButton.addEventListener('click', closeLetter);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeLetter();
    }
});

function closeLetter() {
    modal.classList.add('closing');
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.classList.remove('closing');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeLetter();
    }
});
