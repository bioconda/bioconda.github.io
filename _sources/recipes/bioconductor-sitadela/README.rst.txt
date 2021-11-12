:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sitadela'
.. highlight: bash

bioconductor-sitadela
=====================

.. conda:recipe:: bioconductor-sitadela
   :replaces_section_title:
   :noindex:

   An R package for the easy provision of simple but complete tab\-delimited genomic annotation from a variety of sources and organisms

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sitadela.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sitadela <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitadela>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitadela/meta.yaml>`_

   Provides an interface to build a unified database of genomic annotations and their coordinates \(gene\, transcript and exon levels\). It is aimed to be used when simple tab\-delimited annotations \(or simple GRanges objects\) are required instead of the more complex annotation Bioconductor packages. Also useful when combinatorial annotation elements are reuired\, such as RefSeq coordinates with Ensembl biotypes. Finally\, it can download\, construct and handle annotations with versioned genes and transcripts \(where available\, e.g. RefSeq and latest Ensembl\). This is particularly useful in precision medicine applications where the latter must be reported.


.. conda:package:: bioconductor-sitadela

   |downloads_bioconductor-sitadela| |docker_bioconductor-sitadela|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sitadela

   and update with::

      conda update bioconductor-sitadela

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sitadela:<tag>

   (see `bioconductor-sitadela/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sitadela| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sitadela.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sitadela
   :alt:   (downloads)
.. |docker_bioconductor-sitadela| image:: https://quay.io/repository/biocontainers/bioconductor-sitadela/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sitadela
.. _`bioconductor-sitadela/tags`: https://quay.io/repository/biocontainers/bioconductor-sitadela?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sitadela";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sitadela/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sitadela/README.html