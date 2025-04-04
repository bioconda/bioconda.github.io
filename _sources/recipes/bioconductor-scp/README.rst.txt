:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scp'
.. highlight: bash

bioconductor-scp
================

.. conda:recipe:: bioconductor-scp
   :replaces_section_title:
   :noindex:

   Mass Spectrometry\-Based Single\-Cell Proteomics Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scp/meta.yaml>`_

   Utility functions for manipulating\, processing\, and analyzing mass spectrometry\-based single\-cell proteomics data. The package is an extension to the \'QFeatures\' package and relies on \'SingleCellExpirement\' to enable single\-cell proteomics analyses. The package offers the user the functionality to process quantitative table \(as generated by MaxQuant\, Proteome Discoverer\, and more\) into data tables ready for downstream analysis and data visualization.


.. conda:package:: bioconductor-scp

   |downloads_bioconductor-scp| |docker_bioconductor-scp|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-ihw: ``>=1.34.0,<1.35.0``
   :depends bioconductor-metapod: ``>=1.14.0,<1.15.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-qfeatures: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-nipals: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-scp

   and update with::

      mamba update bioconductor-scp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scp:<tag>

   (see `bioconductor-scp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scp
   :alt:   (downloads)
.. |docker_bioconductor-scp| image:: https://quay.io/repository/biocontainers/bioconductor-scp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scp
.. _`bioconductor-scp/tags`: https://quay.io/repository/biocontainers/bioconductor-scp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scp";
        var versions = ["1.16.0","1.12.0","1.10.1","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scp/README.html