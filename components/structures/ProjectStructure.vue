<script setup>

defineProps({
    image: {
        x1: String,
        x2: String,
    },
    title: String,
    description: String,
});

</script>

<template>
    <div class="structure">
        <picture class="picture">
            <source :srcset="`${image.x2} 2x, ${image.x1}`" />
            <img :src="image.x1" :alt="title" class="image" />
        </picture>
        <div class="block_description">
            <h4 class="title">{{ title }}</h4>
            <span class="description" v-html="description"></span>
        </div>
    </div>
</template>

<style scoped lang="scss">

.structure {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;
    min-width: 550px;
}

.picture {
    height: 100%;
    order: 2;
}

.image {
    height: 100%;
    border-radius: 0px 20px 20px 0px;
}

.block_description {
    display: flex;
    flex-flow: column;
    gap: 12px;
    padding-block: 32px;
    padding-inline: 32px 16px;
    background-color: white;
    border-radius: 20px 0px 0px 20px;
    order: 1;
}

.title {
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 600;
    margin: 0px;
}

.description {
    padding-right: 8px;
    color: #666666;
}

@media screen and (max-width: 814px) {
    .structure {
        display: flex;
        flex-flow: column;
        min-width: 304px;
    }

    .picture {
        width: 100%;
        height: 150px;
        order: 1;
    }

    .image {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
    }

    .block_description {
        border-radius: 0px 0px 20px 20px;
        padding-inline: 24.5px;
        padding-block: 21px 24px;
    }
}
</style>