<script>

</script>

<template>
    <header class = "header">
        <!-- <span class = "headline"> -->
            <span class = "title">
                <img class = "icon_emblem" src="~\images\emblem.png">
                <span class = "names_titles">
                    <span class = "one_name">Реализованные проекты</span>
                    <span class = "two_name">Новости</span>
                    <span class = "three_name">Контакты</span>
                </span>
            </span>
            <span class="data">
                <span class = "box_number">
                    <img class ="icon_number" src="~\images\number.png"> 
                    <span class="number"> +7 (900) 900-90-90 </span>
                </span>
                <button class = "button_apply">Оставить заявку</button>
            </span>
        <!-- </span> -->
        
    </header>
</template>

<style lang='scss'>

.header {
    background: #FFFFFF;
    width: 1440px;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

// .headline {
//     width: 1264px;
//     height: 49px;
//     display: flex;
//     align-items: center;
// }

.title {
    width: 624px;
    height: 39px;
    gap: 80px;
    display: flex;
    align-items: center;
}

.icon_emblem {
    width: 160px;
    height: 39px;
}

.names_titles {
    width: 384px;
    height: 19px;
    gap: 24px;
    display: flex;
    justify-content: space-evenly;
}

.one_name {
    font-family: 'Open Sans';
    font-size: 16px;
    width: 195px;
    height: 19px;
    color: #666666;
    // display: flex;
    // flex-wrap: nowrap;

}
.two_name {
    width: 66px;
    height: 19px;
    font-family: 'Open Sans';
    font-size: 16px;
    color: #666666;
}

.three_name {
    width: 75px;
    height: 19px;
    font-family: 'Open Sans';
    font-size: 16px;
    color: #666666;  
}
.data {
    width: 386px;
    height: 49px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    
}

.box_number {
    gap: 8px;
}

.icon_number {
    width: 16px;
    height: 16px;
}

.number {
    font-family: 'Montserrat'; 
    color: #254741;
    font-size: 14px;
    width: 134px;
    height: 17px;
}

.button_apply {
    background-color: #029F59;
    border: none;
    width: 204px;
    height: 49px;
    gap: 10px;
    border-radius: 10px 10px 10px 10px;   
    font-family: 'Montserrat';
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;

}

</style>