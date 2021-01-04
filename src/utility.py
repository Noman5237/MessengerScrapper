def generate_key(dic, key, default_value=0):
    if key not in dic:
        dic[key] = default_value
    return dic
