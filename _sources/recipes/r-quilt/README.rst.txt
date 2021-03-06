:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-quilt'
.. highlight: bash

r-quilt
=======

.. conda:recipe:: r-quilt
   :replaces_section_title:
   :noindex:

   Read aware low coverage whole genome sequence imputation from a reference panel

   :homepage: https://github.com/rwdavies/quilt
   :license: GPL3 / GPL3
   :recipe: /`r-quilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt/meta.yaml>`_

   


.. conda:package:: r-quilt

   |downloads_r-quilt| |docker_r-quilt|

   :versions:
      
      

      ``0.1.9-1``,  ``0.1.9-0``

      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends mpc: ``>=1.1.0``
   :depends mpc: ``>=1.1.0,<2.0a0``
   :depends mpfr: ``>=4.0.2,<5.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-stitch: ``>=1.6.6``
   :depends r-testthat: ``>=2.0.0``
   :depends rsync: 
   :depends samtools: ``>=1.4``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-quilt

   and update with::

      conda update r-quilt

   or use the docker container::

      docker pull quay.io/biocontainers/r-quilt:<tag>

   (see `r-quilt/tags`_ for valid values for ``<tag>``)


.. |downloads_r-quilt| image:: https://img.shields.io/conda/dn/bioconda/r-quilt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-quilt
   :alt:   (downloads)
.. |docker_r-quilt| image:: https://quay.io/repository/biocontainers/r-quilt/status
   :target: https://quay.io/repository/biocontainers/r-quilt
.. _`r-quilt/tags`: https://quay.io/repository/biocontainers/r-quilt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-quilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-quilt/README.html