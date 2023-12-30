:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msa2dist'
.. highlight: bash

bioconductor-msa2dist
=====================

.. conda:recipe:: bioconductor-msa2dist
   :replaces_section_title:
   :noindex:

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSA2dist.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-msa2dist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist/meta.yaml>`_

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis. It uses scoring matrices to be used in these pairwise distance calcualtions which can be adapted to any scoring for DNA or AA characters. E.g. by using literal distances MSA2dist calculates pairwise IUPAC distances.


.. conda:package:: bioconductor-msa2dist

   |downloads_bioconductor-msa2dist| |docker_bioconductor-msa2dist|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-rcpp: 
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-seqinr: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-msa2dist

   and update with::

      mamba update bioconductor-msa2dist

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msa2dist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msa2dist:<tag>

   (see `bioconductor-msa2dist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msa2dist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa2dist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msa2dist
   :alt:   (downloads)
.. |docker_bioconductor-msa2dist| image:: https://quay.io/repository/biocontainers/bioconductor-msa2dist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa2dist
.. _`bioconductor-msa2dist/tags`: https://quay.io/repository/biocontainers/bioconductor-msa2dist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msa2dist";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html