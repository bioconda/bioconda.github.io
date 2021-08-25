:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cager'
.. highlight: bash

bioconductor-cager
==================

.. conda:recipe:: bioconductor-cager
   :replaces_section_title:
   :noindex:

   Analysis of CAGE \(Cap Analysis of Gene Expression\) sequencing data for precise mapping of transcription start sites and promoterome mining

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CAGEr.html
   :license: GPL-3
   :recipe: /`bioconductor-cager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cager/meta.yaml>`_
   :links: biotools: :biotools:`cager`

   Preprocessing of CAGE sequencing data\, identification and normalization of transcription start sites and downstream analysis of transcription start sites clusters \(promoters\).


.. conda:package:: bioconductor-cager

   |downloads_bioconductor-cager| |docker_bioconductor-cager|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.1-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.3-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.3-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-beanplot: 
   :depends r-data.table: 
   :depends r-formula.tools: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-memoise: 
   :depends r-plyr: 
   :depends r-reshape: 
   :depends r-som: 
   :depends r-stringdist: 
   :depends r-stringi: 
   :depends r-vegan: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cager

   and update with::

      conda update bioconductor-cager

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cager:<tag>

   (see `bioconductor-cager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cager
   :alt:   (downloads)
.. |docker_bioconductor-cager| image:: https://quay.io/repository/biocontainers/bioconductor-cager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cager
.. _`bioconductor-cager/tags`: https://quay.io/repository/biocontainers/bioconductor-cager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cager";
        var versions = ["1.34.0","1.32.1","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cager/README.html