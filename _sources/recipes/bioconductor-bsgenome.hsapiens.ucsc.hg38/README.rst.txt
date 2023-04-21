:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38
   :replaces_section_title:
   :noindex:

   Full genomic sequences for Homo sapiens \(UCSC genome hg38\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/meta.yaml>`_

   Full genomic sequences for Homo sapiens as provided by UCSC \(genome hg38\, based on assembly GRCh38.p14 since 2023\/01\/31\). The sequences are stored in DNAString objects.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.5-0</code>,  <code>1.4.4-2</code>,  <code>1.4.4-1</code>,  <code>1.4.4-0</code>,  <code>1.4.3-3</code>,  <code>1.4.3-2</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.1-8</code>,  </span></summary>
      

      ``1.4.5-0``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.66.2,<1.67.0``
   :depends bioconductor-data-packages: ``>=20230420``
   :depends bioconductor-genomeinfodb: ``>=1.34.9,<1.35.0``
   :depends curl: ``>=7.87.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38";
        var versions = ["1.4.5","1.4.4","1.4.4","1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html