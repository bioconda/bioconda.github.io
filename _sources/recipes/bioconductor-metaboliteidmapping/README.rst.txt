:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaboliteidmapping'
.. highlight: bash

bioconductor-metaboliteidmapping
================================

.. conda:recipe:: bioconductor-metaboliteidmapping
   :replaces_section_title:
   :noindex:

   Mapping of Metabolite IDs from Different Sources

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/metaboliteIDmapping.html
   :license: GPL-3
   :recipe: /`bioconductor-metaboliteidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboliteidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboliteidmapping/meta.yaml>`_

   The package provides a comprehensive mapping table of nine different Metabolite ID formats and their common name. The data has been collected and merged from four publicly available source\, including HMDB\, Comptox Dashboard\, ChEBI\, and the graphite Bioconductor R package.


.. conda:package:: bioconductor-metaboliteidmapping

   |downloads_bioconductor-metaboliteidmapping| |docker_bioconductor-metaboliteidmapping|

   :versions:
      
      

      ``1.0.0-0``,  ``0.99.8-1``,  ``0.99.8-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.0.0,<3.1.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaboliteidmapping

   and update with::

      conda update bioconductor-metaboliteidmapping

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaboliteidmapping:<tag>

   (see `bioconductor-metaboliteidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaboliteidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaboliteidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaboliteidmapping
   :alt:   (downloads)
.. |docker_bioconductor-metaboliteidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping
.. _`bioconductor-metaboliteidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-metaboliteidmapping?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaboliteidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaboliteidmapping/README.html