import posthtml from 'rollup-plugin-posthtml';


export default {
    plugins: [
        posthtml({
            plugins: [include()],
        })
    ]
};