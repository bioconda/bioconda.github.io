.. title:: Package Recipe 'r-stitch'
.. highlight: bash


r-stitch
========

.. conda:recipe:: r-stitch
   :replaces_section_title:

   STITCH \- Sequencing To Imputation Through Constructing Haplotypes

   :homepage: https://github.com/rwdavies/stitch
   :license: GPL3 / GPL3
   :recipe: /`r-stitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch/meta.yaml>`_

   


.. conda:package:: r-stitch

   |downloads_r-stitch| |docker_r-stitch|

   :versions: 1.5.5, 1.5.4

   :depends: :conda:package:`gmp` >=6.1.2,<7.0a0 :conda:package:`htslib` >=1.4 :conda:package:`mpc` >=1.1.0 :conda:package:`mpc` >=1.1.0,<2.0a0 :conda:package:`mpfr` >=4.0.1,<5.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.11.8 :conda:package:`r-rcpp` >=0.12.18 :conda:package:`r-rcpparmadillo` >=0.8.600.0.0 :conda:package:`r-rrbgen` >=0.0.6 :conda:package:`r-testthat` >=2.0.0 :conda:package:`rsync`  :conda:package:`samtools` >=1.4 :conda:package:`xz` >=5.2.4,<5.3.0a0 

   :required~by: |required_by_r-stitch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-stitch

   and update with::

      conda update r-stitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-stitch


.. |required_by_r-stitch| conda:required_by:: r-stitch
.. |downloads_r-stitch| image:: https://img.shields.io/conda/dn/bioconda/r-stitch.svg?style=flat
   :alt:   (downloads)
.. |docker_r-stitch| image:: https://quay.io/repository/biocontainers/r-stitch/status
   :target: https://quay.io/repository/biocontainers/r-stitch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-stitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-stitch/README.html

