:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseeker'
.. highlight: bash

bioconductor-chipseeker
=======================

.. conda:recipe:: bioconductor-chipseeker
   :replaces_section_title:
   :noindex:

   ChIPseeker for ChIP peak Annotation\, Comparison\, and Visualization

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ChIPseeker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseeker/meta.yaml>`_
   :links: biotools: :biotools:`chipseeker`

   This package implements functions to retrieve the nearest genes around the peak\, annotate genomic region of the peak\, statstical methods for estimate the significance of overlap among ChIP peak data sets\, and incorporate GEO database for user to compare the own dataset with those deposited in database. The comparison can be used to infer cooperative regulation and thus can be used to generate hypotheses. Several visualization functions are implemented to summarize the coverage of the peak experiment\, average profile and heatmap of peaks binding to TSS regions\, genomic annotation\, distance to TSS\, and overlap of peaks or genes.


.. conda:package:: bioconductor-chipseeker

   |downloads_bioconductor-chipseeker| |docker_bioconductor-chipseeker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.2-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-enrichplot: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-boot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseeker

   and update with::

      conda update bioconductor-chipseeker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseeker:<tag>

   (see `bioconductor-chipseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseeker
   :alt:   (downloads)
.. |docker_bioconductor-chipseeker| image:: https://quay.io/repository/biocontainers/bioconductor-chipseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseeker
.. _`bioconductor-chipseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseeker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html