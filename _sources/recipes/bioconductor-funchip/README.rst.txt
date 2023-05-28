:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-funchip'
.. highlight: bash

bioconductor-funchip
====================

.. conda:recipe:: bioconductor-funchip
   :replaces_section_title:
   :noindex:

   Clustering and Alignment of ChIP\-Seq peaks based on their shapes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/FunChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-funchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funchip/meta.yaml>`_
   :links: biotools: :biotools:`funchip`, doi: :doi:`10.1093/bioinformatics/btx201`

   Preprocessing and smoothing of ChIP\-Seq peaks and efficient implementation of the k\-mean alignment algorithm to classify them.


.. conda:package:: bioconductor-funchip

   |downloads_bioconductor-funchip| |docker_bioconductor-funchip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: 
   :depends r-fda: 
   :depends r-foreach: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-funchip

   and update with::

      conda update bioconductor-funchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-funchip:<tag>

   (see `bioconductor-funchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-funchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-funchip
   :alt:   (downloads)
.. |docker_bioconductor-funchip| image:: https://quay.io/repository/biocontainers/bioconductor-funchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funchip
.. _`bioconductor-funchip/tags`: https://quay.io/repository/biocontainers/bioconductor-funchip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-funchip";
        var versions = ["1.24.0","1.24.0","1.20.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funchip/README.html