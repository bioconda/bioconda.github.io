.. title:: Package Recipe 'bioconductor-qubic'
.. highlight: bash


bioconductor-qubic
==================

.. conda:recipe:: bioconductor-qubic
   :replaces_section_title:

   The core function of this R package is to provide the implementation of the well\-cited and well\-reviewed QUBIC algorithm\, aiming to deliver an effective and efficient biclustering capability. This package also includes the following related functions\: \(i\) a qualitative representation of the input gene expression data\, through a well\-designed discretization way considering the underlying data property\, which can be directly used in other biclustering programs\; \(ii\) visualization of identified biclusters using heatmap in support of overall expression pattern analysis\; \(iii\) bicluster\-based co\-expression network elucidation and visualization\, where different correlation coefficient scores between a pair of genes are provided\; and \(iv\) a generalize output format of biclusters and corresponding network can be freely downloaded so that a user can easily do following comprehensive functional enrichment analysis \(e.g. DAVID\) and advanced network visualization \(e.g. Cytoscape\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/QUBIC.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-qubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic/meta.yaml>`_

   


.. conda:package:: bioconductor-qubic

   |downloads_bioconductor-qubic| |docker_bioconductor-qubic|

   :versions: 1.10.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biclust`  :conda:package:`r-matrix`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_bioconductor-qubic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qubic

   and update with::

      conda update bioconductor-qubic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qubic


.. |required_by_bioconductor-qubic| conda:required_by:: bioconductor-qubic
.. |downloads_bioconductor-qubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qubic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qubic| image:: https://quay.io/repository/biocontainers/bioconductor-qubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qubic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qubic/README.html

