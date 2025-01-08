:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multistateqtl'
.. highlight: bash

bioconductor-multistateqtl
==========================

.. conda:recipe:: bioconductor-multistateqtl
   :replaces_section_title:
   :noindex:

   Toolkit for the analysis of multi\-state QTL data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multistateQTL.html
   :license: GPL-3
   :recipe: /`bioconductor-multistateqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multistateqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multistateqtl/meta.yaml>`_

   A collection of tools for doing various analyses of multi\-state QTL data\, with a focus on visualization and interpretation. The package \'multistateQTL\' contains functions which can remove or impute missing data\, identify significant associations\, as well as categorise features into global\, multi\-state or unique. The analysis results are stored in a \'QTLExperiment\' object\, which is based on the \'SummarisedExperiment\' framework.


.. conda:package:: bioconductor-multistateqtl

   |downloads_bioconductor-multistateqtl| |docker_bioconductor-multistateqtl|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-qtlexperiment: ``>=1.4.0,<1.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-collapse: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-ggplot2: 
   :depends r-mashr: 
   :depends r-matrixstats: 
   :depends r-tidyr: 
   :depends r-viridis: 
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

      mamba install bioconductor-multistateqtl

   and update with::

      mamba update bioconductor-multistateqtl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multistateqtl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multistateqtl:<tag>

   (see `bioconductor-multistateqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multistateqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multistateqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multistateqtl
   :alt:   (downloads)
.. |docker_bioconductor-multistateqtl| image:: https://quay.io/repository/biocontainers/bioconductor-multistateqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multistateqtl
.. _`bioconductor-multistateqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-multistateqtl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multistateqtl";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multistateqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multistateqtl/README.html