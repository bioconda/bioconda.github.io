:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lintind'
.. highlight: bash

bioconductor-lintind
====================

.. conda:recipe:: bioconductor-lintind
   :replaces_section_title:
   :noindex:

   Lineage tracing by indels

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/LinTInd.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lintind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lintind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lintind/meta.yaml>`_

   When we combine gene\-editing technology and sequencing technology\, we need to reconstruct a lineage tree from alleles generated and calculate the similarity between each pair of groups. FindIndel\(\) and IndelForm\(\) function will help you align each read to reference sequence and generate scar form strings respectively. IndelIdents\(\) function will help you to define a scar form for each cell or read. IndelPlot\(\) function will help you to visualize the distribution of deletion and insertion. TagProcess\(\) function will help you to extract indels for each cell or read. TagDist\(\) function will help you to calculate the similarity between each pair of groups across the indwells they contain. BuildTree\(\) function will help you to reconstruct a tree. PlotTree\(\) function will help you to visualize the tree.


.. conda:package:: bioconductor-lintind

   |downloads_bioconductor-lintind| |docker_bioconductor-lintind|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.tree: 
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-networkd3: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rlist: 
   :depends r-stringdist: 
   :depends r-stringr: 
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

      mamba install bioconductor-lintind

   and update with::

      mamba update bioconductor-lintind

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lintind

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lintind:<tag>

   (see `bioconductor-lintind/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lintind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lintind.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lintind
   :alt:   (downloads)
.. |docker_bioconductor-lintind| image:: https://quay.io/repository/biocontainers/bioconductor-lintind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lintind
.. _`bioconductor-lintind/tags`: https://quay.io/repository/biocontainers/bioconductor-lintind?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lintind";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lintind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lintind/README.html