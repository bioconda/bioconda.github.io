:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atsnp'
.. highlight: bash

bioconductor-atsnp
==================

.. conda:recipe:: bioconductor-atsnp
   :replaces_section_title:
   :noindex:

   Affinity test for identifying regulatory SNPs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/atSNP.html
   :license: GPL-2
   :recipe: /`bioconductor-atsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atsnp/meta.yaml>`_

   atSNP performs affinity tests of motif matches with the SNP or the reference genomes and SNP\-led changes in motif matches.


.. conda:package:: bioconductor-atsnp

   |downloads_bioconductor-atsnp| |docker_bioconductor-atsnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-motifstack: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-rappdirs: 
   :depends r-rcpp: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-atsnp

   and update with::

      mamba update bioconductor-atsnp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-atsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atsnp:<tag>

   (see `bioconductor-atsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atsnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atsnp
   :alt:   (downloads)
.. |docker_bioconductor-atsnp| image:: https://quay.io/repository/biocontainers/bioconductor-atsnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atsnp
.. _`bioconductor-atsnp/tags`: https://quay.io/repository/biocontainers/bioconductor-atsnp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atsnp";
        var versions = ["1.16.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atsnp/README.html