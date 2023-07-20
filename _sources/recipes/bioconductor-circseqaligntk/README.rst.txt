:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-circseqaligntk'
.. highlight: bash

bioconductor-circseqaligntk
===========================

.. conda:recipe:: bioconductor-circseqaligntk
   :replaces_section_title:
   :noindex:

   A toolkit for end\-to\-end analysis of RNA\-seq data for circular genomes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CircSeqAlignTk.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-circseqaligntk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circseqaligntk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circseqaligntk/meta.yaml>`_

   CircSeqAlignTk is designed for end\-to\-end RNA\-Seq data analysis of circular genome sequences\, from alignment to visualization. It mainly targets viroids which are composed of 246\-401 nt circular RNAs. In addition\, CircSeqAlignTk implements a tidy interface to generate synthetic sequencing data that mimic real RNA\-Seq data\, allowing developers to evaluate the performance of alignment tools and workflows.


.. conda:package:: bioconductor-circseqaligntk

   |downloads_bioconductor-circseqaligntk| |docker_bioconductor-circseqaligntk|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rbowtie2: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rhisat2: ``>=1.16.0,<1.17.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-circseqaligntk

   and update with::

      conda update bioconductor-circseqaligntk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-circseqaligntk:<tag>

   (see `bioconductor-circseqaligntk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-circseqaligntk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-circseqaligntk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-circseqaligntk
   :alt:   (downloads)
.. |docker_bioconductor-circseqaligntk| image:: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk
.. _`bioconductor-circseqaligntk/tags`: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-circseqaligntk";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-circseqaligntk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-circseqaligntk/README.html