<script>
    import RoleTag from "./RoleTag.svelte";

    export let title;
    export let outlet;
    export let roles;
    export let url;
    export let imgName;
</script>

<a href={url} target="_blank">
    <div class="projectItemCard">
        <img src={`/screenshots/${imgName}`} alt="" />
        <h3>{title}</h3>
        <p class="outlet">{outlet}</p>
        <div class="roleTagContainer">
            {#each roles.split(',') as role}
                <RoleTag role={role} />
            {/each}
        </div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .projectItemCard {
        max-width: 460px;
        width: 100%;
    }

    img {
        width: 460px;
        height: 340px;
        object-fit: cover;
    }

    h3 {
        font-weight: 400;
        line-height: 1.3;
        margin: 0.1em 0;
    }

    .outlet {
        color: #989898;
        margin: 0.1em 0;
    }

    .roleTagContainer {
        display: flex;
        gap: 0.2em;
    }

    @media screen and (max-width: 1149px) {
        .projectItemCard {
            max-width: 360px;
        }

        img {
            width: 360px;
            height: 250px;
        }

        h3 {
            line-height: 1.2;
        }
    }

    @media screen and (max-width: 974px) {
        .projectItemCard {
            max-width: 280px;
        }

        img {
            width: 280px;
            height: 220px;
        }

        h3 {
            font-size: 1.25rem;
        }

        .outlet {
            font-size: 1rem;
        }
    }
</style>