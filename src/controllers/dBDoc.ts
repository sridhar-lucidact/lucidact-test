import { Document,Filter,FindOptions,AggregateOptions ,InsertOneModel,AnyBulkWriteOperation,DeleteOneModel, DeleteManyModel, Db, Collection, WithId, InsertOneResult, InsertManyResult } from "mongodb"
class DBDocs {
    _collectionName: Collection;
    constructor(collectionName: Collection) {
        this._collectionName = collectionName;
    }
    
    async list(collectName: Collection, options: FindOptions): Promise<WithId<Document>[] | null> {
        const filters:Filter<Document>[] = [];        
        const docs = await collectName.find(filters as any, options).toArray();
        return docs;
    }

    async insert(collectName: Collection, doc: Document): Promise<InsertOneResult<Document> | null> {
        const result = await collectName.insertOne(doc);
        return result;
    }

    async insertMany(collectName: Collection, docs: Document[]): Promise<InsertManyResult<Document> | null> {
        const result = await collectName.insertMany(docs);
        return result;
    }

    async update(collectName: Collection): Promise<WithId<Document>[] | null>{
        const filters:Filter<Document> = [];
        const limit = 0;
        //updateOne(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Partial<TSchema>, options: UpdateOptions): Promise<UpdateResult>;
        const docs = await collectName.updateOne(filters as any,{limit});//.toArray();
        //return docs;
        return null;
    }

    async updateMany(collectName: Collection): Promise<WithId<Document>[] | null>{
        const filters:Filter<Document>[] = [];
        const limit = 0;
        const docs = await collectName.find(filters as any,{limit}).toArray();
        return docs;
    }

    async delete(collectName: Collection): Promise<WithId<Document>[] | null>{
        const filters:Filter<Document>[] = [];
        const limit = 0;
        const docs = await collectName.find(filters as any,{limit}).toArray();
        return docs;
    }
    
}