<script setup>

import project1_1x from "~/assets/img/project1_image_1x.jpg";
import project1_2x from "~/assets/img/project1_image_2x.jpg";
import project2_1x from "~/assets/img/project2_image_1x.jpg";
import project2_2x from "~/assets/img/project2_image_2x.jpg";

import ProjectStructure from "~/components/structures/ProjectStructure.vue";

const projects = [
    {
        image: {
            x1: project1_1x,
            x2: project1_2x,
        },
        title: "Дом в скандинавском стиле",
        description:
            "<p>Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей</p>" +
            "<br />" +
            "<p>Построен по индивидуальному проекту.</p>",
    },
    {
        image: {
            x1: project2_1x,
            x2: project2_2x,
        },
        title: "Дом из газобетона",
        description:
            "<p>Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.</p>" +
            "<br />" +
            "<p>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.</p>",
    },
];
</script>

<template>
    
    <div class="projects_">
        <p class="section_projects_title">Реализованные проекты</p>
        <div class="block_projects">
            <ProjectStructure
                v-for="project in projects"
                :image="project.image"
                :title="project.title"
                :description="project.description"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">

.projects_ {
    width: 100%;
    padding: 80px 88px;
    max-width: 1320px;
    background-color: #f5f7f3;
}

.section_projects_title {
    margin-bottom: 32px;
    font-size: 38px;
    font-weight: bold;
    font-family: 'Montserrat';
}

.block_projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    overflow: hidden;
    
}

@media screen and (max-width: 1299px) {
    .projects_ {
        padding-inline: 16px;
    }
}
</style>