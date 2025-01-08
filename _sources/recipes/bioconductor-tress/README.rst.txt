:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tress'
.. highlight: bash

bioconductor-tress
==================

.. conda:recipe:: bioconductor-tress
   :replaces_section_title:
   :noindex:

   Toolbox for mRNA epigenetics sequencing analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TRESS.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-tress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress/meta.yaml>`_

   This package is devoted to analyzing MeRIP\-seq data. Current functionalities include 1. detect transcriptome wide m6A methylation regions 2. detect transcriptome wide differential m6A methylation regions.


.. conda:package:: bioconductor-tress

   |downloads_bioconductor-tress| |docker_bioconductor-tress|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-tress

   and update with::

      mamba update bioconductor-tress

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tress:<tag>

   (see `bioconductor-tress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tress
   :alt:   (downloads)
.. |docker_bioconductor-tress| image:: https://quay.io/repository/biocontainers/bioconductor-tress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tress
.. _`bioconductor-tress/tags`: https://quay.io/repository/biocontainers/bioconductor-tress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tress";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tress/README.html