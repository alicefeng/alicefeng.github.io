<script>
    export let role;
</script>

<span class={role === "Data analysis" ? "data_analysis" : role.toLowerCase()}>
    {role}
</span>

<style>
    span {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03rem;
        padding: 0.15em 0.5em;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
        /* border-color: blueviolet; */

        &.data_analysis {
            color: #003F5C;
            border-color: #003F5C;
            background-color: #B7CFDA;
        }

        &.design {
            color: #BC5090;
            border-color: #BC5090;
            background-color: #F9C4E3;
        }

        &.development {
            color: #C48511;
            border-color: #C48511;
            background-color: #F6DFB5;
        }
    }
</style>