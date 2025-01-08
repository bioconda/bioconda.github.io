:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pirat'
.. highlight: bash

bioconductor-pirat
==================

.. conda:recipe:: bioconductor-pirat
   :replaces_section_title:
   :noindex:

   Precursor or Peptide Imputation under Random Truncation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Pirat.html
   :license: GPL-2
   :recipe: /`bioconductor-pirat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pirat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pirat/meta.yaml>`_

   Pirat enables the imputation of missing values \(either MNARs or MCARs\) in bottom\-up LC\-MS\/MS proteomics data using a penalized maximum likelihood strategy. It does not require any parameter tuning\, it models the instrument censorship from the data available. It accounts for sibling peptides correlations and it can leverage complementary transcriptomics measurements.


.. conda:package:: bioconductor-pirat

   |downloads_bioconductor-pirat| |docker_bioconductor-pirat|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-invgamma: 
   :depends r-mass: 
   :depends r-progress: 
   :depends r-reticulate: 
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

      mamba install bioconductor-pirat

   and update with::

      mamba update bioconductor-pirat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pirat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pirat:<tag>

   (see `bioconductor-pirat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pirat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pirat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pirat
   :alt:   (downloads)
.. |docker_bioconductor-pirat| image:: https://quay.io/repository/biocontainers/bioconductor-pirat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pirat
.. _`bioconductor-pirat/tags`: https://quay.io/repository/biocontainers/bioconductor-pirat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pirat";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pirat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pirat/README.html