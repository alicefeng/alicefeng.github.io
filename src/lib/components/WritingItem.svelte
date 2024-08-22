<script>
    export let title;
    export let outlet;
    export let date;
    export let url;
</script>

<a href={url} target="_blank">
    <div class="writingItemCard">
        <h3>{title}</h3>
        {#if outlet}
            <p class="outlet">{outlet}</p>
        {/if}
        <p class="date">{date}</p>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .writingItemCard {
        max-width: 300px;
        width: 100%;
    }

    h3 {
        font-size: 1.375rem;
        font-weight: 400;
        line-height: 1.3;
        text-decoration: underline;
        margin: 0;
    }

    .outlet {
        font-size: 1.125rem;
        font-style: italic;
        margin: 0.15em 0;
    }

    .date {
        font-size: 1rem;
        color: #989898;
        margin: 0.15em 0;
    }

    @media screen and (max-width: 974px) {
        .writingItemCard {
            max-width: 250px;
        }

        h3 {
            font-size: 1.25rem;
        }

        .outlet {
            font-size: 1rem;
        }

        .date {
            font-size: 0.9rem;
        }
    }

</style>