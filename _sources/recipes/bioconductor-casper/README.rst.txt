:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-casper'
.. highlight: bash

bioconductor-casper
===================

.. conda:recipe:: bioconductor-casper
   :replaces_section_title:
   :noindex:

   Characterization of Alternative Splicing based on Paired\-End Reads

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/casper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-casper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper/meta.yaml>`_

   Infer alternative splicing from paired\-end RNA\-seq data. The model is based on counting paths across exons\, rather than pairwise exon connections\, and estimates the fragment size and start distributions non\-parametrically\, which improves estimation precision.


.. conda:package:: bioconductor-casper

   |downloads_bioconductor-casper| |docker_bioconductor-casper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-2</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.23.0-0</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-2``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.23.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-ebarrays: ``>=2.64.0,<2.65.0``
   :depends bioconductor-gaga: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coda: 
   :depends r-gtools: 
   :depends r-mgcv: 
   :depends r-sqldf: 
   :depends r-survival: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-casper

   and update with::

      conda update bioconductor-casper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-casper:<tag>

   (see `bioconductor-casper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-casper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-casper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-casper
   :alt:   (downloads)
.. |docker_bioconductor-casper| image:: https://quay.io/repository/biocontainers/bioconductor-casper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-casper
.. _`bioconductor-casper/tags`: https://quay.io/repository/biocontainers/bioconductor-casper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-casper";
        var versions = ["2.34.0","2.32.0","2.32.0","2.28.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-casper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-casper/README.html