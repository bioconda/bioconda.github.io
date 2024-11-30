:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg19.masked'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg19.masked
===============================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg19.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Homo sapiens \(UCSC version hg19\, based on GRCh37.p13\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Hsapiens.UCSC.hg19.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg19.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg19\, based on GRCh37.p13\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Hsapiens.UCSC.hg19\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg19.masked

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19.masked| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19.masked|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.993-8</code>,  <code>1.3.993-7</code>,  <code>1.3.993-6</code>,  <code>1.3.993-5</code>,  <code>1.3.993-4</code>,  <code>1.3.993-3</code>,  <code>1.3.993-2</code>,  <code>1.3.993-1</code>,  <code>1.3.993-0</code>,  </span></summary>
      

      ``1.3.993-8``,  ``1.3.993-7``,  ``1.3.993-6``,  ``1.3.993-5``,  ``1.3.993-4``,  ``1.3.993-3``,  ``1.3.993-2``,  ``1.3.993-1``,  ``1.3.993-0``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bsgenome.hsapiens.ucsc.hg19.masked

   and update with::

      mamba update bioconductor-bsgenome.hsapiens.ucsc.hg19.masked

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.hsapiens.ucsc.hg19.masked

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg19.masked";
        var versions = ["1.3.993","1.3.993","1.3.993","1.3.993","1.3.993"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19.masked/README.html