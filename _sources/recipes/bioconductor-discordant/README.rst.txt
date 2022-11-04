:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-discordant'
.. highlight: bash

bioconductor-discordant
=======================

.. conda:recipe:: bioconductor-discordant
   :replaces_section_title:
   :noindex:

   The Discordant Method\: A Novel Approach for Differential Correlation

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/discordant.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-discordant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant/meta.yaml>`_

   Discordant is a method to determine differential correlation of molecular feature pairs from \-omics data using mixture models. Algorithm is explained further in Siska et al.


.. conda:package:: bioconductor-discordant

   |downloads_bioconductor-discordant| |docker_bioconductor-discordant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biwt: 
   :depends r-dplyr: 
   :depends r-gtools: 
   :depends r-mass: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-discordant

   and update with::

      conda update bioconductor-discordant

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-discordant:<tag>

   (see `bioconductor-discordant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-discordant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-discordant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-discordant
   :alt:   (downloads)
.. |docker_bioconductor-discordant| image:: https://quay.io/repository/biocontainers/bioconductor-discordant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-discordant
.. _`bioconductor-discordant/tags`: https://quay.io/repository/biocontainers/bioconductor-discordant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-discordant";
        var versions = ["1.22.0","1.18.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-discordant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-discordant/README.html