:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mastr'
.. highlight: bash

bioconductor-mastr
==================

.. conda:recipe:: bioconductor-mastr
   :replaces_section_title:
   :noindex:

   Markers Automated Screening Tool in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mastR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mastr/meta.yaml>`_

   mastR is an R package designed for automated screening of signatures of interest for specific research questions. The package is developed for generating refined lists of signature genes from multiple group comparisons based on the results from edgeR and limma differential expression \(DE\) analysis workflow. It also takes into account the background noise of tissue\-specificity\, which is often ignored by other marker generation tools. This package is particularly useful for the identification of group markers in various biological and medical applications\, including cancer research and developmental biology.


.. conda:package:: bioconductor-mastr

   |downloads_bioconductor-mastr| |docker_bioconductor-mastr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-msigdb: ``>=1.10.0,<1.11.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-seuratobject: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mastr

   and update with::

      mamba update bioconductor-mastr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mastr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mastr:<tag>

   (see `bioconductor-mastr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mastr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mastr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mastr
   :alt:   (downloads)
.. |docker_bioconductor-mastr| image:: https://quay.io/repository/biocontainers/bioconductor-mastr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mastr
.. _`bioconductor-mastr/tags`: https://quay.io/repository/biocontainers/bioconductor-mastr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mastr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mastr/README.html