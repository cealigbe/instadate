<script>
    import feather from "feather-icons";

    let { name, size = "24" } = $props();
    const options = $derived({ width: size, height: size });
</script>

{@html feather.icons[name].toSvg(options)}
