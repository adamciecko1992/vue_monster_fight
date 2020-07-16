new Vue({
    el: "#app",
    data: {
        started: false,
        turn: true,
        playerHP: 0,
        monsterHP: 0,
        log: [],
        cssClass: true

    },
    computed: {
        turnClass: function() {
            return "player-turn" ? this.turn : "monster-turn";
        }

    },

    methods: {
        start: function() {
            this.playerHP = 100;
            this.monsterHP = 100;
            this.turn = true;
            this.log.push(`Game Started !`);
            this.started = true;
        },
        attack: function() {
            const amount = (Math.floor(Math.random() * 10)) + 1;
            this.monsterHP -= amount;
            this.log.push(`Monster lost ${amount} HP`);
            this.turn = false;
            console.log(this.turn);


        },
        specialAttack: function() {
            const amount = (Math.floor(Math.random() * 12)) + 6;
            this.monsterHP -= amount;
            this.log.push(`SPECIAL ATTACK !!! Monster lost ${amount} HP`);
            this.turn = false;



        },
        heal: function() {
            if (this.playerHP > 99) {
                return
            }
            this.playerHP += (Math.floor(Math.random() * 6)) + 1;
            this.turn = false;

        },
        giveUp: function() {
            this.playerHP = 0;
            setTimeout(() => {
                alert('You lost!')
            }, 500);
            this.started = false;
        }

    },
    watch: {
        turn: function() {
            // setTimeout(() => {
            if (this.turn === false) {
                const amount = (Math.floor(Math.random() * 6)) + 1;
                this.playerHP -= amount;
                this.log.push(`Monster attacked for ${amount} HP`)
                this.turn = true;
                this.classCss = !this.cssClass;
                console.log(this.cssClass);

            }

            // }, 500);
        }
    }
})