:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprscore'
.. highlight: bash

bioconductor-crisprscore
========================

.. conda:recipe:: bioconductor-crisprscore
   :replaces_section_title:
   :noindex:

   On\-Target and Off\-Target Scoring Algorithms for CRISPR gRNAs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprScore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscore/meta.yaml>`_

   Provides R wrappers of several on\-target and off\-target scoring methods for CRISPR guide RNAs \(gRNAs\). The following nucleases are supported\: SpCas9\, AsCas12a\, enAsCas12a\, and RfxCas13d \(CasRx\). The available on\-target cutting efficiency scoring methods are RuleSet1\, Azimuth\, DeepHF\, DeepCpf1\, enPAM\+GB\, and CRISPRscan. Both the CFD and MIT scoring methods are available for off\-target specificity prediction. The package also provides a Lindel\-derived score to predict the probability of a gRNA to produce indels inducing a frameshift for the Cas9 nuclease. Note that DeepHF\, DeepCpf1 and enPAM\+GB are not available on Windows machines.


.. conda:package:: bioconductor-crisprscore

   |downloads_bioconductor-crisprscore| |docker_bioconductor-crisprscore|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-basilisk.utils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-crisprscoredata: ``>=1.10.0,<1.11.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-randomforest: 
   :depends r-reticulate: 
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

      mamba install bioconductor-crisprscore

   and update with::

      mamba update bioconductor-crisprscore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprscore:<tag>

   (see `bioconductor-crisprscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprscore
   :alt:   (downloads)
.. |docker_bioconductor-crisprscore| image:: https://quay.io/repository/biocontainers/bioconductor-crisprscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprscore
.. _`bioconductor-crisprscore/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprscore";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprscore/README.html