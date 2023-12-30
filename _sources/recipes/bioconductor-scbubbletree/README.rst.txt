:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbubbletree'
.. highlight: bash

bioconductor-scbubbletree
=========================

.. conda:recipe:: bioconductor-scbubbletree
   :replaces_section_title:
   :noindex:

   Quantitative visual exploration of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scBubbletree.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scbubbletree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree/meta.yaml>`_

   scBubbletree is a quantitative method for visual exploration of scRNA\-seq data. It preserves biologically meaningful properties of scRNA\-seq data\, such as local and global cell distances\, as well as the density distribution of cells across the sample. scBubbletree is scalable and avoids the overplotting problem\, and is able to visualize diverse cell attributes derived from multiomic single\-cell experiments. Importantly\, Importantly\, scBubbletree is easy to use and to integrate with popular approaches for scRNA\-seq data analysis.


.. conda:package:: bioconductor-scbubbletree

   |downloads_bioconductor-scbubbletree| |docker_bioconductor-scbubbletree|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-patchwork: 
   :depends r-proxy: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-seurat: 
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

      mamba install bioconductor-scbubbletree

   and update with::

      mamba update bioconductor-scbubbletree

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scbubbletree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scbubbletree:<tag>

   (see `bioconductor-scbubbletree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scbubbletree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scbubbletree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scbubbletree
   :alt:   (downloads)
.. |docker_bioconductor-scbubbletree| image:: https://quay.io/repository/biocontainers/bioconductor-scbubbletree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scbubbletree
.. _`bioconductor-scbubbletree/tags`: https://quay.io/repository/biocontainers/bioconductor-scbubbletree?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scbubbletree";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scbubbletree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scbubbletree/README.html