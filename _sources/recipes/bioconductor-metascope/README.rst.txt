:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metascope'
.. highlight: bash

bioconductor-metascope
======================

.. conda:recipe:: bioconductor-metascope
   :replaces_section_title:
   :noindex:

   Tools and functions for preprocessing 16S and metagenomic sequencing microbiome data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MetaScope.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metascope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metascope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metascope/meta.yaml>`_

   This package contains tools and methods for preprocessing microbiome data. Functionality includes library generation\, demultiplexing\, alignment\, and microbe identification.  It is partly an R translation of the PathoScope 2.0 pipeline.


.. conda:package:: bioconductor-metascope

   |downloads_bioconductor-metascope| |docker_bioconductor-metascope|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rbowtie2: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-qlcmatrix: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-taxize: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-metascope

   and update with::

      mamba update bioconductor-metascope

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metascope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metascope:<tag>

   (see `bioconductor-metascope/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metascope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metascope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metascope
   :alt:   (downloads)
.. |docker_bioconductor-metascope| image:: https://quay.io/repository/biocontainers/bioconductor-metascope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metascope
.. _`bioconductor-metascope/tags`: https://quay.io/repository/biocontainers/bioconductor-metascope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metascope";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metascope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metascope/README.html