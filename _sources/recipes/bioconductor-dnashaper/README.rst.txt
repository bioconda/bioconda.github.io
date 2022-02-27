:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnashaper'
.. highlight: bash

bioconductor-dnashaper
======================

.. conda:recipe:: bioconductor-dnashaper
   :replaces_section_title:
   :noindex:

   High\-throughput prediction of DNA shape features

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/DNAshapeR.html
   :license: GPL-2
   :recipe: /`bioconductor-dnashaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnashaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnashaper/meta.yaml>`_
   :links: biotools: :biotools:`dnashaper`

   DNAhapeR is an R\/BioConductor package for ultra\-fast\, high\-throughput predictions of DNA shape features. The package allows to predict\, visualize and encode DNA shape features for statistical learning.


.. conda:package:: bioconductor-dnashaper

   |downloads_bioconductor-dnashaper| |docker_bioconductor-dnashaper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fields: 
   :depends r-rcpp: ``>=0.12.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnashaper

   and update with::

      conda update bioconductor-dnashaper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnashaper:<tag>

   (see `bioconductor-dnashaper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnashaper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnashaper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnashaper
   :alt:   (downloads)
.. |docker_bioconductor-dnashaper| image:: https://quay.io/repository/biocontainers/bioconductor-dnashaper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnashaper
.. _`bioconductor-dnashaper/tags`: https://quay.io/repository/biocontainers/bioconductor-dnashaper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnashaper";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnashaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnashaper/README.html