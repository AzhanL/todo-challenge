<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Incomplete Tasks</h2>
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
          All done :)
        </p>
      </v-col>
    </v-row>

    <AddTodoComponent v-model="createMode" v-if="createMode" />
    <v-row v-else @click="createMode = true">
      <v-col cols="12">
        <v-btn text block color="primary">
          <v-icon>mdi-plus</v-icon>
          Add task
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Todo } from "@/state/todos";
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem.vue";
import { namespace } from "vuex-class";
import AddTodoComponent from "@/components/AddTodoComponent.vue";

// Extract the nav store
const todoStore = namespace("todos");

@Component({
  components: {
    TodoItem,
    AddTodoComponent,
  },
})
export default class InboxPage extends Vue {
  createMode = false;

  @todoStore.Getter("getIncompleted") todos;
}
</script>

<style></style>
