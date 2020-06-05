:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-italics'
.. highlight: bash

bioconductor-italics
====================

.. conda:recipe:: bioconductor-italics
   :replaces_section_title:
   :noindex:

   ITALICS

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ITALICS.html
   :license: GPL-2
   :recipe: /`bioconductor-italics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics/meta.yaml>`_

   A Method to normalize of Affymetrix GeneChip Human Mapping 100K and 500K set


.. conda:package:: bioconductor-italics

   |downloads_bioconductor-italics| |docker_bioconductor-italics|

   :versions:
      
      

      ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``

      

   
   :depends bioconductor-affxparser: ``>=1.60.0,<1.61.0``
   :depends bioconductor-glad: ``>=2.52.0,<2.53.0``
   :depends bioconductor-italicsdata: ``>=2.26.0,<2.27.0``
   :depends bioconductor-oligo: ``>=1.52.0,<1.53.0``
   :depends bioconductor-oligoclasses: ``>=1.50.0,<1.51.0``
   :depends bioconductor-pd.mapping50k.xba240: ``>=3.12.0,<3.13.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-italics

   and update with::

      conda update bioconductor-italics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-italics:<tag>

   (see `bioconductor-italics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-italics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-italics
   :alt:   (downloads)
.. |docker_bioconductor-italics| image:: https://quay.io/repository/biocontainers/bioconductor-italics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italics
.. _`bioconductor-italics/tags`: https://quay.io/repository/biocontainers/bioconductor-italics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italics/README.html