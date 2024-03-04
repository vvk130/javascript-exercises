<script>
  import { onMount } from "svelte";

  let messages = [];
  let eventSource;

  onMount(() => {
    eventSource = new EventSource("/api/json-sse");
    eventSource.onmessage = (event) => {
        console.log(event.data);
  };
};

const closeConnection = () => {
  eventSource.close();
};
  });
</script>

<h2>Messages</h2>

<!-- do something here -->
