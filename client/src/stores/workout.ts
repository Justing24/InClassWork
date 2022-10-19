import { reactive } from "vue";

export class workouData {

    public title: string | undefined;
    public date: string | undefined;
    public duration: string | undefined;
    public location: string | undefined
    public picture: string | undefined
    public type: string | undefined
}


const workout = reactive( [
        { title: '10 mile rum', date: 'jan 10 2020', duration: '30 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Run' },
        { title: '20 mile rum', date: 'jan 10 2020', duration: '40 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Bike' },
        { title: '30 mile rum', date: 'jan 10 2020', duration: '50 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'walk' },
        { title: '40 mile rum', date: 'jan 10 2020', duration: '60 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Cardio' },
        { title: '50 mile rum', date: 'jan 10 2020', duration: '70 mins', location: 'United States', picture: 'src/assets/muscular-build-athlete-having-cross-training-in-a-royalty-free-image-1618930811_.jpg', type: 'Sregnth' }

    ] as workouData[]
);


export function addWorkout(title: string, date: string, duration: string, location: string, picture: string, type: string): void {
    // workout.workouData = {
    //     Title,date,duration,location,picture,type

    // };
    workout.push({ title, date, duration, location, picture, type });

}

export function deleteWorkout(index: number) {
    
        workout.splice(index, 1); // 2nd parameter means remove one item only
}

export default workout;