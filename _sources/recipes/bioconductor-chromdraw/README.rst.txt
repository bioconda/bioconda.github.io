:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromdraw'
.. highlight: bash

bioconductor-chromdraw
======================

.. conda:recipe:: bioconductor-chromdraw
   :replaces_section_title:
   :noindex:

   chromDraw is a R package for drawing the schemes of karyotypes in the linear and circular fashion.

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/chromDraw.html
   :license: GPL-3
   :recipe: /`bioconductor-chromdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw/meta.yaml>`_
   :links: biotools: :biotools:`chromdraw`

   ChromDraw is a R package for drawing the schemes of karyotype\(s\) in the linear and circular fashion. It is possible to visualized cytogenetic marsk on the chromosomes. This tool has own input data format. Input data can be imported from the GenomicRanges data structure. This package can visualized the data in the BED file format. Here is requirement on to the first nine fields of the BED format. Output files format are \*.eps and \*.svg.


.. conda:package:: bioconductor-chromdraw

   |downloads_bioconductor-chromdraw| |docker_bioconductor-chromdraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.11.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromdraw

   and update with::

      conda update bioconductor-chromdraw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromdraw:<tag>

   (see `bioconductor-chromdraw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromdraw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromdraw
   :alt:   (downloads)
.. |docker_bioconductor-chromdraw| image:: https://quay.io/repository/biocontainers/bioconductor-chromdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromdraw
.. _`bioconductor-chromdraw/tags`: https://quay.io/repository/biocontainers/bioconductor-chromdraw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromdraw";
        var versions = ["2.22.0","2.20.0","2.20.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html