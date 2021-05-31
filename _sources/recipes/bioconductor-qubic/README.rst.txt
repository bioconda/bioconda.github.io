:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qubic'
.. highlight: bash

bioconductor-qubic
==================

.. conda:recipe:: bioconductor-qubic
   :replaces_section_title:
   :noindex:

   An R package for qualitative biclustering in support of gene co\-expression analyses

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/QUBIC.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-qubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic/meta.yaml>`_

   The core function of this R package is to provide the implementation of the well\-cited and well\-reviewed QUBIC algorithm\, aiming to deliver an effective and efficient biclustering capability. This package also includes the following related functions\: \(i\) a qualitative representation of the input gene expression data\, through a well\-designed discretization way considering the underlying data property\, which can be directly used in other biclustering programs\; \(ii\) visualization of identified biclusters using heatmap in support of overall expression pattern analysis\; \(iii\) bicluster\-based co\-expression network elucidation and visualization\, where different correlation coefficient scores between a pair of genes are provided\; and \(iv\) a generalize output format of biclusters and corresponding network can be freely downloaded so that a user can easily do following comprehensive functional enrichment analysis \(e.g. DAVID\) and advanced network visualization \(e.g. Cytoscape\).


.. conda:package:: bioconductor-qubic

   |downloads_bioconductor-qubic| |docker_bioconductor-qubic|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biclust: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qubic

   and update with::

      conda update bioconductor-qubic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qubic:<tag>

   (see `bioconductor-qubic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qubic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qubic
   :alt:   (downloads)
.. |docker_bioconductor-qubic| image:: https://quay.io/repository/biocontainers/bioconductor-qubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qubic
.. _`bioconductor-qubic/tags`: https://quay.io/repository/biocontainers/bioconductor-qubic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qubic/README.html