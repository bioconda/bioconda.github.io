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

      

   
   :depends on aiohttp: 
   :depends on aiosignal: 
   :depends on amqp: 
   :depends on anyio: 
   :depends on apispec: 
   :depends on async-timeout: 
   :depends on attrs: 
   :depends on billiard: 
   :depends on blinker: 
   :depends on blosc: 
   :depends on celery: 
   :depends on certifi: 
   :depends on charset-normalizer: 
   :depends on click: 
   :depends on click-didyoumean: 
   :depends on click-plugins: 
   :depends on click-repl: 
   :depends on contourpy: 
   :depends on cycler: 
   :depends on exceptiongroup: 
   :depends on fastapi: 
   :depends on flask: 
   :depends on flask-cors: 
   :depends on flask-smorest: 
   :depends on fonttools: 
   :depends on frozenlist: 
   :depends on h11: 
   :depends on httpcore: 
   :depends on httptools: 
   :depends on httpx: 
   :depends on idna: 
   :depends on importlib-metadata: 
   :depends on itsdangerous: 
   :depends on jinja2: 
   :depends on kiwisolver: 
   :depends on kombu: 
   :depends on markupsafe: 
   :depends on marshmallow: 
   :depends on matplotlib-base: 
   :depends on msgpack-python: 
   :depends on multidict: 
   :depends on ndindex: 
   :depends on numexpr: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on prompt-toolkit: 
   :depends on py-cpuinfo: 
   :depends on pydantic: ``<2.0``
   :depends on pyparsing: 
   :depends on python: ``>=3.10``
   :depends on python-dateutil: 
   :depends on python-dotenv: 
   :depends on pytz: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on six: 
   :depends on sniffio: 
   :depends on starlette: 
   :depends on tables: 
   :depends on typing_extensions: 
   :depends on tzdata: 
   :depends on urllib3: 
   :depends on uvicorn: 
   :depends on uvloop: 
   :depends on vine: 
   :depends on watchfiles: 
   :depends on wcwidth: 
   :depends on webargs: 
   :depends on websockets: 
   :depends on werkzeug: 
   :depends on yarl: 
   :depends on zipp: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install jass

to add into an existing workspace instead, run::

    pixi add jass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jass

Alternatively, to install into a new environment, run::

    conda create -n envname jass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jass:<tag>

(see `jass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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