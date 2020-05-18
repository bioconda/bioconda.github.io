:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chetah'
.. highlight: bash

bioconductor-chetah
===================

.. conda:recipe:: bioconductor-chetah
   :replaces_section_title:

   Fast and accurate scRNA\-seq cell type identification

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CHETAH.html
   :license: file LICENSE
   :recipe: /`bioconductor-chetah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chetah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chetah/meta.yaml>`_

   CHETAH \(CHaracterization of cEll Types Aided by Hierarchical classification\) is an accurate\, selective and fast scRNA\-seq classifier. Classification is guided by a reference dataset\, preferentially also a scRNA\-seq dataset. By hierarchical clustering of the reference data\, CHETAH creates a classification tree that enables a step\-wise\, top\-to\-bottom classification. Using a novel stopping rule\, CHETAH classifies the input cells to the cell types of the references and to \"intermediate types\"\: more general classifications that ended in an intermediate node of the tree.


.. conda:package:: bioconductor-chetah

   |downloads_bioconductor-chetah| |docker_bioconductor-chetah|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.4-0
   
   :depends bioconductor-biodist: >=1.60.0,<1.61.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-singlecellexperiment: >=1.10.0,<1.11.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-corrplot: 
   :depends r-cowplot: 
   :depends r-dendextend: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chetah

   and update with::

      conda update bioconductor-chetah

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chetah:<tag>

   (see `bioconductor-chetah/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chetah| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chetah.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chetah
   :alt:   (downloads)
.. |docker_bioconductor-chetah| image:: https://quay.io/repository/biocontainers/bioconductor-chetah/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chetah
.. _`bioconductor-chetah/tags`: https://quay.io/repository/biocontainers/bioconductor-chetah?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chetah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chetah/README.html