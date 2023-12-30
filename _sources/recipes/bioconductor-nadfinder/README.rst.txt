:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nadfinder'
.. highlight: bash

bioconductor-nadfinder
======================

.. conda:recipe:: bioconductor-nadfinder
   :replaces_section_title:
   :noindex:

   Call wide peaks for sequencing data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NADfinder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-nadfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder/meta.yaml>`_

   Nucleolus is an important structure inside the nucleus in eukaryotic cells. It is the site for transcribing rDNA into rRNA and for assembling ribosomes\, aka ribosome biogenesis. In addition\, nucleoli are dynamic hubs through which numerous proteins shuttle and contact specific non\-rDNA genomic loci. Deep sequencing analyses of DNA associated with isolated nucleoli \(NAD\- seq\) have shown that specific loci\, termed nucleolus\- associated domains \(NADs\) form frequent three\- dimensional associations with nucleoli. NAD\-seq has been used to study the biological functions of NAD and the dynamics of NAD distribution during embryonic stem cell \(ESC\) differentiation. Here\, we developed a Bioconductor package NADfinder for bioinformatic analysis of the NAD\-seq data\, including baseline correction\, smoothing\, normalization\, peak calling\, and annotation.


.. conda:package:: bioconductor-nadfinder

   |downloads_bioconductor-nadfinder| |docker_bioconductor-nadfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-atacseqqc: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-csaw: ``>=1.36.0,<1.37.0``
   :depends bioconductor-empiricalbrownsmethod: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-trackviewer: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-baseline: 
   :depends r-corrplot: 
   :depends r-metap: 
   :depends r-signal: 
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

      mamba install bioconductor-nadfinder

   and update with::

      mamba update bioconductor-nadfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nadfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nadfinder:<tag>

   (see `bioconductor-nadfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nadfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nadfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nadfinder
   :alt:   (downloads)
.. |docker_bioconductor-nadfinder| image:: https://quay.io/repository/biocontainers/bioconductor-nadfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nadfinder
.. _`bioconductor-nadfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-nadfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nadfinder";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html