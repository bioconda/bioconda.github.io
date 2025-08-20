:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hail'
.. highlight: bash

hail
====

.. conda:recipe:: hail
   :replaces_section_title:
   :noindex:

   Hail is Python\-based data analysis tool for working with genomic data.

   :homepage: https://hail.is
   :developer docs: https://github.com/hail-is/hail
   :license: MIT / MIT
   :recipe: /`hail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hail/meta.yaml>`_

   


.. conda:package:: hail

   |downloads_hail| |docker_hail|

   :versions:
      
      

      ``0.2.61-3``,  ``0.2.61-2``,  ``0.2.61-1``,  ``0.2.61-0``,  ``0.2.58-0``,  ``0.2.33-1``,  ``0.2.33-0``

      

   
   :depends aiohttp: 
   :depends aiohttp-session: 
   :depends asyncinit: 
   :depends bokeh: ``>=2.4.0,<3.0.0``
   :depends decorator: ``<5``
   :depends deprecated: 
   :depends dill: 
   :depends gcsfs: 
   :depends google-api-core: 
   :depends google-cloud-sdk: 
   :depends google-cloud-storage: 
   :depends humanize: 
   :depends hurry.filesize: 
   :depends jinja2: ``<3.1``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends nest-asyncio: 
   :depends numpy: ``<1.24``
   :depends numpy: ``>=1.23.5,<2.0a0``
   :depends openjdk: ``8.*``
   :depends parsimonious: 
   :depends pyjwt: 
   :depends pyspark: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python-json-logger: ``0.1.11``
   :depends python_abi: ``3.11.* *_cp311``
   :depends requests: 
   :depends scipy: 
   :depends tabulate: ``0.8.3``
   :depends tqdm: ``4.42.1``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hail

   and update with::

      mamba update hail

  To create a new environment, run::

      mamba create --name myenvname hail

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hail:<tag>

   (see `hail/tags`_ for valid values for ``<tag>``)


.. |downloads_hail| image:: https://img.shields.io/conda/dn/bioconda/hail.svg?style=flat
   :target: https://anaconda.org/bioconda/hail
   :alt:   (downloads)
.. |docker_hail| image:: https://quay.io/repository/biocontainers/hail/status
   :target: https://quay.io/repository/biocontainers/hail
.. _`hail/tags`: https://quay.io/repository/biocontainers/hail?tab=tags


.. raw:: html

    <script>
        var package = "hail";
        var versions = ["0.2.61","0.2.61","0.2.61","0.2.61","0.2.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hail/README.html