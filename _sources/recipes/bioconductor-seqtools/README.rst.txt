:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqtools'
.. highlight: bash

bioconductor-seqtools
=====================

.. conda:recipe:: bioconductor-seqtools
   :replaces_section_title:
   :noindex:

   Analysis of nucleotide\, sequence and quality content on fastq files

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/seqTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools/meta.yaml>`_
   :links: biotools: :biotools:`seqtools`, doi: :doi:`10.1038/nmeth.3252`

   Analyze read length\, phred scores and alphabet frequency and DNA k\-mers on uncompressed and compressed fastq files.


.. conda:package:: bioconductor-seqtools

   |downloads_bioconductor-seqtools| |docker_bioconductor-seqtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqtools

   and update with::

      conda update bioconductor-seqtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqtools:<tag>

   (see `bioconductor-seqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqtools
   :alt:   (downloads)
.. |docker_bioconductor-seqtools| image:: https://quay.io/repository/biocontainers/bioconductor-seqtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqtools
.. _`bioconductor-seqtools/tags`: https://quay.io/repository/biocontainers/bioconductor-seqtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqtools";
        var versions = ["1.32.0","1.28.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqtools/README.html