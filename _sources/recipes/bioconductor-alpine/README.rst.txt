:orphan:  .. only available via index, not via toctree

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

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-speedglm: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alpine

   and update with::

      conda update bioconductor-alpine

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alpine:<tag>

   (see `bioconductor-alpine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alpine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpine.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-alpine| image:: https://quay.io/repository/biocontainers/bioconductor-alpine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpine
.. _`bioconductor-alpine/tags`: https://quay.io/repository/biocontainers/bioconductor-alpine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpine/README.html