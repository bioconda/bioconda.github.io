:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrcate'
.. highlight: bash

bioconductor-dmrcate
====================

.. conda:recipe:: bioconductor-dmrcate
   :replaces_section_title:
   :noindex:

   Methylation array and sequencing spatial analysis methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DMRcate.html
   :license: file LICENSE
   :recipe: /`bioconductor-dmrcate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate/meta.yaml>`_
   :links: biotools: :biotools:`dmrcate`

   De novo identification and extraction of differentially methylated regions \(DMRs\) from the human genome using Whole Genome Bisulfite Sequencing \(WGBS\) and Illumina Infinium Array \(450K and EPIC\) data. Provides functionality for filtering probes possibly confounded by SNPs and cross\-hybridisation. Includes GRanges generation and plotting functions.


.. conda:package:: bioconductor-dmrcate

   |downloads_bioconductor-dmrcate| |docker_bioconductor-dmrcate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.6.0-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dss: ``>=2.46.0,<2.47.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gviz: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-missmethyl: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-plyr: 
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

      mamba install bioconductor-dmrcate

   and update with::

      mamba update bioconductor-dmrcate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmrcate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrcate:<tag>

   (see `bioconductor-dmrcate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrcate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrcate
   :alt:   (downloads)
.. |docker_bioconductor-dmrcate| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcate
.. _`bioconductor-dmrcate/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrcate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrcate";
        var versions = ["2.12.0","2.6.0","2.4.1","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html