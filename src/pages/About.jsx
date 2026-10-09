export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Mini Store este o aplicație SPA realizată pentru laboratorul de Frontend Routing.
        Demonstrează rute, parametri de rută, query parameters, nested routes și integrarea
        cu un API public (fakestoreapi.com).
      </p>
      <ul>
        <li>React + React Router (v6)</li>
        <li>Route parameter: <code>/products/:id</code></li>
        <li>Query parameters: <code>?category=…&amp;sort=price&amp;search=…</code></li>
        <li>Nested routes: <code>/dashboard/profile</code>, <code>/dashboard/settings</code></li>
      </ul>
    </section>
  );
}
