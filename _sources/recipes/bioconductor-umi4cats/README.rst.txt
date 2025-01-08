:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-umi4cats'
.. highlight: bash

bioconductor-umi4cats
=====================

.. conda:recipe:: bioconductor-umi4cats
   :replaces_section_title:
   :noindex:

   UMI4Cats\: Processing\, analysis and visualization of UMI\-4C chromatin contact data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UMI4Cats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-umi4cats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-umi4cats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-umi4cats/meta.yaml>`_

   UMI\-4C is a technique that allows characterization of 3D chromatin interactions with a bait of interest\, taking advantage of a sonication step to produce unique molecular identifiers \(UMIs\) that help remove duplication bias\, thus allowing a better differential comparsion of chromatin interactions between conditions. This package allows processing of UMI\-4C data\, starting from FastQ files provided by the sequencing facility. It provides two statistical methods for detecting differential contacts and includes a visualization function to plot integrated information from a UMI\-4C assay.


.. conda:package:: bioconductor-umi4cats

   |downloads_bioconductor-umi4cats| |docker_bioconductor-umi4cats|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rbowtie2: ``>=2.8.0,<2.9.0``
   :depends bioconductor-regioner: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-fda: 
   :depends r-ggplot2: 
   :depends r-magick: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-rappdirs: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-zoo: 
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

      mamba install bioconductor-umi4cats

   and update with::

      mamba update bioconductor-umi4cats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-umi4cats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-umi4cats:<tag>

   (see `bioconductor-umi4cats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-umi4cats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-umi4cats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-umi4cats
   :alt:   (downloads)
.. |docker_bioconductor-umi4cats| image:: https://quay.io/repository/biocontainers/bioconductor-umi4cats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-umi4cats
.. _`bioconductor-umi4cats/tags`: https://quay.io/repository/biocontainers/bioconductor-umi4cats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-umi4cats";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-umi4cats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-umi4cats/README.html