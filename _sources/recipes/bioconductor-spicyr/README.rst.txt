:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spicyr'
.. highlight: bash

bioconductor-spicyr
===================

.. conda:recipe:: bioconductor-spicyr
   :replaces_section_title:
   :noindex:

   Spatial analysis of in situ cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spicyR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-spicyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicyr/meta.yaml>`_

   The spicyR package provides a framework for performing inference on changes in spatial relationships between pairs of cell types for cell\-resolution spatial omics technologies. spicyR consists of three primary steps\: \(i\) summarizing the degree of spatial localization between pairs of cell types for each image\; \(ii\) modelling the variability in localization summary statistics as a function of cell counts and \(iii\) testing for changes in spatial localizations associated with a response variable.


.. conda:package:: bioconductor-spicyr

   |downloads_bioconductor-spicyr| |docker_bioconductor-spicyr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.2-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-classifyr: ``>=3.10.0,<3.11.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-concaveman: 
   :depends r-coxme: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggh4x: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-lmertest: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-rlang: 
   :depends r-scam: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
   :depends r-survival: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-spicyr

   and update with::

      mamba update bioconductor-spicyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spicyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spicyr:<tag>

   (see `bioconductor-spicyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spicyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spicyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spicyr
   :alt:   (downloads)
.. |docker_bioconductor-spicyr| image:: https://quay.io/repository/biocontainers/bioconductor-spicyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spicyr
.. _`bioconductor-spicyr/tags`: https://quay.io/repository/biocontainers/bioconductor-spicyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spicyr";
        var versions = ["1.18.0","1.14.2","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spicyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spicyr/README.html