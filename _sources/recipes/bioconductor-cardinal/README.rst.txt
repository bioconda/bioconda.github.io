:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardinal'
.. highlight: bash

bioconductor-cardinal
=====================

.. conda:recipe:: bioconductor-cardinal
   :replaces_section_title:
   :noindex:

   A mass spectrometry imaging toolbox for statistical analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Cardinal.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cardinal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal/meta.yaml>`_
   :links: biotools: :biotools:`cardinal`, usegalaxy-eu: :usegalaxy-eu:`cardinal_segmentations`

   Implements statistical \& computational tools for analyzing mass spectrometry imaging datasets\, including methods for efficient pre\-processing\, spatial segmentation\, and classification.


.. conda:package:: bioconductor-cardinal

   |downloads_bioconductor-cardinal| |docker_bioconductor-cardinal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.6-0</code>,  <code>2.0.4-0</code>,  <code>2.0.2-0</code>,  <code>1.12.1-1</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.6-0``,  ``2.0.4-0``,  ``2.0.2-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-ebimage: ``>=4.32.0,<4.33.0``
   :depends bioconductor-matter: ``>=1.16.0,<1.17.0``
   :depends bioconductor-protgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-irlba: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-nlme: 
   :depends r-signal: 
   :depends r-sp: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cardinal

   and update with::

      conda update bioconductor-cardinal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardinal:<tag>

   (see `bioconductor-cardinal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardinal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardinal
   :alt:   (downloads)
.. |docker_bioconductor-cardinal| image:: https://quay.io/repository/biocontainers/bioconductor-cardinal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinal
.. _`bioconductor-cardinal/tags`: https://quay.io/repository/biocontainers/bioconductor-cardinal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinal/README.html