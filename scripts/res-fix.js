Hooks.once("ready", async function() {
  setTimeout(() => {
    $('.notification.error').each((index, item) => {
      if ($(item).text().includes('requires a minimum screen resolution')) {
        $(item).remove();
      }
    });
  }, 250);
});