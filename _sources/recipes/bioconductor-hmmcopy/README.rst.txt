:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmmcopy'
.. highlight: bash

bioconductor-hmmcopy
====================

.. conda:recipe:: bioconductor-hmmcopy
   :replaces_section_title:
   :noindex:

   Copy number prediction with correction for GC and mappability bias for HTS data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/HMMcopy.html
   :license: GPL-3
   :recipe: /`bioconductor-hmmcopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmmcopy/meta.yaml>`_
   :links: biotools: :biotools:`hmmcopy`, doi: :doi:`10.1038/nmeth.3252`

   Corrects GC and mappability biases for readcounts \(i.e. coverage\) in non\-overlapping windows of fixed length for single whole genome samples\, yielding a rough estimate of copy number for furthur analysis.  Designed for rapid correction of high coverage whole genome tumour and normal samples.


.. conda:package:: bioconductor-hmmcopy

   |downloads_bioconductor-hmmcopy| |docker_bioconductor-hmmcopy|

   :versions:
      
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: ``>=1.11.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmmcopy

   and update with::

      conda update bioconductor-hmmcopy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmmcopy:<tag>

   (see `bioconductor-hmmcopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmmcopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmmcopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmmcopy
   :alt:   (downloads)
.. |docker_bioconductor-hmmcopy| image:: https://quay.io/repository/biocontainers/bioconductor-hmmcopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmmcopy
.. _`bioconductor-hmmcopy/tags`: https://quay.io/repository/biocontainers/bioconductor-hmmcopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmmcopy/README.html