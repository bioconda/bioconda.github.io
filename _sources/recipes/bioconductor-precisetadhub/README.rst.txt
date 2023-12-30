:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetadhub'
.. highlight: bash

bioconductor-precisetadhub
==========================

.. conda:recipe:: bioconductor-precisetadhub
   :replaces_section_title:
   :noindex:

   Pre\-trained random forest models obtained using preciseTAD

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/preciseTADhub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetadhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub/meta.yaml>`_

   An experimentdata package to supplement the preciseTAD package containing pre\-trained models and the variable importances of each genomic annotation used to build the model parsed into list objects and available in ExperimentHub. In total\, preciseTADhub provides access to n\=84 random forest classification models optimized to predict TAD\/chromatin loop boundary regions and stored as .RDS files. The value\, n\, comes from the fact that we considered l\=2 cell lines \{GM12878\, K562\}\, g\=2 ground truth boundaries \{Arrowhead\, Peakachu\}\, and c\=21 autosomal chromosomes \{CHR1\, CHR2\, ...\, CHR22\} \(omitting CHR9\). Furthermore\, each object is itself a two\-item list containing\: \(1\) the model object\, and \(2\) the variable importances for CTCF\, RAD21\, SMC3\, and ZNF143 used to predict boundary regions. Each model is trained via a \"holdout\" strategy\, in which data from chromosomes \{CHR1\, CHR2\, ...\, CHRi\-1\, CHRi\+1\, ...\, CHR22\} were used to build the model and the ith chromosome was reserved for testing. See https\:\/\/doi.org\/10.1101\/2020.09.03.282186 for more detail on the model building strategy.


.. conda:package:: bioconductor-precisetadhub

   |downloads_bioconductor-precisetadhub| |docker_bioconductor-precisetadhub|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-precisetadhub

   and update with::

      mamba update bioconductor-precisetadhub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-precisetadhub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-precisetadhub:<tag>

   (see `bioconductor-precisetadhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-precisetadhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetadhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetadhub
   :alt:   (downloads)
.. |docker_bioconductor-precisetadhub| image:: https://quay.io/repository/biocontainers/bioconductor-precisetadhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetadhub
.. _`bioconductor-precisetadhub/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetadhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-precisetadhub";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html