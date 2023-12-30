:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gbscleanr'
.. highlight: bash

bioconductor-gbscleanr
======================

.. conda:recipe:: bioconductor-gbscleanr
   :replaces_section_title:
   :noindex:

   Error correction tool for noisy genotyping by sequencing \(GBS\) data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GBScleanR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-gbscleanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gbscleanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gbscleanr/meta.yaml>`_

   GBScleanR is a package for quality check\, filtering\, and error correction of genotype data derived from next generation sequcener \(NGS\) based genotyping platforms. GBScleanR takes Variant Call Format \(VCF\) file as input. The main function of this package is \`estGeno\(\)\` which estimates the true genotypes of samples from given read counts for genotype markers using a hidden Markov model with incorporating uneven observation ratio of allelic reads. This implementation gives robust genotype estimation even in noisy genotype data usually observed in Genotyping\-By\-Sequnencing \(GBS\) and similar methods\, e.g. RADseq. The current implementation accepts genotype data of a diploid population at any generation of multi\-parental cross\, e.g. biparental F2 from inbred parents\, biparental F2 from outbred parents\, and 8\-way recombinant inbred lines \(8\-way RILs\) which can be refered to as MAGIC population.


.. conda:package:: bioconductor-gbscleanr

   |downloads_bioconductor-gbscleanr| |docker_bioconductor-gbscleanr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.4-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-seqarray: ``>=1.42.0,<1.43.0``
   :depends bioconductor-seqarray: ``>=1.42.0,<1.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-expm: 
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
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

      mamba install bioconductor-gbscleanr

   and update with::

      mamba update bioconductor-gbscleanr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gbscleanr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gbscleanr:<tag>

   (see `bioconductor-gbscleanr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gbscleanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gbscleanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gbscleanr
   :alt:   (downloads)
.. |docker_bioconductor-gbscleanr| image:: https://quay.io/repository/biocontainers/bioconductor-gbscleanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gbscleanr
.. _`bioconductor-gbscleanr/tags`: https://quay.io/repository/biocontainers/bioconductor-gbscleanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gbscleanr";
        var versions = ["1.6.0","1.4.4","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gbscleanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gbscleanr/README.html