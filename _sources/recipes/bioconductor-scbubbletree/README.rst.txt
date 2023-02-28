:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbubbletree'
.. highlight: bash

bioconductor-scbubbletree
=========================

.. conda:recipe:: bioconductor-scbubbletree
   :replaces_section_title:
   :noindex:

   Quantitative visual exploration of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/scBubbletree.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scbubbletree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree/meta.yaml>`_

   scBubbletree is a quantitative method for visual exploration of scRNA\-seq data. It preserves biologically meaningful properties of scRNA\-seq data\, such as local and global cell distances\, as well as the density distribution of cells across the sample. scBubbletree is scalable and avoids the overplotting problem\, and is able to visualize diverse cell attributes derived from multiomic single\-cell experiments. Importantly\, Importantly\, scBubbletree is easy to use and to integrate with popular approaches for scRNA\-seq data analysis.


.. conda:package:: bioconductor-scbubbletree

   |downloads_bioconductor-scbubbletree| |docker_bioconductor-scbubbletree|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.6.0,<3.7.0``
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scbubbletree

   and update with::

      conda update bioconductor-scbubbletree

   or use the docker container::

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
        var versions = ["1.0.0"];
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