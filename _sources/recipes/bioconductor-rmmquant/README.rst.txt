:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmmquant'
.. highlight: bash

bioconductor-rmmquant
=====================

.. conda:recipe:: bioconductor-rmmquant
   :replaces_section_title:
   :noindex:

   RNA\-Seq multi\-mapping Reads Quantification Tool

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rmmquant.html
   :license: GPL-3
   :recipe: /`bioconductor-rmmquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmmquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmmquant/meta.yaml>`_

   RNA\-Seq is currently used routinely\, and it provides accurate information on gene transcription. However\, the method cannot accurately estimate duplicated genes expression. Several strategies have been previously used\, but all of them provide biased results. With Rmmquant\, if a read maps at different positions\, the tool detects that the corresponding genes are duplicated\; it merges the genes and creates a merged gene. The counts of ambiguous reads is then based on the input genes and the merged genes. Rmmquant is a drop\-in replacement of the widely used tools findOverlaps and featureCounts that handles multi\-mapping reads in an unabiased way.


.. conda:package:: bioconductor-rmmquant

   |downloads_bioconductor-rmmquant| |docker_bioconductor-rmmquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0``
   :depends bioconductor-apeglm: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-tbx20bamsubset: ``>=1.38.0,<1.39.0``
   :depends bioconductor-tbx20bamsubset: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.2,<3.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-rcpp: ``>=0.12.8``
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

      mamba install bioconductor-rmmquant

   and update with::

      mamba update bioconductor-rmmquant

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rmmquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmmquant:<tag>

   (see `bioconductor-rmmquant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmmquant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmmquant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmmquant
   :alt:   (downloads)
.. |docker_bioconductor-rmmquant| image:: https://quay.io/repository/biocontainers/bioconductor-rmmquant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmmquant
.. _`bioconductor-rmmquant/tags`: https://quay.io/repository/biocontainers/bioconductor-rmmquant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmmquant";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmmquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmmquant/README.html