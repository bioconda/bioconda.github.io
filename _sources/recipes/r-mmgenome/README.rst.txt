:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmgenome'
.. highlight: bash

r-mmgenome
==========

.. conda:recipe:: r-mmgenome
   :replaces_section_title:
   :noindex:

   Tools for extracting individual genomes from metagenomes

   :homepage: https://github.com/MadsAlbertsen/mmgenome
   :license: AGPL-3
   :recipe: /`r-mmgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome/meta.yaml>`_

   


.. conda:package:: r-mmgenome

   |downloads_r-mmgenome| |docker_r-mmgenome|

   :versions:
      
      

      ``0.7.1-7``,  ``0.7.1-6``,  ``0.7.1-5``,  ``0.7.1-4``,  ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-0``,  ``0.6.3-0``

      

   
   :depends bioconductor-biostrings: ``>=2.32.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=0.4.0``
   :depends r-ggplot2: ``>=1.0.0``
   :depends r-gridextra: ``>=0.9.1``
   :depends r-igraph: ``>=1.0.0``
   :depends r-knitr: ``>=1.6``
   :depends r-reshape2: ``>=1.4``
   :depends r-sp: ``>=1.0.15``
   :depends r-vegan: ``>=2.0.10``
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

      mamba install r-mmgenome

   and update with::

      mamba update r-mmgenome

  To create a new environment, run::

      mamba create --name myenvname r-mmgenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mmgenome:<tag>

   (see `r-mmgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mmgenome| image:: https://img.shields.io/conda/dn/bioconda/r-mmgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmgenome
   :alt:   (downloads)
.. |docker_r-mmgenome| image:: https://quay.io/repository/biocontainers/r-mmgenome/status
   :target: https://quay.io/repository/biocontainers/r-mmgenome
.. _`r-mmgenome/tags`: https://quay.io/repository/biocontainers/r-mmgenome?tab=tags


.. raw:: html

    <script>
        var package = "r-mmgenome";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.1","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmgenome/README.html