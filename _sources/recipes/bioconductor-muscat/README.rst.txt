:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscat'
.. highlight: bash

bioconductor-muscat
===================

.. conda:recipe:: bioconductor-muscat
   :replaces_section_title:
   :noindex:

   Multi\-sample multi\-group scRNA\-seq data analysis tools

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/muscat.html
   :license: GPL-3
   :recipe: /`bioconductor-muscat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat/meta.yaml>`_

   \`muscat\` provides various methods and visualization tools for DS analysis in multi\-sample\, multi\-group\, multi\-\(cell\-\)subpopulation scRNA\-seq data\, including cell\-level mixed models and methods based on aggregated “pseudobulk” data\, as well as a flexible simulation platform that mimics both single and multi\-sample scRNA\-seq data.


.. conda:package:: bioconductor-muscat

   |downloads_bioconductor-muscat| |docker_bioconductor-muscat|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scuttle: ``>=1.10.0,<1.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variancepartition: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-blme: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glmmtmb: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-scales: 
   :depends r-sctransform: 
   :depends r-viridis: 
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

      mamba install bioconductor-muscat

   and update with::

      mamba update bioconductor-muscat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-muscat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscat:<tag>

   (see `bioconductor-muscat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscat
   :alt:   (downloads)
.. |docker_bioconductor-muscat| image:: https://quay.io/repository/biocontainers/bioconductor-muscat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscat
.. _`bioconductor-muscat/tags`: https://quay.io/repository/biocontainers/bioconductor-muscat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-muscat";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscat/README.html