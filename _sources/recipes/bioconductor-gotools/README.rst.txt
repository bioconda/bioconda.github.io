:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gotools'
.. highlight: bash

bioconductor-gotools
====================

.. conda:recipe:: bioconductor-gotools
   :replaces_section_title:
   :noindex:

   Functions for Gene Ontology database

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/goTools.html
   :license: GPL-2
   :recipe: /`bioconductor-gotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gotools/meta.yaml>`_
   :links: biotools: :biotools:`gotools`, doi: :doi:`10.1038/nmeth.3252`

   Wraper functions for description\/comparison of oligo ID list using Gene Ontology database


.. conda:package:: bioconductor-gotools

   |downloads_bioconductor-gotools| |docker_bioconductor-gotools|

   :versions:
      
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-go.db: ``>=3.11.0,<3.12.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gotools

   and update with::

      conda update bioconductor-gotools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gotools:<tag>

   (see `bioconductor-gotools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gotools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gotools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gotools
   :alt:   (downloads)
.. |docker_bioconductor-gotools| image:: https://quay.io/repository/biocontainers/bioconductor-gotools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gotools
.. _`bioconductor-gotools/tags`: https://quay.io/repository/biocontainers/bioconductor-gotools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gotools/README.html