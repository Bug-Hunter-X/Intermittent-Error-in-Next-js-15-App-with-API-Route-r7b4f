```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>Hello from server!</p>
      <p>Data from API: {data.message}</p>
    </div>
  );
}
```
```javascript
//pages/api/hello.js
function handler(req, res){
    res.status(200).json({message: 'Hello from API route!'});
}
export default handler;
```