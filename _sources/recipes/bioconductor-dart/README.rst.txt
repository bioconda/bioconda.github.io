.. title:: Package Recipe 'bioconductor-dart'
.. highlight: bash


bioconductor-dart
=================

.. conda:recipe:: bioconductor-dart
   :replaces_section_title:

   Denoising Algorithm based on Relevance network Topology \(DART\) is an algorithm designed to evaluate the consistency of prior information molecular signatures \(e.g in\-vitro perturbation expression signatures\) in independent molecular data \(e.g gene expression data sets\). If consistent\, a pruning network strategy is then used to infer the activation status of the molecular signature in individual samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DART.html
   :license: GPL-2
   :recipe: /`bioconductor-dart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dart/meta.yaml>`_

   


.. conda:package:: bioconductor-dart

   |downloads_bioconductor-dart| |docker_bioconductor-dart|

   :versions: 1.30.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph` >=0.6.0 

   :required~by: |required_by_bioconductor-dart|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dart

   and update with::

      conda update bioconductor-dart

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dart


.. |required_by_bioconductor-dart| conda:required_by:: bioconductor-dart
.. |downloads_bioconductor-dart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dart.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dart| image:: https://quay.io/repository/biocontainers/bioconductor-dart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dart







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dart/README.html

