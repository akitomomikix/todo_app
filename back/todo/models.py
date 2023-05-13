from django.db import models
import uuid

class Task(models.Model): #idとcreated_at、updated_atは必ず入れる
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) #これがprimarykeyですよ/なにも設定しなくても勝手に設定/変更できない
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=500) #contentsって言われると配列をイメージする、複数形は配列のイメージ
    created_at = models.DateTimeField(auto_now_add=True) #この名前はテンプレ #新規作成した時に勝手に設定/
    updated_at = models.DateTimeField(auto_now=True)
# Create your models here.
