:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cseq'
.. highlight: bash

bioconductor-r3cseq
===================

.. conda:recipe:: bioconductor-r3cseq
   :replaces_section_title:
   :noindex:

   Analysis of Chromosome Conformation Capture and Next\-generation Sequencing \(3C\-seq\)

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/r3Cseq.html
   :license: GPL-3
   :recipe: /`bioconductor-r3cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq/meta.yaml>`_
   :links: biotools: :biotools:`r3cseq`, doi: :doi:`10.1093/nar/gkt373`

   This package is used for the analysis of long\-range chromatin interactions from 3C\-seq assay.


.. conda:package:: bioconductor-r3cseq

   |downloads_bioconductor-r3cseq| |docker_bioconductor-r3cseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-rcolorbrewer: 
   :depends r-sqldf: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r3cseq

   and update with::

      conda update bioconductor-r3cseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r3cseq:<tag>

   (see `bioconductor-r3cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r3cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r3cseq
   :alt:   (downloads)
.. |docker_bioconductor-r3cseq| image:: https://quay.io/repository/biocontainers/bioconductor-r3cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cseq
.. _`bioconductor-r3cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-r3cseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-r3cseq";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html