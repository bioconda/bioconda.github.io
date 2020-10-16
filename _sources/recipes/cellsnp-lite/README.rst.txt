:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellsnp-lite'
.. highlight: bash

cellsnp-lite
============

.. conda:recipe:: cellsnp-lite
   :replaces_section_title:
   :noindex:

   Efficient genotyping bi\-allelic SNPs on single cells

   :homepage: https://github.com/single-cell-genetics/cellSNP
   :license: Apache-2.0
   :recipe: /`cellsnp-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnp-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnp-lite/meta.yaml>`_

   


.. conda:package:: cellsnp-lite

   |downloads_cellsnp-lite| |docker_cellsnp-lite|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellsnp-lite

   and update with::

      conda update cellsnp-lite

   or use the docker container::

      docker pull quay.io/biocontainers/cellsnp-lite:<tag>

   (see `cellsnp-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_cellsnp-lite| image:: https://img.shields.io/conda/dn/bioconda/cellsnp-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/cellsnp-lite
   :alt:   (downloads)
.. |docker_cellsnp-lite| image:: https://quay.io/repository/biocontainers/cellsnp-lite/status
   :target: https://quay.io/repository/biocontainers/cellsnp-lite
.. _`cellsnp-lite/tags`: https://quay.io/repository/biocontainers/cellsnp-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellsnp-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellsnp-lite/README.html