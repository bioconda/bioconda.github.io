:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-barcodetrackr'
.. highlight: bash

bioconductor-barcodetrackr
==========================

.. conda:recipe:: bioconductor-barcodetrackr
   :replaces_section_title:
   :noindex:

   Functions for Analyzing Cellular Barcoding Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/barcodetrackR.html
   :license: file LICENSE
   :recipe: /`bioconductor-barcodetrackr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barcodetrackr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barcodetrackr/meta.yaml>`_

   barcodetrackR is an R package developed for the analysis and visualization of clonal tracking data. Data required is samples and tag abundances in matrix form. Usually from cellular barcoding experiments\, integration site retrieval analyses\, or similar technologies.


.. conda:package:: bioconductor-barcodetrackr

   |downloads_bioconductor-barcodetrackr| |docker_bioconductor-barcodetrackr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-proxy: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install bioconductor-barcodetrackr

   and update with::

      mamba update bioconductor-barcodetrackr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-barcodetrackr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-barcodetrackr:<tag>

   (see `bioconductor-barcodetrackr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-barcodetrackr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-barcodetrackr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-barcodetrackr
   :alt:   (downloads)
.. |docker_bioconductor-barcodetrackr| image:: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr
.. _`bioconductor-barcodetrackr/tags`: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-barcodetrackr";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-barcodetrackr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-barcodetrackr/README.html