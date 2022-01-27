import { createClient } from '@supabase/supabase-js'

export default class Supabase {
    SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4ODI5MiwiZXhwIjoxOTU4ODY0MjkyfQ.GzpKDMc7mH5-aq4mGPTulqvJ-HXdLY-jMzFIys9RtSA';
    SUPABASE_URL = 'https://mbbfgbvvhknnybldiijd.supabase.co';

    client = createClient(this.SUPABASE_URL, this.SUPABASE_ANON_KEY);

    async get() {
        return await this.client
            .from('mensagens')
            .select('*')
            .order('created_at', {ascending: false})
            .then((dados) => {
                console.log('get all dados');
                return dados;
            });
    }

    async set(data) {
        return await this.client.from('mensagens').insert([data]).then((response) => {
            console.log(response);
            return response;
        });
    }
}

