:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidysinglecellexperiment'
.. highlight: bash

bioconductor-tidysinglecellexperiment
=====================================

.. conda:recipe:: bioconductor-tidysinglecellexperiment
   :replaces_section_title:
   :noindex:

   Brings SingleCellExperiment to the Tidyverse

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidySingleCellExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-tidysinglecellexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysinglecellexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysinglecellexperiment/meta.yaml>`_

   \'tidySingleCellExperiment\' is an adapter that abstracts the \'SingleCellExperiment\' container in the form of a \'tibble\'. This allows \*tidy\* data manipulation\, nesting\, and plotting. For example\, a \'tidySingleCellExperiment\' is directly compatible with functions from \'tidyverse\' packages \`dplyr\` and \`tidyr\`\, as well as plotting with \`ggplot2\` and \`plotly\`. In addition\, the package provides various utility functions specific to single\-cell omics data analysis \(e.g.\, aggregation of cell\-level data to pseudobulks\).


.. conda:package:: bioconductor-tidysinglecellexperiment

   |downloads_bioconductor-tidysinglecellexperiment| |docker_bioconductor-tidysinglecellexperiment|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ellipsis: 
   :depends r-fansi: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-pillar: 
   :depends r-pkgconfig: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-ttservice: ``>=0.4.0``
   :depends r-vctrs: 
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

      mamba install bioconductor-tidysinglecellexperiment

   and update with::

      mamba update bioconductor-tidysinglecellexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidysinglecellexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidysinglecellexperiment:<tag>

   (see `bioconductor-tidysinglecellexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidysinglecellexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidysinglecellexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidysinglecellexperiment
   :alt:   (downloads)
.. |docker_bioconductor-tidysinglecellexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment
.. _`bioconductor-tidysinglecellexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidysinglecellexperiment";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidysinglecellexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidysinglecellexperiment/README.html