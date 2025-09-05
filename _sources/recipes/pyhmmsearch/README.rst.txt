:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhmmsearch'
.. highlight: bash

pyhmmsearch
===========

.. conda:recipe:: pyhmmsearch
   :replaces_section_title:
   :noindex:

   Fast implementation of HMMSEARCH optimized for high\-memory systems using PyHmmer.

   :homepage: https://github.com/new-atlantis-labs/pyhmmsearch-stable
   :documentation: https://github.com/new-atlantis-labs/pyhmmsearch-stable/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`pyhmmsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmsearch/meta.yaml>`_

   


.. conda:package:: pyhmmsearch

   |downloads_pyhmmsearch| |docker_pyhmmsearch|

   :versions:
      
      

      ``2025.9.4.post1-0``,  ``2025.9.4-0``,  ``2025.1.23-0``,  ``2024.10.20-0``

      

   
   :depends pandas: ``>=2``
   :depends pyhmmer: ``>=0.10.12``
   :depends python: 
   :depends tqdm: ``>=4``
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

      mamba install pyhmmsearch

   and update with::

      mamba update pyhmmsearch

  To create a new environment, run::

      mamba create --name myenvname pyhmmsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyhmmsearch:<tag>

   (see `pyhmmsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhmmsearch| image:: https://img.shields.io/conda/dn/bioconda/pyhmmsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhmmsearch
   :alt:   (downloads)
.. |docker_pyhmmsearch| image:: https://quay.io/repository/biocontainers/pyhmmsearch/status
   :target: https://quay.io/repository/biocontainers/pyhmmsearch
.. _`pyhmmsearch/tags`: https://quay.io/repository/biocontainers/pyhmmsearch?tab=tags


.. raw:: html

    <script>
        var package = "pyhmmsearch";
        var versions = ["2025.9.4.post1","2025.9.4","2025.1.23","2024.10.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhmmsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhmmsearch/README.html