.. title:: Package Recipe 'bioconductor-alpine'
.. highlight: bash


bioconductor-alpine
===================

.. conda:recipe:: bioconductor-alpine
   :replaces_section_title:

   Fragment sequence bias modeling and correction for RNA\-seq transcript abundance estimation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/alpine.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-alpine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpine/meta.yaml>`_
   :links: biotools: :biotools:`alpine`

   


.. conda:package:: bioconductor-alpine

   |downloads_bioconductor-alpine| |docker_bioconductor-alpine|

   :versions: 1.8.0, 1.6.0, 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-speedglm`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-alpine|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alpine

   and update with::

      conda update bioconductor-alpine

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-alpine


.. |required_by_bioconductor-alpine| conda:required_by:: bioconductor-alpine
.. |downloads_bioconductor-alpine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpine.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-alpine| image:: https://quay.io/repository/biocontainers/bioconductor-alpine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpine







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpine/README.html

