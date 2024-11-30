:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrforpairs'
.. highlight: bash

bioconductor-dmrforpairs
========================

.. conda:recipe:: bioconductor-dmrforpairs
   :replaces_section_title:
   :noindex:

   DMRforPairs\: identifying Differentially Methylated Regions between unique samples using array based methylation profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DMRforPairs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dmrforpairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs/meta.yaml>`_

   DMRforPairs \(formerly DMR2\+\) allows researchers to compare n\>\=2 unique samples with regard to their methylation profile. The \(pairwise\) comparison of n unique single samples distinguishes DMRforPairs from other existing pipelines as these often compare groups of samples in either single CpG locus or region based analysis. DMRforPairs defines regions of interest as genomic ranges with sufficient probes located in close proximity to each other. Probes in one region are optionally annotated to the same functional class\(es\). Differential methylation is evaluated by comparing the methylation values within each region between individual samples and \(if the difference is sufficiently large\)\, testing this difference formally for statistical significance.


.. conda:package:: bioconductor-dmrforpairs

   |downloads_bioconductor-dmrforpairs| |docker_bioconductor-dmrforpairs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.35.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.35.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-r2html: ``>=2.2.1``
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

      mamba install bioconductor-dmrforpairs

   and update with::

      mamba update bioconductor-dmrforpairs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmrforpairs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrforpairs:<tag>

   (see `bioconductor-dmrforpairs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrforpairs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrforpairs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrforpairs
   :alt:   (downloads)
.. |docker_bioconductor-dmrforpairs| image:: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs
.. _`bioconductor-dmrforpairs/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrforpairs";
        var versions = ["1.35.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html