.. title:: Package Recipe 'bioconductor-webbioc'
.. highlight: bash


bioconductor-webbioc
====================

.. conda:recipe:: bioconductor-webbioc
   :replaces_section_title:

   An integrated web interface for doing microarray analysis using several of the Bioconductor packages. It is intended to be deployed as a centralized bioinformatics resource for use by many users. \(Currently only Affymetrix oligonucleotide analysis is supported.\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/webbioc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-webbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-webbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-webbioc/meta.yaml>`_
   :links: biotools: :biotools:`webbioc`, doi: :doi:`10.1007/0-387-29362-0_18`

   


.. conda:package:: bioconductor-webbioc

   |downloads_bioconductor-webbioc| |docker_bioconductor-webbioc|

   :versions: 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annaffy` >=1.54.0,<1.55.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gcrma` >=2.54.0,<2.55.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  

   :required~by: |required_by_bioconductor-webbioc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-webbioc

   and update with::

      conda update bioconductor-webbioc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-webbioc


.. |required_by_bioconductor-webbioc| conda:required_by:: bioconductor-webbioc
.. |downloads_bioconductor-webbioc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-webbioc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-webbioc| image:: https://quay.io/repository/biocontainers/bioconductor-webbioc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-webbioc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-webbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-webbioc/README.html

