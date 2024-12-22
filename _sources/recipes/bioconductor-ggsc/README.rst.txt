:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggsc'
.. highlight: bash

bioconductor-ggsc
=================

.. conda:recipe:: bioconductor-ggsc
   :replaces_section_title:
   :noindex:

   Visualizing Single Cell Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggsc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggsc/meta.yaml>`_

   Useful functions to visualize single cell and spatial data. It supports both \'SingleCellExperiment\' and \'Seurat\' objects. It also supports visualizing the data using grammar of graphics implemented in \'ggplot2\'.


.. conda:package:: bioconductor-ggsc

   |downloads_bioconductor-ggsc| |docker_bioconductor-ggsc|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ggfun: ``>=0.1.5``
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-scattermore: 
   :depends r-seurat: 
   :depends r-tibble: 
   :depends r-tidydr: 
   :depends r-tidyr: 
   :depends r-yulab.utils: 
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

      mamba install bioconductor-ggsc

   and update with::

      mamba update bioconductor-ggsc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggsc:<tag>

   (see `bioconductor-ggsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggsc
   :alt:   (downloads)
.. |docker_bioconductor-ggsc| image:: https://quay.io/repository/biocontainers/bioconductor-ggsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggsc
.. _`bioconductor-ggsc/tags`: https://quay.io/repository/biocontainers/bioconductor-ggsc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggsc";
        var versions = ["1.4.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggsc/README.html