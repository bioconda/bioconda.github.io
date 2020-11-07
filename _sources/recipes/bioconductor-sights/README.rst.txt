:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sights'
.. highlight: bash

bioconductor-sights
===================

.. conda:recipe:: bioconductor-sights
   :replaces_section_title:
   :noindex:

   Statistics and dIagnostic Graphs for HTS

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sights.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-sights <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sights>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sights/meta.yaml>`_
   :links: biotools: :biotools:`sights`, doi: :doi:`10.1177/1087057114548853`

   SIGHTS is a suite of normalization methods\, statistical tests\, and diagnostic graphical tools for high throughput screening \(HTS\) assays. HTS assays use microtitre plates to screen large libraries of compounds for their biological\, chemical\, or biochemical activity.


.. conda:package:: bioconductor-sights

   |downloads_bioconductor-sights| |docker_bioconductor-sights|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=2.0``
   :depends r-lattice: ``>=0.2``
   :depends r-mass: ``>=7.3``
   :depends r-reshape2: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sights

   and update with::

      conda update bioconductor-sights

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sights:<tag>

   (see `bioconductor-sights/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sights| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sights.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sights
   :alt:   (downloads)
.. |docker_bioconductor-sights| image:: https://quay.io/repository/biocontainers/bioconductor-sights/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sights
.. _`bioconductor-sights/tags`: https://quay.io/repository/biocontainers/bioconductor-sights?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sights/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sights/README.html