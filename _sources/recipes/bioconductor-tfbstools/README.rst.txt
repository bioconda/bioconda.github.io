:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfbstools'
.. highlight: bash

bioconductor-tfbstools
======================

.. conda:recipe:: bioconductor-tfbstools
   :replaces_section_title:
   :noindex:

   Software Package for Transcription Factor Binding Site \(TFBS\) Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TFBSTools.html
   :license: GPL-2
   :recipe: /`bioconductor-tfbstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools/meta.yaml>`_
   :links: biotools: :biotools:`tfbstools`

   TFBSTools is a package for the analysis and manipulation of transcription factor binding sites. It includes matrices conversion between Position Frequency Matirx \(PFM\)\, Position Weight Matirx \(PWM\) and Information Content Matrix \(ICM\). It can also scan putative TFBS from sequence\/alignment\, query JASPAR database and provides a wrapper of de novo motif discovery software.


.. conda:package:: bioconductor-tfbstools

   |downloads_bioconductor-tfbstools| |docker_bioconductor-tfbstools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.15.7-0``,  ``1.14.2-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-cner: ``>=1.38.0,<1.39.0``
   :depends bioconductor-cner: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-dirichletmultinomial: ``>=1.44.0,<1.45.0``
   :depends bioconductor-dirichletmultinomial: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catools: ``>=1.17.1``
   :depends r-dbi: ``>=0.6``
   :depends r-gtools: ``>=3.5.0``
   :depends r-rsqlite: ``>=1.0.0``
   :depends r-tfmpvalue: ``>=0.0.5``
   :depends r-xml: ``>=3.98-1.3``
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

      mamba install bioconductor-tfbstools

   and update with::

      mamba update bioconductor-tfbstools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tfbstools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfbstools:<tag>

   (see `bioconductor-tfbstools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfbstools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfbstools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfbstools
   :alt:   (downloads)
.. |docker_bioconductor-tfbstools| image:: https://quay.io/repository/biocontainers/bioconductor-tfbstools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfbstools
.. _`bioconductor-tfbstools/tags`: https://quay.io/repository/biocontainers/bioconductor-tfbstools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfbstools";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html