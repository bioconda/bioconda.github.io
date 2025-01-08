:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdxmsqc'
.. highlight: bash

bioconductor-hdxmsqc
====================

.. conda:recipe:: bioconductor-hdxmsqc
   :replaces_section_title:
   :noindex:

   An R package for quality Control for hydrogen deuterium exchange mass spectrometry experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hdxmsqc.html
   :license: file LICENSE
   :recipe: /`bioconductor-hdxmsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdxmsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdxmsqc/meta.yaml>`_

   The hdxmsqc package enables us to analyse and visualise the quality of HDX\-MS experiments. Either as a final quality check before downstream analysis and publication or as part of a interative procedure to determine the quality of the data. The package builds on the QFeatures and Spectra packages to integrate with other mass\-spectrometry data.


.. conda:package:: bioconductor-hdxmsqc

   |downloads_bioconductor-hdxmsqc| |docker_bioconductor-hdxmsqc|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-qfeatures: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-spectra: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-hdxmsqc

   and update with::

      mamba update bioconductor-hdxmsqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hdxmsqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdxmsqc:<tag>

   (see `bioconductor-hdxmsqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdxmsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdxmsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdxmsqc
   :alt:   (downloads)
.. |docker_bioconductor-hdxmsqc| image:: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc
.. _`bioconductor-hdxmsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdxmsqc";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdxmsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdxmsqc/README.html