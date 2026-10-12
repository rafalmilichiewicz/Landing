export function Tea() {
  return (
    <div class="px-6">
      <div class="gradient-aura mx-auto md:w-1/2">
        <div class={`mockup-code bg-base-200 text-xs md:text-base `}>
          <pre data-prefix="$">
            <code>{`curl -i ${"https://www.google.com/teapot"}`}</code>
          </pre>

          <pre data-prefix="<" class="text-warning">
            <code>HTTP/2 418 I'm a teapot</code>
          </pre>

          <pre data-prefix="<" class="text-info">
            <code>content-type: text/html;</code>
          </pre>

          <pre data-prefix=">">
            <code></code>
          </pre>

          <pre data-prefix=">" class="text-success">
            <code>🫖 418 I'm a teapot</code>
          </pre>
        </div>
      </div>
    </div>
  );
  return;
}
