:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebsea'
.. highlight: bash

bioconductor-ebsea
==================

.. conda:recipe:: bioconductor-ebsea
   :replaces_section_title:
   :noindex:

   Exon Based Strategy for Expression Analysis of genes

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/EBSEA.html
   :license: GPL-2
   :recipe: /`bioconductor-ebsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebsea/meta.yaml>`_
   :links: biotools: :biotools:`ebsea`, doi: :doi:`10.1038/nmeth.3252`

   Calculates differential expression of genes based on exon counts of genes obtained from RNA\-seq sequencing data.


.. conda:package:: bioconductor-ebsea

   |downloads_bioconductor-ebsea| |docker_bioconductor-ebsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-empiricalbrownsmethod: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebsea

   and update with::

      conda update bioconductor-ebsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebsea:<tag>

   (see `bioconductor-ebsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebsea
   :alt:   (downloads)
.. |docker_bioconductor-ebsea| image:: https://quay.io/repository/biocontainers/bioconductor-ebsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebsea
.. _`bioconductor-ebsea/tags`: https://quay.io/repository/biocontainers/bioconductor-ebsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebsea/README.html