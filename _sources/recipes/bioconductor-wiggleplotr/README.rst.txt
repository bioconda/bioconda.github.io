:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wiggleplotr'
.. highlight: bash

bioconductor-wiggleplotr
========================

.. conda:recipe:: bioconductor-wiggleplotr
   :replaces_section_title:
   :noindex:

   Make read coverage plots from BigWig files

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/wiggleplotr.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-wiggleplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wiggleplotr/meta.yaml>`_

   Tools to visualise read coverage from sequencing experiments together with genomic annotations \(genes\, transcripts\, peaks\). Introns of long transcripts can be rescaled to a fixed length for better visualisation of exonic read coverage.


.. conda:package:: bioconductor-wiggleplotr

   |downloads_bioconductor-wiggleplotr| |docker_bioconductor-wiggleplotr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-purrr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wiggleplotr

   and update with::

      conda update bioconductor-wiggleplotr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wiggleplotr:<tag>

   (see `bioconductor-wiggleplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wiggleplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wiggleplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wiggleplotr
   :alt:   (downloads)
.. |docker_bioconductor-wiggleplotr| image:: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr
.. _`bioconductor-wiggleplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-wiggleplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wiggleplotr";
        var versions = ["1.16.0","1.14.0","1.14.0","1.12.0","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wiggleplotr/README.html