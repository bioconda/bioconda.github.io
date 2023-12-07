:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msqrob2'
.. highlight: bash

bioconductor-msqrob2
====================

.. conda:recipe:: bioconductor-msqrob2
   :replaces_section_title:
   :noindex:

   Robust statistical inference for quantitative LC\-MS proteomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/msqrob2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msqrob2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqrob2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msqrob2/meta.yaml>`_

   msqrob2 provides a robust linear mixed model framework for assessing differential abundance in MS\-based Quantitative proteomics experiments. Our workflows can start from raw peptide intensities or summarised protein expression values. The model parameter estimates can be stabilized by ridge regression\, empirical Bayes variance estimation and robust M\-estimation. msqrob2\'s hurde workflow can handle missing data without having to rely on hard\-to\-verify imputation assumptions\, and\, outcompetes state\-of\-the\-art methods with and without imputation for both high and low missingness. It builds on QFeature infrastructure for quantitative mass spectrometry data to store the model results together with the raw data and preprocessed data.


.. conda:package:: bioconductor-msqrob2

   |downloads_bioconductor-msqrob2| |docker_bioconductor-msqrob2|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-qfeatures: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-codetools: 
   :depends r-lme4: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-purrr: 
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

      mamba install bioconductor-msqrob2

   and update with::

      mamba update bioconductor-msqrob2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msqrob2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msqrob2:<tag>

   (see `bioconductor-msqrob2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msqrob2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msqrob2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msqrob2
   :alt:   (downloads)
.. |docker_bioconductor-msqrob2| image:: https://quay.io/repository/biocontainers/bioconductor-msqrob2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msqrob2
.. _`bioconductor-msqrob2/tags`: https://quay.io/repository/biocontainers/bioconductor-msqrob2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msqrob2";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msqrob2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msqrob2/README.html