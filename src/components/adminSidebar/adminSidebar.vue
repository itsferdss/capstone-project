<script>
import SidebarLink from './adminSidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './adminstate'

export default{
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth}">
        <h1>
            <span v-if="collapsed">
            </span>
            <span v-else class="navTitle">
                <img class="navlogo" src="\source\clear.png">
            </span>
        </h1>

        <SidebarLink class ="navNames" to="/adminHome" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink class ="navNames" to="/adminProfile" icon="fa-solid fa-user">Profile</SidebarLink>
        <SidebarLink class ="navNames" to="/adminUsers" icon="fa-solid fa-users">Users</SidebarLink>


        <span 
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<style >
:root{
  --sidebar-bg-color: #dae7ff;
  --sidebar-item-hover: #6bbeea;
  --sidebar-item-active: #2aaac5;
}

</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: all 0.3s ease;
    
    display: flex;
    flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: black;

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.navTitle{
    color: white;
}

.navlogo{
    height: 15  0px;
    width: 200px;
}

.navNames{
    color: black;
}
</style>
