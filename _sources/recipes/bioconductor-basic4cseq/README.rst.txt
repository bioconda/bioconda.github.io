:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basic4cseq'
.. highlight: bash

bioconductor-basic4cseq
=======================

.. conda:recipe:: bioconductor-basic4cseq
   :replaces_section_title:
   :noindex:

   Basic4Cseq\: an R\/Bioconductor package for analyzing 4C\-seq data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Basic4Cseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basic4cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq/meta.yaml>`_
   :links: biotools: :biotools:`basic4cseq`, doi: :doi:`10.1093/bioinformatics/btu497`

   Basic4Cseq is an R\/Bioconductor package for basic filtering\, analysis and subsequent visualization of 4C\-seq data. Virtual fragment libraries can be created for any BSGenome package\, and filter functions for both reads and fragments and basic quality controls are included. Fragment data in the vicinity of the experiment\'s viewpoint can be visualized as a coverage plot based on a running median approach and a multi\-scale contact profile.


.. conda:package:: bioconductor-basic4cseq

   |downloads_bioconductor-basic4cseq| |docker_bioconductor-basic4cseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome.ecoli.ncbi.20080805: ``>=1.3.0,<1.4.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-catools: 
   :depends r-rcircos: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basic4cseq

   and update with::

      conda update bioconductor-basic4cseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basic4cseq:<tag>

   (see `bioconductor-basic4cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basic4cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basic4cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basic4cseq
   :alt:   (downloads)
.. |docker_bioconductor-basic4cseq| image:: https://quay.io/repository/biocontainers/bioconductor-basic4cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basic4cseq
.. _`bioconductor-basic4cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basic4cseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basic4cseq";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html