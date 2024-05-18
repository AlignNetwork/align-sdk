<div align="center">

![background](https://github.com/AlignNetwork/align-sdk/assets/61569650/ad422cba-e273-4c98-ad6c-31766209f1a2)

</div>

<h2 align="center">Attestation Station SDK</h2>
<br />
<p align="center">

<br/>
<a href="https://twitter.com/align_network">Twitter</a> | 
<a href="https://warpcast.com/~/channel/align">Warpcast</a>

> [!CAUTION]
> UNSTABLE. This repo changes rapidly and the contracts are updated frequently.
> An SDK for interacting with the Align Network

### Use

see [test](/tests) for example

```typescript
    const data = {
      from: "1", // Align Id you issuing to
      post: "This is the first post, for testing!", // text of post
      image: "imageurl",
      dateOf: new Date().toLocaleString(),
    };

    // validte the incoming data is in the correct format
    const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
    const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
    // interact defaults
    let res = await interactDefaults(data, 1n, "post", account);
    console.log(res.receipt);
    expect(res.success).to.be.true;
  });
```

Align Default Interaction Types:

1. `post`
2. `blog`
3. `points`
