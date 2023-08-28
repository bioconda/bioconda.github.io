:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-milor'
.. highlight: bash

bioconductor-milor
==================

.. conda:recipe:: bioconductor-milor
   :replaces_section_title:
   :noindex:

   Differential neighbourhood abundance testing on a graph

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/miloR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-milor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-milor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-milor/meta.yaml>`_

   Milo performs single\-cell differential abundance testing. Cell states are modelled as representative neighbourhoods on a nearest neighbour graph. Hypothesis testing is performed using a negative bionomial generalized linear model.


.. conda:package:: bioconductor-milor

   |downloads_bioconductor-milor| |docker_bioconductor-milor|

   :versions:
      
      

      ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocneighbors: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-matrix: ``>=1.3-0``
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-milor

   and update with::

      mamba update bioconductor-milor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-milor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-milor:<tag>

   (see `bioconductor-milor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-milor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-milor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-milor
   :alt:   (downloads)
.. |docker_bioconductor-milor| image:: https://quay.io/repository/biocontainers/bioconductor-milor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-milor
.. _`bioconductor-milor/tags`: https://quay.io/repository/biocontainers/bioconductor-milor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-milor";
        var versions = ["1.8.1","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-milor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-milor/README.html