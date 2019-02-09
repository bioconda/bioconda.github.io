.. title:: Package Recipe 'bioconductor-bamsignals'
.. highlight: bash


bioconductor-bamsignals
=======================

.. conda:recipe:: bioconductor-bamsignals
   :replaces_section_title:

   This package allows to efficiently obtain count vectors from indexed bam files. It counts the number of reads in given genomic ranges and it computes reads profiles and coverage profiles. It also handles paired\-end data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bamsignals.html
   :license: GPL-2
   :recipe: /`bioconductor-bamsignals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bamsignals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bamsignals/meta.yaml>`_
   :links: biotools: :biotools:`bamsignals`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bamsignals

   |downloads_bioconductor-bamsignals| |docker_bioconductor-bamsignals|

   :versions: 1.14.0, 1.12.1, 1.10.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rhtslib` >=1.14.0,<1.15.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.10.6 

   :required~by: |required_by_bioconductor-bamsignals|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bamsignals

   and update with::

      conda update bioconductor-bamsignals

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bamsignals


.. |required_by_bioconductor-bamsignals| conda:required_by:: bioconductor-bamsignals
.. |downloads_bioconductor-bamsignals| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bamsignals.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bamsignals| image:: https://quay.io/repository/biocontainers/bioconductor-bamsignals/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bamsignals







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bamsignals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bamsignals/README.html

