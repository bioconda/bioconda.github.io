:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebseq'
.. highlight: bash

bioconductor-ebseq
==================

.. conda:recipe:: bioconductor-ebseq
   :replaces_section_title:
   :noindex:

   An R package for gene and isoform differential expression analysis of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/EBSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ebseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq/meta.yaml>`_
   :links: biotools: :biotools:`ebseq`, doi: :doi:`10.1093/bioinformatics/btt087`

   Differential Expression analysis at both gene and isoform level using RNA\-seq data


.. conda:package:: bioconductor-ebseq

   |downloads_bioconductor-ebseq| |docker_bioconductor-ebseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-blockmodeling: 
   :depends r-gplots: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebseq

   and update with::

      conda update bioconductor-ebseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebseq:<tag>

   (see `bioconductor-ebseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebseq
   :alt:   (downloads)
.. |docker_bioconductor-ebseq| image:: https://quay.io/repository/biocontainers/bioconductor-ebseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebseq
.. _`bioconductor-ebseq/tags`: https://quay.io/repository/biocontainers/bioconductor-ebseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ebseq";
        var versions = ["1.34.0","1.32.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebseq/README.html