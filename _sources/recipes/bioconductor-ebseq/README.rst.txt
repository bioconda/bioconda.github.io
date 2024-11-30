:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebseq'
.. highlight: bash

bioconductor-ebseq
==================

.. conda:recipe:: bioconductor-ebseq
   :replaces_section_title:
   :noindex:

   An R package for gene and isoform differential expression analysis of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EBSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ebseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq/meta.yaml>`_
   :links: biotools: :biotools:`ebseq`, doi: :doi:`10.1093/bioinformatics/btt087`

   Differential Expression analysis at both gene and isoform level using RNA\-seq data


.. conda:package:: bioconductor-ebseq

   |downloads_bioconductor-ebseq| |docker_bioconductor-ebseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-blockmodeling: 
   :depends r-gplots: 
   :depends r-rcpp: ``>=0.12.11``
   :depends r-rcppeigen: ``>=0.3.2.9.0``
   :depends r-testthat: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ebseq

   and update with::

      mamba update bioconductor-ebseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ebseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","1.40.0"];
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