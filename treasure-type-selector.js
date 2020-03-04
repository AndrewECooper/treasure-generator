Vue.component("treasure-type-selector", {
    props: ["ttId"],
    data: function () {
        return {
            treasureTypes: [
                { value: "A", label: "A" }, 
                { value: "B", label: "B" },
                { value: "C", label: "C" },
                { value: "D", label: "D" },
                { value: "E", label: "E" },
            ],
            multiplier: 0,
            selectedType: null
        }
    },

    template: `
        <div>
            <select v-model="selectedType" @input="onSelect">
                <option v-for="tt in treasureTypes" :value="tt.value">{{ tt.label }}</option>
            </select>
            Multiplier: 
            <input type="text" v-model="multiplier" />
        </div>
    `,

    methods: {
        onSelect: function (e) {
            console.log("Select changed: " + e.target.value);
            this.$emit("tt-updated", { 
                treasureType: e.target.value, 
                multiplier: this.multiplier,
                id: parseInt(this.ttId, 10),
            });
        }
    }
});