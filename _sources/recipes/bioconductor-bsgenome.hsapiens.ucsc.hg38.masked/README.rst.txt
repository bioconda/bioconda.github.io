:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38.masked'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38.masked
===============================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Homo sapiens \(UCSC version hg38\, based on GRCh38.p13\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(genome hg38\, based on GRCh38.p13\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Hsapiens.UCSC.hg38\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38.masked

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.masked| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.masked|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-2</code>,  <code>1.4.4-1</code>,  <code>1.4.4-0</code>,  <code>1.3.993-3</code>,  <code>1.3.993-2</code>,  <code>1.3.993-1</code>,  <code>1.3.993-0</code>,  <code>1.3.99-3</code>,  <code>1.3.99-2</code>,  </span></summary>
      

      ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.3.993-3``,  ``1.3.993-2``,  ``1.3.993-1``,  ``1.3.993-0``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38.masked

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38.masked";
        var versions = ["1.4.4","1.4.4","1.4.4","1.3.993","1.3.993"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.masked/README.html