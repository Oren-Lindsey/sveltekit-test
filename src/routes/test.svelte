<script>
    let name;
    let password;
    var content = "";
    async function submit() {
        const res = await fetch('/api', {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        content = await res.json()
        content = content.body.name
    }
</script>
<form on:submit|preventDefault={submit}>
    <label for="name">name:</label>
    <input id="name" type="text" placeholder="name" required bind:value={name}>
    <label for="password">password:</label>
    <input id="password" type="text" placeholder="password" required bind:value={password}>
    <button type="submit">submit</button>
</form>
<h1>{content}</h1>
