:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylsig'
.. highlight: bash

bioconductor-methylsig
======================

.. conda:recipe:: bioconductor-methylsig
   :replaces_section_title:
   :noindex:

   MethylSig\: Differential Methylation Testing for WGBS and RRBS Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/methylSig.html
   :license: GPL-3
   :recipe: /`bioconductor-methylsig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylsig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylsig/meta.yaml>`_

   MethylSig is a package for testing for differentially methylated cytosines \(DMCs\) or regions \(DMRs\) in whole\-genome bisulfite sequencing \(WGBS\) or reduced representation bisulfite sequencing \(RRBS\) experiments.  MethylSig uses a beta binomial model to test for significant differences between groups of samples. Several options exist for either site\-specific or sliding window tests\, and variance estimation.


.. conda:package:: bioconductor-methylsig

   |downloads_bioconductor-methylsig| |docker_bioconductor-methylsig|

   :versions:
      
      

      ``1.18.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-dss: ``>=2.54.0,<2.55.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-methylsig

   and update with::

      mamba update bioconductor-methylsig

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylsig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylsig:<tag>

   (see `bioconductor-methylsig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylsig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylsig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylsig
   :alt:   (downloads)
.. |docker_bioconductor-methylsig| image:: https://quay.io/repository/biocontainers/bioconductor-methylsig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylsig
.. _`bioconductor-methylsig/tags`: https://quay.io/repository/biocontainers/bioconductor-methylsig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylsig";
        var versions = ["1.18.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylsig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylsig/README.html