:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hca-matrix-downloader'
.. highlight: bash

hca-matrix-downloader
=====================

.. conda:recipe:: hca-matrix-downloader
   :replaces_section_title:
   :noindex:

   Python client for the HCA DCP matrix service

   :homepage: https://github.com/ebi-gene-expression-group/hca-matrix-downloader
   :license: MIT
   :recipe: /`hca-matrix-downloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader/meta.yaml>`_

   


.. conda:package:: hca-matrix-downloader

   |downloads_hca-matrix-downloader| |docker_hca-matrix-downloader|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends python: ``>=3``
   :depends requests: 
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

      mamba install hca-matrix-downloader

   and update with::

      mamba update hca-matrix-downloader

  To create a new environment, run::

      mamba create --name myenvname hca-matrix-downloader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hca-matrix-downloader:<tag>

   (see `hca-matrix-downloader/tags`_ for valid values for ``<tag>``)


.. |downloads_hca-matrix-downloader| image:: https://img.shields.io/conda/dn/bioconda/hca-matrix-downloader.svg?style=flat
   :target: https://anaconda.org/bioconda/hca-matrix-downloader
   :alt:   (downloads)
.. |docker_hca-matrix-downloader| image:: https://quay.io/repository/biocontainers/hca-matrix-downloader/status
   :target: https://quay.io/repository/biocontainers/hca-matrix-downloader
.. _`hca-matrix-downloader/tags`: https://quay.io/repository/biocontainers/hca-matrix-downloader?tab=tags


.. raw:: html

    <script>
        var package = "hca-matrix-downloader";
        var versions = ["0.0.4","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hca-matrix-downloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hca-matrix-downloader/README.html