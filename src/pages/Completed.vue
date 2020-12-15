<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Completed Tasks</h2>
      </v-col>
      <v-spacer />
    </v-row>

    <v-row v-if="todos.length">
      <v-col cols="12">
        <v-list>
          <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
        </v-list>
      </v-col>
    </v-row>
    <v-row v-else cols="12">
      <v-col>
        <p class="body-1 text-center text--secondary">
          Hmmm... maybe I should put some in here
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Todo } from "@/state/todos";
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem.vue";
import { namespace } from "vuex-class";

// Extract the nav store
const todoStore = namespace("todos");

@Component({
  components: {
    TodoItem
  },
})
export default class InboxPage extends Vue {
  @todoStore.Getter("getCompleted") todos;
}
</script>

<style></style>
