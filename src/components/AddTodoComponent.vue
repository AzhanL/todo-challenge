<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        placeholder="e.g. Workout every week "
        outlined
        dense
        hide-details
        v-model="newTodo.title"
      >
        <template #append-outer>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }" >
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                hide-details
                dense
                class="fix-add-date"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </template>
      </v-text-field>
    </v-col>
    <v-col>
      <v-btn small color="primary" class="mr-1" @click="add">Add</v-btn>
      <v-btn text small @click="$emit('input', false)">Cancel</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Todo } from "@/state/todos";
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Extract the nav store
const todoStore = namespace("todos");

@Component
export default class SampleComponent extends Vue {
  // Takes visibility as value; will emit false when cancel is clicked
  @Prop() value: boolean;

  @todoStore.Action("addTodo") addTodo;

  newTodo: Todo = {
    id: 0,
    title: "",
    description: "",
    dueDate: new Date(),
    completed: false,
  };

  date = new Date().toISOString().substr(0, 10);
  menu = false;

  add() {
    // Generate a 'somewhat' random numebr; chance of duplicate IDs
    this.newTodo.id = Math.floor(Math.random() * 1000000) + 1;
    // Make a copy of the current todo
    const todo: Todo = this.newTodo;
    todo.dueDate = new Date(this.date);
    // Add the todo
    this.addTodo(todo);

    this.$emit("input", false);
  }
}
</script>

<style lang="sass">
.fix-add-date
    margin-top: -3px
</style>
