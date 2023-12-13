:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cagefightr'
.. highlight: bash

bioconductor-cagefightr
=======================

.. conda:recipe:: bioconductor-cagefightr
   :replaces_section_title:
   :noindex:

   Analysis of Cap Analysis of Gene Expression \(CAGE\) data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CAGEfightR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cagefightr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr/meta.yaml>`_

   CAGE is a widely used high throughput assay for measuring transcription start site \(TSS\) activity. CAGEfightR is an R\/Bioconductor package for performing a wide range of common data analysis tasks for CAGE and 5\'\-end data in general. Core functionality includes\: import of CAGE TSSs \(CTSSs\)\, tag \(or unidirectional\) clustering for TSS identification\, bidirectional clustering for enhancer identification\, annotation with transcript and gene models\, correlation of TSS and enhancer expression\, calculation of TSS shapes\, quantification of CAGE expression as expression matrices and genome brower visualization.


.. conda:package:: bioconductor-cagefightr

   |downloads_bioconductor-cagefightr| |docker_bioconductor-cagefightr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfiles: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicinteractions: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: ``>=1.2-12``
   :depends r-pryr: ``>=0.1.3``
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

      mamba install bioconductor-cagefightr

   and update with::

      mamba update bioconductor-cagefightr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cagefightr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cagefightr:<tag>

   (see `bioconductor-cagefightr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cagefightr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cagefightr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cagefightr
   :alt:   (downloads)
.. |docker_bioconductor-cagefightr| image:: https://quay.io/repository/biocontainers/bioconductor-cagefightr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cagefightr
.. _`bioconductor-cagefightr/tags`: https://quay.io/repository/biocontainers/bioconductor-cagefightr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cagefightr";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html