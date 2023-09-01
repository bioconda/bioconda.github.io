:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-visse'
.. highlight: bash

bioconductor-visse
==================

.. conda:recipe:: bioconductor-visse
   :replaces_section_title:
   :noindex:

   Visualising Set Enrichment Analysis Results

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/vissE.html
   :license: GPL-3
   :recipe: /`bioconductor-visse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visse/meta.yaml>`_

   This package enables the interpretation and analysis of results from a gene set enrichment analysis using network\-based and text\-mining approaches. Most enrichment analyses result in large lists of significant gene sets that are difficult to interpret. Tools in this package help build a similarity\-based network of significant gene sets from a gene set enrichment analysis that can then be investigated for their biological function using text\-mining approaches.


.. conda:package:: bioconductor-visse

   |downloads_bioconductor-visse| |docker_bioconductor-visse|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-msigdb: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-ggwordcloud: 
   :depends r-igraph: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-scico: 
   :depends r-textstem: 
   :depends r-tidygraph: 
   :depends r-tm: 
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

      mamba install bioconductor-visse

   and update with::

      mamba update bioconductor-visse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-visse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-visse:<tag>

   (see `bioconductor-visse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-visse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-visse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-visse
   :alt:   (downloads)
.. |docker_bioconductor-visse| image:: https://quay.io/repository/biocontainers/bioconductor-visse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-visse
.. _`bioconductor-visse/tags`: https://quay.io/repository/biocontainers/bioconductor-visse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-visse";
        var versions = ["1.8.0","1.6.0","1.2.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-visse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-visse/README.html