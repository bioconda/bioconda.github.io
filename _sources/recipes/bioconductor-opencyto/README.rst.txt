:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opencyto'
.. highlight: bash

bioconductor-opencyto
=====================

.. conda:recipe:: bioconductor-opencyto
   :replaces_section_title:
   :noindex:

   Hierarchical Gating Pipeline for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/openCyto.html
   :license: file LICENSE
   :recipe: /`bioconductor-opencyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto/meta.yaml>`_

   This package is designed to facilitate the automated gating methods in sequential way to mimic the manual gating strategy.


.. conda:package:: bioconductor-opencyto

   |downloads_bioconductor-opencyto| |docker_bioconductor-opencyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-flowclust: ``>=3.32.0,<3.33.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends bioconductor-flowstats: ``>=4.6.0,<4.7.0``
   :depends bioconductor-flowviz: ``>=1.58.0,<1.59.0``
   :depends bioconductor-flowworkspace: ``>=4.6.0,<4.7.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-ncdfflow: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rbgl: ``>=1.70.0,<1.71.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clue: 
   :depends r-data.table: 
   :depends r-gtools: 
   :depends r-ks: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-opencyto

   and update with::

      conda update bioconductor-opencyto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opencyto:<tag>

   (see `bioconductor-opencyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opencyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opencyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opencyto
   :alt:   (downloads)
.. |docker_bioconductor-opencyto| image:: https://quay.io/repository/biocontainers/bioconductor-opencyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opencyto
.. _`bioconductor-opencyto/tags`: https://quay.io/repository/biocontainers/bioconductor-opencyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-opencyto";
        var versions = ["2.6.0","2.6.0","2.6.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opencyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opencyto/README.html