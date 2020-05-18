:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-predictionet'
.. highlight: bash

bioconductor-predictionet
=========================

.. conda:recipe:: bioconductor-predictionet
   :replaces_section_title:

   Inference for predictive networks designed for \(but not limited to\) genomic data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/predictionet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-predictionet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predictionet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predictionet/meta.yaml>`_

   This package contains a set of functions related to network inference combining genomic data and prior information extracted from biomedical literature and structured biological databases. The main function is able to generate networks using Bayesian or regression\-based inference methods\; while the former is limited to \< 100 of variables\, the latter may infer networks with hundreds of variables. Several statistics at the edge and node levels have been implemented \(edge stability\, predictive ability of each node\, ...\) in order to help the user to focus on high quality subnetworks. Ultimately\, this package is used in the \'Predictive Networks\' web application developed by the Dana\-Farber Cancer Institute in collaboration with Entagen.


.. conda:package:: bioconductor-predictionet

   |downloads_bioconductor-predictionet| |docker_bioconductor-predictionet|

   :versions: 1.34.0-0, 1.32.0-0, 1.30.0-1, 1.28.0-0
   
   :depends bioconductor-rbgl: >=1.64.0,<1.65.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-catnet: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-penalized: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-predictionet

   and update with::

      conda update bioconductor-predictionet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-predictionet:<tag>

   (see `bioconductor-predictionet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-predictionet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-predictionet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-predictionet
   :alt:   (downloads)
.. |docker_bioconductor-predictionet| image:: https://quay.io/repository/biocontainers/bioconductor-predictionet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-predictionet
.. _`bioconductor-predictionet/tags`: https://quay.io/repository/biocontainers/bioconductor-predictionet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-predictionet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-predictionet/README.html