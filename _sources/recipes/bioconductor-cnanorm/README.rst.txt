:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnanorm'
.. highlight: bash

bioconductor-cnanorm
====================

.. conda:recipe:: bioconductor-cnanorm
   :replaces_section_title:
   :noindex:

   A normalization method for Copy Number Aberration in cancer samples

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CNAnorm.html
   :license: GPL-2
   :recipe: /`bioconductor-cnanorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm/meta.yaml>`_
   :links: biotools: :biotools:`cnanorm`

   Performs ratio\, GC content correction and normalization of data obtained using low coverage \(one read every 100\-10\,000 bp\) high troughput sequencing. It performs a \"discrete\" normalization looking for the ploidy of the genome. It will also provide tumour content if at least two ploidy states can be found.


.. conda:package:: bioconductor-cnanorm

   |downloads_bioconductor-cnanorm| |docker_bioconductor-cnanorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.64.0,<1.65.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnanorm

   and update with::

      conda update bioconductor-cnanorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnanorm:<tag>

   (see `bioconductor-cnanorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnanorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnanorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnanorm
   :alt:   (downloads)
.. |docker_bioconductor-cnanorm| image:: https://quay.io/repository/biocontainers/bioconductor-cnanorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnanorm
.. _`bioconductor-cnanorm/tags`: https://quay.io/repository/biocontainers/bioconductor-cnanorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html