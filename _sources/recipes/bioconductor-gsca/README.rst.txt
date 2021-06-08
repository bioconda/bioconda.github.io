:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsca'
.. highlight: bash

bioconductor-gsca
=================

.. conda:recipe:: bioconductor-gsca
   :replaces_section_title:
   :noindex:

   GSCA\: Gene Set Context Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GSCA.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-gsca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca/meta.yaml>`_
   :links: biotools: :biotools:`gsca`

   GSCA takes as input several lists of activated and repressed genes. GSCA then searches through a compendium of publicly available gene expression profiles for biological contexts that are enriched with a specified pattern of gene expression. GSCA provides both traditional R functions and interactive\, user\-friendly user interface.


.. conda:package:: bioconductor-gsca

   |downloads_bioconductor-gsca| |docker_bioconductor-gsca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.17.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-sp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsca

   and update with::

      conda update bioconductor-gsca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsca:<tag>

   (see `bioconductor-gsca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsca
   :alt:   (downloads)
.. |docker_bioconductor-gsca| image:: https://quay.io/repository/biocontainers/bioconductor-gsca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsca
.. _`bioconductor-gsca/tags`: https://quay.io/repository/biocontainers/bioconductor-gsca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsca/README.html