:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pykofamsearch'
.. highlight: bash

pykofamsearch
=============

.. conda:recipe:: pykofamsearch
   :replaces_section_title:
   :noindex:

   Fast implementation of HMMSEARCH optimized for high\-memory systems using PyHmmer.

   :homepage: https://github.com/jolespin/pykofamsearch
   :license: MIT / MIT
   :recipe: /`pykofamsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pykofamsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pykofamsearch/meta.yaml>`_

   


.. conda:package:: pykofamsearch

   |downloads_pykofamsearch| |docker_pykofamsearch|

   :versions:
      
      

      ``2024.11.9-0``,  ``2024.11.8.post1-0``,  ``2024.10.20-0``

      

   
   :depends pandas: 
   :depends pyhmmer: ``>=0.10.12``
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install pykofamsearch

   and update with::

      mamba update pykofamsearch

  To create a new environment, run::

      mamba create --name myenvname pykofamsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pykofamsearch:<tag>

   (see `pykofamsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_pykofamsearch| image:: https://img.shields.io/conda/dn/bioconda/pykofamsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/pykofamsearch
   :alt:   (downloads)
.. |docker_pykofamsearch| image:: https://quay.io/repository/biocontainers/pykofamsearch/status
   :target: https://quay.io/repository/biocontainers/pykofamsearch
.. _`pykofamsearch/tags`: https://quay.io/repository/biocontainers/pykofamsearch?tab=tags


.. raw:: html

    <script>
        var package = "pykofamsearch";
        var versions = ["2024.11.9","2024.11.8.post1","2024.10.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pykofamsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pykofamsearch/README.html