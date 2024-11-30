:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jass'
.. highlight: bash

jass
====

.. conda:recipe:: jass
   :replaces_section_title:
   :noindex:

   Computation of joint statistics over sets of GWAS results

   :homepage: http://statistical-genetics.pages.pasteur.fr/jass/
   :license: MIT / MIT
   :recipe: /`jass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass/meta.yaml>`_

   


.. conda:package:: jass

   |downloads_jass| |docker_jass|

   :versions:
      
      

      ``2.3-0``,  ``2.2-0``,  ``2.0-0``,  ``1.0.1-0``

      

   
   :depends aiohttp: 
   :depends aiosignal: 
   :depends amqp: 
   :depends anyio: 
   :depends apispec: 
   :depends async-timeout: 
   :depends attrs: 
   :depends billiard: 
   :depends blinker: 
   :depends blosc: 
   :depends celery: 
   :depends certifi: 
   :depends charset-normalizer: 
   :depends click: 
   :depends click-didyoumean: 
   :depends click-plugins: 
   :depends click-repl: 
   :depends contourpy: 
   :depends cycler: 
   :depends exceptiongroup: 
   :depends fastapi: 
   :depends flask: 
   :depends flask-cors: 
   :depends flask-smorest: 
   :depends fonttools: 
   :depends frozenlist: 
   :depends h11: 
   :depends httpcore: 
   :depends httptools: 
   :depends httpx: 
   :depends idna: 
   :depends importlib-metadata: 
   :depends itsdangerous: 
   :depends jinja2: 
   :depends kiwisolver: 
   :depends kombu: 
   :depends markupsafe: 
   :depends marshmallow: 
   :depends matplotlib-base: 
   :depends msgpack-python: 
   :depends multidict: 
   :depends ndindex: 
   :depends numexpr: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pillow: 
   :depends prompt-toolkit: 
   :depends py-cpuinfo: 
   :depends pydantic: ``<2.0``
   :depends pyparsing: 
   :depends python: ``>=3.10``
   :depends python-dateutil: 
   :depends python-dotenv: 
   :depends pytz: 
   :depends pyyaml: 
   :depends requests: 
   :depends scipy: 
   :depends seaborn: 
   :depends six: 
   :depends sniffio: 
   :depends starlette: 
   :depends tables: 
   :depends typing_extensions: 
   :depends tzdata: 
   :depends urllib3: 
   :depends uvicorn: 
   :depends uvloop: 
   :depends vine: 
   :depends watchfiles: 
   :depends wcwidth: 
   :depends webargs: 
   :depends websockets: 
   :depends werkzeug: 
   :depends yarl: 
   :depends zipp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jass

   and update with::

      mamba update jass

  To create a new environment, run::

      mamba create --name myenvname jass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jass:<tag>

   (see `jass/tags`_ for valid values for ``<tag>``)


.. |downloads_jass| image:: https://img.shields.io/conda/dn/bioconda/jass.svg?style=flat
   :target: https://anaconda.org/bioconda/jass
   :alt:   (downloads)
.. |docker_jass| image:: https://quay.io/repository/biocontainers/jass/status
   :target: https://quay.io/repository/biocontainers/jass
.. _`jass/tags`: https://quay.io/repository/biocontainers/jass?tab=tags


.. raw:: html

    <script>
        var package = "jass";
        var versions = ["2.3","2.2","2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jass/README.html