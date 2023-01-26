class Quiz{

    
    constructor(options){
        
        this.setOptions(options)

    }

    getUserData(){

        let Slide1Info = getRadioInput("QuizSlide1-Radio").value;
        let Slide2Info = [80, 2]
        let Slide3Info = getRadioInput("QuizSlide3-Radio").value
        let Slide4Info = getRadioInput("QuizSlide4-Radio").value
        let Slide5Info = getRadioInput("QuizSlide5-Radio").value
        let Slide6Info = getRadioInput("QuizSlide6-Radio").value
        let Slide7Info = getRadioInput("QuizSlide7-Radio").value
        let QuizPhoneNumber = document.querySelector("#QuizPhoneNumber").value

        alert("Данные по номеру записаны!")

        return [
            Slide1Info,
            Slide2Info,
            Slide3Info,
            Slide4Info,
            Slide5Info,
            Slide6Info,
            Slide7Info,
            QuizPhoneNumber        
        ]

    }

    update_ui(){

        var 
            backwardButton = $(this.options.backwardButtonId),
            forwardButton = $(this.options.forwardButtonId)
        
        var blockId = this.options.blockId

        for(let i in this.options.slides){
            
            let id = Number(Number(i)+Number(1));

            let element = $(blockId+id)

            element.hide()
            
        }
        
        let slide = this.options.slides[this.currentSlide-1]

        backwardButton.removeClass("hide")
        forwardButton.removeClass("hide")

        backwardButton.removeClass("inactive")
        forwardButton.removeClass("inactive")

        if(slide.hide[0]){
            
            backwardButton.addClass("hide")

        }
        
        if(slide.hide[1]){

            forwardButton.addClass("hide")

        }

        if(slide.inactive[0]){
            
            backwardButton.addClass("inactive")

        }
        
        if(slide.inactive[1]){

            forwardButton.addClass("inactive")

        }

        slide = $(blockId+this.currentSlide)
        slide.show()

        let 
            progressLine = document.querySelector(this.options.progressBlockId+">.progress__line"),
            progressLabel = document.querySelector(this.options.progressBlockId+">.progress__label")

        let percent = this.currentSlide/this.maxSlide*100

        progressLine.setAttribute("style", "--progress:"+percent+"%")


        let
            titleBlock = $(this.options.titleBlockId),
            descBlock = $(this.options.descBlockId)

        titleBlock.html(this.options.slides[this.currentSlide-1].title[0])
        descBlock.html(this.options.slides[this.currentSlide-1].title[1])


        if(this.maxSlide - this.currentSlide > 1){

            $(progressLabel).html(`Вопрос <b>${this.currentSlide} из ${this.maxSlide}</b>`)
        
        }else{

            if(this.maxSlide - this.currentSlide === 1){

                $(progressLabel).html(`<b>Почти готово</b>`)

            }

            if(this.maxSlide - this.currentSlide === 0){

                $(progressLabel).html(`<b>Заберите подарок!</b>`)
                document.querySelector("#QuizImage").setAttribute("src", "images/quiz/last.png")

                document.querySelector("#QuizController").style.display = "none"
                // document.querySelector(".quiz__controller_mob").style.display = "none"
            
            }

        }

        
    }

    setOptions(options){

        this.options = options
        
        this.maxSlide = this.options.slides.length

        this.init()

    }
    
    next(){

        if(this.currentSlide >= this.maxSlide && this.options.slides[this.currentSlide-1].inactive[1]){

            return false;
            
        }
        
        this.currentSlide += 1;
        this.update_ui()
    }
    
    prev(){

        if(!(this.currentSlide > 1) && this.options.slides[this.currentSlide-1].inactive[0]){
    
            return false;
            
        }
        
        this.currentSlide -= 1;
        this.update_ui()

    }

    init(){

        this.currentSlide = 1
        
        var 
            backwardButton = $(this.options.backwardButtonId),
            forwardButton = $(this.options.forwardButtonId)

        var e = this;

        backwardButton.click(function(){e.prev()})
        forwardButton.click(function(){e.next()})

        this.update_ui()


    }

}