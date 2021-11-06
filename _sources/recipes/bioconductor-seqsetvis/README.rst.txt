:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqsetvis'
.. highlight: bash

bioconductor-seqsetvis
======================

.. conda:recipe:: bioconductor-seqsetvis
   :replaces_section_title:
   :noindex:

   Set Based Visualizations for Next\-Gen Sequencing Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/seqsetvis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-seqsetvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis/meta.yaml>`_

   seqsetvis enables the visualization and analysis of sets of genomic sites in next gen sequencing data. Although seqsetvis was designed for the comparison of mulitple ChIP\-seq samples\, this package is domain\-agnostic and allows the processing of multiple genomic coordinate files \(bed\-like files\) and signal files \(bigwig files pileups from bam file\).


.. conda:package:: bioconductor-seqsetvis

   |downloads_bioconductor-seqsetvis| |docker_bioconductor-seqsetvis|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-eulerr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-pbapply: 
   :depends r-pbmcapply: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqsetvis

   and update with::

      conda update bioconductor-seqsetvis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqsetvis:<tag>

   (see `bioconductor-seqsetvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqsetvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsetvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqsetvis
   :alt:   (downloads)
.. |docker_bioconductor-seqsetvis| image:: https://quay.io/repository/biocontainers/bioconductor-seqsetvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsetvis
.. _`bioconductor-seqsetvis/tags`: https://quay.io/repository/biocontainers/bioconductor-seqsetvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqsetvis";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html