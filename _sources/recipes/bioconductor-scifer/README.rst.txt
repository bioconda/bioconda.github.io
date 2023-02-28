:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scifer'
.. highlight: bash

bioconductor-scifer
===================

.. conda:recipe:: bioconductor-scifer
   :replaces_section_title:
   :noindex:

   Scifer\: Single\-Cell Immunoglobulin Filtering of Sanger Sequences

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/scifer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer/meta.yaml>`_

   Have you ever index sorted cells in a 96 or 384\-well plate and then sequenced using Sanger sequencing\? If so\, you probably had some struggles to either check the electropherogram of each cell sequenced manually\, or when you tried to identify which cell was sorted where after sequencing the plate. Scifer was developed to solve this issue by performing basic quality control of Sanger sequences and merging flow cytometry data from probed single\-cell sorted B cells with sequencing data. scifer can export summary tables\, \'fasta\' files\, electropherograms for visual inspection\, and generate reports.


.. conda:package:: bioconductor-scifer

   |downloads_bioconductor-scifer| |docker_bioconductor-scifer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-decipher: ``>=2.26.0,<2.27.0``
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-sangerseqr: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scifer

   and update with::

      conda update bioconductor-scifer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scifer:<tag>

   (see `bioconductor-scifer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scifer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scifer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scifer
   :alt:   (downloads)
.. |docker_bioconductor-scifer| image:: https://quay.io/repository/biocontainers/bioconductor-scifer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scifer
.. _`bioconductor-scifer/tags`: https://quay.io/repository/biocontainers/bioconductor-scifer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scifer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scifer/README.html