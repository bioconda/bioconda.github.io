:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-baalchip'
.. highlight: bash

bioconductor-baalchip
=====================

.. conda:recipe:: bioconductor-baalchip
   :replaces_section_title:
   :noindex:

   BaalChIP\: Bayesian analysis of allele\-specific transcription factor binding in cancer genomes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BaalChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-baalchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baalchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baalchip/meta.yaml>`_
   :links: biotools: :biotools:`baalchip`, doi: :doi:`10.1186/s13059-017-1165-7`

   The package offers functions to process multiple ChIP\-seq BAM files and detect allele\-specific events. Computes allele counts at individual variants \(SNPs\/SNVs\)\, implements extensive QC steps to remove problematic variants\, and utilizes a bayesian framework to identify statistically significant allele\- specific events. BaalChIP is able to account for copy number differences between the two alleles\, a known phenotypical feature of cancer samples.


.. conda:package:: bioconductor-baalchip

   |downloads_bioconductor-baalchip| |docker_bioconductor-baalchip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-coda: 
   :depends r-doby: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-baalchip

   and update with::

      conda update bioconductor-baalchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-baalchip:<tag>

   (see `bioconductor-baalchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-baalchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baalchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-baalchip
   :alt:   (downloads)
.. |docker_bioconductor-baalchip| image:: https://quay.io/repository/biocontainers/bioconductor-baalchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-baalchip
.. _`bioconductor-baalchip/tags`: https://quay.io/repository/biocontainers/bioconductor-baalchip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-baalchip";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-baalchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-baalchip/README.html