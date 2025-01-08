:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prone'
.. highlight: bash

bioconductor-prone
==================

.. conda:recipe:: bioconductor-prone
   :replaces_section_title:
   :noindex:

   The PROteomics Normalization Evaluator

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PRONE.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-prone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prone/meta.yaml>`_

   High\-throughput omics data are often affected by systematic biases introduced throughout all the steps of a clinical study\, from sample collection to quantification. Normalization methods aim to adjust for these biases to make the actual biological signal more prominent. However\, selecting an appropriate normalization method is challenging due to the wide range of available approaches. Therefore\, a comparative evaluation of unnormalized and normalized data is essential in identifying an appropriate normalization strategy for a specific data set. This R package provides different functions for preprocessing\, normalizing\, and evaluating different normalization approaches. Furthermore\, normalization methods can be evaluated on downstream steps\, such as differential expression analysis and statistical enrichment analysis. Spike\-in data sets with known ground truth and real\-world data sets of biological experiments acquired by either tandem mass tag \(TMT\) or label\-free quantification \(LFQ\) can be analyzed.


.. conda:package:: bioconductor-prone

   |downloads_bioconductor-prone| |docker_bioconductor-prone|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deqms: ``>=1.24.0,<1.25.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-normalyzerde: ``>=1.24.0,<1.25.0``
   :depends bioconductor-poma: ``>=1.16.0,<1.17.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rots: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-vsn: ``>=3.74.0,<3.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-complexupset: 
   :depends r-data.table: 
   :depends r-dendsort: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggtext: 
   :depends r-gprofiler2: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-plotroc: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-upsetr: 
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

      mamba install bioconductor-prone

   and update with::

      mamba update bioconductor-prone

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prone:<tag>

   (see `bioconductor-prone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prone
   :alt:   (downloads)
.. |docker_bioconductor-prone| image:: https://quay.io/repository/biocontainers/bioconductor-prone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prone
.. _`bioconductor-prone/tags`: https://quay.io/repository/biocontainers/bioconductor-prone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prone";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prone/README.html