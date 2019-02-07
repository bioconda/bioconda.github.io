.. title:: Package Recipe 'bioconductor-nnnorm'
.. highlight: bash


bioconductor-nnnorm
===================

.. conda:recipe:: bioconductor-nnnorm
   :replaces_section_title:

   This package allows to detect and correct for spatial and intensity biases with two\-channel microarray data. The normalization method implemented in this package is based on robust neural networks fitting.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nnNorm.html
   :license: LGPL
   :recipe: /`bioconductor-nnnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnnorm/meta.yaml>`_
   :links: biotools: :biotools:`nnnorm`, doi: :doi:`10.1093/bioinformatics/bti397`

   


.. conda:package:: bioconductor-nnnorm

   |downloads_bioconductor-nnnorm| |docker_bioconductor-nnnorm|

   :versions: 2.46.0, 2.44.0, 2.42.0, 2.40.0

   :depends: :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-nnet`  

   :required~by: |required_by_bioconductor-nnnorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nnnorm

   and update with::

      conda update bioconductor-nnnorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nnnorm


.. |required_by_bioconductor-nnnorm| conda:required_by:: bioconductor-nnnorm
.. |downloads_bioconductor-nnnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nnnorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nnnorm| image:: https://quay.io/repository/biocontainers/bioconductor-nnnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nnnorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nnnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nnnorm/README.html

