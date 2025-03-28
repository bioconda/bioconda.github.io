:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexseq'
.. highlight: bash

bioconductor-dexseq
===================

.. conda:recipe:: bioconductor-dexseq
   :replaces_section_title:
   :noindex:

   Inference of differential exon usage in RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEXSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-dexseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexseq/meta.yaml>`_
   :links: biotools: :biotools:`dexseq`, usegalaxy-eu: :usegalaxy-eu:`dexseq`

   The package is focused on finding differential exon usage using RNA\-seq exon counts between samples with different experimental designs. It provides functions that allows the user to make the necessary statistical tests based on a model that uses the negative binomial distribution to estimate the variance between biological replicates and generalized linear models for testing. The package also provides functions for the visualization and exploration of the results.


.. conda:package:: bioconductor-dexseq

   |downloads_bioconductor-dexseq| |docker_bioconductor-dexseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-2</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-2``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.1-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-3``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-2``,  ``1.20.1-1``,  ``1.20.1-0``,  ``1.18.4-1``,  ``1.16.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends bioconductor-geneplotter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-hwriter: 
   :depends r-rcolorbrewer: 
   :depends r-statmod: 
   :depends r-stringr: 
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

      mamba install bioconductor-dexseq

   and update with::

      mamba update bioconductor-dexseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dexseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexseq:<tag>

   (see `bioconductor-dexseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexseq
   :alt:   (downloads)
.. |docker_bioconductor-dexseq| image:: https://quay.io/repository/biocontainers/bioconductor-dexseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexseq
.. _`bioconductor-dexseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dexseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexseq";
        var versions = ["1.52.0","1.48.0","1.48.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexseq/README.html