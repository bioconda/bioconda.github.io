:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicstate'
.. highlight: bash

bioconductor-genomicstate
=========================

.. conda:recipe:: bioconductor-genomicstate
   :replaces_section_title:
   :noindex:

   Build and access GenomicState objects for use with derfinder tools from sources like Gencode

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/GenomicState.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicstate/meta.yaml>`_

   This package contains functions for building GenomicState objects from different annotation sources such as Gencode. It also provides access to these files at JHPCE.


.. conda:package:: bioconductor-genomicstate

   |downloads_bioconductor-genomicstate| |docker_bioconductor-genomicstate|

   :versions:
      
      

      ``0.99.9-3``,  ``0.99.9-2``,  ``0.99.9-1``,  ``0.99.9-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-annotationhub: ``>=3.0.0,<3.1.0``
   :depends bioconductor-bumphunter: ``>=1.34.0,<1.35.0``
   :depends bioconductor-derfinder: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicstate

   and update with::

      conda update bioconductor-genomicstate

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicstate:<tag>

   (see `bioconductor-genomicstate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicstate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicstate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicstate
   :alt:   (downloads)
.. |docker_bioconductor-genomicstate| image:: https://quay.io/repository/biocontainers/bioconductor-genomicstate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicstate
.. _`bioconductor-genomicstate/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicstate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicstate/README.html