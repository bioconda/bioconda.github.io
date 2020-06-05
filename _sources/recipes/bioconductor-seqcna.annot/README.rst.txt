:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcna.annot'
.. highlight: bash

bioconductor-seqcna.annot
=========================

.. conda:recipe:: bioconductor-seqcna.annot
   :replaces_section_title:
   :noindex:

   Annotation for the copy number analysis of deep sequencing cancer data with seqCNA

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/seqCNA.annot.html
   :license: GPL-3
   :recipe: /`bioconductor-seqcna.annot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna.annot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna.annot/meta.yaml>`_

   Provides annotation on GC content\, mappability and genomic features for various genomes


.. conda:package:: bioconductor-seqcna.annot

   |downloads_bioconductor-seqcna.annot| |docker_bioconductor-seqcna.annot|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqcna.annot

   and update with::

      conda update bioconductor-seqcna.annot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcna.annot:<tag>

   (see `bioconductor-seqcna.annot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcna.annot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcna.annot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcna.annot
   :alt:   (downloads)
.. |docker_bioconductor-seqcna.annot| image:: https://quay.io/repository/biocontainers/bioconductor-seqcna.annot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcna.annot
.. _`bioconductor-seqcna.annot/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcna.annot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcna.annot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcna.annot/README.html