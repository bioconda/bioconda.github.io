:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ewce'
.. highlight: bash

bioconductor-ewce
=================

.. conda:recipe:: bioconductor-ewce
   :replaces_section_title:
   :noindex:

   Expression Weighted Celltype Enrichment

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EWCE.html
   :license: GPL-3
   :recipe: /`bioconductor-ewce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce/meta.yaml>`_

   Used to determine which cell types are enriched within gene lists. The package provides tools for testing enrichments within simple gene lists \(such as human disease associated genes\) and those resulting from differential expression studies. The package does not depend upon any particular Single Cell Transcriptome dataset and user defined datasets can be loaded in and used in the analyses.


.. conda:package:: bioconductor-ewce

   |downloads_bioconductor-ewce| |docker_bioconductor-ewce|

   :versions:
      
      

      ``1.10.2-0``,  ``1.8.2-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-ewcedata: ``>=1.10.0,<1.11.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-orthogene: ``>=1.8.0,<1.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hgnchelper: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rnomni: ``>=1.0``
   :depends r-stringr: 
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

      mamba install bioconductor-ewce

   and update with::

      mamba update bioconductor-ewce

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ewce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ewce:<tag>

   (see `bioconductor-ewce/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ewce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ewce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ewce
   :alt:   (downloads)
.. |docker_bioconductor-ewce| image:: https://quay.io/repository/biocontainers/bioconductor-ewce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ewce
.. _`bioconductor-ewce/tags`: https://quay.io/repository/biocontainers/bioconductor-ewce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ewce";
        var versions = ["1.10.2","1.8.2","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ewce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ewce/README.html