:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ihwpaper'
.. highlight: bash

bioconductor-ihwpaper
=====================

.. conda:recipe:: bioconductor-ihwpaper
   :replaces_section_title:
   :noindex:

   Reproduce figures in IHW paper

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/IHWpaper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ihwpaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihwpaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihwpaper/meta.yaml>`_

   This package conveniently wraps all functions needed to reproduce the figures in the IHW paper \(https\:\/\/www.nature.com\/articles\/nmeth.3885\) and the data analysis in https\:\/\/rss.onlinelibrary.wiley.com\/doi\/10.1111\/rssb.12411\, cf. the arXiv preprint \(http\:\/\/arxiv.org\/abs\/1701.05179\). Thus it is a companion package to the Bioconductor IHW package.


.. conda:package:: bioconductor-ihwpaper

   |downloads_bioconductor-ihwpaper| |docker_bioconductor-ihwpaper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-3</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-3``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-data-packages: ``>=20221111``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-ihw: ``>=1.26.0,<1.27.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-fdrtool: 
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ihwpaper

   and update with::

      conda update bioconductor-ihwpaper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ihwpaper:<tag>

   (see `bioconductor-ihwpaper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ihwpaper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ihwpaper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ihwpaper
   :alt:   (downloads)
.. |docker_bioconductor-ihwpaper| image:: https://quay.io/repository/biocontainers/bioconductor-ihwpaper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ihwpaper
.. _`bioconductor-ihwpaper/tags`: https://quay.io/repository/biocontainers/bioconductor-ihwpaper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ihwpaper";
        var versions = ["1.26.0","1.22.0","1.22.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ihwpaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ihwpaper/README.html