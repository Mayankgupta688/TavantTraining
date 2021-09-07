import { Pipe } from "@angular/core";

@Pipe({
    name: "replacePipe"
})
export class TransformPipes {
    transform(value: string, replaceString: string, replacement: string) {
        return value.replaceAll(replaceString, replacement)
    }
}