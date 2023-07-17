:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogsa'
.. highlight: bash

bioconductor-mogsa
==================

.. conda:recipe:: bioconductor-mogsa
   :replaces_section_title:
   :noindex:

   Multiple omics data integrative clustering and gene set analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/mogsa.html
   :license: GPL-2
   :recipe: /`bioconductor-mogsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa/meta.yaml>`_

   This package provide a method for doing gene set analysis based on multiple omics data.


.. conda:package:: bioconductor-mogsa

   |downloads_bioconductor-mogsa| |docker_bioconductor-mogsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-graphite: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-gplots: 
   :depends r-svd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mogsa

   and update with::

      conda update bioconductor-mogsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogsa:<tag>

   (see `bioconductor-mogsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogsa
   :alt:   (downloads)
.. |docker_bioconductor-mogsa| image:: https://quay.io/repository/biocontainers/bioconductor-mogsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogsa
.. _`bioconductor-mogsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mogsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogsa";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogsa/README.html