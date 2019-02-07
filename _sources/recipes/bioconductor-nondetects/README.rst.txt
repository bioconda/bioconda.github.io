.. title:: Package Recipe 'bioconductor-nondetects'
.. highlight: bash


bioconductor-nondetects
=======================

.. conda:recipe:: bioconductor-nondetects
   :replaces_section_title:

   Methods to model and impute non\-detects in the results of qPCR experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nondetects.html
   :license: GPL-3
   :recipe: /`bioconductor-nondetects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects/meta.yaml>`_
   :links: biotools: :biotools:`nondetects`

   


.. conda:package:: bioconductor-nondetects

   |downloads_bioconductor-nondetects| |docker_bioconductor-nondetects|

   :versions: 2.12.0, 2.10.0, 2.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-htqpcr` >=1.36.0,<1.37.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-arm`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mvtnorm`  

   :required~by: |required_by_bioconductor-nondetects|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nondetects

   and update with::

      conda update bioconductor-nondetects

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nondetects


.. |required_by_bioconductor-nondetects| conda:required_by:: bioconductor-nondetects
.. |downloads_bioconductor-nondetects| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nondetects.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nondetects| image:: https://quay.io/repository/biocontainers/bioconductor-nondetects/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nondetects







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nondetects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nondetects/README.html

