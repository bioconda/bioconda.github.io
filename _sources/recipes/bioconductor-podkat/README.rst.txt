:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podkat'
.. highlight: bash

bioconductor-podkat
===================

.. conda:recipe:: bioconductor-podkat
   :replaces_section_title:
   :noindex:

   Position\-Dependent Kernel Association Test

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/podkat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-podkat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat/meta.yaml>`_
   :links: biotools: :biotools:`podkat`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an association test that is capable of dealing with very rare and even private variants. This is accomplished by a kernel\-based approach that takes the positions of the variants into account. The test can be used for pre\-processed matrix data\, but also directly for variant data stored in VCF files. Association testing can be performed whole\-genome\, whole\-exome\, or restricted to pre\-defined regions of interest. The test is complemented by tools for analyzing and visualizing the results.


.. conda:package:: bioconductor-podkat

   |downloads_bioconductor-podkat| |docker_bioconductor-podkat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-podkat

   and update with::

      conda update bioconductor-podkat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-podkat:<tag>

   (see `bioconductor-podkat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-podkat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podkat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-podkat
   :alt:   (downloads)
.. |docker_bioconductor-podkat| image:: https://quay.io/repository/biocontainers/bioconductor-podkat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podkat
.. _`bioconductor-podkat/tags`: https://quay.io/repository/biocontainers/bioconductor-podkat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-podkat";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podkat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podkat/README.html