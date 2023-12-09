:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardelino'
.. highlight: bash

bioconductor-cardelino
======================

.. conda:recipe:: bioconductor-cardelino
   :replaces_section_title:
   :noindex:

   Clone Identification from Single Cell Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cardelino.html
   :license: GPL-3
   :recipe: /`bioconductor-cardelino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardelino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardelino/meta.yaml>`_

   Methods to infer clonal tree configuration for a population of cells using single\-cell RNA\-seq data \(scRNA\-seq\)\, and possibly other data modalities. Methods are also provided to assign cells to inferred clones and explore differences in gene expression between clones. These methods can flexibly integrate information from imperfect clonal trees inferred based on bulk exome\-seq data\, and sparse variant alleles expressed in scRNA\-seq data. A flexible beta\-binomial error model that accounts for stochastic dropout events as well as systematic allelic imbalance is used.


.. conda:package:: bioconductor-cardelino

   |downloads_bioconductor-cardelino| |docker_bioconductor-cardelino|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-snpstats: ``>=1.52.0,<1.53.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-combinat: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-vcfr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cardelino

   and update with::

      mamba update bioconductor-cardelino

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cardelino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardelino:<tag>

   (see `bioconductor-cardelino/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardelino| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardelino.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardelino
   :alt:   (downloads)
.. |docker_bioconductor-cardelino| image:: https://quay.io/repository/biocontainers/bioconductor-cardelino/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardelino
.. _`bioconductor-cardelino/tags`: https://quay.io/repository/biocontainers/bioconductor-cardelino?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cardelino";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardelino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardelino/README.html