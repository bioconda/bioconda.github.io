:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasilla'
.. highlight: bash

bioconductor-pasilla
====================

.. conda:recipe:: bioconductor-pasilla
   :replaces_section_title:

   This package provides per\-exon and per\-gene read counts computed for selected genes from RNA\-seq data that were presented in the article \"Conservation of an RNA regulatory map between Drosophila and mammals\" by Brooks AN\, Yang L\, Duff MO\, Hansen KD\, Park JW\, Dudoit S\, Brenner SE\, Graveley BR\, Genome Res. 2011 Feb\;21\(2\)\:193\-202\, Epub 2010 Oct 4\, PMID\: 20921232. The experiment studied the effect of RNAi knockdown of Pasilla\, the Drosophila melanogaster ortholog of mammalian NOVA1 and NOVA2\, on the transcriptome.  The package vignette describes how the data provided here were derived from the RNA\-Seq read sequence data that are provided by NCBI Gene Expression Omnibus under accession numbers GSM461176 to GSM461181.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/pasilla.html
   :license: LGPL
   :recipe: /`bioconductor-pasilla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla/meta.yaml>`_

   


.. conda:package:: bioconductor-pasilla

   |downloads_bioconductor-pasilla| |docker_bioconductor-pasilla|

   :versions: 1.12.0-0, 1.10.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pasilla

   and update with::

      conda update bioconductor-pasilla

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pasilla:<tag>

   (see `bioconductor-pasilla/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasilla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasilla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasilla
   :alt:   (downloads)
.. |docker_bioconductor-pasilla| image:: https://quay.io/repository/biocontainers/bioconductor-pasilla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasilla
.. _`bioconductor-pasilla/tags`: https://quay.io/repository/biocontainers/bioconductor-pasilla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasilla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasilla/README.html