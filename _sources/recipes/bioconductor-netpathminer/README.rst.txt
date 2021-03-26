:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netpathminer'
.. highlight: bash

bioconductor-netpathminer
=========================

.. conda:recipe:: bioconductor-netpathminer
   :replaces_section_title:
   :noindex:

   NetPathMiner for Biological Network Construction\, Path Mining and Visualization

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/NetPathMiner.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-netpathminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netpathminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netpathminer/meta.yaml>`_
   :links: biotools: :biotools:`netpathminer`

   NetPathMiner is a general framework for network path mining using genome\-scale networks. It constructs networks from KGML\, SBML and BioPAX files\, providing three network representations\, metabolic\, reaction and gene representations. NetPathMiner finds active paths and applies machine learning methods to summarize found paths for easy interpretation. It also provides static and interactive visualizations of networks and paths to aid manual investigation.


.. conda:package:: bioconductor-netpathminer

   |downloads_bioconductor-netpathminer| |docker_bioconductor-netpathminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libxml2: ``>=2.9.10,<2.10.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-igraph: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netpathminer

   and update with::

      conda update bioconductor-netpathminer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netpathminer:<tag>

   (see `bioconductor-netpathminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netpathminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netpathminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netpathminer
   :alt:   (downloads)
.. |docker_bioconductor-netpathminer| image:: https://quay.io/repository/biocontainers/bioconductor-netpathminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netpathminer
.. _`bioconductor-netpathminer/tags`: https://quay.io/repository/biocontainers/bioconductor-netpathminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netpathminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netpathminer/README.html