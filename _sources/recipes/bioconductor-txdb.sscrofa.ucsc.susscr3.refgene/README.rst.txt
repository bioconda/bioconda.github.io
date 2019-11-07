:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.sscrofa.ucsc.susscr3.refgene'
.. highlight: bash

bioconductor-txdb.sscrofa.ucsc.susscr3.refgene
==============================================

.. conda:recipe:: bioconductor-txdb.sscrofa.ucsc.susscr3.refgene
   :replaces_section_title:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/TxDb.Sscrofa.UCSC.susScr3.refGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.sscrofa.ucsc.susscr3.refgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.sscrofa.ucsc.susscr3.refgene

   |downloads_bioconductor-txdb.sscrofa.ucsc.susscr3.refgene| |docker_bioconductor-txdb.sscrofa.ucsc.susscr3.refgene|

   :versions: 3.10.0-0, 3.4.6-1, 3.4.4-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.sscrofa.ucsc.susscr3.refgene

   and update with::

      conda update bioconductor-txdb.sscrofa.ucsc.susscr3.refgene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene:<tag>

   (see `bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.sscrofa.ucsc.susscr3.refgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.sscrofa.ucsc.susscr3.refgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene
.. _`bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.sscrofa.ucsc.susscr3.refgene/README.html