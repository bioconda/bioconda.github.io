:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icetea'
.. highlight: bash

bioconductor-icetea
===================

.. conda:recipe:: bioconductor-icetea
   :replaces_section_title:
   :noindex:

   Integrating Cap Enrichment with Transcript Expression Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/icetea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-icetea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea/meta.yaml>`_

   icetea \(Integrating Cap Enrichment with Transcript Expression Analysis\) provides functions for end\-to\-end analysis of multiple 5\'\-profiling methods such as CAGE\, RAMPAGE and MAPCap\, beginning from raw reads to detection of transcription start sites using replicates. It also allows performing differential TSS detection between group of samples\, therefore\, integrating the mRNA cap enrichment information with transcript expression analysis.


.. conda:package:: bioconductor-icetea

   |downloads_bioconductor-icetea| |docker_bioconductor-icetea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-csaw: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-txdb.dmelanogaster.ucsc.dm6.ensgene: ``>=3.12.0,<3.13.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
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

      mamba install bioconductor-icetea

   and update with::

      mamba update bioconductor-icetea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-icetea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icetea:<tag>

   (see `bioconductor-icetea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icetea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icetea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icetea
   :alt:   (downloads)
.. |docker_bioconductor-icetea| image:: https://quay.io/repository/biocontainers/bioconductor-icetea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icetea
.. _`bioconductor-icetea/tags`: https://quay.io/repository/biocontainers/bioconductor-icetea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icetea";
        var versions = ["1.18.1","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icetea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icetea/README.html