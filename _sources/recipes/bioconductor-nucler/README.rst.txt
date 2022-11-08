:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucler'
.. highlight: bash

bioconductor-nucler
===================

.. conda:recipe:: bioconductor-nucler
   :replaces_section_title:
   :noindex:

   Nucleosome positioning package for R

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/nucleR.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-nucler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucler/meta.yaml>`_
   :links: biotools: :biotools:`nucler`

   Nucleosome positioning for Tiling Arrays and NGS experiments.


.. conda:package:: bioconductor-nucler

   |downloads_bioconductor-nucler| |docker_bioconductor-nucler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.1-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nucler

   and update with::

      conda update bioconductor-nucler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucler:<tag>

   (see `bioconductor-nucler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nucler
   :alt:   (downloads)
.. |docker_bioconductor-nucler| image:: https://quay.io/repository/biocontainers/bioconductor-nucler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucler
.. _`bioconductor-nucler/tags`: https://quay.io/repository/biocontainers/bioconductor-nucler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nucler";
        var versions = ["2.30.0","2.26.0","2.24.0","2.22.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucler/README.html