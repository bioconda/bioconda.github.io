:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-toxicogx'
.. highlight: bash

bioconductor-toxicogx
=====================

.. conda:recipe:: bioconductor-toxicogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Toxico\-Genomic Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ToxicoGx.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-toxicogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toxicogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-toxicogx/meta.yaml>`_

   Contains a set of functions to perform large\-scale analysis of toxicogenomic data\, providing a standardized data structure to hold information relevant to annotation\, visualization and statistical analysis of toxicogenomic data.


.. conda:package:: bioconductor-toxicogx

   |downloads_bioconductor-toxicogx| |docker_bioconductor-toxicogx|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-coregx: ``>=2.6.0,<2.7.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tibble: 
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

      mamba install bioconductor-toxicogx

   and update with::

      mamba update bioconductor-toxicogx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-toxicogx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-toxicogx:<tag>

   (see `bioconductor-toxicogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-toxicogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-toxicogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-toxicogx
   :alt:   (downloads)
.. |docker_bioconductor-toxicogx| image:: https://quay.io/repository/biocontainers/bioconductor-toxicogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-toxicogx
.. _`bioconductor-toxicogx/tags`: https://quay.io/repository/biocontainers/bioconductor-toxicogx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-toxicogx";
        var versions = ["2.6.0","2.4.0","2.2.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-toxicogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-toxicogx/README.html