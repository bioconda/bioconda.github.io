:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sevenc'
.. highlight: bash

bioconductor-sevenc
===================

.. conda:recipe:: bioconductor-sevenc
   :replaces_section_title:
   :noindex:

   Computational Chromosome Conformation Capture by Correlation of ChIP\-seq at CTCF motifs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sevenC.html
   :license: GPL-3
   :recipe: /`bioconductor-sevenc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc/meta.yaml>`_

   Chromatin looping is an essential feature of eukaryotic genomes and can bring regulatory sequences\, such as enhancers or transcription factor binding sites\, in the close physical proximity of regulated target genes. Here\, we provide sevenC\, an R package that uses protein binding signals from ChIP\-seq and sequence motif information to predict chromatin looping events. Cross\-linking of proteins that bind close to loop anchors result in ChIP\-seq signals at both anchor loci. These signals are used at CTCF motif pairs together with their distance and orientation to each other to predict whether they interact or not. The resulting chromatin loops might be used to associate enhancers or transcription factor binding sites \(e.g.\, ChIP\-seq peaks\) to regulated target genes.


.. conda:package:: bioconductor-sevenc

   |downloads_bioconductor-sevenc| |docker_bioconductor-sevenc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: ``>=1.3-20``
   :depends r-data.table: ``>=1.10.4``
   :depends r-purrr: ``>=0.2.2``
   :depends r-readr: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sevenc

   and update with::

      mamba update bioconductor-sevenc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sevenc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sevenc:<tag>

   (see `bioconductor-sevenc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sevenc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sevenc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sevenc
   :alt:   (downloads)
.. |docker_bioconductor-sevenc| image:: https://quay.io/repository/biocontainers/bioconductor-sevenc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sevenc
.. _`bioconductor-sevenc/tags`: https://quay.io/repository/biocontainers/bioconductor-sevenc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sevenc";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sevenc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sevenc/README.html