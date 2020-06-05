:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beat'
.. highlight: bash

bioconductor-beat
=================

.. conda:recipe:: bioconductor-beat
   :replaces_section_title:
   :noindex:

   BEAT \- BS\-Seq Epimutation Analysis Toolkit

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BEAT.html
   :license: LGPL (>= 3.0)
   :recipe: /`bioconductor-beat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beat/meta.yaml>`_
   :links: biotools: :biotools:`beat`, doi: :doi:`10.1038/nmeth.3252`

   Model\-based analysis of single\-cell methylation data


.. conda:package:: bioconductor-beat

   |downloads_bioconductor-beat| |docker_bioconductor-beat|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bsgenome: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-shortread: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beat

   and update with::

      conda update bioconductor-beat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beat:<tag>

   (see `bioconductor-beat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beat
   :alt:   (downloads)
.. |docker_bioconductor-beat| image:: https://quay.io/repository/biocontainers/bioconductor-beat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beat
.. _`bioconductor-beat/tags`: https://quay.io/repository/biocontainers/bioconductor-beat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beat/README.html