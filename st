main {
    height: 500px;
    background-color: rgb(29, 2, 183);
    margin: 0 20px;
}
.title-main{
    padding: 13px 25px;
}
.title-main h3 {
    margin: 10px;
    font-size: 30px;
}

.main-base {
    margin-left: 35px;
    margin-right: 35px;
}
.img-main{
    border :1px solid white;
    width: 180px;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;

}
.img-main:hover {
    border: 1px solid gray;
    cursor: pointer;
}
.main-img-div{
    width: 100%;
    height: 178px;
    background-color: yellow;
}
.img-main img {
    width: 180px;
}

.img-main h4 {
    padding: 3px 10px;
    font-size: 15px;
}

.img-main h3 {
    font-size: 14px;
    padding: 0 10px;
    font-weight: 300;
}

.img-main p {
    font-size: 12px;
    font-weight: 300;
    padding:  10px;
}

.img-main i {
    position: absolute;
    top : 15px;
    right: 15px;
}
.img-main i:hover {
    cursor: pointer;
    color:  gray;
}
/* .button & scroll image */
.button-scroll {
    display: flex;
    flex-flow: column nowrap;
    background-color: cadetblue;
    position: relative;
    padding: 30px 0
}
.button-scroll button {
    margin-right: 3px ;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 200;
    width: 90px;
    transition: background-color .5s;
}
.button-scroll button:hover {
    cursor: pointer;
    background-color: rgb(225, 225, 225);
}
.button-scroll a {
    float: right;
    text-decoration: none;
    color : black;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 5px 2px;
    border-bottom: 1px solid black;
}
.button-scroll a:hover{
    background-color: rgb(235, 235, 235);
}
/* scroll-img */
.scroll-img{
    background-color: rgb(220, 0, 0);
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    padding: 25px 0 ;
}

.scroll-img::-webkit-scrollbar {
    width : 5px;
    height: 5px;
    border-radius: 10px;
    background-color: hsl(0, 0%, 80%);
}
.scroll-img::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: hsl(0, 0%, 2%);
}
.scroll-img::-webkit-scrollbar-thumb:hover {
    background-color: hsl(0, 0%, 0%);
    cursor: pointer;
}
.scroll-img .img-main{
 margin-right: 8px;
 display: inline-flex;

}
.bi-arrow-left-square, .bi-arrow-right-square{
    position: absolute;
    top : 40%;
    font-size: 40px;
    opacity: .3;
    color : rgb(60, 60, 60);
    transition: opacity .6s;
}
.bi-arrow-right-square{
    right: 0;
}
.bi-arrow-left-square:hover, .bi-arrow-right-square:hover {
    opacity: 1;
    cursor: pointer;
}
/* video-main */
.video-main {
    background-color: greenyellow;
    display: flex;
    flex-wrap: row nowrap;
    margin: 10px 0;
    /* overflow-x: scroll; */
} .img-main {
    margin-right: 10px;
}