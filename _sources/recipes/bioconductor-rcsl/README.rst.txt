:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcsl'
.. highlight: bash

bioconductor-rcsl
=================

.. conda:recipe:: bioconductor-rcsl
   :replaces_section_title:
   :noindex:

   Rank Constrained Similarity Learning for single cell RNA sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RCSL.html
   :license: GPL-3
   :recipe: /`bioconductor-rcsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcsl/meta.yaml>`_

   A novel clustering algorithm and toolkit RCSL \(Rank Constrained Similarity Learning\) to accurately identify various cell types using scRNA\-seq data from a complex tissue. RCSL considers both lo\-cal similarity and global similarity among the cells to discern the subtle differences among cells of the same type as well as larger differences among cells of different types. RCSL uses Spearman’s rank correlations of a cell’s expression vector with those of other cells to measure its global similar\-ity\, and adaptively learns neighbour representation of a cell as its local similarity. The overall similar\-ity of a cell to other cells is a linear combination of its global similarity and local similarity.


.. conda:package:: bioconductor-rcsl

   |downloads_bioconductor-rcsl| |docker_bioconductor-rcsl|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-nbclust: 
   :depends r-pracma: 
   :depends r-rcppannoy: 
   :depends r-rtsne: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcsl

   and update with::

      conda update bioconductor-rcsl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcsl:<tag>

   (see `bioconductor-rcsl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcsl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcsl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcsl
   :alt:   (downloads)
.. |docker_bioconductor-rcsl| image:: https://quay.io/repository/biocontainers/bioconductor-rcsl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcsl
.. _`bioconductor-rcsl/tags`: https://quay.io/repository/biocontainers/bioconductor-rcsl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcsl";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcsl/README.html