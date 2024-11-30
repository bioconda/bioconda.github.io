:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qdnaseq'
.. highlight: bash

bioconductor-qdnaseq
====================

.. conda:recipe:: bioconductor-qdnaseq
   :replaces_section_title:
   :noindex:

   Quantitative DNA Sequencing for Chromosomal Aberrations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/QDNAseq.html
   :license: GPL
   :recipe: /`bioconductor-qdnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq/meta.yaml>`_
   :links: biotools: :biotools:`qdnaseq`

   Quantitative DNA sequencing for chromosomal aberrations. The genome is divided into non\-overlapping fixed\-sized bins\, number of sequence reads in each counted\, adjusted with a simultaneous two\-dimensional loess correction for sequence mappability and GC content\, and filtered to remove spurious regions in the genome. Downstream steps of segmentation and calling are also implemented via packages DNAcopy and CGHcall\, respectively.


.. conda:package:: bioconductor-qdnaseq

   |downloads_bioconductor-qdnaseq| |docker_bioconductor-qdnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-cghbase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-cghcall: ``>=2.64.0,<2.65.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-future.apply: ``>=1.8.1``
   :depends r-matrixstats: ``>=0.60.0``
   :depends r-r.utils: ``>=2.9.0``
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

      mamba install bioconductor-qdnaseq

   and update with::

      mamba update bioconductor-qdnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qdnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qdnaseq:<tag>

   (see `bioconductor-qdnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qdnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qdnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qdnaseq
   :alt:   (downloads)
.. |docker_bioconductor-qdnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq
.. _`bioconductor-qdnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-qdnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qdnaseq";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html