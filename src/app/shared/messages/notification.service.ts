import { EventEmitter, Output } from "@angular/core";
import { NoopAnimationStyleNormalizer } from "@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer";

export class NotificationService{

    @Output() notifier = new EventEmitter<string>()

    notify(message:string){
        this.notifier.emit(message)
    }
}