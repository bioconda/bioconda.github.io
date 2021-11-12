:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-purecn'
.. highlight: bash

bioconductor-purecn
===================

.. conda:recipe:: bioconductor-purecn
   :replaces_section_title:
   :noindex:

   Copy number calling and SNV classification using targeted short read sequencing

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/PureCN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-purecn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn/meta.yaml>`_
   :links: biotools: :biotools:`purecn`

   This package estimates tumor purity\, copy number\, and loss of heterozygosity \(LOH\)\, and classifies single nucleotide variants \(SNVs\) by somatic status and clonality. PureCN is designed for targeted short read sequencing data\, integrates well with standard somatic variant detection and copy number pipelines\, and has support for tumor samples without matching normal samples.


.. conda:package:: bioconductor-purecn

   |downloads_bioconductor-purecn| |docker_bioconductor-purecn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.13.1-2``,  ``1.12.1-0``,  ``1.11.20-2``,  ``1.11.20-1``,  ``1.11.13-1``,  ``1.11.13-0``,  ``1.8.0-0``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-dnacopy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-rcolorbrewer: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-purecn

   and update with::

      conda update bioconductor-purecn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-purecn:<tag>

   (see `bioconductor-purecn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-purecn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-purecn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-purecn
   :alt:   (downloads)
.. |docker_bioconductor-purecn| image:: https://quay.io/repository/biocontainers/bioconductor-purecn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-purecn
.. _`bioconductor-purecn/tags`: https://quay.io/repository/biocontainers/bioconductor-purecn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-purecn";
        var versions = ["2.0.1","1.22.1","1.20.0","1.20.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-purecn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-purecn/README.html